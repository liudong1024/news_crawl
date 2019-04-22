var request = require("request");
var cheerio = require("cheerio");
var j = request.jar();
request = request.defaults({jar:j});
next0();
var uuid = "";
var myDate=new Date();
function next0(){
    var url="http://e.cic.cn/web/vehicleNew/saveCooperate.do?_=1467335812956";
    var headers={"Host":"e.cic.cn","Accept-Language":"zh-CN,zh;q=0.8","User-Agent":"Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.87 Safari/537.36","Content-Type":"application/x-www-form-urlencoded","Accept":"application/json, text/javascript, */*; q=0.01","X-Requested-With":"XMLHttpRequest","Connection":"keep-alive"};
    request.get({url:url,headers:headers},function(err,httpResponse,body){
        console.log("================第0次返回================");
        console.log(body);
        next1()
    })
}

function next1(){
    var url="http://e.cic.cn/web/vehicleNew/firstValidate.do?uuid=&flow=00&input1=%E5%A4%A9%E6%B2%B3%E5%8C%BA&proVehicle.isNewVehicle=&page.vehicle_province=440000&page.vehicle_city=440100&page.vehicle_district=440106&proVehicle.licensePlateNo=%E7%B2%A4ECJ837&proVehicle.newCarChecked=0&proVehicle.vehicleOwnerName=%E7%8E%8B%E7%90%AA%E8%8C%B9&_=1467335812956";
    var headers={"Host":"e.cic.cn","Accept-Language":"zh-CN,zh;q=0.8","User-Agent":"Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.87 Safari/537.36","Content-Type":"application/x-www-form-urlencoded","Accept":"application/json, text/javascript, */*; q=0.01","X-Requested-With":"XMLHttpRequest","Connection":"keep-alive"};
    request.get({url:url,headers:headers},function(err,httpResponse,body){
        //预期返回值=undefined
        console.log("================第1次返回================");
        console.log(body);
        body = JSON.parse(body);
        uuid = body["uuid"];
        console.log("uuid:" + uuid);
        next2()
    })
}

function next2(){
    var url="http://e.cic.cn/web/vehicleNew/newOrOld.do";
    var headers={"Origin":"http://e.cic.cn","Host":"e.cic.cn","Accept-Language":"zh-CN,zh;q=0.8","Upgrade-Insecure-Requests":"1","User-Agent":"Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.87 Safari/537.36","Content-Type":"application/x-www-form-urlencoded","Accept":"text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8","Cache-Control":"max-age=0","Connection":"keep-alive"};
    var json={"uuid":"","flow":"00","input1":"天河区","proVehicle.isNewVehicle":"","page.vehicle_province":"440000","page.vehicle_city":"440100","page.vehicle_district":"440106","proVehicle.licensePlateNo":"粤ECJ837","proVehicle.newCarChecked":"0","proVehicle.vehicleOwnerName":"王琪茹"};
    request.post({url:url,headers:headers,form:json},function(err,httpResponse,body){
        console.log("================第2次返回================");
        console.log(body);

        next3()
    })
}



function next3(){
    var url="http://e.cic.cn/web/newVehicle/findVehicleModel.do";
    var headers={"Origin":"http://e.cic.cn","Host":"e.cic.cn","Accept-Language":"zh-CN,zh;q=0.8","User-Agent":"Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.87 Safari/537.36","Content-Type":"application/x-www-form-urlencoded","Accept":"application/json, text/javascript, */*; q=0.01","X-Requested-With":"XMLHttpRequest","Connection":"keep-alive"};
    var json={"vin1":vin,"engineNo":engine,"uuid":uuid};
    request.post({url:url,headers:headers,form:json},function(err,httpResponse,body){
        //预期返回值=undefined
        console.log("================第3次返回================");
        console.log(body);

        next4()
    })
}

function next4(){
    var url="http://e.cic.cn/web/vehicleNew/vehicleValidate.do?proVehicle.birthdayYear=341062&proVehicle.sex=1061&uuid=e8b43f3b-d645-4f77-9cef-e129dec7ee3c&modelId=402880883324fe9501338277d1d54a96&page.vehicle_province=440000&proVehicle.newCarChecked=0&flow=01&proVehicle.vin=LGWEFEA55AB001413&proVehicle.engineNo=101102381&proVehicle.modelName=%E9%95%BF%E5%9F%8ECC6461KM47%E6%97%85%E8%A1%8C%E8%BD%A6&proVehicle.firstRegisterDate=2016-05-20&proVehicle.vehicleOwnerName=%E7%8E%8B%E7%90%AA%E8%8C%B9&_=1464051967702";
    var headers={"Host":"e.cic.cn","Accept-Language":"zh-CN,zh;q=0.8","User-Agent":"Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.87 Safari/537.36","Content-Type":"application/x-www-form-urlencoded","Accept":"application/json, text/javascript, */*; q=0.01","X-Requested-With":"XMLHttpRequest","Connection":"keep-alive"};
    request.get({url:url,headers:headers},function(err,httpResponse,body){
        //预期返回值=undefined
        console.log("================第4次返回================");
        console.log(body);

        next5()

    })
}

function next5(){
    var url="http://e.cic.cn/web/vehicleNew/findVehicleQueryModel.do";
    var headers={"Origin":"http://e.cic.cn","Host":"e.cic.cn","Accept-Language":"zh-CN,zh;q=0.8","User-Agent":"Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.87 Safari/537.36","Content-Type":"application/x-www-form-urlencoded","Accept":"application/json, text/javascript, */*; q=0.01","X-Requested-With":"XMLHttpRequest","Connection":"keep-alive"};
    var json={"proVehicle.birthdayYear":"341062","proVehicle.sex":"1061","uuid":uuid,"modelId":"402880883324fe9501338277d1d54a96","page.vehicle_province":"440000","proVehicle.newCarChecked":"0","flow":"01","proVehicle.vin":"LGWEFEA55AB001413","proVehicle.engineNo":"101102381","proVehicle.modelName":"长城CC6461KM47旅行车","proVehicle.firstRegisterDate":"2016-05-20","proVehicle.vehicleOwnerName":"王琪茹"};
    request.post({url:url,headers:headers,form:json},function(err,httpResponse,body){
        //预期返回值=undefined
        console.log("================第5次返回================");
        console.log(body);

        next6()
    })
}

function next6(){
    var url="http://e.cic.cn/web/fontVehicleNew/toGetVehicleInfo.do";
    var headers={"Origin":"http://e.cic.cn","Host":"e.cic.cn","Accept-Language":"zh-CN,zh;q=0.8","User-Agent":"Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.87 Safari/537.36","Content-Type":"application/x-www-form-urlencoded","Accept":"application/json, text/javascript, */*; q=0.01","X-Requested-With":"XMLHttpRequest","Connection":"keep-alive"};
    var json={"uuid":uuid};
    request.post({url:url,headers:headers,form:json},function(err,httpResponse,body){
        //预期返回值=undefined
        console.log("================第6次返回================");
        console.log(body);

        next7()
    })
}

function next7(){
    var url="http://e.cic.cn/web/fontVehicleNew/toGetComboInfo.do";
    var headers={"Origin":"http://e.cic.cn","Host":"e.cic.cn","Accept-Language":"zh-CN,zh;q=0.8","User-Agent":"Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.87 Safari/537.36","Content-Type":"application/x-www-form-urlencoded","Accept":"application/json, text/javascript, */*; q=0.01","X-Requested-With":"XMLHttpRequest","Connection":"keep-alive"};
    var json={"uuid":uuid};
    request.post({url:url,headers:headers,form:json},function(err,httpResponse,body){
        //预期返回值=undefined
        console.log("================第7次返回================");
        console.log(body);

        next8()
    })
}

function next8(){
    var url="http://e.cic.cn/web/vehicleNew/toQuote.do?uuid=e8b43f3b-d645-4f77-9cef-e129dec7ee3c";
    var headers={"Host":"e.cic.cn","Accept-Language":"zh-CN,zh;q=0.8","Upgrade-Insecure-Requests":"1","User-Agent":"Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.87 Safari/537.36","Accept":"text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8","Connection":"keep-alive"};
    request.get({url:url,headers:headers},function(err,httpResponse,body){
        console.log("================第8次返回================");
        console.log(body);

        // next9()
    })
}



function next9(){
    var url="http://e.cic.cn/web/webnew/js/calculae.js";
    var headers={"Accept":"*/*","User-Agent":"Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.87 Safari/537.36"};
    request.get({url:url,headers:headers},function(err,httpResponse,body){
        console.log("================第9次返回================");
        console.log(body);

        next10()
    })
}

function next10(){
    var url="http://e.cic.cn/web/webnew/js/vehicle_combo_rules.js";
    var headers={"Accept":"*/*","User-Agent":"Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.87 Safari/537.36"};
    request.get({url:url,headers:headers},function(err,httpResponse,body){
        console.log("================第10次返回================");
        console.log(body);

        next11()
    })
}

function next11(){
    var url="http://e.cic.cn/web/webnew/js/comboInfo.js";
    var headers={"Accept":"*/*","User-Agent":"Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.87 Safari/537.36"};
    request.get({url:url,headers:headers},function(err,httpResponse,body){
        console.log("================第11次返回================");
        console.log(body);

        // next12()
    })
}


function next12(){
    var url="http://e.cic.cn/web/vehicleNew/recommendPackage.do?uuid=e8b43f3b-d645-4f77-9cef-e129dec7ee3c&_=1464051976170";
    var headers={"Host":"e.cic.cn","Accept-Language":"zh-CN,zh;q=0.8","User-Agent":"Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.87 Safari/537.36","Content-Type":"application/x-www-form-urlencoded","Accept":"application/json, text/javascript, */*; q=0.01","X-Requested-With":"XMLHttpRequest","Connection":"keep-alive"};
    request.get({url:url,headers:headers},function(err,httpResponse,body){
        console.log("================第12次返回================");
        console.log(body);

    })
}

