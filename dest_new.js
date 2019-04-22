//var func = require("../func");
var request = require("request");
var cheerio = require("cheerio");
var j = request.jar();
request = request.defaults({jar:j});
var moment = require("moment");


var start_day = moment().add({day:1}).format('YYYY-MM-DD');
var end_day = moment().add({'year':1,day:1}).format('YYYY-MM-DD');


var select = '[{"amount":"投保","cr":"1","kindName":"车损险","is_select":true},{"amount":"100万","cr":"1","kindName":"三者险","is_select":true},{"amount":"投保","cr":"1","kindName":"盗抢险","is_select":true},{"amount":"投保","cr":"0","kindName":"自燃险","is_select":true},{"amount":"国产","cr":"0","kindName":"玻璃险","is_select":true},{"amount":"投保","cr":"1","kindName":"机损险","is_select":true},{"amount":"2万","cr":"1","kindName":"车上司","is_select":true},{"amount":"2万","cr":"1","kindName":"车上乘","is_select":true},{"amount":"1万","cr":"1","kindName":"划痕险","is_select":true}]';
//var select = '[{"amount":"投保","cr":"1","kindName":"车损险","is_select":true},{"amount":"50万","cr":"1","kindName":"三者险","is_select":true},{"amount":"投保","cr":"1","kindName":"盗抢险","is_select":true},{"amount":"投保","cr":"1","kindName":"自燃险","is_select":true}]'
//var select = '[{"amount":"投保","cr":"1","kindName":"车损险","is_select":true},{"amount":"50万","cr":"1","kindName":"三者险","is_select":true}]'


name = "岳瑞敏";
engine ="155295";
vin = "LFV3A14F993050141";
licenseno = "京PEV076";
mobile = '18612269999';
id_card = '433124197501065293';
select = select.replace(/万\/座共4座/g,'0000.00');
select = select.replace(/万/g,'0000.00');
select = select.replace(/元/g,'');
select = JSON.parse(select);


next0();
var id = '';
var car_price = 0;
var car_now_price = 0;
var is_huahen = false;
function next0(){
    var url="http://chexian.sinosig.com/Net/netCarInfoControl!saveBaseInfo.action";
    var headers={"Pragma":"no-cache","Origin":"http://chexian.sinosig.com","Host":"chexian.sinosig.com","Accept-Language":"zh-CN,zh;q=0.8","User-Agent":"Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/48.0.2564.116 Safari/537.36","Content-Type":"application/x-www-form-urlencoded; charset=UTF-8","Accept":"application/json, text/javascript, */*; q=0.01","Cache-Control":"no-cache","X-Requested-With":"XMLHttpRequest","Connection":"keep-alive","DNT":"1"};
    var json={"paraMap.queryCon":"北京市","paraMap.licence":licenseno,"paraMap.contactor":name,"paraMap.mobileNum":mobile,"paraMap.idno":id_card,"paraMap.idStartDate":"","paraMap.idEndDate":"","paraMap.cqLongTime":"on","paraMap.id":"","paraMap.antiMoneyProv":"28,12","paraMap.address":"","paraMap.spsource":"NET","paraMap.orgID":"01682900","paraMap.cno":"","paraMap.unid":"","paraMap.productType":"","paraMap.agentCode":"W00110002"};
    request.post({url:url,headers:headers,form:json},function(err,httpResponse,body){
        console.log(httpResponse.statusCode );
      /*  if (!error && response.statusCode == 200) {
            var info = JSON.parse(body);
            console.log(info.stargazers_count + " Stars");
            console.log(info.forks_count + " Forks");
        }*/
        //预期返回值={"paraMap":{"suc":"1","isRegist":"1","purgeCode":"","id":"29201957","seat":"","exhaust":"","integralShow":"1","enroll":""}}
        console.log("--------------------第0次返回-------------------------");
        console.log(body);
        body = JSON.parse(body);
        id =body.paraMap.id;
        console.log(id);
        next1();
    })
}

function next1(){
    var url="http://chexian.sinosig.com/Net/vehicleStandard.action";
    var headers={"Pragma":"no-cache","Origin":"http://chexian.sinosig.com","Host":"chexian.sinosig.com","Accept-Language":"zh-CN,zh;q=0.8","User-Agent":"Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/48.0.2564.116 Safari/537.36","Content-Type":"application/x-www-form-urlencoded; charset=UTF-8","Accept":"application/json, text/javascript, */*; q=0.01","Cache-Control":"no-cache","X-Requested-With":"XMLHttpRequest","Connection":"keep-alive","DNT":"1"};
    var json={"q":"","limit":"0","timestamp":"1456883041421","queryVehicle":"","frameNo":vin,"id":id,"frameNoFlag":"true"};
    request.post({url:url,headers:headers,form:json},function(err,httpResponse,body){
        //预期返回值={"contName":null,"content":[{"standardName":"","msg":"请选择，您的车辆品牌","vehicleFgwCode":""},{"standardName":"奥迪FV7201TFG轿车","msg":"","vehicleFgwCode":"FV7201TFG"},{"standardName":"","msg":"都不符合？请手动输入品牌型号","vehicleFgwCode":""}],"limit":"0","q":"","queryVehicle":"","timestamp":"1456883041421"}
        console.log("--------------------第1次返回-------------------------");console.log(httpResponse.statusCode );
        console.log(body);
        next2()
    })
}

function next2(){
    var url="http://chexian.sinosig.com/Net/vehicleModel.action?vehicleFgwCode=FV7201TFG&isGetValue=1";
    var headers={"Pragma":"no-cache","Origin":"http://chexian.sinosig.com","Host":"chexian.sinosig.com","Accept-Language":"zh-CN,zh;q=0.8","User-Agent":"Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/48.0.2564.116 Safari/537.36","Accept":"*/*","Cache-Control":"no-cache","X-Requested-With":"XMLHttpRequest","Connection":"keep-alive","DNT":"1"};
    var json={};
    request.post({url:url,headers:headers,form:json},function(err,httpResponse,body){
        //预期返回值={"autoId":null,"contName":null,"content":[{"familyName":"一汽奥迪A6","engineDesc":"2.0T","gearboxName":"手动档","parentVehName":"2009款 基本型","seat":"5","price":"318200","taxprice":"345400","displacement":"1.984","rbCode":"ADAAFD0120","standardName":"奥迪FV7201TFG轿车","familyId":"402880ef0ca9c2b6010cc91c4fc30119","brandId":"402880861203d16701122d764d7a0085","gearboxType":"0","groupId":"4028808826173b04012620034b92043f","parentVehId":"901616aec057ffc8000000004e38b572","importFlag":"1","brandName":"一汽奥迪","familyAbbr":"奥迪A6","vehicleFgwCode":"FV7201TFG"}],"limit":null,"parentId":null,"q":null,"timestamp":null,"vehicleFgwCode":"FV7201TFG","vehicleId":null}
        console.log("--------------------第2次返回-------------------------");console.log(httpResponse.statusCode );
        console.log(body);
        next3();
    })
}

function next3(){
    var url="http://chexian.sinosig.com/Net/netCarInfoControl!stepZeroOne.action";
    var headers={"Pragma":"no-cache","Origin":"http://chexian.sinosig.com","Host":"chexian.sinosig.com","Accept-Language":"zh-CN,zh;q=0.8","User-Agent":"Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/48.0.2564.116 Safari/537.36","Content-Type":"application/x-www-form-urlencoded; charset=UTF-8","Accept":"application/json, text/javascript, */*; q=0.01","Cache-Control":"no-cache","X-Requested-With":"XMLHttpRequest","Connection":"keep-alive","DNT":"1"};
    var json={"paraMap.backFlag":"","paraMap.id":id,"paraMap.purgeCode":"WB-OB-NR-FQ","paraMap.agentCode":"W00110002","paraMap.licence":licenseno,"paraMap.ownerName":name,"paraMap.modelName":"奥迪FV7201TFG轿车","paraMap.vehicleFgwCode":"FV7201TFG","paraMap.exhaust":"1.984","paraMap.seat":"5","paraMap.queryModel":"一汽奥迪A6+2.0T+手动档+2009款+基本型+5座+市场新车参考价318200","paraMap.modelCode":"ADAAFD0120","paraMap.engineNo":engine,"paraMap.engineNo_":"","paraMap.frameNo":vin,"paraMap.frameNo_":"","paraMap.carCertificateType":"","paraMap.carCertificateNo":"","paraMap.carCertificateDate":"","paraMap.enroll":"2012-12-02","paraMap.idNo":id_card,"paraMap.transfer":"0","paraMap.transferDate":"","paraMap.isNew":"0","paraMap.isLoanCar":"0","paraMap.firstBenefitPeople":"","paraMap.orgID":"01682900"};
    request.post({url:url,headers:headers,form:json},function(err,httpResponse,body){
        //预期返回值={"paraMap":{"suc":"1","isRegist":"1","message":"成功!准备跳转到Step02.","integralShow":"1"}}
        console.log("--------------------第3次返回-------------------------");console.log(httpResponse.statusCode );
        console.log(body);
        next5()
    })
}


function next5(){
    var url="http://chexian.sinosig.com/Net/netPremiumControl!premiumCI.action";
    var headers={"Pragma":"no-cache","Origin":"http://chexian.sinosig.com","Host":"chexian.sinosig.com","Accept-Language":"zh-CN,zh;q=0.8","User-Agent":"Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/48.0.2564.116 Safari/537.36","Content-Type":"application/x-www-form-urlencoded; charset=UTF-8","Accept":"application/json, text/javascript, */*; q=0.01","Cache-Control":"no-cache","X-Requested-With":"XMLHttpRequest","Connection":"keep-alive","DNT":"1"};
    var json={"paraMap.id":id,"paraMap.insuAppTra":start_day,"paraMap.calcFlag":"1","paraMap.billOpenDate":"","paraMap.hasKind":"0","paraMap.renewalFlag":"","paraMap.initCalcTraFlag":"1"};
    request.post({url:url,headers:headers,form:json},function(err,httpResponse,body){
        //预期返回值={"kindList":[],"paraMap":{"agreedAreaFlag":"0","insuAppTra":"","taxFlag":"1","planType":"","sumPremium_tra":"0.00","upperPrice":"0.00","agreedDriverFlag":"0","jyPrice":"0.00","isRegist":"1","maxDriverNum":"2","sumPremium_com":"0.0","repeat_insu_tra":"抱歉，您的车辆交强险未到投保期，还不能进行投保；请您核对后再来投保。","suc":"1","retPrice":"0.00","id":"29201957","insuApp":"","isNewTra":"0","carPrice":"0.00","lowerPrice":"0.00","repeat_insu_com":"","billOpenDate":"","sumPremium_tax":"0.00","lowerPriceG":"0.00","message":"","integralShow":"1","traFlag":"1"}}
        console.log("--------------------第5次返回-------------------------");console.log(httpResponse.statusCode );
        console.log(body);
        next7()
    })
}

function next7(){
    var url="http://chexian.sinosig.com/Net/netPremiumControl!premiumSaveBIDate.action";
    var headers={"Pragma":"no-cache","Origin":"http://chexian.sinosig.com","Host":"chexian.sinosig.com","Accept-Language":"zh-CN,zh;q=0.8","User-Agent":"Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/48.0.2564.116 Safari/537.36","Content-Type":"application/x-www-form-urlencoded; charset=UTF-8","Accept":"application/json, text/javascript, */*; q=0.01","Cache-Control":"no-cache","X-Requested-With":"XMLHttpRequest","Connection":"keep-alive","DNT":"1"};
    var json={"paraMap.id":id,"paraMap.insuApp":start_day,"paraMap.calcFlag":"1","paraMap.ifTra":"0","paraMap.renewalFlag":""};
    request.post({url:url,headers:headers,form:json},function(err,httpResponse,body){
        //预期返回值={"kindList":[],"paraMap":{"agreedAreaFlag":"0","suc":"1","retPrice":"338000.00","insuAppTra":"","taxFlag":"1","id":"29201957","insuApp":"2016-03-03","planType":"","isNewTra":"","carPrice":"0.00","sumPremium_tra":"0.00","lowerPrice":"0.00","repeat_insu_com":"","upperPrice":"0.00","agreedDriverFlag":"0","jyPrice":"366900","isRegist":"1","maxDriverNum":"2","billOpenDate":"","sumPremium_com":"0.00","sumPremium_tax":"0.00","lowerPriceG":"0.00","message":"","integralShow":"1","traFlag":"1","repeat_insu_tra":""}}
        console.log("--------------------第7次返回-------------------------");console.log(httpResponse.statusCode );
        console.log(body);
        next8()
    })
}



function next8(){
    var url="http://chexian.sinosig.com/Net/netPremiumControl!premiumBI.action";
    var headers={"Pragma":"no-cache","Origin":"http://chexian.sinosig.com","Host":"chexian.sinosig.com","Accept-Language":"zh-CN,zh;q=0.8","User-Agent":"Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/48.0.2564.116 Safari/537.36","Content-Type":"application/x-www-form-urlencoded; charset=UTF-8","Accept":"application/json, text/javascript, */*; q=0.01","Cache-Control":"no-cache","X-Requested-With":"XMLHttpRequest","Connection":"keep-alive","DNT":"1"};
    var json={"paraMap.id":id,"paraMap.insuApp":start_day,"paraMap.ifTra":"0","paraMap.planType":"-1","paraMap.isCalcObjectiveStore":"0","paraMap.renewalFlag":"","blackBgcount":"1","paraMap.premiumRepeatedly":"1"};
    request.post({url:url,headers:headers,form:json},function(err,httpResponse,body){
        //预期返回值={"kindList":[{"adjustRate":"1.0","allowFlag":"1","amount":"338000.00","amountStr":null,"basePremium":"445.00","benchMarkPremium":"4007.52","choosed":"0","disCount":"0.6885","excludingPremium":"413.88","fk_ins_id":null,"kindActualCost":null,"kindCode":"A","kindFlag":" 1  1 ","kindName":"车辆损失险","kindRegulatoryPremium":null,"mapValue":{"0.00":"不投保","338000.00":"足额投保"},"modeCode":"0","newKindName":null,"pk_id":null,"premium":"2759.18","quantity":"0","rate":"1.054","remark":"","riskCode":"0509","riskPremium":null,"shortRate":"100","shortRateFlag":"3","shouldPremium":"1","unitAmount":"0.00","value":"0.0","wholeBenchPre":null,"wholeDiscount":null,"wholePremium":null},{"adjustRate":"1.0","allowFlag":"1","amount":"300000.00","amountStr":null,"basePremium":"1043.00","benchMarkPremium":"1043.00","choosed":"0","disCount":"0.6885","excludingPremium":"107.72","fk_ins_id":null,"kindActualCost":null,"kindCode":"B","kindFlag":" 1  1 ","kindName":"商业第三者责任险","kindRegulatoryPremium":null,"mapValue":{"0.00":"不投保","50000.00":"5万","100000.00":"10万","150000.00":"15万","200000.00":"20万","300000.00":"30万","500000.00":"50万","1000000.00":"100万","1500000.00":"150万","2000000.00":"200万","3000000.00":"300万","5000000.00":"500万"},"modeCode":"0","newKindName":null,"pk_id":null,"premium":"718.11","quantity":"0","rate":"0.0","remark":"","riskCode":"0509","riskPremium":null,"shortRate":"100","shortRateFlag":"3","shouldPremium":"1","unitAmount":"0.00","value":"0.0","wholeBenchPre":null,"wholeDiscount":null,"wholePremium":null},{"adjustRate":"1.0","allowFlag":"1","amount":"10000.00","amountStr":null,"basePremium":"0.00","benchMarkPremium":"34.85","choosed":"0","disCount":"0.6885","excludingPremium":"3.60","fk_ins_id":null,"kindActualCost":null,"kindCode":"D3","kindFlag":" 1  1 ","kindName":"司机座位责任险","kindRegulatoryPremium":null,"mapValue":{"0.00":"不投保","10000.00":"1万\/座","20000.00":"2万\/座","30000.00":"3万\/座","40000.00":"4万\/座","50000.00":"5万\/座","100000.00":"10万\/座"},"modeCode":"0","newKindName":null,"pk_id":null,"premium":"23.99","quantity":"1","rate":"0.3485","remark":"","riskCode":"0509","riskPremium":null,"shortRate":"100","shortRateFlag":"3","shouldPremium":"1","unitAmount":"10000.00","value":"0.0","wholeBenchPre":null,"wholeDiscount":null,"wholePremium":null},{"adjustRate":"1.0","allowFlag":"1","amount":"40000.00","amountStr":null,"basePremium":"0.00","benchMarkPremium":"88.40","choosed":"0","disCount":"0.6885","excludingPremium":"9.12","fk_ins_id":null,"kindActualCost":null,"kindCode":"D4","kindFlag":" 1  1 ","kindName":"乘客座位责任险","kindRegulatoryPremium":null,"mapValue":{"0.00":"不投保","10000.00":"1万\/座","20000.00":"2万\/座","30000.00":"3万\/座","40000.00":"4万\/座","50000.00":"5万\/座","100000.00":"10万\/座"},"modeCode":"0","newKindName":null,"pk_id":null,"premium":"60.86","quantity":"4","rate":"0.221","remark":"","riskCode":"0509","riskPremium":null,"shortRate":"100","shortRateFlag":"3","shouldPremium":"1","unitAmount":"10000.00","value":"0.0","wholeBenchPre":null,"wholeDiscount":null,"wholePremium":null},{"adjustRate":"1.0","allowFlag":"1","amount":"179816.00","amountStr":null,"basePremium":"102.00","benchMarkPremium":"912.07","choosed":"0","disCount":"0.6885","excludingPremium":"0.0","fk_ins_id":null,"kindActualCost":null,"kindCode":"G1","kindFlag":" 1  0 ","kindName":"全车盗抢险","kindRegulatoryPremium":null,"mapValue":{"0.00":"不投保","179816.00":"投保"},"modeCode":"0","newKindName":null,"pk_id":null,"premium":"627.96","quantity":"0","rate":"0.4505","remark":"","riskCode":"0509","riskPremium":null,"shortRate":"100","shortRateFlag":"3","shouldPremium":"1","unitAmount":"0.00","value":"0.0","wholeBenchPre":null,"wholeDiscount":null,"wholePremium":null},{"adjustRate":"1.0","allowFlag":"1","amount":"0.00","amountStr":null,"basePremium":"0.00","benchMarkPremium":"545.87","choosed":"0","disCount":"0.6885","excludingPremium":"0.0","fk_ins_id":null,"kindActualCost":null,"kindCode":"F","kindFlag":" 2  0 ","kindName":"玻璃单独破碎险","kindRegulatoryPremium":null,"mapValue":{"0":"不投保","1":"国产玻璃","2":"进口玻璃"},"modeCode":"1","newKindName":null,"pk_id":null,"premium":"375.83","quantity":"0","rate":"0.1615","remark":"","riskCode":"0509","riskPremium":null,"shortRate":"100","shortRateFlag":"3","shouldPremium":"1","unitAmount":"0.00","value":"0.0","wholeBenchPre":null,"wholeDiscount":null,"wholePremium":null},{"adjustRate":"1.00","allowFlag":"1","amount":"0.00","amountStr":null,"basePremium":"0.00","benchMarkPremium":"0.00","choosed":"0","disCount":"1","excludingPremium":"0.0","fk_ins_id":null,"kindActualCost":null,"kindCode":"Z","kindFlag":" 2  0 ","kindName":"自燃损失险","kindRegulatoryPremium":null,"mapValue":{"0.00":"不投保","179816.00":"投保"},"modeCode":"0","newKindName":"自燃损失险","pk_id":null,"premium":"0.00","quantity":"0","rate":"0.00","remark":null,"riskCode":"0509","riskPremium":null,"shortRate":null,"shortRateFlag":null,"shouldPremium":"0","unitAmount":"0.00","value":"0.0","wholeBenchPre":null,"wholeDiscount":null,"wholePremium":null},{"adjustRate":"1.00","allowFlag":"0","amount":"0.00","amountStr":null,"basePremium":"0.00","benchMarkPremium":"0.00","choosed":"0","disCount":"1","excludingPremium":"0.0","fk_ins_id":null,"kindActualCost":null,"kindCode":"L","kindFlag":" 2  0 ","kindName":"车身划痕损失险","kindRegulatoryPremium":null,"mapValue":{"0.00":"不可投保"},"modeCode":"0","newKindName":"车身划痕损失险","pk_id":null,"premium":"0.00","quantity":"0","rate":"0.00","remark":"车身划痕损失险条款的限额 只能是2000元、5000元、10000元、20000元","riskCode":"0509","riskPremium":null,"shortRate":null,"shortRateFlag":null,"shouldPremium":"0","unitAmount":"0.00","value":"0.0","wholeBenchPre":null,"wholeDiscount":null,"wholePremium":null},{"adjustRate":"1.00","allowFlag":"1","amount":"0.00","amountStr":null,"basePremium":"0.00","benchMarkPremium":"0.00","choosed":"0","disCount":"1","excludingPremium":"0.0","fk_ins_id":null,"kindActualCost":null,"kindCode":"Q3","kindFlag":" 2  0 ","kindName":"指定专修厂险","kindRegulatoryPremium":null,"mapValue":{"0.00":"不投保","10.00":"投保"},"modeCode":"0","newKindName":"指定修理厂险","pk_id":null,"premium":"0.00","quantity":"0","rate":"0.00","remark":"国产车：10％－30％；进口车：15％－60％","riskCode":"0509","riskPremium":null,"shortRate":null,"shortRateFlag":null,"shouldPremium":"0","unitAmount":"0.00","value":"0.0","wholeBenchPre":null,"wholeDiscount":null,"wholePremium":null},{"adjustRate":"1.0","allowFlag":"1","amount":"0.00","amountStr":null,"basePremium":"20.00","benchMarkPremium":"776.07","choosed":"1","disCount":"0.6885","excludingPremium":"0.0","fk_ins_id":null,"kindActualCost":null,"kindCode":"M","kindFlag":" 2  0 ","kindName":"不计免赔率特约条款","kindRegulatoryPremium":null,"mapValue":null,"modeCode":"0","newKindName":null,"pk_id":null,"premium":"534.32","quantity":"0","rate":"15.0","remark":"","riskCode":"0509","riskPremium":null,"shortRate":"100","shortRateFlag":"3","shouldPremium":"1","unitAmount":"0.00","value":"0.0","wholeBenchPre":null,"wholeDiscount":null,"wholePremium":null},{"adjustRate":"1.00","allowFlag":"1","amount":"0.00","amountStr":null,"basePremium":"0.00","benchMarkPremium":"0.00","choosed":"0","disCount":"1","excludingPremium":"0.0","fk_ins_id":null,"kindActualCost":null,"kindCode":"X1","kindFlag":" 2  0 ","kindName":"发动机特别损失险","kindRegulatoryPremium":null,"mapValue":{"0":"不投保","1":"投保"},"modeCode":"0","newKindName":"发动机涉水损失险","pk_id":null,"premium":"0.00","quantity":"0","rate":"0.00","remark":"0","riskCode":"0509","riskPremium":null,"shortRate":null,"shortRateFlag":null,"shouldPremium":"0","unitAmount":"0.00","value":"0.0","wholeBenchPre":null,"wholeDiscount":null,"wholePremium":null},{"adjustRate":"1.00","allowFlag":"1","amount":"0.00","amountStr":null,"basePremium":"0.00","benchMarkPremium":"0.00","choosed":"0","disCount":"1","excludingPremium":"0.0","fk_ins_id":null,"kindActualCost":null,"kindCode":"J","kindFlag":" 2  0 ","kindName":"高速高价救援险","kindRegulatoryPremium":null,"mapValue":{"0":"不投保","1":"投保"},"modeCode":"0","newKindName":"高速高价救援险","pk_id":null,"premium":"0.00","quantity":"0","rate":"0.00","remark":"0","riskCode":"0509","riskPremium":null,"shortRate":null,"shortRateFlag":null,"shouldPremium":"0","unitAmount":"0.00","value":"0.0","wholeBenchPre":null,"wholeDiscount":null,"wholePremium":null},{"adjustRate":"1.00","allowFlag":"1","amount":"0.00","amountStr":null,"basePremium":"0.00","benchMarkPremium":"0.00","choosed":"0","disCount":"1","excludingPremium":"0.0","fk_ins_id":null,"kindActualCost":null,"kindCode":"R","kindFlag":" 2  0 ","kindName":"交通事故精神损害赔偿责任险","kindRegulatoryPremium":null,"mapValue":{"0.00":"不投保","10000.00":"1万","20000.00":"2万","50000.00":"5万","100000.00":"10万","150000.00":"15万","200000.00":"20万","300000.00":"30万","500000.00":"50万","1000000.00":"100万"},"modeCode":"0","newKindName":"精神损害抚慰金责任险","pk_id":null,"premium":"0.00","quantity":"0","rate":"0.00","remark":"0","riskCode":"0509","riskPremium":null,"shortRate":null,"shortRateFlag":null,"shouldPremium":"0","unitAmount":"0.00","value":"0.0","wholeBenchPre":null,"wholeDiscount":null,"wholePremium":null},{"adjustRate":"1.00","allowFlag":"0","amount":"0.00","amountStr":null,"basePremium":"0.00","benchMarkPremium":"0.00","choosed":"0","disCount":"1","excludingPremium":"0.0","fk_ins_id":null,"kindActualCost":null,"kindCode":"Z2","kindFlag":" 2  0 ","kindName":"修理期间费用补偿险","kindRegulatoryPremium":null,"mapValue":{"0":"不可投保"},"modeCode":"0","newKindName":"修理期间费用补偿险","pk_id":null,"premium":"0.00","quantity":"0","rate":"0.00","remark":"保额为50到500之间","riskCode":"0509","riskPremium":null,"shortRate":null,"shortRateFlag":null,"shouldPremium":"0","unitAmount":"0.00","value":"0.0","wholeBenchPre":null,"wholeDiscount":null,"wholePremium":null},{"adjustRate":"1.00","allowFlag":"0","amount":"0.00","amountStr":null,"basePremium":"0.00","benchMarkPremium":"0.00","choosed":"0","disCount":"1","excludingPremium":"0.0","fk_ins_id":null,"kindActualCost":null,"kindCode":"Z3","kindFlag":" 2  0 ","kindName":"机动车损失保险无法找到第三方特约险","kindRegulatoryPremium":null,"mapValue":{"0":"不可投保"},"modeCode":"0","newKindName":"机动车损失保险无法找到第三方特约险","pk_id":null,"premium":"0.00","quantity":"0","rate":"0.00","remark":"机动车损失保险无法找到第三方特约险","riskCode":"0509","riskPremium":null,"shortRate":null,"shortRateFlag":null,"shouldPremium":"0","unitAmount":"0.00","value":"0.0","wholeBenchPre":null,"wholeDiscount":null,"wholePremium":null},{"adjustRate":"1.00","allowFlag":"0","amount":"0.00","amountStr":null,"basePremium":"0.00","benchMarkPremium":"0.00","choosed":"0","disCount":"1","excludingPremium":"0.0","fk_ins_id":null,"kindActualCost":null,"kindCode":"X","kindFlag":" 2  0 ","kindName":"新增设备险","kindRegulatoryPremium":null,"mapValue":{"0":"不可投保"},"modeCode":"0","newKindName":"新增设备险","pk_id":null,"premium":"0.00","quantity":"0","rate":"0.00","remark":"新增设备险","riskCode":"0509","riskPremium":null,"shortRate":null,"shortRateFlag":null,"shouldPremium":"0","unitAmount":"0.00","value":"0.0","wholeBenchPre":null,"wholeDiscount":null,"wholePremium":null}],"paraMap":{"agreedAreaFlag":"","suc":"1","retPrice":"338000.00","insuAppTra":"","taxFlag":"1","id":"29201957","insuApp":"2016-03-03","planType":"2","isNewTra":"","carPrice":"0.00","sumPremium_tra":"0.00","lowerPrice":"0.00","repeat_insu_com":"","upperPrice":"179816.00","agreedDriverFlag":"","jyPrice":"366900","isRegist":"1","maxDriverNum":"","billOpenDate":"","sumPremium_com":"5100.25","sumPremium_tax":"0.00","lowerPriceG":"0.00","message":"","integralShow":"1","traFlag":"1","repeat_insu_tra":""}}
        console.log("--------------------第8次返回-------------------------");console.log(httpResponse.statusCode );
        console.log(body);
        body = JSON.parse(body);
        car_price =body.paraMap.retPrice;
        car_now_price = body.paraMap.upperPrice;
        console.log(car_price+'----'+car_now_price);
        next9();
    })
}


var index =  0;
function next9(){
    var url="http://chexian.sinosig.com/Net/netPremiumControl!premiumBI.action";
    var headers={"Pragma":"no-cache","Origin":"http://chexian.sinosig.com","Host":"chexian.sinosig.com","Accept-Language":"zh-CN,zh;q=0.8","User-Agent":"Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/48.0.2564.116 Safari/537.36","Content-Type":"application/x-www-form-urlencoded; charset=UTF-8","Accept":"application/json, text/javascript, */*; q=0.01","Cache-Control":"no-cache","X-Requested-With":"XMLHttpRequest","Connection":"keep-alive","DNT":"1"};
    var json={"paraMap.id":id,"paraMap.insuApp":start_day,"paraMap.ifTra":"0","paraMap.planType":"-1","paraMap.isCalcObjectiveStore":"0","paraMap.renewalFlag":"","blackBgcount":"1","paraMap.premiumRepeatedly":"1"};

    var obj = select[index];
    if(obj.kindName=='车损险'){
        json['paraMap.kindCode'] = 'A';
        json['paraMap.amount'] = car_price;
        json['paraMap.kindFlag'] = ' 1  '+obj.cr+' ';
    }
    if(obj.kindName=='三者险'){
        json['paraMap.kindCode'] = 'B';
        json['paraMap.amount'] = obj.amount;
        json['paraMap.kindFlag'] = ' 1  '+obj.cr+' ';
    }

    if(obj.kindName=='盗抢险'){
        json['paraMap.kindCode'] = 'G1';
        json['paraMap.amount'] = car_now_price;
        json['paraMap.kindFlag'] = ' 1  '+obj.cr+' ';
    }

    if(obj.kindName=='车上司'){
        json['paraMap.kindCode'] = 'D3';
        json['paraMap.unitAmount'] =  obj.amount;
        json['paraMap.kindFlag'] = ' 1  '+obj.cr+' ';
    }
    if(obj.kindName=='车上乘'){
        json['paraMap.kindCode'] = 'D4';
        json['paraMap.unitAmount'] =  obj.amount;
        json['paraMap.quantity'] =  '4';
        json['paraMap.kindFlag'] = ' 1  '+obj.cr+' ';
    }


    if(obj.kindName=='玻璃险'){
        json['paraMap.kindCode'] = 'F';
        json['paraMap.modeCode'] = obj.amount=='国产' ?"1":"2";
    }
    if(obj.kindName=='划痕险'){
        is_huahen = true;
        json['paraMap.kindCode'] = 'L';
        json['paraMap.amount'] =  obj.amount;
        json['paraMap.kindFlag'] = ' 1  '+obj.cr+' ';
    }

    if(obj.kindName=='自燃险'){
        json['paraMap.kindCode'] = 'Z';
        json['paraMap.amount'] = car_now_price;
    }

    if(obj.kindName=='机损险'){
        json['paraMap.kindCode'] = 'X1';
        json['paraMap.remark'] = '1';
        json['paraMap.kindFlag'] = ' 2  0 ';

    }



    request.post({url:url,headers:headers,form:json},function(err,httpResponse,body){
        //预期返回值={"kindList":[{"adjustRate":"1.0","allowFlag":"1","amount":"338000.00","amountStr":null,"basePremium":"445.00","benchMarkPremium":"4007.52","choosed":"0","disCount":"0.6885","excludingPremium":"413.88","fk_ins_id":null,"kindActualCost":null,"kindCode":"A","kindFlag":" 1  1 ","kindName":"车辆损失险","kindRegulatoryPremium":null,"mapValue":{"0.00":"不投保","338000.00":"足额投保"},"modeCode":"0","newKindName":null,"pk_id":null,"premium":"2759.18","quantity":"0","rate":"1.054","remark":"","riskCode":"0509","riskPremium":null,"shortRate":"100","shortRateFlag":"3","shouldPremium":"1","unitAmount":"0.00","value":"0.0","wholeBenchPre":null,"wholeDiscount":null,"wholePremium":null},{"adjustRate":"1.0","allowFlag":"1","amount":"300000.00","amountStr":null,"basePremium":"1043.00","benchMarkPremium":"1043.00","choosed":"0","disCount":"0.6885","excludingPremium":"107.72","fk_ins_id":null,"kindActualCost":null,"kindCode":"B","kindFlag":" 1  1 ","kindName":"商业第三者责任险","kindRegulatoryPremium":null,"mapValue":{"0.00":"不投保","50000.00":"5万","100000.00":"10万","150000.00":"15万","200000.00":"20万","300000.00":"30万","500000.00":"50万","1000000.00":"100万","1500000.00":"150万","2000000.00":"200万","3000000.00":"300万","5000000.00":"500万"},"modeCode":"0","newKindName":null,"pk_id":null,"premium":"718.11","quantity":"0","rate":"0.0","remark":"","riskCode":"0509","riskPremium":null,"shortRate":"100","shortRateFlag":"3","shouldPremium":"1","unitAmount":"0.00","value":"0.0","wholeBenchPre":null,"wholeDiscount":null,"wholePremium":null},{"adjustRate":"1.0","allowFlag":"1","amount":"10000.00","amountStr":null,"basePremium":"0.00","benchMarkPremium":"34.85","choosed":"0","disCount":"0.6885","excludingPremium":"3.60","fk_ins_id":null,"kindActualCost":null,"kindCode":"D3","kindFlag":" 1  1 ","kindName":"司机座位责任险","kindRegulatoryPremium":null,"mapValue":{"0.00":"不投保","10000.00":"1万\/座","20000.00":"2万\/座","30000.00":"3万\/座","40000.00":"4万\/座","50000.00":"5万\/座","100000.00":"10万\/座"},"modeCode":"0","newKindName":null,"pk_id":null,"premium":"23.99","quantity":"1","rate":"0.3485","remark":"","riskCode":"0509","riskPremium":null,"shortRate":"100","shortRateFlag":"3","shouldPremium":"1","unitAmount":"10000.00","value":"0.0","wholeBenchPre":null,"wholeDiscount":null,"wholePremium":null},{"adjustRate":"1.0","allowFlag":"1","amount":"40000.00","amountStr":null,"basePremium":"0.00","benchMarkPremium":"88.40","choosed":"0","disCount":"0.6885","excludingPremium":"9.12","fk_ins_id":null,"kindActualCost":null,"kindCode":"D4","kindFlag":" 1  1 ","kindName":"乘客座位责任险","kindRegulatoryPremium":null,"mapValue":{"0.00":"不投保","10000.00":"1万\/座","20000.00":"2万\/座","30000.00":"3万\/座","40000.00":"4万\/座","50000.00":"5万\/座","100000.00":"10万\/座"},"modeCode":"0","newKindName":null,"pk_id":null,"premium":"60.86","quantity":"4","rate":"0.221","remark":"","riskCode":"0509","riskPremium":null,"shortRate":"100","shortRateFlag":"3","shouldPremium":"1","unitAmount":"10000.00","value":"0.0","wholeBenchPre":null,"wholeDiscount":null,"wholePremium":null},{"adjustRate":"1.0","allowFlag":"1","amount":"179816.00","amountStr":null,"basePremium":"102.00","benchMarkPremium":"912.07","choosed":"0","disCount":"0.6885","excludingPremium":"0.0","fk_ins_id":null,"kindActualCost":null,"kindCode":"G1","kindFlag":" 1  0 ","kindName":"全车盗抢险","kindRegulatoryPremium":null,"mapValue":{"0.00":"不投保","179816.00":"投保"},"modeCode":"0","newKindName":null,"pk_id":null,"premium":"627.96","quantity":"0","rate":"0.4505","remark":"","riskCode":"0509","riskPremium":null,"shortRate":"100","shortRateFlag":"3","shouldPremium":"1","unitAmount":"0.00","value":"0.0","wholeBenchPre":null,"wholeDiscount":null,"wholePremium":null},{"adjustRate":"1.0","allowFlag":"1","amount":"0.00","amountStr":null,"basePremium":"0.00","benchMarkPremium":"545.87","choosed":"0","disCount":"0.6885","excludingPremium":"0.0","fk_ins_id":null,"kindActualCost":null,"kindCode":"F","kindFlag":" 2  0 ","kindName":"玻璃单独破碎险","kindRegulatoryPremium":null,"mapValue":{"0":"不投保","1":"国产玻璃","2":"进口玻璃"},"modeCode":"1","newKindName":null,"pk_id":null,"premium":"375.83","quantity":"0","rate":"0.1615","remark":"","riskCode":"0509","riskPremium":null,"shortRate":"100","shortRateFlag":"3","shouldPremium":"1","unitAmount":"0.00","value":"0.0","wholeBenchPre":null,"wholeDiscount":null,"wholePremium":null},{"adjustRate":"1.00","allowFlag":"1","amount":"0.00","amountStr":null,"basePremium":"0.00","benchMarkPremium":"0.00","choosed":"0","disCount":"1","excludingPremium":"0.0","fk_ins_id":null,"kindActualCost":null,"kindCode":"Z","kindFlag":" 2  0 ","kindName":"自燃损失险","kindRegulatoryPremium":null,"mapValue":{"0.00":"不投保","179816.00":"投保"},"modeCode":"0","newKindName":"自燃损失险","pk_id":null,"premium":"0.00","quantity":"0","rate":"0.00","remark":null,"riskCode":"0509","riskPremium":null,"shortRate":null,"shortRateFlag":null,"shouldPremium":"0","unitAmount":"0.00","value":"0.0","wholeBenchPre":null,"wholeDiscount":null,"wholePremium":null},{"adjustRate":"1.00","allowFlag":"0","amount":"0.00","amountStr":null,"basePremium":"0.00","benchMarkPremium":"0.00","choosed":"0","disCount":"1","excludingPremium":"0.0","fk_ins_id":null,"kindActualCost":null,"kindCode":"L","kindFlag":" 2  0 ","kindName":"车身划痕损失险","kindRegulatoryPremium":null,"mapValue":{"0.00":"不可投保"},"modeCode":"0","newKindName":"车身划痕损失险","pk_id":null,"premium":"0.00","quantity":"0","rate":"0.00","remark":"车身划痕损失险条款的限额 只能是2000元、5000元、10000元、20000元","riskCode":"0509","riskPremium":null,"shortRate":null,"shortRateFlag":null,"shouldPremium":"0","unitAmount":"0.00","value":"0.0","wholeBenchPre":null,"wholeDiscount":null,"wholePremium":null},{"adjustRate":"1.00","allowFlag":"1","amount":"0.00","amountStr":null,"basePremium":"0.00","benchMarkPremium":"0.00","choosed":"0","disCount":"1","excludingPremium":"0.0","fk_ins_id":null,"kindActualCost":null,"kindCode":"Q3","kindFlag":" 2  0 ","kindName":"指定专修厂险","kindRegulatoryPremium":null,"mapValue":{"0.00":"不投保","10.00":"投保"},"modeCode":"0","newKindName":"指定修理厂险","pk_id":null,"premium":"0.00","quantity":"0","rate":"0.00","remark":"国产车：10％－30％；进口车：15％－60％","riskCode":"0509","riskPremium":null,"shortRate":null,"shortRateFlag":null,"shouldPremium":"0","unitAmount":"0.00","value":"0.0","wholeBenchPre":null,"wholeDiscount":null,"wholePremium":null},{"adjustRate":"1.0","allowFlag":"1","amount":"0.00","amountStr":null,"basePremium":"20.00","benchMarkPremium":"776.07","choosed":"1","disCount":"0.6885","excludingPremium":"0.0","fk_ins_id":null,"kindActualCost":null,"kindCode":"M","kindFlag":" 2  0 ","kindName":"不计免赔率特约条款","kindRegulatoryPremium":null,"mapValue":null,"modeCode":"0","newKindName":null,"pk_id":null,"premium":"534.32","quantity":"0","rate":"15.0","remark":"","riskCode":"0509","riskPremium":null,"shortRate":"100","shortRateFlag":"3","shouldPremium":"1","unitAmount":"0.00","value":"0.0","wholeBenchPre":null,"wholeDiscount":null,"wholePremium":null},{"adjustRate":"1.00","allowFlag":"1","amount":"0.00","amountStr":null,"basePremium":"0.00","benchMarkPremium":"0.00","choosed":"0","disCount":"1","excludingPremium":"0.0","fk_ins_id":null,"kindActualCost":null,"kindCode":"X1","kindFlag":" 2  0 ","kindName":"发动机特别损失险","kindRegulatoryPremium":null,"mapValue":{"0":"不投保","1":"投保"},"modeCode":"0","newKindName":"发动机涉水损失险","pk_id":null,"premium":"0.00","quantity":"0","rate":"0.00","remark":"0","riskCode":"0509","riskPremium":null,"shortRate":null,"shortRateFlag":null,"shouldPremium":"0","unitAmount":"0.00","value":"0.0","wholeBenchPre":null,"wholeDiscount":null,"wholePremium":null},{"adjustRate":"1.00","allowFlag":"1","amount":"0.00","amountStr":null,"basePremium":"0.00","benchMarkPremium":"0.00","choosed":"0","disCount":"1","excludingPremium":"0.0","fk_ins_id":null,"kindActualCost":null,"kindCode":"J","kindFlag":" 2  0 ","kindName":"高速高价救援险","kindRegulatoryPremium":null,"mapValue":{"0":"不投保","1":"投保"},"modeCode":"0","newKindName":"高速高价救援险","pk_id":null,"premium":"0.00","quantity":"0","rate":"0.00","remark":"0","riskCode":"0509","riskPremium":null,"shortRate":null,"shortRateFlag":null,"shouldPremium":"0","unitAmount":"0.00","value":"0.0","wholeBenchPre":null,"wholeDiscount":null,"wholePremium":null},{"adjustRate":"1.00","allowFlag":"1","amount":"0.00","amountStr":null,"basePremium":"0.00","benchMarkPremium":"0.00","choosed":"0","disCount":"1","excludingPremium":"0.0","fk_ins_id":null,"kindActualCost":null,"kindCode":"R","kindFlag":" 2  0 ","kindName":"交通事故精神损害赔偿责任险","kindRegulatoryPremium":null,"mapValue":{"0.00":"不投保","10000.00":"1万","20000.00":"2万","50000.00":"5万","100000.00":"10万","150000.00":"15万","200000.00":"20万","300000.00":"30万","500000.00":"50万","1000000.00":"100万"},"modeCode":"0","newKindName":"精神损害抚慰金责任险","pk_id":null,"premium":"0.00","quantity":"0","rate":"0.00","remark":"0","riskCode":"0509","riskPremium":null,"shortRate":null,"shortRateFlag":null,"shouldPremium":"0","unitAmount":"0.00","value":"0.0","wholeBenchPre":null,"wholeDiscount":null,"wholePremium":null},{"adjustRate":"1.00","allowFlag":"0","amount":"0.00","amountStr":null,"basePremium":"0.00","benchMarkPremium":"0.00","choosed":"0","disCount":"1","excludingPremium":"0.0","fk_ins_id":null,"kindActualCost":null,"kindCode":"Z2","kindFlag":" 2  0 ","kindName":"修理期间费用补偿险","kindRegulatoryPremium":null,"mapValue":{"0":"不可投保"},"modeCode":"0","newKindName":"修理期间费用补偿险","pk_id":null,"premium":"0.00","quantity":"0","rate":"0.00","remark":"保额为50到500之间","riskCode":"0509","riskPremium":null,"shortRate":null,"shortRateFlag":null,"shouldPremium":"0","unitAmount":"0.00","value":"0.0","wholeBenchPre":null,"wholeDiscount":null,"wholePremium":null},{"adjustRate":"1.00","allowFlag":"0","amount":"0.00","amountStr":null,"basePremium":"0.00","benchMarkPremium":"0.00","choosed":"0","disCount":"1","excludingPremium":"0.0","fk_ins_id":null,"kindActualCost":null,"kindCode":"Z3","kindFlag":" 2  0 ","kindName":"机动车损失保险无法找到第三方特约险","kindRegulatoryPremium":null,"mapValue":{"0":"不可投保"},"modeCode":"0","newKindName":"机动车损失保险无法找到第三方特约险","pk_id":null,"premium":"0.00","quantity":"0","rate":"0.00","remark":"机动车损失保险无法找到第三方特约险","riskCode":"0509","riskPremium":null,"shortRate":null,"shortRateFlag":null,"shouldPremium":"0","unitAmount":"0.00","value":"0.0","wholeBenchPre":null,"wholeDiscount":null,"wholePremium":null},{"adjustRate":"1.00","allowFlag":"0","amount":"0.00","amountStr":null,"basePremium":"0.00","benchMarkPremium":"0.00","choosed":"0","disCount":"1","excludingPremium":"0.0","fk_ins_id":null,"kindActualCost":null,"kindCode":"X","kindFlag":" 2  0 ","kindName":"新增设备险","kindRegulatoryPremium":null,"mapValue":{"0":"不可投保"},"modeCode":"0","newKindName":"新增设备险","pk_id":null,"premium":"0.00","quantity":"0","rate":"0.00","remark":"新增设备险","riskCode":"0509","riskPremium":null,"shortRate":null,"shortRateFlag":null,"shouldPremium":"0","unitAmount":"0.00","value":"0.0","wholeBenchPre":null,"wholeDiscount":null,"wholePremium":null}],"paraMap":{"agreedAreaFlag":"","suc":"1","retPrice":"338000.00","insuAppTra":"","taxFlag":"1","id":"29201957","insuApp":"2016-03-03","planType":"2","isNewTra":"","carPrice":"0.00","sumPremium_tra":"0.00","lowerPrice":"0.00","repeat_insu_com":"","upperPrice":"179816.00","agreedDriverFlag":"","jyPrice":"366900","isRegist":"1","maxDriverNum":"","billOpenDate":"","sumPremium_com":"5100.25","sumPremium_tax":"0.00","lowerPriceG":"0.00","message":"","integralShow":"1","traFlag":"1","repeat_insu_tra":""}}
        console.log("--------------------第"+(8+index)+"次返回-------------------------");console.log(httpResponse.statusCode );
        console.log(body);
        if(index+1>=select.length){
            console.log(getBackJson(body))
            console.log("最后一次");
        }else{
            index++;
            next9();

        }

    })
}




function getBackJson(arr){
    if(typeof arr=='string') {
        arr = JSON.parse(arr);
    }
    var backJson = {"company": "阳光保险", "allInsures": (arr.paraMap.sumPremium_com)+'',"insure_com_code":"YGBX", "img": "yangguang","allInsuresList":[]};
    for(var i in arr.kindList){
        var fee = arr.kindList[i].premium;

        if(arr.kindList[i].kindName=="车辆损失险"&&fee!='0.00'){
            backJson.allInsuresList.push({'name':'车损险','fee':fee});
        }

        if(arr.kindList[i].kindName=="商业第三者责任险"&&fee!='0.00'){
            backJson.allInsuresList.push({'name':'三者险','fee':fee});
        }

        if(arr.kindList[i].kindName=="全车盗抢险"&&fee!='0.00'){
            backJson.allInsuresList.push({'name':'盗抢险','fee':fee});
        }

        if(arr.kindList[i].kindName=="司机座位责任险"&&fee!='0.00'){
            backJson.allInsuresList.push({'name':'车上司','fee':fee});
        }

        if(arr.kindList[i].kindName=="乘客座位责任险"&&fee!='0.00'){
            backJson.allInsuresList.push({'name':'车上乘','fee':fee});
        }

        if(arr.kindList[i].kindName=="玻璃单独破碎险"&&fee!='0.00'){
            backJson.allInsuresList.push({'name':'玻璃险','fee':fee});
        }

        if(arr.kindList[i].kindName=="自燃损失险"&&fee!='0.00'){
            backJson.allInsuresList.push({'name':'自燃险','fee':fee});
        }

        if(is_huahen&&arr.kindList[i].kindName=="车身划痕损失险"){

            backJson.allInsuresList.push({'name':'划痕险','fee':(fee=='0.00'?"不能投保":fee)});
        }

        if(arr.kindList[i].kindName=="发动机特别损失险"&&fee!='0.00'){
            backJson.allInsuresList.push({'name':'机损险','fee':fee});
        }
        if(arr.kindList[i].kindName=="不计免赔险"&&fee!='0.00'){
            backJson.allInsuresList.push({'name':'不计免赔','fee':fee});
        }
    }
    return backJson;
}

