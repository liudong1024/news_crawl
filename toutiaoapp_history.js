var request = require("request");
var cheerio = require("cheerio");
var j = request.jar();
pool = require('./mysql');
module.exports = function () {

    var title;
    var article_url;
    var publish_time;
    var thumbnail="";
    var keywords="";
    var avatar_url;
    var comment_count;
    var i;
    var image_list;
    var myDate = new Date();
    var currentTime = Math.round(myDate.getTime() / 1000);
    request = request.defaults({jar: j});
//http://is.snssdk.com
//http://is.snssdk.com/api/news/feed/v54/?refer=1&count=20&min_behot_time=1498722625&last_refresh_sub_entrance_interval=1498724693&loc_mode=4&tt_from=pull（tab_tip） 新闻列表
//http://is.snssdk.com/article/v2/tab_comments/?group_id=6436886053704958466&item_id=6436886053704958466&offset=30&count=20 评论
//http://is.snssdk.com/2/article/information/v21/ 详情

    next1();


    function next1() {
        var headers = {
            "Origin": "http://toutiao.iiilab.com"
        };
        var url = "http://is.snssdk.com/api/news/feed/v62/?refer=1&count=20&loc_mode=4&device_id=34960436458&iid=13136511752&category=news_history&min_behot_time=1507540706&last_refresh_sub_entrance_interval=1507541438";
        request.post({url: url, headers: headers}, function (err, httpResponse, body) {
            try {
                // console.log('body:',"================第0次返回======================");
                if (err || httpResponse.statusCode != 200) {

                    return;
                }
                // console.log('body:', body);
                body = JSON.parse(body);
                for (i = 1; i < body.data.length; i++) {
                    console.log("=================================第" + i + "次返回============================");
                    content = body.data[i].content;
                    content = JSON.parse(content);
                    article_url = content.article_url;
                    source = content.source;
                    title = content.title;
                    publish_time = content.publish_time;
                    image_list=content.image_list;

                    if(typeof content.keywords != "undefined"){
                        keywords = content.keywords;
                    }

                    avatar_url = content.user_info.avatar_url;
                    comment_count = content.comment_count;
                    console.log(content.title);
                    console.log(content.article_url);
                    console.log(source);
                    // console.log(content);
                    console.log("thumbnail" + thumbnail);
                    console.log(keywords);
                    console.log(avatar_url);
                    next2();


                }

            } catch (e) {

            }

        })
    }

    function next2() {
        var headers = {
            "Origin": "http://toutiao.iiilab.com"
        };
        var url = article_url;
        var article_title = title;
        var article_source = source;
        var article_publish_time = publish_time;
        var article_avatar = avatar_url;
        var article_topics = keywords;
        var image_url_list=image_list;
        var article_thumbnail;
        if(image_url_list.length>=4){
            article_thumbnail=image_url_list[0].url+"|"+image_url_list[1].url+"|"+image_url_list[2].url+"|"+image_url_list[3].url;
        }else if(image_url_list.length==3){
            article_thumbnail=image_url_list[0].url+"|"+image_url_list[1].url+"|"+image_url_list[2].url;
        }else if(image_url_list.length==2){
            article_thumbnail=image_url_list[0].url+"|"+image_url_list[1].url;
        }else if(image_url_list.length==1){
            article_thumbnail=image_url_list[0].url;
        }else if(image_url_list.length==0){
            article_thumbnail="";
        }
        console.log("缩略图:"+article_thumbnail);
        var comments_count = comment_count;
        request.get({url: url, headers: headers}, function (err, httpResponse, body) {
            try {
                // console.log('body:',body);
                if (err || httpResponse.statusCode != 200) {
                    return;
                }

                // var $ = cheerio.load(body);
                // content = $('article-content').find('div');

                if (body.indexOf("article-content") >= 0 && body.indexOf("article-title") >= 0) {
                    console.log("===============================================================");
                    console.log(url);
                    console.log("===============================================================");
                    var $ = cheerio.load(body, {decodeEntities: false});
                    content = unescape($('.article-content').html());
                    // sql_delete="select * from society_2017 where __url='"+url+"'";
                    // console.log(sql_delete);
                    // pool.query(sql_delete);
                    sql = "insert ignore into history_2017 (__url, article_title, article_author, article_categories, url,article_publish_time,article_content,__time,article_avatar,article_topics,article_thumbnail,comments_count) values ('" + url + "','" + article_title + "','" + article_source + "','" + "历史" + "','" + url + "','" + article_publish_time*1000 + "','" + content + "','" + currentTime*1000 + "','" + article_avatar + "','" + article_topics + "','" + article_thumbnail + "','" + comments_count + "')";
                    console.log(sql);
                    // pool.query(sql);
                    // console.log(content);


                }


            } catch (e) {

            }

        })
    }
}