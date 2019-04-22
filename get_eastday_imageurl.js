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
    var image_list;
    var i;
    var myDate = new Date();
    var currentTime = Math.round(myDate.getTime() / 1000);
    request = request.defaults({jar: j});
//url编码编了2次
//http://minivideosearch.dftoutiao.com/search_pc/searchcomplex?jsonpcallback=jQuery18308325925995641796_1508753584197&keywords=邯郸&stkey_zixun=&lastcol_zixun=&stkey_video=&lastcol_video=&splitwordsarr=&uid=15041524120284455&qid=www.baidu.com&softtype=toutiao&softname=XWTT&browser_type=chrome61.0.3163.91&pixel=1536*864&_=1508753584621
//http://minivideosearch.dftoutiao.com/search_pc/searchcomplex?jsonpcallback=jQuery1830796765496857865_1508755189811&keywords=世界文明史上的十大惊天谎言&stkey_zixun=世界 十大 史上&lastcol_zixun=9223370542479605722&stkey_video=世界 十大&lastcol_video=9223370528612531088&splitwordsarr=世界 十大 史上,世界 十大 惊天,世界 十大 文明,世界 十大 谎言,世界 史上 惊天,世界 史上 文明,世界 史上 谎言,世界 惊天 文明,世界 惊天 谎言,世界 文明 谎言,十大 史上 惊天,十大 史上 文明,十大 史上 谎言,十大 惊天 文明,十大 惊天 谎言,十大 文明 谎言,史上 惊天 文明,史上 惊天 谎言,史上 文明 谎言,惊天 文明 谎言,世界 十大,世界 史上,世界 惊天,世界 文明,世界 谎言,十大 史上,十大 惊天,十大 文明,十大 谎言,史上 惊天,史上 文明,史上 谎言,惊天 文明,惊天 谎言,文明 谎言,世界,十大,史上,惊天,文明,谎言&uid=15041524120284455&qid=www.baidu.com&softtype=toutiao&softname=XWTT&browser_type=chrome61.0.3163.91&pixel=1536*864&_=1508755777325
//刷新时请求里面加上了第一次搜索结果的关键字数组
    next1();


    function next1() {
        var url = "http://minisearch.dftoutiao.com/search_pc/searchcomplex?jsonpcallback=jQuery18308325925995641796_1508753584197&keywords=%25E9%2582%25AF%25E9%2583%25B8%25E6%259C%2580%25E5%25A5%25BD%25E7%259A%258410%25E4%25B8%25AA%25E6%2597%2585%25E6%25B8%25B8%25E6%2599%25AF%25E7%2582%25B9%25EF%25BC%258C%25E4%25BD%25A0%25E5%2596%259C%25E6%25AC%25A2%25E5%258E%25BB%25E5%2593%25AA%25E4%25BA%259B%25EF%25BC%259F";
        request.get({url: url}, function (err, httpResponse, body) {
            try {
                if (err || httpResponse.statusCode != 200) {
                    return;
                }

                console.log('body:', body);
                body = JSON.parse(body);


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
        if(image_url_list.length>3){
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
                    sql = "insert ignore into society_2017 (__url, article_title, article_author, article_categories, url,article_publish_time,article_content,__time,article_avatar,article_topics,article_thumbnail,comments_count) values ('" + url + "','" + article_title + "','" + article_source + "','" + "社会" + "','" + url + "','" + article_publish_time*1000 + "','" + content + "','" + currentTime*1000 + "','" + article_avatar + "','" + article_topics + "','" + article_thumbnail + "','" + comments_count + "')";
                    console.log(sql);
                    // pool.query(sql);


                }


            } catch (e) {

            }

        })
    }
