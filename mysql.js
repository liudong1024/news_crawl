"use strict";
var mysql = require('mysql');
var pool = mysql.createPool({
    connectionLimit:200,//连接池最多可以创建连接数
    // host     : '127.0.0.1',
    // user     : 'root',
    // password : 'root',
    // database : 'car_news',

    host     : '120.79.24.171',
    user     : 'root',
    password : 'ld1024',
    database : 'car_news',

    // host     : '101.37.15.14',
    // user     : 'root',
    // password : 'Qlcx2007',
    // database : 'daynews',

    queueLimit:0, // 队伍中等待连接的最大数量，0为不限制。
    bigNumberStrings: true,
    dateStrings:true,
    stringifyObjects:true

});

module.exports=pool;