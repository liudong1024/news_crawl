"use strict";
let CronJob = require('cron').CronJob;
let chezhan = require("./youchedi_car_news_chezhan");
let ershouche = require("./youchedi_car_news_ershouche");
let hangye = require("./youchedi_car_news_hangye");
let jiaogui = require("./youchedi_car_news_jiaogui");
let jishu = require("./youchedi_car_news_jishu");
let koubei = require("./youchedi_car_news_koubei");
let pingce = require("./youchedi_car_news_pingce");
let remen = require("./youchedi_car_news_remen");
let wanche = require("./youchedi_car_news_wanche");
let weizhang = require("./youchedi_car_news_weizhang");
let xuanche = require("./youchedi_car_news_xuanche");
let xinche = require("./youchedi_car_news");
let yongche = require("./youchedi_car_news_yongche");


new CronJob('*/30 * * * * *', function (){
    xinche();
    chezhan();
    ershouche();
    hangye();
    jiaogui();
    jishu();
    koubei();
    pingce();
    remen();
    wanche();
    weizhang();
    xuanche();
    yongche();
}, null, true, "Asia/Shanghai");

console.log("有车帝新闻爬虫 module is running");
