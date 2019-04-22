var request = require("request");
var cheerio = require("cheerio");
var j = request.jar();
pool = require('./mysql');


    var title;
    var article_url;
    var publish_time;
    var thumbnail="";
    var keywords="";
    var avatar_url;
    var comment_count;
    var i;
    var max_behot_time;
    var myDate = new Date();
    var currentTime = myDate.getTime();
    request = request.defaults({jar: j});
//http://is.snssdk.com
//http://is.snssdk.com/api/news/feed/v54/?refer=1&count=20&min_behot_time=1498722625&last_refresh_sub_entrance_interval=1498724693&loc_mode=4&tt_from=pull（tab_tip） 新闻列表
//http://is.snssdk.com/article/v2/tab_comments/?group_id=6436886053704958466&item_id=6436886053704958466&offset=30&count=20 评论
//http://is.snssdk.com/2/article/information/v21/ 详情

    next1();


    function next1() {
        var headers = {
            "Host": "www.yidianzixun.com",
            "Cookie":"JSESSIONID=3fd0971a020667f00ef97e18ce2f86a309f12f05c8384ebf302f1001b356de54; wuid=788569925665875; wuid=893091009208049; wuid_createAt=2017-10-11 14:42:52; weather_auth=2; Hm_lvt_15fafbae2b9b11d280c79eff3b840e45=1507953735,1507963133,1508115677,1508115743; Hm_lpvt_15fafbae2b9b11d280c79eff3b840e45=1508125025; CNZZDATA1255169715=1050988489-1507854567-http%253A%252F%252Fwww.yidianzixun.com%252F%7C1508124567; cn_9a154edda337ag57c050_dplus=%7B%22distinct_id%22%3A%20%2215f0a2bf1603ed-0d643c38717806-5846291c-144000-15f0a2bf161262%22%2C%22sp%22%3A%20%7B%22%24_sessionid%22%3A%200%2C%22%24_sessionTime%22%3A%201508125032%2C%22%24dp%22%3A%200%2C%22%24_sessionPVTime%22%3A%201508125032%7D%7D; UM_distinctid=15f0a2bf1603ed-0d643c38717806-5846291c-144000-15f0a2bf161262; captcha=s%3Ab9ddd81f5f71643072bc916ace5f6455.itkFfSBYJW50ZlO%2FJPwVlU%2FBc1doxgVskQwTv5efoHw",
            "User-Agent":"Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/61.0.3163.91 Safari/537.36"
        };

        var url = "http://www.yidianzixun.com/home/q/news_list_for_channel?channel_id=c9&cstart=0&cend=10&infinite=true&refresh=1&__from__=pc&multi=5&appid=web_yidian&_=1508149538135";
        console.log(url);
        request.get({url: url,headers:headers }, function (err, httpResponse, body) {
            try {
                // console.log('body:',"================第0次返回======================");
                if (err || httpResponse.statusCode != 200) {
                    return;
                }
                // console.log('body:', body);
                body = JSON.parse(body);
                for (i = 0; i < body.result.length; i++) {
                    console.log("=================================第" + i + "次返回============================");
                    content = body.result[i];
                    // console.log(content);
                    article_url = content.url;
                    source = content.source;
                    title = content.title;
                    publish_time = content.date;
                    // img_url=http://i1.go2yd.com/image.php?url=0HToKul7zE

                    console.log(content.title);
                    console.log(content.url);
                    console.log(source);
                    console.log(content);
                    console.log(keywords);
                    if(typeof article_url!="undefined"){
                        // next2();
                    }


                }

            } catch (e) {

            }

        })
    }

    function next2() {
        var headers = {
            "Host": "www.yidianzixun.com",
            "Cookie":"JSESSIONID=3fd0971a020667f00ef97e18ce2f86a309f12f05c8384ebf302f1001b356de54; wuid=788569925665875; wuid=893091009208049; wuid_createAt=2017-10-11 14:42:52; weather_auth=2; Hm_lvt_15fafbae2b9b11d280c79eff3b840e45=1507953735,1507963133,1508115677,1508115743; Hm_lpvt_15fafbae2b9b11d280c79eff3b840e45=1508125025; CNZZDATA1255169715=1050988489-1507854567-http%253A%252F%252Fwww.yidianzixun.com%252F%7C1508124567; cn_9a154edda337ag57c050_dplus=%7B%22distinct_id%22%3A%20%2215f0a2bf1603ed-0d643c38717806-5846291c-144000-15f0a2bf161262%22%2C%22sp%22%3A%20%7B%22%24_sessionid%22%3A%200%2C%22%24_sessionTime%22%3A%201508125032%2C%22%24dp%22%3A%200%2C%22%24_sessionPVTime%22%3A%201508125032%7D%7D; UM_distinctid=15f0a2bf1603ed-0d643c38717806-5846291c-144000-15f0a2bf161262; captcha=s%3Ab9ddd81f5f71643072bc916ace5f6455.itkFfSBYJW50ZlO%2FJPwVlU%2FBc1doxgVskQwTv5efoHw",
            "User-Agent":"Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/61.0.3163.91 Safari/537.36"
        };
        var url = article_url;
        var article_title = title;
        var article_source = source;
        var article_publish_time = publish_time;
        var article_avatar = avatar_url;
        var article_topics = keywords;
        var article_thumbnail = thumbnail.substring(1,thumbnail.length);
        var comments_count = comment_count;
        request.get({url: url, headers: headers}, function (err, httpResponse, body) {
            try {
                // console.log('body:',body);
                if (err || httpResponse.statusCode != 200) {
                    return;
                }

                // var $ = cheerio.load(body);
                // content = $('article-content').find('div');

                console.log(body);
                // if (body.indexOf("article-content") >= 0 && body.indexOf("article-title") >= 0) {
                //     console.log("===============================================================");
                //     console.log(url);
                //     console.log("===============================================================");
                //     var $ = cheerio.load(body, {decodeEntities: false});
                //     console.log(body);
                //     // content = unescape($('.article-content').html());
                //     // sql_delete="select * from society_2017 where __url='"+url+"'";
                //     // console.log(sql_delete);
                //     // pool.query(sql_delete);
                //     // sql = "insert ignore into society_2017 (__url, article_title, article_author, article_categories, url,article_publish_time,article_content,__time,article_avatar,article_topics,article_thumbnail,comments_count) values ('" + url + "','" + article_title + "','" + article_source + "','" + "社会" + "','" + url + "','" + article_publish_time + "','" + content + "','" + currentTime + "','" + article_avatar + "','" + article_topics + "','" + article_thumbnail + "','" + comments_count + "')";
                //     // console.log(sql);
                //     // pool.query(sql);
                //     // console.log(content);
                //
                //
                // }


            } catch (e) {

            }

        })
    }
