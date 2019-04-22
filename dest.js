
var request = require("request");
var cheerio = require("cheerio");
var j = request.jar();
request = request.defaults({jar:j});

var title;
var url_tail;
var i;
var max_behot_time;

next1();


function next1() {
    var headers = {
        'Accept': 'text/javascript, text/html, application/xml, text/xml, */*',
        'Accept-Language': 'zh-CN,zh;q=0.8',
        'Connection': 'keep-alive',
        'Content-Type': 'application/x-www-form-urlencoded',
        'Host': 'www.toutiao.com',
        'Referer:http': '//www.toutiao.com/ch/news_society/',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/61.0.3163.91 Safari/537.36',
        'X-Requested-With': 'XMLHttpRequest'
    };
    var url = "http://www.toutiao.com/api/pc/feed/?category=news_society&utm_source=toutiao&widen=1&max_behot_time=0&max_behot_time_tmp=0&tadrequire=true&as=A135B9DD2A0C5AA&cp=59DA2C259ABA4E1";
    // http://www.toutiao.com/api/pc/feed/?category=news_society&utm_source=toutiao&widen=1&max_behot_time=0&max_behot_time_tmp=0&tadrequire=true&as=A135B9DD2A0C5AA&cp=59DA2C259ABA4E1
        request.get({url:url,headers:headers}, function (err, httpResponse, body) {
        try {
            console.log('body:',"================第0次返回======================");
            console.log('body:',body);
            if (err || httpResponse.statusCode != 200) {

                return;
            }
            body = JSON.parse(body);
            console.log( body.next.max_behot_time);

            for(i=0;i<body.data.length;i++){
                console.log("=================================第"+i+"次返回============================");
                title = body.data[i].title;
                url_tail=body.data[i].source_url;
                console.log(title);
            }

        } catch (e) {

        }

    })
}

function next2() {
    var headers = {
        'Accept': 'text/javascript, text/html, application/xml, text/xml, */*',
        'Accept-Language': 'zh-CN,zh;q=0.8',
        'Connection': 'keep-alive',
        'Content-Type': 'application/x-www-form-urlencoded',
        'Host': 'www.toutiao.com',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/61.0.3163.91 Safari/537.36'
    };
    var url = 'http://www.toutiao.com/'+url_tail;
    request.get({url:url, headers:headers}, function (err, httpResponse, body) {
        try {
            // console.log('body:',body);
            if (err || httpResponse.statusCode != 200) {

                return;
            }
            body = JSON.parse(body);
            console.log(typeof body);
            var title = body.data[i].title;
            console.log(title);
            next2();


        } catch (e) {

        }

    })
}
