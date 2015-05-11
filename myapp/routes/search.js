var express = require('express');
var router = express.Router();
var url = require ('url');
/* GET home page. */
router.get('/search', function (req, res) {
var urlData = url.parse(req.url, true);
var content = urlData.query;
var startdate=content.startdate;
var enddate=content.enddate;
var keyword1=content.keyword1;
var keyword2=content.keyword2;

if (startdate.length&&enddate.length!=12) {
	res.send("格式錯誤");
	};

res.send("<h1>查詢項目 :"+"<br>"+"    起始日期 : "+startdate+"<br>"+"    結束日期 : "+enddate+"<br>"
+"    關鍵字1 : "+keyword1+"<br>"+"    關鍵字2 : "+keyword2
);
});
 
module.exports = router;