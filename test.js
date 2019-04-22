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

var brand_id;
var brand_name;
var bfirstletter;
var series_list;






request = request.defaults({jar: j});
//http://is.snssdk.com
//http://is.snssdk.com/api/news/feed/v54/?refer=1&count=20&min_behot_time=1498722625&last_refresh_sub_entrance_interval=1498724693&loc_mode=4&tt_from=pull（tab_tip） 新闻列表
//http://is.snssdk.com/article/v2/tab_comments/?group_id=6436886053704958466&item_id=6436886053704958466&offset=30&count=20 评论
//http://is.snssdk.com/2/article/information/v21/ 详情


// module.exports = function () {

    next2();



    function next2() {
        var headers = {
            "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8",
                "Content-Type": "text/html; charset=utf-8",
"Accept-Encoding": "gzip, deflate, br",
"Accept-Language": "zh-CN,zh;q=0.9",
"Connection": "keep-alive",
            "User-Agent":"Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1"

        };

        var brand_id;
        // var article_title = title;
        // var article_source = source;
        // var article_publish_time = publish_time;
        // var article_avatar = avatar_url;
        // var article_topics = keywords;
        // var image_url_list=image_list;
        // var comments_count = comment_count;
        var select = "select * from car_series where is_get=0 order by id asc limit 1";
        pool.query(select, function (err, results) {
            // if (typeof results == 'undefined') {
            //     console.log("已存在1");
            //     return;
            // }
            // if (results.length != 0) {
            //     console.log("已存在2");
            //     return;
            // }
            // console.log(results.length);
            // series_id = results[0].series_id;
            var url = "https://www.autohome.com.cn/"+4417+"/price.html#pvareaid=3454456";
            // console.log("品牌id:"+series_id);
            console.log(url);
            var car_models =[];
            request.get({url: url, headers: headers}, function (err, httpResponse, body) {
                try {
                    // console.log("车系id："+id);

                    // console.log('body:',body);

                    if (err || httpResponse.statusCode != 200) {
                        return;
                    }
                    // body = JSON.parse(body);
                    var $ = cheerio.load(body);
                    // console.log(body);
                    // console.log($)
                    $('.interval01-list-cars').each(function(index,value) {
                        // 获取图片链接

                        let car_model_name=$(value).find(".interval01-list-cars-infor").children().eq(0).text();
                        car_model_name = (car_model_name);
                        console.log("car_model_name"+car_model_name);
                        // 把所有电影放在一个数组里面
                        // car_models.push(car_model);
                        // 下载图片

                    });
                    // for(var i=0;i<body.result.list.length;i++){
                    //     // for(var j=0;j<body.result.list[i].SeriesItems.length; j++){
                    //         model_id = body.result.list[i].itemId;
                    //         pic_url = body.result.list[i].picUrl;
                    //         model_name = body.result.list[i].itemName;
                    //         // series_id = body.result.allSellSeries[i].SeriesItems[j].id;
                    //         // series_name = body.result.allSellSeries[i].SeriesItems[j].name;
                    //         // maxprice = body.result.allSellSeries[i].SeriesItems[j].maxprice;
                    //         // minprice = body.result.allSellSeries[i].SeriesItems[j].minprice;
                    //         // seriesstate = body.result.allSellSeries[i].SeriesItems[j].seriesstate;
                    //         // seriesPicUrl = body.result.allSellSeries[i].SeriesItems[j].seriesPicUrl;
                    //         console.log("车系："+model_name);
                    //         // is_on_sale = 0;
                    //         // if(publish_name.indexOf("进口")!=-1){
                    //         //     is_import = 1;
                    //         // }else{
                    //         //     is_import = 0;
                    //         // }
                    //         sql = "insert ignore into car_model (model_id, picUrl, series_id, model_name) values ('" + model_id + "','" + pic_url + "','"+ series_id + "','" + model_name+ "')";
                    //         query_sql = "select * from car_series where series_id ="+series_id;
                    //         // console.log(query_sql);
                    //         var results = pool.query(query_sql);
                    //         // console.log("查询结果："+result.length);
                    //         // if(typeof results == 'undefined'){
                    //         pool.query(sql);
                    //         // console.log(sql);
                    //         // }
                    //     }
                // }


                } catch (e) {

                }

            })
            // var update_select = "update car_series set is_get=1 where  id ="+results[0].id;

            // pool.query(update_select);

        })

        function EncodeUtf8(s1)
        {
            var s = escape(s1);
            var sa = s.split("%");
            var retV ="";
            if(sa[0] != "")
            {
                retV = sa[0];
            }
            for(var i = 1; i < sa.length; i ++)
            {
                if(sa[i].substring(0,1) == "u")
                {
                    retV += Hex2Utf8(Str2Hex(sa[i].substring(1,5)));

                }
                else retV += "%" + sa[i];
            }

            return retV;
        }


    }
// }
