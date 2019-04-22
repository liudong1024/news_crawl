var request = require("request");
var cheerio = require("cheerio");
var j = request.jar();
request = request.defaults({jar:j});
next0();

function next0(){
    var url="http://www.ecpic.com.cn/cpiccar/sales/businessCollect/initVehicleBaseInfo";
    var headers={"Host":"www.ecpic.com.cn","Accept-Language":"zh-CN,zh;q=0.8","Upgrade-Insecure-Requests":"1","User-Agent":"Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.87 Safari/537.36","Accept":"text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8","Connection":"keep-alive","Cache-Control":"max-age=0"};
    request.get({url:url,headers:headers},function(err,httpResponse,body){
        console.log("================第0次返回================");
        console.log(body);

        next1();
    })
}

function next1(){
    var url="http://www.ecpic.com.cn/cpiccar/js/jquery-1.6.2.js";
    var headers={"Host":"www.ecpic.com.cn","Accept-Language":"zh-CN,zh;q=0.8","User-Agent":"Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.87 Safari/537.36","Accept":"*/*","Connection":"keep-alive","If-Modified-Since":"Sat, 19 Mar 2016 15:36:18 GMT","Cache-Control":"max-age=0"};
    request.get({url:url,headers:headers},function(err,httpResponse,body){
        console.log("================第1次返回================");
        console.log(body);

        next2();
    })
}

function next2(){
    var url="http://www.ecpic.com.cn/cpiccar/js/jquery.validate-1.9.0.min.js";
    var headers={"Host":"www.ecpic.com.cn","Accept-Language":"zh-CN,zh;q=0.8","User-Agent":"Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.87 Safari/537.36","Accept":"*/*","Connection":"keep-alive","If-Modified-Since":"Sat, 19 Mar 2016 15:36:20 GMT","Cache-Control":"max-age=0"};
    request.get({url:url,headers:headers},function(err,httpResponse,body){
        console.log("================第2次返回================");
        console.log(body);

        next3();

    })
}

function next3(){
    var url="http://www.ecpic.com.cn/cpiccar/js/My97DatePicker/WdatePicker.js";
    var headers={"Host":"www.ecpic.com.cn","Accept-Language":"zh-CN,zh;q=0.8","User-Agent":"Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.87 Safari/537.36","Accept":"*/*","Connection":"keep-alive","If-Modified-Since":"Sat, 19 Mar 2016 15:36:14 GMT","Cache-Control":"max-age=0"};
    request.get({url:url,headers:headers},function(err,httpResponse,body){
        console.log("================第3次返回================");
        console.log(body);

        next4();
    })
}

function next4(){
    var url="http://www.ecpic.com.cn/cpiccar/js/jquery.float.js";
    var headers={"Host":"www.ecpic.com.cn","Accept-Language":"zh-CN,zh;q=0.8","User-Agent":"Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.87 Safari/537.36","Accept":"*/*","Connection":"keep-alive","If-Modified-Since":"Sat, 19 Mar 2016 15:36:20 GMT","Cache-Control":"max-age=0"};
    request.get({url:url,headers:headers},function(err,httpResponse,body){
        console.log("================第4次返回================");
        console.log(body);

        next5();
    })
}

function next5(){
    var url="http://www.ecpic.com.cn/cpiccar/js/jquery.XYTipsWindow.2.8.js";
    var headers={"Host":"www.ecpic.com.cn","Accept-Language":"zh-CN,zh;q=0.8","User-Agent":"Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.87 Safari/537.36","Accept":"*/*","Connection":"keep-alive","If-Modified-Since":"Sat, 19 Mar 2016 15:36:20 GMT","Cache-Control":"max-age=0"};
    request.get({url:url,headers:headers},function(err,httpResponse,body){
        console.log("================第5次返回================");
        console.log(body);

        next6();
    })
}

function next6(){
    var url="http://www.ecpic.com.cn/cpiccar/js/Y.js";
    var headers={"Host":"www.ecpic.com.cn","Accept-Language":"zh-CN,zh;q=0.8","User-Agent":"Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.87 Safari/537.36","Accept":"*/*","Connection":"keep-alive","If-Modified-Since":"Sat, 19 Mar 2016 15:36:18 GMT","Cache-Control":"max-age=0"};
    request.get({url:url,headers:headers},function(err,httpResponse,body){
        console.log("================第6次返回================");
        console.log(body);

        next7();
    })
}

function next7(){
    var url="http://www.ecpic.com.cn/cpiccar/js/jQuery.blockUI.js";
    var headers={"Host":"www.ecpic.com.cn","Accept-Language":"zh-CN,zh;q=0.8","User-Agent":"Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.87 Safari/537.36","Accept":"*/*","Connection":"keep-alive","If-Modified-Since":"Sat, 19 Mar 2016 15:36:20 GMT","Cache-Control":"max-age=0"};
    request.get({url:url,headers:headers},function(err,httpResponse,body){
        console.log("================第7次返回================");
        console.log(body);

        next8();
    })
}

function next8(){
    var url="http://www.ecpic.com.cn/cpiccar/js/sales/commonUtil.js";
    var headers={"Host":"www.ecpic.com.cn","Accept-Language":"zh-CN,zh;q=0.8","User-Agent":"Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.87 Safari/537.36","Accept":"*/*","Connection":"keep-alive","If-Modified-Since":"Tue, 26 Apr 2016 11:22:22 GMT","Cache-Control":"max-age=0"};
    request.get({url:url,headers:headers},function(err,httpResponse,body){
        console.log("================第8次返回================");
        console.log(body);

        next9();
    })
}

function next9(){
    var url="http://www.ecpic.com.cn/InnerHtml/newcar/js/ucstars.js";
    var headers={"If-None-Match":"\"7e1ab2-4-6a8be80\"","Host":"www.ecpic.com.cn","Accept-Language":"zh-CN,zh;q=0.8","User-Agent":"Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.87 Safari/537.36","Accept":"*/*","Connection":"keep-alive","If-Modified-Since":"Fri, 29 Apr 2016 06:48:10 GMT","Cache-Control":"max-age=0"};
    request.get({url:url,headers:headers},function(err,httpResponse,body){
        console.log("================第9次返回================");
        console.log(body);

        next10();
    })
}

function next10(){
    var url="https://member.cpic.com.cn/cas/api/javascript/casx.js";
    var headers={"Host":"member.cpic.com.cn","Accept-Language":"zh-CN,zh;q=0.8","User-Agent":"Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.87 Safari/537.36","Accept":"*/*","Connection":"keep-alive","If-Modified-Since":"Wed, 20 Apr 2016 08:46:10 GMT","Cache-Control":"max-age=0"};
    request.get({url:url,headers:headers},function(err,httpResponse,body){
        console.log("================第10次返回================");
        console.log(body);

        next11();
    })
}

function next11(){
    var url="http://www.ecpic.com.cn/cpiccar/js/search/json2.js";
    var headers={"Host":"www.ecpic.com.cn","Accept-Language":"zh-CN,zh;q=0.8","User-Agent":"Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.87 Safari/537.36","Accept":"*/*","Connection":"keep-alive","If-Modified-Since":"Sat, 19 Mar 2016 15:36:14 GMT","Cache-Control":"max-age=0"};
    request.get({url:url,headers:headers},function(err,httpResponse,body){
        console.log("================第11次返回================");
        console.log(body);

        next12();
    })
}

function next12(){
    var url="http://www.ecpic.com.cn/cpiccar/js/sales/vehicle_select_Cpic.js?9729";
    var headers={"Host":"www.ecpic.com.cn","Accept-Language":"zh-CN,zh;q=0.8","User-Agent":"Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.87 Safari/537.36","Accept":"*/*","Connection":"keep-alive","Cache-Control":"max-age=0"};
    request.get({url:url,headers:headers},function(err,httpResponse,body){
        console.log("================第12次返回================");
        console.log(body);

        next13();
    })
}

function next13(){
    var url="http://www.ecpic.com.cn/cpiccar/js/sales/quotationSingle.js";
    var headers={"Host":"www.ecpic.com.cn","Accept-Language":"zh-CN,zh;q=0.8","User-Agent":"Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.87 Safari/537.36","Accept":"*/*","Connection":"keep-alive","If-Modified-Since":"Thu, 21 Apr 2016 15:47:20 GMT","Cache-Control":"max-age=0"};
    request.get({url:url,headers:headers},function(err,httpResponse,body){
        console.log("================第13次返回================");
        console.log(body);
        next4();
    })
}

function next14(){
    var url="http://www.ecpic.com.cn/cpiccar/js/sales/driverSingle.js?9729";
    var headers={"Host":"www.ecpic.com.cn","Accept-Language":"zh-CN,zh;q=0.8","User-Agent":"Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.87 Safari/537.36","Accept":"*/*","Connection":"keep-alive","Cache-Control":"max-age=0"};
    request.get({url:url,headers:headers},function(err,httpResponse,body){
        console.log("================第14次返回================");
        console.log(body);

    })
}

function next15(){
    var url="http://www.ecpic.com.cn/cpiccar/js/sales/travelTaxSingle.js?9729";
    var headers={"Host":"www.ecpic.com.cn","Accept-Language":"zh-CN,zh;q=0.8","User-Agent":"Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.87 Safari/537.36","Accept":"*/*","Connection":"keep-alive","Cache-Control":"max-age=0"};
    request.get({url:url,headers:headers},function(err,httpResponse,body){
        console.log("================第15次返回================");
        console.log(body);

    })
}

function next16(){
    var url="http://www.ecpic.com.cn/cpiccar/js/sales/businessCollectSingle.js";
    var headers={"Host":"www.ecpic.com.cn","Accept-Language":"zh-CN,zh;q=0.8","User-Agent":"Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.87 Safari/537.36","Accept":"*/*","Connection":"keep-alive","If-Modified-Since":"Fri, 20 May 2016 10:56:22 GMT","Cache-Control":"max-age=0"};
    request.get({url:url,headers:headers},function(err,httpResponse,body){
        console.log("================第16次返回================");
        console.log(body);

    })
}

function next17(){
    var url="http://www.ecpic.com.cn/cpiccar/js/inputSuggest_0.1.js?9729";
    var headers={"Host":"www.ecpic.com.cn","Accept-Language":"zh-CN,zh;q=0.8","User-Agent":"Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.87 Safari/537.36","Accept":"*/*","Connection":"keep-alive","Cache-Control":"max-age=0"};
    request.get({url:url,headers:headers},function(err,httpResponse,body){
        console.log("================第17次返回================");
        console.log(body);

    })
}

function next18(){
    var url="http://www.ecpic.com.cn/cpiccar/js/Fastcity-area.js?9729";
    var headers={"Host":"www.ecpic.com.cn","Accept-Language":"zh-CN,zh;q=0.8","User-Agent":"Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.87 Safari/537.36","Accept":"*/*","Connection":"keep-alive","Cache-Control":"max-age=0"};
    request.get({url:url,headers:headers},function(err,httpResponse,body){
        console.log("================第18次返回================");
        console.log(body);

    })
}

function next19(){
    var url="http://www.ecpic.com.cn/cpiccar/js/search-ui_new.js?9729";
    var headers={"Host":"www.ecpic.com.cn","Accept-Language":"zh-CN,zh;q=0.8","User-Agent":"Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.87 Safari/537.36","Accept":"*/*","Connection":"keep-alive","Cache-Control":"max-age=0"};
    request.get({url:url,headers:headers},function(err,httpResponse,body){
        console.log("================第19次返回================");
        console.log(body);

    })
}

function next20(){
    var url="http://www.ecpic.com.cn/cpiccar/js/UseXYTipsWindow.js?9729";
    var headers={"Host":"www.ecpic.com.cn","Accept-Language":"zh-CN,zh;q=0.8","User-Agent":"Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.87 Safari/537.36","Accept":"*/*","Connection":"keep-alive","Cache-Control":"max-age=0"};
    request.get({url:url,headers:headers},function(err,httpResponse,body){
        console.log("================第20次返回================");
        console.log(body);

    })
}

function next21(){
    var url="http://www.ecpic.com.cn/cpiccar/js/omniture/vehicleBaseInfoSingleOmn.js?9729";
    var headers={"Host":"www.ecpic.com.cn","Accept-Language":"zh-CN,zh;q=0.8","User-Agent":"Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.87 Safari/537.36","Accept":"*/*","Connection":"keep-alive","Cache-Control":"max-age=0"};
    request.get({url:url,headers:headers},function(err,httpResponse,body){
        console.log("================第21次返回================");
        console.log(body);

    })
}

function next22(){
    var url="http://www.ecpic.com.cn/cpiccar/js/sales/queryVehicleModelByEightVin.js?9729";
    var headers={"Host":"www.ecpic.com.cn","Accept-Language":"zh-CN,zh;q=0.8","User-Agent":"Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.87 Safari/537.36","Accept":"*/*","Connection":"keep-alive","Cache-Control":"max-age=0"};
    request.get({url:url,headers:headers},function(err,httpResponse,body){
        console.log("================第22次返回================");
        console.log(body);

    })
}

function next23(){
    var url="http://www.ecpic.com.cn/cpiccar/js/sales/mobileCallBack.js";
    var headers={"Host":"www.ecpic.com.cn","Accept-Language":"zh-CN,zh;q=0.8","User-Agent":"Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.87 Safari/537.36","Accept":"*/*","Connection":"keep-alive","If-Modified-Since":"Sat, 19 Mar 2016 15:36:16 GMT","Cache-Control":"max-age=0"};
    request.get({url:url,headers:headers},function(err,httpResponse,body){
        console.log("================第23次返回================");
        console.log(body);

    })
}

function next24(){
    var url="http://www.ecpic.com.cn/cpiccar/sales/businessCollect/generateJaptchaImage";
    var headers={"Host":"www.ecpic.com.cn","Accept-Language":"zh-CN,zh;q=0.8","User-Agent":"Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.87 Safari/537.36","Accept":"image/webp,image/*,*/*;q=0.8","Connection":"keep-alive","Cache-Control":"max-age=0"};
    request.get({url:url,headers:headers},function(err,httpResponse,body){
        console.log("================第24次返回================");
        console.log(body);

    })
}

function next25(){
    var url="http://www.ecpic.com.cn/cpiccar/js/sales/kehuliuyan.js";
    var headers={"Host":"www.ecpic.com.cn","Accept-Language":"zh-CN,zh;q=0.8","User-Agent":"Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.87 Safari/537.36","Accept":"*/*","Connection":"keep-alive","If-Modified-Since":"Sat, 19 Mar 2016 15:36:16 GMT","Cache-Control":"max-age=0"};
    request.get({url:url,headers:headers},function(err,httpResponse,body){
        console.log("================第25次返回================");
        console.log(body);

    })
}

function next26(){
    var url="http://www.ecpic.com.cn/cpiccar/js/sales/s_code.js";
    var headers={"Host":"www.ecpic.com.cn","Accept-Language":"zh-CN,zh;q=0.8","User-Agent":"Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.87 Safari/537.36","Accept":"*/*","Connection":"keep-alive","If-Modified-Since":"Fri, 20 May 2016 10:56:22 GMT","Cache-Control":"max-age=0"};
    request.get({url:url,headers:headers},function(err,httpResponse,body){
        console.log("================第26次返回================");
        console.log(body);

    })
}

function next27(){
    var url="http://www.ecpic.com.cn/cpiccar/js/sales/PartnerUtil.js";
    var headers={"Host":"www.ecpic.com.cn","Accept-Language":"zh-CN,zh;q=0.8","User-Agent":"Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.87 Safari/537.36","Accept":"*/*","Connection":"keep-alive","If-Modified-Since":"Sat, 19 Mar 2016 15:36:16 GMT","Cache-Control":"max-age=0"};
    request.get({url:url,headers:headers},function(err,httpResponse,body){
        console.log("================第27次返回================");
        console.log(body);

    })
}

function next28(){
    var url="http://www.ecpic.com.cn/cpiccar/ls.json?callback=jQuery16209099562148054376_1464227468658&_=1464227469364";
    var headers={"Host":"www.ecpic.com.cn","Accept-Language":"zh-CN,zh;q=0.8","User-Agent":"Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.87 Safari/537.36","Accept":"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript, */*; q=0.01","X-Requested-With":"XMLHttpRequest","Connection":"keep-alive","Cache-Control":"max-age=0"};
    request.get({url:url,headers:headers},function(err,httpResponse,body){
        console.log("================第28次返回================");
        console.log(body);

    })
}

function next29(){
    var url="https://member.cpic.com.cn/cas/ls.json?callback=jQuery16209099562148054376_1464227468659&_=1464227469366";
    var headers={"Host":"member.cpic.com.cn","Accept-Language":"zh-CN,zh;q=0.8","User-Agent":"Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.87 Safari/537.36","Accept":"*/*","Connection":"keep-alive","Cache-Control":"max-age=0"};
    request.get({url:url,headers:headers},function(err,httpResponse,body){
        console.log("================第29次返回================");
        console.log(body);

    })
}

function next30(){
    var url="http://datax.baidu.com/x.js?dm=www.ecpic.com.cn";
    var headers={"If-None-Match":"da9bebf230ea5c969e9c53fcb989ee44-53F3A05DFB9B3671E20FA49486FE29C8","Host":"datax.baidu.com","Accept-Language":"zh-CN,zh;q=0.8","User-Agent":"Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.87 Safari/537.36","Accept":"*/*","Connection":"keep-alive","Cache-Control":"max-age=0"};
    request.get({url:url,headers:headers},function(err,httpResponse,body){
        console.log("================第30次返回================");
        console.log(body);

    })
}

function next31(){
    var url="http://www.ecpic.com.cn/cpiccar/images/step.png";
    var headers={"Host":"www.ecpic.com.cn","Accept-Language":"zh-CN,zh;q=0.8","User-Agent":"Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.87 Safari/537.36","Accept":"image/webp,image/*,*/*;q=0.8","Connection":"keep-alive","Cache-Control":"max-age=0"};
    request.get({url:url,headers:headers},function(err,httpResponse,body){
        console.log("================第31次返回================");
        console.log(body);

    })
}

function next32(){
    var url="http://www.ecpic.com.cn/cpiccar/images/footer-bg.jpg";
    var headers={"Host":"www.ecpic.com.cn","Accept-Language":"zh-CN,zh;q=0.8","User-Agent":"Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.87 Safari/537.36","Accept":"image/webp,image/*,*/*;q=0.8","Connection":"keep-alive","Cache-Control":"max-age=0"};
    request.get({url:url,headers:headers},function(err,httpResponse,body){
        console.log("================第32次返回================");
        console.log(body);

    })
}

function next33(){
    var url="http://www.ecpic.com.cn/mall/js/onlineservice/common_uuid.js";
    var headers={"Host":"www.ecpic.com.cn","Accept-Language":"zh-CN,zh;q=0.8","User-Agent":"Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.87 Safari/537.36","Accept":"*/*","Connection":"keep-alive","If-Modified-Since":"Sat, 19 Mar 2016 14:18:02 GMT","Cache-Control":"max-age=0"};
    request.get({url:url,headers:headers},function(err,httpResponse,body){
        console.log("================第33次返回================");
        console.log(body);

    })
}

function next34(){
    var url="https://member.cpic.com.cn/cas/ls.json?callback=jQuery16209099562148054376_1464227468660&_=1464227470772";
    var headers={"Host":"member.cpic.com.cn","Accept-Language":"zh-CN,zh;q=0.8","User-Agent":"Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.87 Safari/537.36","Accept":"*/*","Connection":"keep-alive","Cache-Control":"max-age=0"};
    request.get({url:url,headers:headers},function(err,httpResponse,body){
        console.log("================第34次返回================");
        console.log(body);

    })
}

function next35(){
    var url="http://www.ecpic.com.cn/cpiccar/salesNew/businessCollect/isNewProduct";
    var headers={"Origin":"http://www.ecpic.com.cn","Host":"www.ecpic.com.cn","Accept-Language":"zh-CN,zh;q=0.8","User-Agent":"Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.87 Safari/537.36","Content-Type":"application/json; charset=UTF-8","Accept":"application/json, text/javascript, */*; q=0.01","Cache-Control":"max-age=0","X-Requested-With":"XMLHttpRequest","Connection":"keep-alive"};
    var json={};
    request.post({url:url,headers:headers,form:json},function(err,httpResponse,body){
        //预期返回值=undefined
        console.log("================第35次返回================");
        console.log(body);

    })
}

function next36(){
    var url="http://www.ecpic.com.cn/cpiccar/sale/businessCollect/loadCityBranchCode";
    var headers={"Origin":"http://www.ecpic.com.cn","Host":"www.ecpic.com.cn","Accept-Language":"zh-CN,zh;q=0.8","User-Agent":"Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.87 Safari/537.36","Content-Type":"application/x-www-form-urlencoded","Accept":"application/json, text/javascript, */*; q=0.01","Cache-Control":"max-age=0","X-Requested-With":"XMLHttpRequest","Connection":"keep-alive"};
    var json={"provinceCode":"110000","cityCode":"110100","otherSource":"","customType":""};
    request.post({url:url,headers:headers,form:json},function(err,httpResponse,body){
        //预期返回值=undefined
        console.log("================第36次返回================");
        console.log(body);

    })
}

function next37(){
    var url="https://member.cpic.com.cn/cas/ls.json?callback=jQuery16209099562148054376_1464227468661&_=1464227471094";
    var headers={"Host":"member.cpic.com.cn","Accept-Language":"zh-CN,zh;q=0.8","User-Agent":"Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.87 Safari/537.36","Accept":"*/*","Connection":"keep-alive","Cache-Control":"max-age=0"};
    request.get({url:url,headers:headers},function(err,httpResponse,body){
        console.log("================第37次返回================");
        console.log(body);

    })
}

function next38(){
    var url="http://www.ecpic.com.cn/cxzq/tblcyc/fqd/";
    var headers={"Host":"www.ecpic.com.cn","Accept-Language":"zh-CN,zh;q=0.8","User-Agent":"Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.87 Safari/537.36","Accept":"text/html, */*; q=0.01","X-Requested-With":"XMLHttpRequest","Connection":"keep-alive","Cache-Control":"max-age=0"};
    request.get({url:url,headers:headers},function(err,httpResponse,body){
        console.log("================第38次返回================");
        console.log(body);

    })
}

function next39(){
    var url="http://www.ecpic.com.cn/cpiccar/js/My97DatePicker/My97DatePicker.htm";
    var headers={"Host":"www.ecpic.com.cn","Accept-Language":"zh-CN,zh;q=0.8","Upgrade-Insecure-Requests":"1","User-Agent":"Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.87 Safari/537.36","Accept":"text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8","Connection":"keep-alive","If-Modified-Since":"Sat, 19 Mar 2016 15:36:14 GMT","Cache-Control":"max-age=0"};
    request.get({url:url,headers:headers},function(err,httpResponse,body){
        console.log("================第39次返回================");
        console.log(body);

    })
}

function next40(){
    var url="http://www.ecpic.com.cn/cpiccar/js/My97DatePicker/config.js";
    var headers={"Accept":"*/*","User-Agent":"Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.87 Safari/537.36"};
    request.get({url:url,headers:headers},function(err,httpResponse,body){
        console.log("================第40次返回================");
        console.log(body);

    })
}

function next41(){
    var url="http://www.ecpic.com.cn/cpiccar/js/My97DatePicker/calendar.js";
    var headers={"Accept":"*/*","User-Agent":"Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.87 Safari/537.36"};
    request.get({url:url,headers:headers},function(err,httpResponse,body){
        console.log("================第41次返回================");
        console.log(body);

    })
}

function next42(){
    var url="http://www.ecpic.com.cn/cpiccar/js/My97DatePicker/lang/zh-cn.js";
    var headers={"Accept":"*/*","User-Agent":"Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.87 Safari/537.36"};
    request.get({url:url,headers:headers},function(err,httpResponse,body){
        console.log("================第42次返回================");
        console.log(body);

    })
}

function next43(){
    var url="http://www.ecpic.com.cn/cpiccar/salesNew/businessCollect/initVehicleBaseInfo?insuredPhone=&insuredPlateNo=%25E4%25BA%25AC&insuredProviceCode=440000&insuredCityCode=440100&insuredCientType=1&otherSource=&cmpid=&insuredIdNumber=&dataSources=&registNo=&customType=&tbsn=&sellerId=&buyerNick=&buyerId=&format=&plaintext=&sign=&bannerPath=";
    var headers={"Host":"www.ecpic.com.cn","Accept-Language":"zh-CN,zh;q=0.8","Upgrade-Insecure-Requests":"1","User-Agent":"Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.87 Safari/537.36","Accept":"text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8","Connection":"keep-alive"};
    request.get({url:url,headers:headers},function(err,httpResponse,body){
        console.log("================第43次返回================");
        console.log(body);

    })
}

function next44(){
    var url="http://www.ecpic.com.cn/cpiccar/js/xsg/vehicle_select_Cpic.js?6551";
    var headers={"Host":"www.ecpic.com.cn","Accept-Language":"zh-CN,zh;q=0.8","User-Agent":"Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.87 Safari/537.36","Accept":"*/*","Connection":"keep-alive"};
    request.get({url:url,headers:headers},function(err,httpResponse,body){
        console.log("================第44次返回================");
        console.log(body);

    })
}

function next45(){
    var url="http://www.ecpic.com.cn/cpiccar/js/xsg/quotationSingle.js?6551";
    var headers={"Host":"www.ecpic.com.cn","Accept-Language":"zh-CN,zh;q=0.8","User-Agent":"Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.87 Safari/537.36","Accept":"*/*","Connection":"keep-alive"};
    request.get({url:url,headers:headers},function(err,httpResponse,body){
        console.log("================第45次返回================");
        console.log(body);

    })
}

function next46(){
    var url="http://www.ecpic.com.cn/cpiccar/js/sales/driverSingle.js?6551";
    var headers={"Host":"www.ecpic.com.cn","Accept-Language":"zh-CN,zh;q=0.8","User-Agent":"Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.87 Safari/537.36","Accept":"*/*","Connection":"keep-alive"};
    request.get({url:url,headers:headers},function(err,httpResponse,body){
        console.log("================第46次返回================");
        console.log(body);

    })
}

function next47(){
    var url="http://www.ecpic.com.cn/cpiccar/js/xsg/travelTaxSingle.js?6551";
    var headers={"Host":"www.ecpic.com.cn","Accept-Language":"zh-CN,zh;q=0.8","User-Agent":"Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.87 Safari/537.36","Accept":"*/*","Connection":"keep-alive"};
    request.get({url:url,headers:headers},function(err,httpResponse,body){
        console.log("================第47次返回================");
        console.log(body);

    })
}

function next48(){
    var url="http://www.ecpic.com.cn/cpiccar/js/xsg/businessCollectSingle.js";
    var headers={"Host":"www.ecpic.com.cn","Accept-Language":"zh-CN,zh;q=0.8","User-Agent":"Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.87 Safari/537.36","Accept":"*/*","Connection":"keep-alive","If-Modified-Since":"Fri, 20 May 2016 10:56:22 GMT"};
    request.get({url:url,headers:headers},function(err,httpResponse,body){
        console.log("================第48次返回================");
        console.log(body);

    })
}

function next49(){
    var url="http://www.ecpic.com.cn/cpiccar/js/inputSuggest_0.1.js?6551";
    var headers={"Host":"www.ecpic.com.cn","Accept-Language":"zh-CN,zh;q=0.8","User-Agent":"Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.87 Safari/537.36","Accept":"*/*","Connection":"keep-alive"};
    request.get({url:url,headers:headers},function(err,httpResponse,body){
        console.log("================第49次返回================");
        console.log(body);

    })
}

function next50(){
    var url="http://www.ecpic.com.cn/cpiccar/js/Fastcity-area.js?6551";
    var headers={"Host":"www.ecpic.com.cn","Accept-Language":"zh-CN,zh;q=0.8","User-Agent":"Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.87 Safari/537.36","Accept":"*/*","Connection":"keep-alive"};
    request.get({url:url,headers:headers},function(err,httpResponse,body){
        console.log("================第50次返回================");
        console.log(body);

    })
}

function next51(){
    var url="http://www.ecpic.com.cn/cpiccar/js/search-ui_new.js?6551";
    var headers={"Host":"www.ecpic.com.cn","Accept-Language":"zh-CN,zh;q=0.8","User-Agent":"Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.87 Safari/537.36","Accept":"*/*","Connection":"keep-alive"};
    request.get({url:url,headers:headers},function(err,httpResponse,body){
        console.log("================第51次返回================");
        console.log(body);

    })
}

function next52(){
    var url="http://www.ecpic.com.cn/cpiccar/js/UseXYTipsWindow.js?6551";
    var headers={"Host":"www.ecpic.com.cn","Accept-Language":"zh-CN,zh;q=0.8","User-Agent":"Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.87 Safari/537.36","Accept":"*/*","Connection":"keep-alive"};
    request.get({url:url,headers:headers},function(err,httpResponse,body){
        console.log("================第52次返回================");
        console.log(body);

    })
}

function next53(){
    var url="http://www.ecpic.com.cn/cpiccar/js/omniture/vehicleBaseInfoSingleOmn.js?6551";
    var headers={"Host":"www.ecpic.com.cn","Accept-Language":"zh-CN,zh;q=0.8","User-Agent":"Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.87 Safari/537.36","Accept":"*/*","Connection":"keep-alive"};
    request.get({url:url,headers:headers},function(err,httpResponse,body){
        console.log("================第53次返回================");
        console.log(body);

    })
}

function next54(){
    var url="http://www.ecpic.com.cn/cpiccar/js/sales/queryVehicleModelByEightVin.js?6551";
    var headers={"Host":"www.ecpic.com.cn","Accept-Language":"zh-CN,zh;q=0.8","User-Agent":"Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.87 Safari/537.36","Accept":"*/*","Connection":"keep-alive"};
    request.get({url:url,headers:headers},function(err,httpResponse,body){
        console.log("================第54次返回================");
        console.log(body);

    })
}

function next55(){
    var url="http://www.ecpic.com.cn/cpiccar/ls.json?callback=jQuery162027747188319496097_1464227474716&_=1464227474759";
    var headers={"Host":"www.ecpic.com.cn","Accept-Language":"zh-CN,zh;q=0.8","User-Agent":"Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.87 Safari/537.36","Accept":"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript, */*; q=0.01","X-Requested-With":"XMLHttpRequest","Connection":"keep-alive"};
    request.get({url:url,headers:headers},function(err,httpResponse,body){
        console.log("================第55次返回================");
        console.log(body);

    })
}

function next56(){
    var url="https://member.cpic.com.cn/cas/ls.json?callback=jQuery162027747188319496097_1464227474717&_=1464227474760";
    var headers={"Host":"member.cpic.com.cn","Accept-Language":"zh-CN,zh;q=0.8","User-Agent":"Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.87 Safari/537.36","Accept":"*/*","Connection":"keep-alive"};
    request.get({url:url,headers:headers},function(err,httpResponse,body){
        console.log("================第56次返回================");
        console.log(body);

    })
}

function next57(){
    var url="http://www.ecpic.com.cn/cpiccar/salesNew/businessCollect/generateJaptchaImage";
    var headers={"Host":"www.ecpic.com.cn","Accept-Language":"zh-CN,zh;q=0.8","User-Agent":"Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.87 Safari/537.36","Accept":"image/webp,image/*,*/*;q=0.8","Connection":"keep-alive"};
    request.get({url:url,headers:headers},function(err,httpResponse,body){
        console.log("================第57次返回================");
        console.log(body);

    })
}

function next58(){
    var url="https://member.cpic.com.cn/cas/ls.json?callback=jQuery162027747188319496097_1464227474718&_=1464227475448";
    var headers={"Host":"member.cpic.com.cn","Accept-Language":"zh-CN,zh;q=0.8","User-Agent":"Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.87 Safari/537.36","Accept":"*/*","Connection":"keep-alive"};
    request.get({url:url,headers:headers},function(err,httpResponse,body){
        console.log("================第58次返回================");
        console.log(body);

    })
}

function next59(){
    var url="http://www.ecpic.com.cn/cpiccar/saleNew/businessCollect/loadCityBranchCode";
    var headers={"Origin":"http://www.ecpic.com.cn","Host":"www.ecpic.com.cn","Accept-Language":"zh-CN,zh;q=0.8","User-Agent":"Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.87 Safari/537.36","Content-Type":"application/x-www-form-urlencoded","Accept":"application/json, text/javascript, */*; q=0.01","X-Requested-With":"XMLHttpRequest","Connection":"keep-alive"};
    var json={"provinceCode":"440000","cityCode":"440100","otherSource":"","customType":""};
    request.post({url:url,headers:headers,form:json},function(err,httpResponse,body){
        //预期返回值={"orgdeptcode":"440100","hasLicense":"3030100,332500,0|3030100,331000,0|3030100,330900,0|3030100,330800,0|3030100,330700,0|3030100,330600,0|3030100,330500,0|3030100,330400,0|3030100,330100,0|3030400,330302,0|1020100,120100,0|3020300,320200,0|4020100,422800,0|4020100,421000,0|4020100,421100,0|4020100,421200,0|4020100,420600,0|4020100,420500,0|4020100,421300,0|4020100,420900,0|4020100,420800,0|4020100,420700,0|4020100,420300,0|4020100,420100,0|4020100,420100,0|5040100,450900,0|5040100,450400,0|5040100,450700,0|5040100,450200,0|5040100,452400,0|5040100,452700,0|5040100,450800,0|5040100,450600,0|5040100,450500,0|5040100,450300,0|5040100,450100,0|5040100,452600,0|3030400,330300,0|4020100,420200,0|4020100,420100,0|3110100,320500,0|3110100,320507,0|3110100,320506,0|3110100,320585,0|3110100,320509,0|3110100,320583,0|3110100,320581,0|3110100,320582,0|3030400,330300,0|4030100,430800,0|4030100,433100,0|4030100,431200,0|4030100,431300,0|4030100,430700,0|4030100,431000,0|4030100,430400,0|4030100,430300,0|5040100,451500,0|5040100,451400,0|5040100,451000,0|5040100,450900,0|5040100,450800,0|5040100,450700,0|5040100,450600,0|5040100,450500,0|5040100,450400,0|5040100,450300,0|5040100,450200,0|5040100,450100,0|4020100,422800,0|4020100,421300,0|4020100,421200,0|4020100,421100,0|4020100,421000,0|4020100,420900,0|4020100,420800,0|4020100,420700,0|4020100,420600,0|4020100,420500,0|4020100,420300,0|4020100,421400,0|4020100,420200,0|4020100,420100,0","checkLicenseOwner":"2040100,4|1050100,10|7050100,10|3100100,4|7010100,4|6020100,4|2010100,10|6030100,10|3110100,10|3070100,10|7020100,4|4030100,4|4020100,4|3030400,4|5020100,10|5030100,10|3030100,4|5030100,4|1030100,3|3060100,4|3020100,10|3020300,10|7030100,30|5040100,4|5010100,10|3020400,10|1040100,4|3090100,4|3050100,4|3040100,4|7040100,10|1020100,4|2020100,4|6010100,4|2030100,4|3080100,10|1010100,10|6040100,4|5010800,4|3010100,10","productList":[{"createDate":1377054352000,"updateDate":null,"createUserId":null,"updateUserId":null,"typeId":"1000000576","kind":"AutoAddedValueService","name":"免费代收理赔资料服务","description":"免费代收理赔资料服务(广州地区)","specId":null,"processDefinitionId":null,"startDate":"2013-01-01","endDate":"2099-12-31","status":"Publish","statusReason":null,"statusDate":1377054352000,"version":1,"spec":null,"productId":1996632,"productCode":"AASV440100S1","coreCode":null,"category":"10","productType":"Value","products":null,"productRlships":null,"insuredPrice":null,"originalRate":null,"productOrder":1,"url":null,"responsibilityType":null,"onlineSaleRate":null,"memberRate":null,"discountType":null,"isDefault":true,"businessCode":"440100","groupPolicy":null,"showFlag":null,"showInsuredPrice":null,"apiCode":null,"id":1996632,"entityId":1996632},{"createDate":1377054352000,"updateDate":null,"createUserId":null,"updateUserId":null,"typeId":"1000000574","kind":"AutoAddedValueService","name":"酒后代驾","description":"保单年度内两次免费酒后代驾服务（广州地区）","specId":null,"processDefinitionId":null,"startDate":"2013-01-01","endDate":"2099-12-31","status":"Publish","statusReason":null,"statusDate":1377054352000,"version":1,"spec":null,"productId":1996132,"productCode":"AASV440100S1","coreCode":null,"category":"10","productType":"Value","products":null,"productRlships":null,"insuredPrice":null,"originalRate":null,"productOrder":1,"url":null,"responsibilityType":null,"onlineSaleRate":null,"memberRate":null,"discountType":null,"isDefault":true,"businessCode":"440100","groupPolicy":null,"showFlag":null,"showInsuredPrice":null,"apiCode":null,"id":1996132,"entityId":1996132},{"createDate":1377054352000,"updateDate":null,"createUserId":null,"updateUserId":null,"typeId":"50000078001","kind":"AutoAddedValueService","name":"酒后代驾2","description":"两次免费<br />","specId":null,"processDefinitionId":null,"startDate":"2013-01-01","endDate":"2099-12-31","status":"Unpublish","statusReason":null,"statusDate":1377054352000,"version":1,"spec":null,"productId":2084632,"productCode":"AASV440100S1","coreCode":null,"category":"10","productType":"Value","products":null,"productRlships":null,"insuredPrice":null,"originalRate":null,"productOrder":1,"url":null,"responsibilityType":null,"onlineSaleRate":null,"memberRate":null,"discountType":null,"isDefault":true,"businessCode":"440100","groupPolicy":null,"showFlag":null,"showInsuredPrice":null,"apiCode":null,"id":2084632,"entityId":2084632}],"branchCode":"5010100"}
        console.log("================第59次返回================");
        console.log(body);

    })
}

function next60(){
    var url="https://member.cpic.com.cn/cas/ls.json?callback=jQuery162027747188319496097_1464227474719&_=1464227475721";
    var headers={"Host":"member.cpic.com.cn","Accept-Language":"zh-CN,zh;q=0.8","User-Agent":"Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.87 Safari/537.36","Accept":"*/*","Connection":"keep-alive"};
    request.get({url:url,headers:headers},function(err,httpResponse,body){
        console.log("================第60次返回================");
        console.log(body);

    })
}

function next61(){
    var url="http://www.ecpic.com.cn/cpiccar/salesNew/businessCollect/submitVehicleBaseInfo";
    var headers={"Origin":"http://www.ecpic.com.cn","Host":"www.ecpic.com.cn","Accept-Language":"zh-CN,zh;q=0.8","User-Agent":"Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.87 Safari/537.36","Content-Type":"application/json; charset=UTF-8","Accept":"application/json, text/javascript, */*; q=0.01","X-Requested-With":"XMLHttpRequest","Connection":"keep-alive"};
    var json={};
    request.post({url:url,headers:headers,form:json},function(err,httpResponse,body){
        //预期返回值={"PolicyBaseInfo":{"branchCode":"5010100"},"telOpportunityId":"20160526000638151563","random":1051,"comprenhensivePrdCode":"AUTOCOMPRENHENSIVEINSURANCE2014PRODUCT","insuranceFlag":"01","host":"www.ecpic.com.cn","orderId":102982590,"insurancePageStatus":"NEW_VEHICLE","otherSource":"","opportunityId":285416555,"orderNo":"00000000000102982590"}
        console.log("================第61次返回================");
        console.log(body);

    })
}

function next62(){
    var url="http://www.ecpic.com.cn/cpiccar/salesNew/businessCollect/initVehicleDetailInfo?otherSource=";
    var headers={"Origin":"http://www.ecpic.com.cn","Host":"www.ecpic.com.cn","Accept-Language":"zh-CN,zh;q=0.8","User-Agent":"Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.87 Safari/537.36","Content-Type":"application/json; charset=UTF-8","Accept":"application/json, text/javascript, */*; q=0.01","X-Requested-With":"XMLHttpRequest","Connection":"keep-alive"};
    var json={};
    request.post({url:url,headers:headers,form:json},function(err,httpResponse,body){
        //预期返回值={"showTaxStatus":"1","interceptionEndDate":"2016-08-24","RPBEJ1061":"1","vinName":"车架号/VIN","registerEndDate":"2016-05-26","userId":"","verifyCode":"FEPE","lastYearTrafficTimesName":"上年是否有交通违法显示标示位","showIsTelSaleFlag":"0","vehicleModelName":"车辆型号","interceptionStartDate":"2016-05-27","vehicleSeatCountFlag":"0","registerStartDate":"2007-05-27","curDate":"2016-05-26","engineNoName":"发动机号","PolicyBaseInfo":{"commecialProductId":132905004,"cmpId":"","commecialAgMtId":23544809704,"productKind":"AUTOCOMPRENHENSIVEINSURANCE2014PRODUCT","comprenhensivePrdCode":"AUTOCOMPRENHENSIVEINSURANCE2014PRODUCT","orgdeptCode":"440100","cityCode":"440100","otherSource":"","provinceCode":"440000","branchCode":"5010100"},"depreciationCarFlag":"0","productTypeFlag":"1","registNo":"","hideUserName":"","VehicleInfo":{"plateNo":"粤DQM279","driveArea":2},"insurancePageStatus":"NEW_VEHICLE","lastYearChangeOwnerName":"上一保险年度是否发生车辆所有权转移","complusoryPolicyEndDate":"2016-08-24","complusoryPolicyStartDate":"2016-05-27","comprenhensivePrdCode":"AUTOCOMPRENHENSIVEINSURANCE2014PRODUCT","showIsTelSaleName":"上年是否为电销","insuranceFlag":"01","vinFlag":"1","lastYearTrafficTimesFlag":"0","host":"www.ecpic.com.cn","vehicleSeatCountName":"车辆座位数","vehicleModelFlag":"1","isInBusinessPlatFlag":"0","engineNoFlag":"1","orderNo":"00000000000102982590","depreciationCarName":"确保不是营转非、二手车辆","Opportunity":{"mobile":"15123123123","externalOrderNo":"","opportunityStatus":"2","ip":"61.148.243.109","webUserName":"","extCustomerInfo":"","opportunityId":285416555,"buyerId":"","bannerPath":"","licenseOwner":"一口价","sourceType":"PC","buyerNick":"","format":"","plaintext":"","uuId":"06971d67-9fc6-4a13-9878-715bb97b940c","email":"","sign":"","giftInfo":"","cookieid":"00004Kc5EcGLiFFxN3wY_oX_oDz:1874p7kjv"},"telOpportunityId":"20160526000638151563","zjhm":"1020","insuranceStartDate":"2016-05-27","lastYearChangeOwnerFlag":"1","OrderInfo":{"orderId":102982590}}
        console.log("================第62次返回================");
        console.log(body);

    })
}

function next63(){
    var url="http://www.ecpic.com.cn/cpiccar/sales/businessCollect/queryVehicleModelByEightVinWithPageNew";
    var headers={"Origin":"http://www.ecpic.com.cn","Host":"www.ecpic.com.cn","Accept-Language":"zh-CN,zh;q=0.8","User-Agent":"Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.87 Safari/537.36","Content-Type":"application/json; charset=UTF-8","Accept":"application/json, text/javascript, */*; q=0.01","X-Requested-With":"XMLHttpRequest","Connection":"keep-alive"};
    var json={};
    request.post({url:url,headers:headers,form:json},function(err,httpResponse,body){
        //预期返回值={"brandCode_VIN":"","gearboxType_VIN":"","familyList":[{"familyCode":"JBY0AC","familyName":"森雅"}],"displacement_VIN":"","brandList":[{"brandName":"一汽吉林","brandCode":"JBY0"}],"configDriverList":[{"gearBoxType":"自动档","gearboxName":"自动档"},{"gearBoxType":"手动档","gearboxName":"手动档"}],"configDisList":[{"displacement":"1.5L"}],"vehicleModelPlatList":[{"vehicleAlias":"森雅M80 1.5L MT 5座标准型","EmptyWeight":"1140;1160","seatCount":5,"groupCode":"JBY0AC05","seatMin":"","batholith":"","yearPattern":"2010","brandCode":"JBY0","kindPrice":"","gearBoxType":"手动档","bakString3":"D1","vehicleFgwCode":"CA7150","bakString4":"0","bakString5":"61500","industryVehicleName":"一汽佳星CA7150 标准型","marketYear":"200909","engineCapacity":"1.495","seatMax":"","groupName":"森雅M80(09/09-)","taxKindPrice":"","dumpTrailerFlag":"其它","searchCode":null,"factoryName":"一汽吉林汽车有限公司","vehicleFgwName":"一汽佳星","vehiclePower":"80","vehicleClassCode":"IC03","vehicleBrand":"一汽吉林","moldCharacterCode":"DFAABD0021","antiTheft":"无","insuranceClass":"六座以下客车","carryingCapacity":null,"moldName":"一汽佳星CA7150","riskflagCode":"004","price":"61500","producingArea":"0","realPurchasePrice":"61500","sum":20,"tbHcarType":"其它","vehicleClassName":"旅行车类","jyRiskFlagCode":"0","vehicleModel":"一汽佳星CA7150","rVehicleFamily":"森雅","taxPrice":"64128","insuranceCode":"I0000000000000000190000000000015","fullWeightMin":"1.14","newVehicleClass":"MPV","glassManufacturer":"0","familyCode":"JBY0AC","abs":"有","engineDesc":"1.5L","newVehicleClassCode":"DY06","industryVehicleCode":"BYQLSZUB0001","bodyType":"","fullWeightMax":"1.16"},{"vehicleAlias":"森雅M80 1.5L AT 5座豪华型","EmptyWeight":"1150;1170","seatCount":5,"groupCode":"JBY0AC05","seatMin":"","batholith":"","yearPattern":"2010","brandCode":"JBY0","kindPrice":"","gearBoxType":"自动档","bakString3":"D1","vehicleFgwCode":"CA7150A","bakString4":"0","bakString5":"71500","industryVehicleName":"一汽佳星CA7150A 豪华型","marketYear":"200909","engineCapacity":"1.495","seatMax":"","groupName":"森雅M80(09/09-)","taxKindPrice":"","dumpTrailerFlag":"其它","searchCode":null,"factoryName":"一汽吉林汽车有限公司","vehicleFgwName":"一汽佳星","vehiclePower":"80","vehicleClassCode":"IC03","vehicleBrand":"一汽吉林","moldCharacterCode":"DFAABD0029","antiTheft":"无","insuranceClass":"六座以下客车","carryingCapacity":null,"moldName":"一汽佳星CA7150A","riskflagCode":"004","price":"71500","producingArea":"0","realPurchasePrice":"71500","sum":20,"tbHcarType":"其它","vehicleClassName":"旅行车类","jyRiskFlagCode":"0","vehicleModel":"一汽佳星CA7150A","rVehicleFamily":"森雅","taxPrice":"74556","insuranceCode":"I0000000000000000190000000000015","fullWeightMin":"1.15","newVehicleClass":"MPV","glassManufacturer":"0","familyCode":"JBY0AC","abs":"有","engineDesc":"1.5L","newVehicleClassCode":"DY06","industryVehicleCode":"BYQLSZUD0006","bodyType":"","fullWeightMax":"1.17"},{"vehicleAlias":"森雅S80 1.5L AT豪华型 5座","EmptyWeight":"1160","seatCount":5,"groupCode":"JBY0AC06","seatMin":"","batholith":"","yearPattern":"2011","brandCode":"JBY0","kindPrice":"","gearBoxType":"自动档","bakString3":"D1","vehicleFgwCode":"CA7152A32","bakString4":"0","bakString5":"74500","industryVehicleName":"一汽佳星CA7152A32 豪华型","marketYear":"201012","engineCapacity":"1.495","seatMax":"","groupName":"森雅S80(10/12-)","taxKindPrice":"","dumpTrailerFlag":"其它","searchCode":null,"factoryName":"一汽吉林汽车有限公司","vehicleFgwName":"一汽佳星","vehiclePower":"80","vehicleClassCode":"IC02","vehicleBrand":"一汽吉林","moldCharacterCode":"DFAABD0043","antiTheft":"无","insuranceClass":"六座以下客车","carryingCapacity":null,"moldName":"一汽佳星CA7152A32","riskflagCode":"004","price":"74500","producingArea":"0","realPurchasePrice":"74500","sum":20,"tbHcarType":"其它","vehicleClassName":"越野车类","jyRiskFlagCode":"0","vehicleModel":"一汽佳星CA7152A32","rVehicleFamily":"森雅","taxPrice":"77684","insuranceCode":"I0000000000000000190000000000015","fullWeightMin":"1.16","newVehicleClass":"小型SUV","glassManufacturer":"0","familyCode":"JBY0AC","abs":"有","engineDesc":"1.5L","newVehicleClassCode":"DY01","industryVehicleCode":"BYQLSZUD0009","bodyType":"","fullWeightMax":"1.16"},{"vehicleAlias":"森雅S80 1.5L AT导航版 5座","EmptyWeight":"1160","seatCount":5,"groupCode":"JBY0AC06","seatMin":"","batholith":"","yearPattern":"2011","brandCode":"JBY0","kindPrice":"","gearBoxType":"自动档","bakString3":"D1","vehicleFgwCode":"CA7152A62","bakString4":"0","bakString5":"79500","industryVehicleName":"一汽佳星CA7152A62 导航版","marketYear":"201012","engineCapacity":"1.495","seatMax":"","groupName":"森雅S80(10/12-)","taxKindPrice":"","dumpTrailerFlag":"其它","searchCode":null,"factoryName":"一汽吉林汽车有限公司","vehicleFgwName":"一汽佳星","vehiclePower":"80","vehicleClassCode":"IC02","vehicleBrand":"一汽吉林","moldCharacterCode":"DFAABD0044","antiTheft":"无","insuranceClass":"六座以下客车","carryingCapacity":null,"moldName":"一汽佳星CA7152A62","riskflagCode":"004","price":"79500","producingArea":"0","realPurchasePrice":"79500","sum":20,"tbHcarType":"其它","vehicleClassName":"越野车类","jyRiskFlagCode":"0","vehicleModel":"一汽佳星CA7152A62","rVehicleFamily":"森雅","taxPrice":"82897","insuranceCode":"I0000000000000000190000000000015","fullWeightMin":"1.16","newVehicleClass":"小型SUV","glassManufacturer":"0","familyCode":"JBY0AC","abs":"有","engineDesc":"1.5L","newVehicleClassCode":"DY01","industryVehicleCode":"BYQLSZUC0008","bodyType":"","fullWeightMax":"1.16"},{"vehicleAlias":"森雅M80 1.5L MT 5座舒适型","EmptyWeight":"1140;1160","seatCount":5,"groupCode":"JBY0AC05","seatMin":"","batholith":"","yearPattern":"2010","brandCode":"JBY0","kindPrice":"","gearBoxType":"手动档","bakString3":"D1","vehicleFgwCode":"CA7150","bakString4":"0","bakString5":"66500","industryVehicleName":"一汽佳星CA7150 舒适型","marketYear":"200909","engineCapacity":"1.495","seatMax":"","groupName":"森雅M80(09/09-)","taxKindPrice":"","dumpTrailerFlag":"其它","searchCode":null,"factoryName":"一汽吉林汽车有限公司","vehicleFgwName":"一汽佳星","vehiclePower":"80","vehicleClassCode":"IC03","vehicleBrand":"一汽吉林","moldCharacterCode":"DFAABD0025","antiTheft":"无","insuranceClass":"六座以下客车","carryingCapacity":null,"moldName":"一汽佳星CA7150","riskflagCode":"004","price":"66500","producingArea":"0","realPurchasePrice":"66500","sum":20,"tbHcarType":"其它","vehicleClassName":"旅行车类","jyRiskFlagCode":"0","vehicleModel":"一汽佳星CA7150","rVehicleFamily":"森雅","taxPrice":"69342","insuranceCode":"I0000000000000000190000000000015","fullWeightMin":"1.14","newVehicleClass":"MPV","glassManufacturer":"0","familyCode":"JBY0AC","abs":"有","engineDesc":"1.5L","newVehicleClassCode":"DY06","industryVehicleCode":"BYQLSZUC0013","bodyType":"","fullWeightMax":"1.16"}],"familyCode_VIN":""}
        console.log("================第63次返回================");
        console.log(body);

    })
}

function next64(){
    var url="http://www.ecpic.com.cn/cpiccar/salesNew/businessCollect/queryVehicleModelOnPlatformNew?random=1051&q=%E4%B8%80%E6%B1%BD%E4%BD%B3%E6%98%9FCA7152A32%E8%BD%BF%E8%BD%A6&limit=5&timestamp=1464227605501&productKind=AUTOCOMPRENHENSIVEINSURANCE2014PRODUCT&vehicleModel=%25E4%25B8%2580%25E6%25B1%25BD%25E4%25BD%25B3%25E6%2598%259FCA7152A32%25E8%25BD%25BF%25E8%25BD%25A6&branchCode=5010100&pageIndex=1";
    var headers={"Host":"www.ecpic.com.cn","Accept-Language":"zh-CN,zh;q=0.8","User-Agent":"Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.87 Safari/537.36","Accept":"*/*","X-Requested-With":"XMLHttpRequest","Connection":"keep-alive"};
    request.get({url:url,headers:headers},function(err,httpResponse,body){
        //预期返回值={"familyList":[{"familyCode":"JBY0AC","familyName":"森雅"}],"brandList":[{"brandName":"一汽吉林","brandCode":"JBY0"}],"displacement_AUTO":"","gearboxType_AUTO":"","configDriverList":[{"gearBoxType":"自动档","gearboxName":"自动档"}],"brandCode_AUTO":"","configDisList":[{"displacement":"1.5L"}],"vehicleModelPlatList":[{"vehicleAlias":"森雅S80 1.5L AT豪华型 5座","EmptyWeight":"1160","seatCount":5,"groupCode":"JBY0AC06","seatMin":"","batholith":"","yearPattern":"2011","brandCode":"JBY0","kindPrice":"","gearBoxType":"自动档","bakString3":"D1","vehicleFgwCode":"CA7152A32","bakString4":"0","bakString5":"74500","industryVehicleName":"一汽佳星CA7152A32 豪华型","marketYear":"201012","engineCapacity":"1.495","seatMax":"","groupName":"森雅S80(10/12-)","taxKindPrice":"","dumpTrailerFlag":"其它","searchCode":null,"factoryName":"一汽吉林汽车有限公司","vehicleFgwName":"一汽佳星","vehiclePower":"80","vehicleClassCode":"IC02","vehicleBrand":"一汽吉林","moldCharacterCode":"DFAABD0043","antiTheft":"无","insuranceClass":"六座以下客车","carryingCapacity":null,"moldName":"一汽佳星CA7152A32","riskflagCode":"004","price":"74500","producingArea":"0","realPurchasePrice":"74500","sum":3,"tbHcarType":"其它","vehicleClassName":"越野车类","jyRiskFlagCode":"0","vehicleModel":"一汽佳星CA7152A32","rVehicleFamily":"森雅","taxPrice":"77684","insuranceCode":"I0000000000000000190000000000015","fullWeightMin":"1.16","newVehicleClass":"小型SUV","glassManufacturer":"0","familyCode":"JBY0AC","abs":"有","engineDesc":"1.5L","newVehicleClassCode":"DY01","industryVehicleCode":"BYQLSZUD0009","bodyType":"","fullWeightMax":"1.16"},{"vehicleAlias":"森雅S80 1.5L AT都市精英版 5座","EmptyWeight":"1160","seatCount":5,"groupCode":"JBY0AC06","seatMin":"","batholith":"","yearPattern":"2011","brandCode":"JBY0","kindPrice":"","gearBoxType":"自动档","bakString3":"D1","vehicleFgwCode":"CA7152A32","bakString4":"0","bakString5":"66900","industryVehicleName":"一汽佳星CA7152A32 都市精英版","marketYear":"201012","engineCapacity":"1.495","seatMax":"","groupName":"森雅S80(10/12-)","taxKindPrice":"","dumpTrailerFlag":"其它","searchCode":null,"factoryName":"一汽吉林汽车有限公司","vehicleFgwName":"一汽佳星","vehiclePower":"80","vehicleClassCode":"IC02","vehicleBrand":"一汽吉林","moldCharacterCode":"DFAABD0058","antiTheft":"","insuranceClass":"六座以下客车","carryingCapacity":null,"moldName":"一汽佳星CA7152A32","riskflagCode":"004","price":"66900","producingArea":"0","realPurchasePrice":"66900","sum":3,"tbHcarType":"其它","vehicleClassName":"越野车类","jyRiskFlagCode":"0","vehicleModel":"一汽佳星CA7152A32","rVehicleFamily":"森雅","taxPrice":"69759","insuranceCode":"I0000000000000000190000000000015","fullWeightMin":"1.16","newVehicleClass":"小型SUV","glassManufacturer":"0","familyCode":"JBY0AC","abs":"有","engineDesc":"1.5L","newVehicleClassCode":"DY01","industryVehicleCode":"BYQLSZUA0012","bodyType":"","fullWeightMax":"1.16"},{"vehicleAlias":"森雅S80 1.5L AT导航版 5座","EmptyWeight":"1160","seatCount":5,"groupCode":"JBY0AC06","seatMin":"","batholith":"","yearPattern":"2011","brandCode":"JBY0","kindPrice":"","gearBoxType":"自动档","bakString3":"D1","vehicleFgwCode":"CA7152A32","bakString4":"0","bakString5":"79500","industryVehicleName":"一汽佳星CA7152A32 导航版","marketYear":"201012","engineCapacity":"1.495","seatMax":"","groupName":"森雅S80(10/12-)","taxKindPrice":"","dumpTrailerFlag":"其它","searchCode":null,"factoryName":"一汽吉林汽车有限公司","vehicleFgwName":"一汽佳星","vehiclePower":"80","vehicleClassCode":"IC02","vehicleBrand":"一汽吉林","moldCharacterCode":"DFAABD0045","antiTheft":"无","insuranceClass":"六座以下客车","carryingCapacity":null,"moldName":"一汽佳星CA7152A32","riskflagCode":"004","price":"79500","producingArea":"0","realPurchasePrice":"79500","sum":3,"tbHcarType":"其它","vehicleClassName":"越野车类","jyRiskFlagCode":"0","vehicleModel":"一汽佳星CA7152A32","rVehicleFamily":"森雅","taxPrice":"82897","insuranceCode":"I0000000000000000190000000000015","fullWeightMin":"1.16","newVehicleClass":"小型SUV","glassManufacturer":"0","familyCode":"JBY0AC","abs":"有","engineDesc":"1.5L","newVehicleClassCode":"DY01","industryVehicleCode":"BYQLSZUC0012","bodyType":"","fullWeightMax":"1.16"}],"familyCode_AUTO":""}
        console.log("================第64次返回================");
        console.log(body);

    })
}

function next65(){
    var url="http://www.ecpic.com.cn/cpiccar/salesNew/businessCollect/matchVehicleModel";
    var headers={"Origin":"http://www.ecpic.com.cn","Host":"www.ecpic.com.cn","Accept-Language":"zh-CN,zh;q=0.8","User-Agent":"Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.87 Safari/537.36","Content-Type":"application/json; charset=UTF-8","Accept":"application/json, text/javascript, */*; q=0.01","X-Requested-With":"XMLHttpRequest","Connection":"keep-alive"};
    var json={};
    request.post({url:url,headers:headers,form:json},function(err,httpResponse,body){
        //预期返回值={"vehicleAlias":"森雅S80 1.5L AT都市精英版 5座","EmptyWeight":"1160","seatCount":5,"groupCode":"JBY0AC06","seatMin":"","batholith":"","yearPattern":"2011","brandCode":"JBY0","kindPrice":"","gearBoxType":"自动档","bakString3":"D1","vehicleFgwCode":"CA7152A32","bakString4":"0","bakString5":"66900","industryVehicleName":"一汽佳星CA7152A32 都市精英版","marketYear":"201012","engineCapacity":"1.495","seatMax":"","groupName":"森雅S80(10/12-)","taxKindPrice":"","dumpTrailerFlag":"其它","searchCode":null,"factoryName":"一汽吉林汽车有限公司","vehicleFgwName":"一汽佳星","vehiclePower":"80","vehicleClassCode":"IC02","vehicleBrand":"一汽吉林","moldCharacterCode":"DFAABD0058","antiTheft":"","insuranceClass":"六座以下客车","carryingCapacity":null,"moldName":"一汽佳星CA7152A32","riskflagCode":"004","price":"66900","producingArea":"0","realPurchasePrice":"66900","sum":3,"tbHcarType":"其它","vehicleClassName":"越野车类","jyRiskFlagCode":"0","vehicleModel":"一汽佳星CA7152A32","rVehicleFamily":"森雅","taxPrice":"69759","insuranceCode":"I0000000000000000190000000000015","fullWeightMin":"1.16","newVehicleClass":"小型SUV","glassManufacturer":"0","familyCode":"JBY0AC","abs":"有","engineDesc":"1.5L","newVehicleClassCode":"DY01","industryVehicleCode":"BYQLSZUA0012","bodyType":"","fullWeightMax":"1.16"}
        console.log("================第65次返回================");
        console.log(body);

    })
}

function next66(){
    var url="http://www.ecpic.com.cn/cpiccar/salesNew/businessCollect/submitVehicleDetailInfo";
    var headers={"Origin":"http://www.ecpic.com.cn","Host":"www.ecpic.com.cn","Accept-Language":"zh-CN,zh;q=0.8","User-Agent":"Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.87 Safari/537.36","Content-Type":"application/json; charset=UTF-8","Accept":"application/json, text/javascript, */*; q=0.01","X-Requested-With":"XMLHttpRequest","Connection":"keep-alive"};
    var json={};
    request.post({url:url,headers:headers,form:json},function(err,httpResponse,body){
        //预期返回值={"random":1051,"PfVehicleInfo":{"seriesCode":"YQLSZ","brand":"一汽吉林","cateGoryName":"越野汽车","benchMarkRiskPremium":930.304232,"cateGoryCode":"2","tradeName":null,"carsDeptName":"国产","tradeCode":null,"carsDeptCode":"0","modelIdCode":"BYQLSZUA001220A1","noticeType":"CA7152A32","brandCode":"YQL","modelCode":"BYQLSZUA0012","series":"森雅","pureriskPremiumFlag":"1","configType":"UA","carName":"一汽佳星CA7152A32 都市精英版"},"insuranceFlag":"01","orderId":102982590,"VehicleInfo":{"NewCarFlag":"1","oriPurchasePrice":66900.0,"makerModel":"一汽佳星CA7152A32","moldName":"一汽佳星CA7152A32","purchasePrice":66900.0,"producingArea":"0","realPurchasePrice":"66900","kindPrice":0.0,"VehicleVariety1":"01","VehicleVariety2":"01","gearBoxType":"自动档","bakString3":"D1","bakString4":"0","industryVehicleName":null,"engineCapacity":"1.495","rVehicleFamily":"森雅","taxPrice":69759.0,"taxKindPrice":0.0,"newVehicleClass":"小型SUV","glassManufacturer":"0","shortCutCode":null,"currentValue":66900.0,"newVehicleClassCode":"DY01","industryVehicleCode":null,"moldCharacterCode":"DFAABD0058","insuranceClass":"六座以下客车"},"otherSource":"","insurancePageStatus":"TURN_INSURANCE_CALCULATE","orderNo":"00000000000102982590"}
        console.log("================第66次返回================");
        console.log(body);

    })
}

function next67(){
    var url="http://www.ecpic.com.cn/cpiccar/salesNew/quotation/initQuotation";
    var headers={"Origin":"http://www.ecpic.com.cn","Host":"www.ecpic.com.cn","Accept-Language":"zh-CN,zh;q=0.8","User-Agent":"Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.87 Safari/537.36","Content-Type":"application/json; charset=UTF-8","Accept":"application/json, text/javascript, */*; q=0.01","X-Requested-With":"XMLHttpRequest","Connection":"keep-alive"};
    var json={};
    request.post({url:url,headers:headers,form:json},function(err,httpResponse,body){
        //预期返回值={"nativeCompulsory":null,"discount":null,"random":"1051","telsal":null,"basicCoverageInfo":{"DamageLossExemptDeductibleSpecialClause":{"coverageAmount":"","coveragePrice":"投保","coverageName":"车损不计免赔","coverageCode":"DamageLossExemptDeductibleSpecialClause","coreCode":"11024119"},"ThirdPartyLiabilityCoverage":{"coverageAmount":"1000000","coveragePrice":"100万","coverageName":"第三者责任险","coverageCode":"ThirdPartyLiabilityCoverage","coreCode":"11024103"},"ThirdPartyLiabilityExemptDeductibleSpecialClause":{"coverageAmount":"","coveragePrice":"投保","coverageName":"三责不计免赔","coverageCode":"ThirdPartyLiabilityExemptDeductibleSpecialClause","coreCode":"11024120"},"DamageLossCoverage":{"coverageAmount":"66900","coveragePrice":"66900.0","coverageName":"机动车损失险","coverageCode":"DamageLossCoverage","coreCode":"11024101"}},"producingArea":"0","otherSource":"","glassManufacturer":"0","curDate":"2016-05-26","suggestions":{},"orderNo":"00000000000102982590","combinePolicies":null,"branchCode":"5010100","Opportunity":{"licenseOwner":"一口价","mobile":"15123123123","email":"","giftInfo":"","extCustomerInfo":"","externalOrderNo":"","buyerNick":"","buyerId":"","format":"","plaintext":"","sign":"","bannerPath":"","webUserName":"","cookieid":"00004Kc5EcGLiFFxN3wY_oX_oDz:1874p7kjv","ip":"61.148.243.109","uuId":"06971d67-9fc6-4a13-9878-715bb97b940c","sourceType":"PC","opportunityId":"285416555","opportunityStatus":"2"},"preRules":{"PlanRelationShip":{"DamageLossExemptDeductibleSpecialClause":{"kindCode":"DamageLossExemptDeductibleSpecialClause","specialTermItemListDTO":[],"planNo":0,"serialVersionUID":2693467232497063704,"coreCode":"11024119","classProperty":"","relationplans":[],"Premium":0.0,"priceListDTO":[{"value":"null","isSelected":false,"price":"不投","flag":1,"serialVersionUID":5198404085651706126},{"value":"","isSelected":true,"price":"投保","flag":2,"serialVersionUID":5198404085651706126}],"canBeSingle":false,"kindName":"车损不计免赔","isParents":false,"sumInsured":0.0},"ThirdPartyLiabilityExemptDeductibleSpecialClause":{"kindCode":"ThirdPartyLiabilityExemptDeductibleSpecialClause","specialTermItemListDTO":[],"planNo":0,"serialVersionUID":2693467232497063704,"coreCode":"11024120","classProperty":"","relationplans":[],"Premium":0.0,"priceListDTO":[{"value":"null","isSelected":false,"price":"不投","flag":1,"serialVersionUID":5198404085651706126},{"value":"","isSelected":true,"price":"投保","flag":2,"serialVersionUID":5198404085651706126}],"canBeSingle":false,"kindName":"三责不计免赔","isParents":false,"sumInsured":0.0},"TheftCoverage":{"kindCode":"TheftCoverage","specialTermItemListDTO":[],"planNo":0,"serialVersionUID":2693467232497063704,"coreCode":"11024102","classProperty":"main_insurance daoqiang_bujimianpei","relationplans":[],"Premium":0.0,"priceListDTO":[{"value":"null","isSelected":true,"price":"不投","flag":1,"serialVersionUID":5198404085651706126},{"value":"66900","isSelected":false,"price":"投保","flag":3,"serialVersionUID":5198404085651706126}],"canBeSingle":false,"kindName":"全车盗抢险","isParents":false,"sumInsured":0.0},"InCarPassengerLiabilityCoverage":{"kindCode":"InCarPassengerLiabilityCoverage","specialTermItemListDTO":[],"planNo":0,"serialVersionUID":2693467232497063704,"coreCode":"11024106","classProperty":"main_insurance cheze_bujimianpei","relationplans":[],"Premium":0.0,"priceListDTO":[{"value":"null","isSelected":true,"price":"不投","flag":0,"serialVersionUID":5198404085651706126},{"value":"10000","isSelected":false,"price":"1万","flag":2,"serialVersionUID":5198404085651706126},{"value":"20000","isSelected":false,"price":"2万","flag":3,"serialVersionUID":5198404085651706126},{"value":"30000","isSelected":false,"price":"3万","flag":4,"serialVersionUID":5198404085651706126},{"value":"40000","isSelected":false,"price":"4万","flag":5,"serialVersionUID":5198404085651706126},{"value":"50000","isSelected":false,"price":"5万","flag":6,"serialVersionUID":5198404085651706126},{"value":"100000","isSelected":false,"price":"10万","flag":7,"serialVersionUID":5198404085651706126},{"value":"200000","isSelected":false,"price":"20万","flag":8,"serialVersionUID":5198404085651706126}],"canBeSingle":false,"kindName":"车上乘客责任险","isParents":false,"sumInsured":0.0},"AppointedRepairFactorySpecialClause":{"kindCode":"AppointedRepairFactorySpecialClause","specialTermItemListDTO":[],"planNo":0,"serialVersionUID":2693467232497063704,"coreCode":"11024126","classProperty":"","relationplans":[],"Premium":0.0,"priceListDTO":[{"value":"null","isSelected":true,"price":"不投","flag":1,"serialVersionUID":5198404085651706126},{"value":"","isSelected":false,"price":"投保","flag":2,"serialVersionUID":5198404085651706126}],"canBeSingle":false,"kindName":"指定修理厂险","isParents":false,"sumInsured":0.0},"CarBodyPaintExemptDeductibleSpecialClause":{"kindCode":"CarBodyPaintExemptDeductibleSpecialClause","specialTermItemListDTO":[],"planNo":0,"serialVersionUID":2693467232497063704,"coreCode":"11024420","classProperty":"","relationplans":[],"Premium":0.0,"priceListDTO":[{"value":"null","isSelected":false,"price":"不投","flag":1,"serialVersionUID":5198404085651706126},{"value":"","isSelected":false,"price":"投保","flag":2,"serialVersionUID":5198404085651706126}],"canBeSingle":false,"kindName":"划痕险不计免赔","isParents":false,"sumInsured":0.0},"TheftCoverageExemptDeductibleSpecialClause":{"kindCode":"TheftCoverageExemptDeductibleSpecialClause","specialTermItemListDTO":[],"planNo":0,"serialVersionUID":2693467232497063704,"coreCode":"11024122","classProperty":"","relationplans":[],"Premium":0.0,"priceListDTO":[{"value":"null","isSelected":true,"price":"不投","flag":1,"serialVersionUID":5198404085651706126},{"value":"","isSelected":false,"price":"投保","flag":2,"serialVersionUID":5198404085651706126}],"canBeSingle":false,"kindName":"盗抢不计免赔","isParents":false,"sumInsured":0.0},"CarBodyPaintCoverage":{"kindCode":"CarBodyPaintCoverage","specialTermItemListDTO":[],"planNo":0,"serialVersionUID":2693467232497063704,"coreCode":"11024110","classProperty":"chesun_fujiaxian_houzhi fujiaxian_bujimianpei","relationplans":[],"Premium":0.0,"priceListDTO":[{"value":"null","isSelected":true,"price":"不投","flag":1,"serialVersionUID":5198404085651706126},{"value":"2000","isSelected":false,"price":"2千","flag":2,"serialVersionUID":5198404085651706126},{"value":"5000","isSelected":false,"price":"5千","flag":3,"serialVersionUID":5198404085651706126},{"value":"10000","isSelected":false,"price":"1万","flag":4,"serialVersionUID":5198404085651706126},{"value":"20000","isSelected":false,"price":"2万","flag":5,"serialVersionUID":5198404085651706126}],"canBeSingle":false,"kindName":"车身划痕损失险","isParents":false,"sumInsured":0.0},"InCarPassengerLiabilityExemptDeductibleSpecialClause":{"kindCode":"InCarPassengerLiabilityExemptDeductibleSpecialClause","specialTermItemListDTO":[],"planNo":0,"serialVersionUID":2693467232497063704,"coreCode":"11024441","classProperty":"","relationplans":[],"Premium":0.0,"priceListDTO":[{"value":"null","isSelected":false,"price":"不投","flag":1,"serialVersionUID":5198404085651706126},{"value":"","isSelected":false,"price":"投保","flag":2,"serialVersionUID":5198404085651706126}],"canBeSingle":false,"kindName":"车上乘客责任险不计免赔","isParents":false,"sumInsured":0.0},"ThirdPartyLiabilityCoverage":{"kindCode":"ThirdPartyLiabilityCoverage","specialTermItemListDTO":[],"planNo":0,"serialVersionUID":2693467232497063704,"coreCode":"11024103","classProperty":"main_insurance sanze_bujimianpei","relationplans":[],"Premium":0.0,"priceListDTO":[{"value":"50000","isSelected":false,"price":"5万","flag":2,"serialVersionUID":5198404085651706126},{"value":"100000","isSelected":false,"price":"10万","flag":3,"serialVersionUID":5198404085651706126},{"value":"150000","isSelected":false,"price":"15万","flag":4,"serialVersionUID":5198404085651706126},{"value":"200000","isSelected":false,"price":"20万","flag":5,"serialVersionUID":5198404085651706126},{"value":"300000","isSelected":false,"price":"30万","flag":6,"serialVersionUID":5198404085651706126},{"value":"500000","isSelected":false,"price":"50万","flag":7,"serialVersionUID":5198404085651706126},{"value":"1000000","isSelected":true,"price":"100万","flag":8,"serialVersionUID":5198404085651706126},{"value":"1500000","isSelected":false,"price":"150万","flag":9,"serialVersionUID":5198404085651706126},{"value":"2000000","isSelected":false,"price":"200万","flag":10,"serialVersionUID":5198404085651706126}],"canBeSingle":false,"kindName":"第三者责任险","isParents":false,"sumInsured":0.0},"DamageLossCoverage":{"kindCode":"DamageLossCoverage","specialTermItemListDTO":[],"planNo":0,"serialVersionUID":2693467232497063704,"coreCode":"11024101","classProperty":"main_insurance chesun_bujimianpei zhiding_teyue_qianzhi","relationplans":[],"Premium":0.0,"priceListDTO":[{"value":"null","isSelected":false,"price":"不投","flag":1,"serialVersionUID":5198404085651706126},{"value":"66900","isSelected":true,"price":"投保","flag":2,"serialVersionUID":5198404085651706126}],"canBeSingle":false,"kindName":"机动车损失险","isParents":false,"sumInsured":0.0},"InCarDriverLiabilityCoverage":{"kindCode":"InCarDriverLiabilityCoverage","specialTermItemListDTO":[],"planNo":0,"serialVersionUID":2693467232497063704,"coreCode":"11024105","classProperty":"main_insurance cheze_bujimianpei","relationplans":[],"Premium":0.0,"priceListDTO":[{"value":"null","isSelected":true,"price":"不投","flag":1,"serialVersionUID":5198404085651706126},{"value":"10000","isSelected":false,"price":"1万","flag":3,"serialVersionUID":5198404085651706126},{"value":"20000","isSelected":false,"price":"2万","flag":4,"serialVersionUID":5198404085651706126},{"value":"30000","isSelected":false,"price":"3万","flag":5,"serialVersionUID":5198404085651706126},{"value":"40000","isSelected":false,"price":"4万","flag":6,"serialVersionUID":5198404085651706126},{"value":"50000","isSelected":false,"price":"5万","flag":7,"serialVersionUID":5198404085651706126},{"value":"100000","isSelected":false,"price":"10万","flag":8,"serialVersionUID":5198404085651706126},{"value":"200000","isSelected":false,"price":"20万","flag":9,"serialVersionUID":5198404085651706126}],"canBeSingle":false,"kindName":"车上司机责任险","isParents":false,"sumInsured":0.0},"SelfIgniteCoverage":{"kindCode":"SelfIgniteCoverage","specialTermItemListDTO":[],"planNo":0,"serialVersionUID":2693467232497063704,"coreCode":"11024107","classProperty":"chesun_fujiaxian_houzhi fujiaxian_bujimianpei","relationplans":[],"Premium":0.0,"priceListDTO":[{"value":"null","isSelected":true,"price":"不投","flag":0,"serialVersionUID":5198404085651706126},{"value":"66900","isSelected":false,"price":"投保","flag":1,"serialVersionUID":5198404085651706126}],"canBeSingle":false,"kindName":"自燃损失险","isParents":false,"sumInsured":0.0},"SelfIgniteExemptDeductibleSpecialClause":{"kindCode":"SelfIgniteExemptDeductibleSpecialClause","specialTermItemListDTO":[],"planNo":0,"serialVersionUID":2693467232497063704,"coreCode":"11024418","classProperty":"","relationplans":[],"Premium":0.0,"priceListDTO":[{"value":"null","isSelected":false,"price":"不投","flag":0,"serialVersionUID":5198404085651706126},{"value":"","isSelected":false,"price":"投保","flag":1,"serialVersionUID":5198404085651706126}],"canBeSingle":false,"kindName":"自燃损失险不计免赔率","isParents":false,"sumInsured":0.0},"InCarDriverLiabilityExemptDeductibleSpecialClause":{"kindCode":"InCarDriverLiabilityExemptDeductibleSpecialClause","specialTermItemListDTO":[],"planNo":0,"serialVersionUID":2693467232497063704,"coreCode":"11024440","classProperty":"","relationplans":[],"Premium":0.0,"priceListDTO":[{"value":"null","isSelected":false,"price":"不投","flag":1,"serialVersionUID":5198404085651706126},{"value":"","isSelected":false,"price":"投保","flag":2,"serialVersionUID":5198404085651706126}],"canBeSingle":false,"kindName":"车上司机责任险不计免赔","isParents":false,"sumInsured":0.0}},"allSecurity":{"PaddleDamageCoverage":{"kindCode":"PaddleDamageCoverage","specialTermItemListDTO":[],"planNo":0,"serialVersionUID":2693467232497063704,"coreCode":"11024111","classProperty":"chesun_fujiaxian_houzhi fujiaxian_bujimianpei","relationplans":[],"Premium":0.0,"priceListDTO":[{"value":"null","isSelected":true,"price":"不投","flag":1,"serialVersionUID":5198404085651706126}],"canBeSingle":false,"kindName":"涉水损失险","isParents":false,"sumInsured":0.0},"DamageLossExemptDeductibleSpecialClause":{"kindCode":"DamageLossExemptDeductibleSpecialClause","specialTermItemListDTO":[],"planNo":0,"serialVersionUID":2693467232497063704,"coreCode":"11024119","classProperty":"","relationplans":[],"Premium":0.0,"priceListDTO":[{"value":"","isSelected":true,"price":"投保","flag":1,"serialVersionUID":5198404085651706126}],"canBeSingle":false,"kindName":"车损不计免赔","isParents":false,"sumInsured":0.0},"ThirdPartyLiabilityExemptDeductibleSpecialClause":{"kindCode":"ThirdPartyLiabilityExemptDeductibleSpecialClause","specialTermItemListDTO":[],"planNo":0,"serialVersionUID":2693467232497063704,"coreCode":"11024120","classProperty":"","relationplans":[],"Premium":0.0,"priceListDTO":[{"value":"","isSelected":true,"price":"投保","flag":1,"serialVersionUID":5198404085651706126}],"canBeSingle":false,"kindName":"三责不计免赔","isParents":false,"sumInsured":0.0},"TheftCoverage":{"kindCode":"TheftCoverage","specialTermItemListDTO":[],"planNo":0,"serialVersionUID":2693467232497063704,"coreCode":"11024102","classProperty":"main_insurance daoqiang_bujimianpei","relationplans":[],"Premium":0.0,"priceListDTO":[{"value":"66900","isSelected":true,"price":"66900.0","flag":1,"serialVersionUID":5198404085651706126}],"canBeSingle":false,"kindName":"全车盗抢险","isParents":false,"sumInsured":0.0},"InCarPassengerLiabilityCoverage":{"kindCode":"InCarPassengerLiabilityCoverage","specialTermItemListDTO":[],"planNo":0,"serialVersionUID":2693467232497063704,"coreCode":"11024106","classProperty":"main_insurance cheze_bujimianpei huahen_bibao_qianzhi","relationplans":[],"Premium":0.0,"priceListDTO":[{"value":"10000","isSelected":true,"price":"1万","flag":1,"serialVersionUID":5198404085651706126}],"canBeSingle":false,"kindName":"车上乘客责任险","isParents":false,"sumInsured":0.0},"AppointedRepairFactorySpecialClause":{"kindCode":"AppointedRepairFactorySpecialClause","specialTermItemListDTO":[],"planNo":0,"serialVersionUID":2693467232497063704,"coreCode":"11024126","classProperty":"","relationplans":[],"Premium":0.0,"priceListDTO":[{"value":"null","isSelected":true,"price":"不投","flag":1,"serialVersionUID":5198404085651706126}],"canBeSingle":false,"kindName":"指定修理厂险","isParents":false,"sumInsured":0.0},"CarBodyPaintExemptDeductibleSpecialClause":{"kindCode":"CarBodyPaintExemptDeductibleSpecialClause","specialTermItemListDTO":[],"planNo":0,"serialVersionUID":2693467232497063704,"coreCode":"11024420","classProperty":"","relationplans":[],"Premium":0.0,"priceListDTO":[{"value":"","isSelected":true,"price":"投保","flag":2,"serialVersionUID":5198404085651706126}],"canBeSingle":false,"kindName":"划痕险不计免赔","isParents":false,"sumInsured":0.0},"TheftCoverageExemptDeductibleSpecialClause":{"kindCode":"TheftCoverageExemptDeductibleSpecialClause","specialTermItemListDTO":[],"planNo":0,"serialVersionUID":2693467232497063704,"coreCode":"11024122","classProperty":"","relationplans":[],"Premium":0.0,"priceListDTO":[{"value":"","isSelected":true,"price":"投保","flag":1,"serialVersionUID":5198404085651706126}],"canBeSingle":false,"kindName":"盗抢不计免赔","isParents":false,"sumInsured":0.0},"CarBodyPaintCoverage":{"kindCode":"CarBodyPaintCoverage","specialTermItemListDTO":[],"planNo":0,"serialVersionUID":2693467232497063704,"coreCode":"11024110","classProperty":"chesun_fujiaxian_houzhi fujiaxian_bujimianpei","relationplans":[],"Premium":0.0,"priceListDTO":[{"value":"2000","isSelected":true,"price":"2千","flag":1,"serialVersionUID":5198404085651706126}],"canBeSingle":false,"kindName":"车身划痕损失险","isParents":false,"sumInsured":0.0},"InCarPassengerLiabilityExemptDeductibleSpecialClause":{"kindCode":"InCarPassengerLiabilityExemptDeductibleSpecialClause","specialTermItemListDTO":[],"planNo":0,"serialVersionUID":2693467232497063704,"coreCode":"11024441","classProperty":"","relationplans":[],"Premium":0.0,"priceListDTO":[{"value":"","isSelected":true,"price":"投保","flag":2,"serialVersionUID":5198404085651706126}],"canBeSingle":false,"kindName":"车上乘客责任险不计免赔","isParents":false,"sumInsured":0.0},"ThirdPartyLiabilityCoverage":{"kindCode":"ThirdPartyLiabilityCoverage","specialTermItemListDTO":[],"planNo":0,"serialVersionUID":2693467232497063704,"coreCode":"11024103","classProperty":"main_insurance sanze_bujimianpei","relationplans":[],"Premium":0.0,"priceListDTO":[{"value":"1000000","isSelected":true,"price":"100万","flag":1,"serialVersionUID":5198404085651706126}],"canBeSingle":false,"kindName":"第三者责任险","isParents":false,"sumInsured":0.0},"GlassBrokenCoverage":{"kindCode":"GlassBrokenCoverage","specialTermItemListDTO":[],"planNo":0,"serialVersionUID":2693467232497063704,"coreCode":"11024108","classProperty":"chesun_fujiaxian_houzhi","relationplans":[],"Premium":0.0,"priceListDTO":[{"value":"0","isSelected":true,"price":"国产玻璃","flag":1,"serialVersionUID":5198404085651706126}],"canBeSingle":false,"kindName":"玻璃破碎险","isParents":false,"sumInsured":0.0},"DamageLossCoverage":{"kindCode":"DamageLossCoverage","specialTermItemListDTO":[],"planNo":0,"serialVersionUID":2693467232497063704,"coreCode":"11024101","classProperty":"main_insurance chesun_bujimianpei zhiding_teyue_qianzhi","relationplans":[],"Premium":0.0,"priceListDTO":[{"value":"66900","isSelected":true,"price":"66900.0","flag":1,"serialVersionUID":5198404085651706126}],"canBeSingle":false,"kindName":"机动车损失险","isParents":false,"sumInsured":0.0},"InCarDriverLiabilityExemptDeductibleSpecialClause":{"kindCode":"InCarDriverLiabilityExemptDeductibleSpecialClause","specialTermItemListDTO":[],"planNo":0,"serialVersionUID":2693467232497063704,"coreCode":"11024440","classProperty":"","relationplans":[],"Premium":0.0,"priceListDTO":[{"value":"","isSelected":true,"price":"投保","flag":2,"serialVersionUID":5198404085651706126}],"canBeSingle":false,"kindName":"车上司机责任险不计免赔","isParents":false,"sumInsured":0.0},"InCarDriverLiabilityCoverage":{"kindCode":"InCarDriverLiabilityCoverage","specialTermItemListDTO":[],"planNo":0,"serialVersionUID":2693467232497063704,"coreCode":"11024105","classProperty":"main_insurance cheze_bujimianpei","relationplans":[],"Premium":0.0,"priceListDTO":[{"value":"10000","isSelected":true,"price":"1万","flag":1,"serialVersionUID":5198404085651706126}],"canBeSingle":false,"kindName":"车上司机责任险","isParents":false,"sumInsured":0.0},"SelfIgniteCoverage":{"kindCode":"SelfIgniteCoverage","specialTermItemListDTO":[],"planNo":0,"serialVersionUID":2693467232497063704,"coreCode":"11024107","classProperty":"chesun_fujiaxian_houzhi fujiaxian_bujimianpei","relationplans":[],"Premium":0.0,"priceListDTO":[{"value":"66900","isSelected":true,"price":"66900.0","flag":1,"serialVersionUID":5198404085651706126}],"canBeSingle":false,"kindName":"自燃损失险","isParents":false,"sumInsured":0.0},"SelfIgniteExemptDeductibleSpecialClause":{"kindCode":"SelfIgniteExemptDeductibleSpecialClause","specialTermItemListDTO":[],"planNo":0,"serialVersionUID":2693467232497063704,"coreCode":"11024418","classProperty":"","relationplans":[],"Premium":0.0,"priceListDTO":[{"value":"","isSelected":false,"price":"投保","flag":1,"serialVersionUID":5198404085651706126}],"canBeSingle":false,"kindName":"自燃损失险不计免赔率","isParents":false,"sumInsured":0.0}},"specDriver":1.0,"showDriveAreaFlag":"0","plan_desc":"含车损险及不计免赔、三责险及不计免赔，属于车险的基本配置，保证最基本的保障，价格实惠。||含车损险及不计免赔、三责险及不计免赔、车上人员责任险及不计免赔，车身油漆单独损伤险，保障覆盖全面，保额适中，性价比高。||根据您自身的情况可以自由定制一套满意的保障组合，险种选择时请记得参考下险种推荐理由！||我们依据您去年投保的险种套餐重新计算了保费价格，一键即保，方便快捷！||","purchasePrice":66900.0,"productType":"1","basicSecurity":{"PaddleDamageCoverage":{"kindCode":"PaddleDamageCoverage","specialTermItemListDTO":[],"planNo":0,"serialVersionUID":2693467232497063704,"coreCode":"11024111","classProperty":"chesun_fujiaxian_houzhi fujiaxian_bujimianpei","relationplans":[],"Premium":0.0,"priceListDTO":[{"value":"null","isSelected":true,"price":"不投","flag":1,"serialVersionUID":5198404085651706126}],"canBeSingle":false,"kindName":"涉水损失险","isParents":false,"sumInsured":0.0},"DamageLossExemptDeductibleSpecialClause":{"kindCode":"DamageLossExemptDeductibleSpecialClause","specialTermItemListDTO":[],"planNo":0,"serialVersionUID":2693467232497063704,"coreCode":"11024119","classProperty":"","relationplans":[],"Premium":0.0,"priceListDTO":[{"value":"","isSelected":true,"price":"投保","flag":1,"serialVersionUID":5198404085651706126}],"canBeSingle":false,"kindName":"车损不计免赔","isParents":false,"sumInsured":0.0},"ThirdPartyLiabilityExemptDeductibleSpecialClause":{"kindCode":"ThirdPartyLiabilityExemptDeductibleSpecialClause","specialTermItemListDTO":[],"planNo":0,"serialVersionUID":2693467232497063704,"coreCode":"11024120","classProperty":"","relationplans":[],"Premium":0.0,"priceListDTO":[{"value":"","isSelected":true,"price":"投保","flag":1,"serialVersionUID":5198404085651706126}],"canBeSingle":false,"kindName":"三责不计免赔","isParents":false,"sumInsured":0.0},"TheftCoverage":{"kindCode":"TheftCoverage","specialTermItemListDTO":[],"planNo":0,"serialVersionUID":2693467232497063704,"coreCode":"11024102","classProperty":"main_insurance daoqiang_bujimianpei jiejiari_teyue_qianzhi","relationplans":[],"Premium":0.0,"priceListDTO":[{"value":"null","isSelected":true,"price":"不投","flag":1,"serialVersionUID":5198404085651706126}],"canBeSingle":false,"kindName":"全车盗抢险","isParents":false,"sumInsured":0.0},"InCarPassengerLiabilityCoverage":{"kindCode":"InCarPassengerLiabilityCoverage","specialTermItemListDTO":[],"planNo":0,"serialVersionUID":2693467232497063704,"coreCode":"11024106","classProperty":"main_insurance cheze_bujimianpei jiejiari_teyue_qianzhi","relationplans":[],"Premium":0.0,"priceListDTO":[{"value":"null","isSelected":true,"price":"不投","flag":1,"serialVersionUID":5198404085651706126}],"canBeSingle":false,"kindName":"车上乘客责任险","isParents":false,"sumInsured":0.0},"AppointedRepairFactorySpecialClause":{"kindCode":"AppointedRepairFactorySpecialClause","specialTermItemListDTO":[],"planNo":0,"serialVersionUID":2693467232497063704,"coreCode":"11024126","classProperty":"","relationplans":[],"Premium":0.0,"priceListDTO":[{"value":"null","isSelected":true,"price":"不投","flag":1,"serialVersionUID":5198404085651706126}],"canBeSingle":false,"kindName":"指定修理厂险","isParents":false,"sumInsured":0.0},"InCarPersonLiabilityExemptDeductibleSpecialClause":{"kindCode":"InCarPersonLiabilityExemptDeductibleSpecialClause","specialTermItemListDTO":[],"planNo":0,"serialVersionUID":2693467232497063704,"coreCode":"11024121","classProperty":"","relationplans":[],"Premium":0.0,"priceListDTO":[{"value":"null","isSelected":true,"price":"不投","flag":1,"serialVersionUID":5198404085651706126}],"canBeSingle":false,"kindName":"车上人员责任险不计免赔","isParents":false,"sumInsured":0.0},"TheftCoverageExemptDeductibleSpecialClause":{"kindCode":"TheftCoverageExemptDeductibleSpecialClause","specialTermItemListDTO":[],"planNo":0,"serialVersionUID":2693467232497063704,"coreCode":"11024122","classProperty":"","relationplans":[],"Premium":0.0,"priceListDTO":[{"value":"null","isSelected":true,"price":"不投","flag":1,"serialVersionUID":5198404085651706126}],"canBeSingle":false,"kindName":"盗抢不计免赔","isParents":false,"sumInsured":0.0},"CarBodyPaintCoverage":{"kindCode":"CarBodyPaintCoverage","specialTermItemListDTO":[],"planNo":0,"serialVersionUID":2693467232497063704,"coreCode":"11024110","classProperty":"chesun_fujiaxian_houzhi fujiaxian_bujimianpei","relationplans":[],"Premium":0.0,"priceListDTO":[{"value":"null","isSelected":true,"price":"不投","flag":1,"serialVersionUID":5198404085651706126}],"canBeSingle":false,"kindName":"车身划痕损失险","isParents":false,"sumInsured":0.0},"ThirdPartyLiabilityCoverage":{"kindCode":"ThirdPartyLiabilityCoverage","specialTermItemListDTO":[],"planNo":0,"serialVersionUID":2693467232497063704,"coreCode":"11024103","classProperty":"main_insurance sanze_bujimianpei","relationplans":[],"Premium":0.0,"priceListDTO":[{"value":"1000000","isSelected":true,"price":"100万","flag":1,"serialVersionUID":5198404085651706126}],"canBeSingle":false,"kindName":"第三者责任险","isParents":false,"sumInsured":0.0},"GlassBrokenCoverage":{"kindCode":"GlassBrokenCoverage","specialTermItemListDTO":[],"planNo":0,"serialVersionUID":2693467232497063704,"coreCode":"11024108","classProperty":"chesun_fujiaxian_houzhi","relationplans":[],"Premium":0.0,"priceListDTO":[{"value":"null","isSelected":true,"price":"不投","flag":1,"serialVersionUID":5198404085651706126}],"canBeSingle":false,"kindName":"玻璃破碎险","isParents":false,"sumInsured":0.0},"DamageLossCoverage":{"kindCode":"DamageLossCoverage","specialTermItemListDTO":[],"planNo":0,"serialVersionUID":2693467232497063704,"coreCode":"11024101","classProperty":"main_insurance chesun_bujimianpei zhiding_teyue_qianzhi","relationplans":[],"Premium":0.0,"priceListDTO":[{"value":"66900","isSelected":true,"price":"66900.0","flag":1,"serialVersionUID":5198404085651706126}],"canBeSingle":false,"kindName":"机动车损失险","isParents":false,"sumInsured":0.0},"RiderExemptDeductibleSpecialClause":{"kindCode":"RiderExemptDeductibleSpecialClause","specialTermItemListDTO":[],"planNo":0,"serialVersionUID":2693467232497063704,"coreCode":"11024123","classProperty":"","relationplans":[],"Premium":0.0,"priceListDTO":[{"value":"null","isSelected":true,"price":"不投","flag":1,"serialVersionUID":5198404085651706126}],"canBeSingle":false,"kindName":"附加险不计免赔","isParents":false,"sumInsured":0.0},"InCarDriverLiabilityCoverage":{"kindCode":"InCarDriverLiabilityCoverage","specialTermItemListDTO":[],"planNo":0,"serialVersionUID":2693467232497063704,"coreCode":"11024105","classProperty":"main_insurance cheze_bujimianpei jiejiari_teyue_qianzhi","relationplans":[],"Premium":0.0,"priceListDTO":[{"value":"null","isSelected":true,"price":"不投","flag":1,"serialVersionUID":5198404085651706126}],"canBeSingle":false,"kindName":"车上司机责任险","isParents":false,"sumInsured":0.0},"SelfIgniteCoverage":{"kindCode":"SelfIgniteCoverage","specialTermItemListDTO":[],"planNo":0,"serialVersionUID":2693467232497063704,"coreCode":"11024107","classProperty":"chesun_fujiaxian_houzhi fujiaxian_bujimianpei","relationplans":[],"Premium":0.0,"priceListDTO":[{"value":"null","isSelected":true,"price":"不投","flag":0,"serialVersionUID":5198404085651706126}],"canBeSingle":false,"kindName":"自燃损失险","isParents":false,"sumInsured":0.0}},"cusotmerLoyalty":"00","showDriverInfo":"0","currentValue":66900.0,"appointedRepairFactoryPremiumRate":0.1,"compensateDaysInfo":[""]},"DriverInfo":null,"planCode":"","allCoverageInfo":{"DamageLossExemptDeductibleSpecialClause":{"coverageAmount":"","coveragePrice":"投保","coverageName":"车损不计免赔","coverageCode":"DamageLossExemptDeductibleSpecialClause","coreCode":"11024119"},"ThirdPartyLiabilityExemptDeductibleSpecialClause":{"coverageAmount":"","coveragePrice":"投保","coverageName":"三责不计免赔","coverageCode":"ThirdPartyLiabilityExemptDeductibleSpecialClause","coreCode":"11024120"},"TheftCoverage":{"coverageAmount":"66900","coveragePrice":"66900.0","coverageName":"全车盗抢险","coverageCode":"TheftCoverage","coreCode":"11024102"},"InCarPassengerLiabilityCoverage":{"coverageAmount":"10000","coveragePrice":"1万","coverageName":"车上乘客责任险","coverageCode":"InCarPassengerLiabilityCoverage","coreCode":"11024106"},"CarBodyPaintExemptDeductibleSpecialClause":{"coverageAmount":"","coveragePrice":"投保","coverageName":"划痕险不计免赔","coverageCode":"CarBodyPaintExemptDeductibleSpecialClause","coreCode":"11024420"},"TheftCoverageExemptDeductibleSpecialClause":{"coverageAmount":"","coveragePrice":"投保","coverageName":"盗抢不计免赔","coverageCode":"TheftCoverageExemptDeductibleSpecialClause","coreCode":"11024122"},"CarBodyPaintCoverage":{"coverageAmount":"2000","coveragePrice":"2千","coverageName":"车身划痕损失险","coverageCode":"CarBodyPaintCoverage","coreCode":"11024110"},"InCarPassengerLiabilityExemptDeductibleSpecialClause":{"coverageAmount":"","coveragePrice":"投保","coverageName":"车上乘客责任险不计免赔","coverageCode":"InCarPassengerLiabilityExemptDeductibleSpecialClause","coreCode":"11024441"},"ThirdPartyLiabilityCoverage":{"coverageAmount":"1000000","coveragePrice":"100万","coverageName":"第三者责任险","coverageCode":"ThirdPartyLiabilityCoverage","coreCode":"11024103"},"GlassBrokenCoverage":{"coverageAmount":"0","coveragePrice":"国产玻璃","coverageName":"玻璃破碎险","coverageCode":"GlassBrokenCoverage","coreCode":"11024108"},"DamageLossCoverage":{"coverageAmount":"66900","coveragePrice":"66900.0","coverageName":"机动车损失险","coverageCode":"DamageLossCoverage","coreCode":"11024101"},"SelfIgniteExemptDeductibleSpecialClause":{"coverageAmount":"","coveragePrice":"投保","coverageName":"自燃损失险不计免赔率","coverageCode":"SelfIgniteExemptDeductibleSpecialClause","coreCode":"11024418"},"SelfIgniteCoverage":{"coverageAmount":"66900","coveragePrice":"66900.0","coverageName":"自燃损失险","coverageCode":"SelfIgniteCoverage","coreCode":"11024107"},"InCarDriverLiabilityExemptDeductibleSpecialClause":{"coverageAmount":"","coveragePrice":"投保","coverageName":"车上司机责任险不计免赔","coverageCode":"InCarDriverLiabilityExemptDeductibleSpecialClause","coreCode":"11024440"},"InCarDriverLiabilityCoverage":{"coverageAmount":"10000","coveragePrice":"1万","coverageName":"车上司机责任险","coverageCode":"InCarDriverLiabilityCoverage","coreCode":"11024105"}},"groupSaleInfos":{"E32":{"createDate":1371457496000,"updateDate":1371621621000,"createUserId":null,"updateUserId":1,"typeId":"1","kind":"E32","name":"\"乐驾人生\"驾驶员及随车人员意外险（亲情版）","description":"乐驾人生","specId":null,"processDefinitionId":null,"startDate":null,"endDate":null,"status":"Publish","statusReason":null,"statusDate":null,"version":1,"spec":null,"productId":811133,"productCode":"LJRS_JAJ","coreCode":"23E3980000000002","category":"1","productType":"Basic","products":null,"productRlships":null,"insuredPrice":null,"originalRate":null,"productOrder":null,"url":"sales/Calculation/ljrs.vm","responsibilityType":null,"onlineSaleRate":null,"memberRate":null,"discountType":null,"isDefault":null,"businessCode":null,"groupPolicy":"1","showFlag":null,"showInsuredPrice":null,"apiCode":null,"id":811133,"entityId":811133},"E04":{"createDate":1366772920000,"updateDate":1371560117000,"createUserId":null,"updateUserId":null,"typeId":"1","kind":"E04","name":"“乐享人生”交通意外附加家庭财产保险","description":null,"specId":null,"processDefinitionId":null,"startDate":null,"endDate":null,"status":"Publish","statusReason":null,"statusDate":null,"version":1,"spec":null,"productId":582658,"productCode":"LXRS_JTK","coreCode":"23C3980000000008","category":"1","productType":"Basic","products":null,"productRlships":null,"insuredPrice":null,"originalRate":null,"productOrder":null,"url":null,"responsibilityType":null,"onlineSaleRate":null,"memberRate":null,"discountType":null,"isDefault":null,"businessCode":null,"groupPolicy":null,"showFlag":null,"showInsuredPrice":null,"apiCode":null,"id":582658,"entityId":582658},"E38":{"createDate":1363935909000,"updateDate":1366785193000,"createUserId":null,"updateUserId":null,"typeId":"1","kind":"E38","name":"“驾意人生”驾驶员人身意外伤害保险","description":"驾意人生","specId":null,"processDefinitionId":null,"startDate":null,"endDate":null,"status":"Publish","statusReason":null,"statusDate":null,"version":1,"spec":null,"productId":163696,"productCode":"2308990000000000","coreCode":"23E9980000000000","category":"1","productType":"Basic","products":null,"productRlships":null,"insuredPrice":null,"originalRate":null,"productOrder":null,"url":"sales/Calculation/jyrs.vm","responsibilityType":null,"onlineSaleRate":null,"memberRate":null,"discountType":null,"isDefault":null,"businessCode":null,"groupPolicy":null,"showFlag":null,"showInsuredPrice":null,"apiCode":null,"id":163696,"entityId":163696},"210050005":{"createDate":1363758367000,"updateDate":null,"createUserId":null,"updateUserId":null,"typeId":"2","kind":"210050005","name":"畅行一年","description":"畅行一年","specId":null,"processDefinitionId":null,"startDate":null,"endDate":null,"status":"Publish","statusReason":null,"statusDate":null,"version":1,"spec":null,"productId":240613,"productCode":"CXYN00","coreCode":"CXYN00","category":"4","productType":"Basic","products":null,"productRlships":null,"insuredPrice":null,"originalRate":null,"productOrder":null,"url":"sales/Calculation/cxyn.vm","responsibilityType":null,"onlineSaleRate":null,"memberRate":null,"discountType":null,"isDefault":null,"businessCode":null,"groupPolicy":null,"showFlag":null,"showInsuredPrice":null,"apiCode":null,"id":240613,"entityId":240613}}}
        console.log("================第67次返回================");
        console.log(body);

    })
}

function next68(){
    var url="http://www.ecpic.com.cn/cpiccar/salesNew/quotation/calcPremium";
    var headers={"Origin":"http://www.ecpic.com.cn","Host":"www.ecpic.com.cn","Accept-Language":"zh-CN,zh;q=0.8","User-Agent":"Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.87 Safari/537.36","Content-Type":"application/json; charset=UTF-8","Accept":"application/json, text/javascript, */*; q=0.01","X-Requested-With":"XMLHttpRequest","Connection":"keep-alive"};
    var json={};
    request.post({url:url,headers:headers,form:json},function(err,httpResponse,body){
        //预期返回值={"question":"陆加0=?  请选择：A  4 ;  B  5 ;  C  6 ;  D  7","error":"question"}
        console.log("================第68次返回================");
        console.log(body);

    })
}

