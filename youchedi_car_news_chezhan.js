var request = require("request");
var cheerio = require("cheerio");
var j = request.jar();
pool = require('./mysql');

module.exports = function () {

    var news_id;
    var title;
    var frontPic;
    var frontMultiPic;
    var frontCoverType;
    var articleType;
    var galleryNum;
    var videoDuration;
    var videoUrl;
    var isAd;
    var isJump;
    var digest;
    var updateTime;
    var readCount;
    var commentCount;
    var mPId;
    var accountName;
    var logo;
    var i;
    var pageNum = 1;
    var myDate = new Date();
    var currentTime = Math.round(myDate.getTime() / 1000);

    currentTime = format(currentTime*1000);



    function add0(m){return m<10?'0'+m:m }
    function format(shijianchuo)
    {
//shijianchuo是整数，否则要parseInt转换
        var time = new Date(shijianchuo);
        var y = time.getFullYear();
        var m = time.getMonth()+1;
        var d = time.getDate();
        var h = time.getHours();
        var mm = time.getMinutes();
        var s = time.getSeconds();
        return y+'-'+add0(m)+'-'+add0(d)+' '+add0(h)+':'+add0(mm)+':'+add0(s);
    }






    request = request.defaults({jar: j});

    start();

    function start() {
        for (var i = 0; i < 5; i++) {
            next1(i);
        }

    }


    function next1(pageNum) {
        var headers = {
            "user-agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1"
        };
        var json = {
            "pa": 7,
            "category": 54,
            "category_level": 1,
            "page_size": 6,
            "current_page": pageNum,
            "sc_num": 8,
            "novel_gender": 0,
            "novel_tag": 0
        };
        var url = "https://www.youchedi.com/api/mp/public.article.recent.mobile.ashx";
        request.post({url: url, headers: headers, form: json}, function (err, httpResponse, body) {
            try {
                // console.log('body:',"================第0次返回======================");
                if (err || httpResponse.statusCode != 200) {

                    return;
                }

                console.log(body);
                body = JSON.parse(body);
                console.log("列表总数：" + body.list.length);
                for (i = 0; i < body.list.length; i++) {

                    news_id = body.list[i].Id;
                    title = body.list[i].Title;
                    frontPic = body.list[i].FrontPic;
                    frontMultiPic = body.list[i].FrontMultiPic;
                    frontCoverType = body.list[i].FrontCoverType;
                    articleType = body.list[i].ArticleType;
                    galleryNum = body.list[i].GalleryNum;
                    videoDuration = body.list[i].VideoDuration;
                    videoUrl = body.list[i].VideoUrl;
                    isAd = body.list[i].IsAd;
                    isJump = body.list[i].IsJump;
                    digest = body.list[i].Digest;
                    updateTime = body.list[i].UpdateTime;
                    readCount = body.list[i].ReadCount;
                    commentCount = body.list[i].CommentCount;
                    mPId = body.list[i].MPId;
                    accountName = body.list[i].AccountName;
                    logo = body.list[i].Logo;
                    console.log("title:" + title);
                    next2(news_id);


                }
                setTimeout(function () {

                }, 1000);

            } catch (e) {

            }

        })
    }

    function next2(news_id) {

        var headers = {
            "user-agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1"
        }
        var url = "https://www.youchedi.com/articleMobile.aspx?id=" + news_id + "&pa=7";
        var News_id = news_id;
        var Title = title;
        var FrontPic = frontPic;
        var FrontMultiPic = frontMultiPic;
        var FrontCoverType = frontCoverType;
        var ArticleType = articleType;
        var GalleryNum = galleryNum;
        var VideoDuration = videoDuration;
        var VideoUrl = videoUrl;
        var IsAd = isAd;
        var IsJump = isJump;
        var Digest = digest;
        var UpdateTime = updateTime;
        var ReadCount = readCount;
        var CommentCount = commentCount;
        var MPId = mPId;
        var AccountName = accountName;
        var Logo = logo;
        var categoryID = 54;
        // console.log(Title);
        request.get({url: url, headers: headers}, function (err, httpResponse, body) {
            try {
                // console.log('body:',body);

                // body > div.page-group > div > div.content > div > div > div > div.content-main

                if (err || httpResponse.statusCode != 200) {
                    return;
                }
                var $ = cheerio.load(body, {decodeEntities: false});
                var content = $('div.content-main');
                content = content.toString().replace(/class="snsbox"/g,'class="snsbox" hidden');
                console.log("content:" + content);
                sql = "insert ignore into car_news (news_id, title, frontPic, frontMultiPic, frontCoverType, articleType, galleryNum, videoDuration, videoUrl, isAd, isJump, digest, updateTime, readCount, commentCount, mPId, accountName, logo, categoryID, content, crawl_time) values ('" + News_id + "','" + Title + "','" + FrontPic + "','" + FrontMultiPic + "','" + FrontCoverType + "','" + ArticleType + "','" + GalleryNum + "','" + VideoDuration + "','" + VideoUrl + "','" + IsAd + "','" + IsJump + "','" + Digest + "','" + UpdateTime + "','" + ReadCount + "','" + CommentCount + "','" + MPId + "','" + AccountName + "','" + Logo + "','" + categoryID + "','" + content + "','" + currentTime + "')";
                console.log(sql);
                // if(AccountName === "有车帝"){
                pool.query(sql);
                // }


                // for(var i=0;i<body.result.allSellSeries.length;i++){
                //     for(var j=0;j<body.result.allSellSeries[i].SeriesItems.length; j++){
                //         publish_id = body.result.allSellSeries[i].Id;
                //         publish_name = body.result.allSellSeries[i].name;
                //         series_id = body.result.allSellSeries[i].SeriesItems[j].id;
                //         series_name = body.result.allSellSeries[i].SeriesItems[j].name;
                //         maxprice = body.result.allSellSeries[i].SeriesItems[j].maxprice;
                //         minprice = body.result.allSellSeries[i].SeriesItems[j].minprice;
                //         seriesstate = body.result.allSellSeries[i].SeriesItems[j].seriesstate;
                //         seriesPicUrl = body.result.allSellSeries[i].SeriesItems[j].seriesPicUrl;
                //         console.log("车系："+series_name);
                //         is_on_sale = 0;
                //         if(publish_name.indexOf("进口")!=-1){
                //             is_import = 1;
                //         }else{
                //             is_import = 0;
                //         }
                //         sql = "insert ignore into car_series (publish_id, publish_name, maxprice, minprice, seriesPicUrl, is_import, is_on_sale, series_name, series_id) values ('" + publish_id + "','" + publish_name + "','" + maxprice + "','" + minprice + "','" + seriesPicUrl + "','" + is_import +"','" + is_on_sale+ "','" + series_name + "','"  + series_id+ "')";
                //         query_sql = "select * from car_series where series_id ="+series_id;
                //         console.log(query_sql);
                //         var results = pool.query(query_sql);
                //         // console.log("查询结果："+result.length);
                //         // if(typeof results == 'undefined'){
                //         pool.query(sql);
                //         console.log(sql);
                //         // }
                //     }}

                // sql_delete="select * from society_2017 where __url='"+url+"'";
                // console.log(sql_delete);
                // pool.query(sql_delete);
                // sql = "insert ignore into society_2017 (__url, article_title, article_author, article_categories, url,article_publish_time,article_content,__time,article_avatar,article_topics,article_thumbnail,comments_count) values ('" + url + "','" + article_title + "','" + article_source + "','" + "社会" + "','" + url + "','" + article_publish_time*1000 + "','" + content + "','" + currentTime*1000 + "','" + article_avatar + "','" + article_topics + "','" + article_thumbnail + "','" + comments_count + "')";
                // console.log(sql);
                // pool.query(sql);


            } catch (e) {

            }

        })
    }
}