var express = require('express'),
	engine = require('../'),
	app = express();

app.use(express.static(`${__dirname}/static`));
app.engine('ejs',engine);

app.set('views',`${__dirname}/views`);
app.set('view engine','ejs');

app.get('/',(req,res,next) => {
	res.render('index',{
		what: 'best',
		who: 'me',
		muppets: ['Kermit','Fozzie','Gonzo']
	});
});

app.get('/folder',(req,res,next) => {
	res.render('folder',{
		what: 'best',
		who: 'me',
		muppets: ['Kermit','Fozzie','Gonzo']
	});
});

app.listen(3000);
