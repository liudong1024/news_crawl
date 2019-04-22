
var fs=require("fs");

var data=fs.readFileSync("./ecpic.com.cn.har","utf-8");
data = JSON.parse(data);
var forbiden_url = 'http://chexian.sinosig.com/car/common/jsProxy.html';


if(fs.existsSync('dest_tpy.js')){
    fs.unlinkSync('dest_tpy.js');
}

var arr = data.log.entries;
var url_list = [];
var index = 0;
var str = '';
str +='var func = require("../func");'+'\n';
str +='var request = require("request");'+'\n';
str +='var cheerio = require("cheerio");'+'\n';
str +='var j = request.jar();'+'\n';
str +='request = request.defaults({jar:j});'+'\n';
str +='next0();'+'\n';
echo(str);
for(var i in arr){
    //console.log(arr[i].request);
    /*console.log(arr[i].response.content.mimeType);
    console.log(arr[i].request.url);*/
    if(!arr[i].request.url.indexOf(forbiden_url)||/(text\/css)|(image\/[a-zA-Z]+|(javascript)|(x-unknown))/i.test(arr[i].response.content.mimeType)){
        continue;
    }
    if(url_list.indexOf(arr[i].request.url)>-1){
        continue;
    }
    url_list.push(arr[i].request.url);
    var func_str = '';


    //func_str +='//'+arr[i].request.method+'\n';
    func_str += 'function next'+index+'(){'+'\n';
    func_str +='    var url="'+arr[i].request.url+'";'+'\n';
    func_str +='    var headers='+getHeader(arr[i].request.headers)+';'+'\n';

    if(arr[i].request.method=="GET"){
        func_str +='    request.get({url:url,headers:headers},function(err,httpResponse,body){'+'\n';
    }else{
        var json = arr[i].request.postData ? arr[i].request.postData.params:"";
        func_str +='    var json='+getJson(json)+';'+'\n';

        func_str +='    request.post({url:url,headers:headers,form:json},function(err,httpResponse,body){'+'\n';
    }
    if(arr[i].response.content.mimeType=='application/json'){
        func_str +='        //预期返回值='+(arr[i].response.content.text)+'\n';
    }

    func_str +='        console.log("================第'+index+'次返回================");'+'\n';
    func_str +='        console.log(body);'+'\n';
    func_str +='        next'+(parseInt(index)+1)+'();'+'\n';
    func_str +=''+'\n';
    func_str +='    })'+'\n';
    func_str +='}'+'\n';
    echo(func_str);
    index++;
}


function echo(str){
    fs.appendFileSync('dest_tpy.js', str+'\n');
};



function getJson(arr){
    var json = {};
    for(var i in arr){
        json[arr[i]['name']]=arr[i]['value'];
    }
    return decodeURIComponent(JSON.stringify(json));
}

function getHeader(arr){
    var json = {};
    var forbiden = ['Accept-Encoding','Cookie','Content-Length','Referer'];
    for(var i in arr){
        if(forbiden.indexOf(arr[i]['name'])>-1){
            continue;
        }
        json[arr[i]['name']]=arr[i]['value'];
    }
    return decodeURIComponent(JSON.stringify(json));
}



function unique(arr) {
    var result = [], hash = {};
    for (var i = 0, elem; (elem = arr[i]) != null; i++) {
        if (!hash[elem]) {
            result.push(elem);
            hash[elem] = true;
        }
    }
    return result;
}