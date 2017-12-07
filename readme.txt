/电影项目
///////////////////////////////////////////


//主页 接口
http://39.106.14.209:7777/movieindex

//主页 ===》  更多 接口
// categoryid : 分类id
http://39.106.14.209:7777/movieindex/more/:categoryid


//发现接口
http://39.106.14.209:7777/moviefind


//分类列表
//asc: 0（电影列表排序。 0：表示进来默认排序;1:表示最新上线;2：流行热度;3：IMDb评分）
//categoryid: 分类id
http://39.106.14.209:7777/movie/:categoryid/:asc


//详情
movieid:电影id
http://39.106.14.209:7777/moviedetail/:movieid



resolve: {
//         alias: {
//         'react': path.join(__dirname, 'node_modules', 'react')
//         }
//     },
http://47.94.208.182:3000/insertContacts