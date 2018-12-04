var request = require('request');


function getData(res) {
	
	request.get('/xsapp', function(err,intRes,body){
		if(err){
			console.log("ERROR", err);
		}
		if(intRes.statusCode !== 200 ){ //etc
			console.log("ERROR not 200", err);
			res.json(err);
		}else{
			console.log("SUCCESS", body);
			var data = [{text:"text1"},{text:"text2"}];
			res.json(data);
		}
	});

	// var data = [{text:"text1"},{text:"text2"}];
	// res.json(data);
	

};

module.exports = function (app) {

    app.get('/api/data', function (req, res) {
        getData(res);
    });

	app.get('/ui', function (req, res) {
        res.sendFile(__dirname + '/public/index.html');
    });

};
