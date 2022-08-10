//_______________________ ┏  Info  ┓ _______________________\\
//
//   Credit : AlipBot
//   
//   Note 
//   Do not sell this SC,
// Do not remove this text,
// Who Wants To Upload Don't Forget Credit :),
// Those Who Don't Put Credit Will Take Action
//   
//_______________________ ┏ MADED BY MASK SER ┓ _______________________\\

const express = require('express'); 
const app = express();
var favicon = require('serve-favicon')
var path = require('path')
var cookieParser = require('cookie-parser');
var createError = require('http-errors')
require('./settings')


cors = require('cors'),


    secure = require('ssl-express-www');
const PORT = process.env.PORT || 8080 || 5000 || 3000

app.use(favicon(path.join(__dirname,'public','images','favicon.ico')))

var main = require('./routes/main'),
    api = require('./routes/api')

app.set('trust proxy', true);
app.set("json spaces",2)
app.use(cors())
app.use(secure)
app.use(cookieParser());
app.use(express.static("public"))
app.use('/', main)
app.use('/api', api)

app.use(function (req, res, next) {
	next(createError(404))
  })

app.use(function (err, req, res, next) {
	
	res.sendFile(__path + '/view/404.html')
  })


app.listen(PORT, () => {
    console.log(`
	██████╗ ███████╗███████╗████████╗ █████╗ ██████╗ ██╗
	██╔══██╗██╔════╝██╔════╝╚══██╔══╝██╔══██╗██╔══██╗██║
	██████╔╝█████╗  ███████╗   ██║   ███████║██████╔╝██║
	██╔══██╗██╔══╝  ╚════██║   ██║   ██╔══██║██╔═══╝ ██║
	██║  ██║███████╗███████║   ██║   ██║  ██║██║     ██║
	╚═╝  ╚═╝╚══════╝╚══════╝   ╚═╝   ╚═╝  ╚═╝╚═╝     ╚═╝
			                              Maded by mask ser 
								 
 Server running on http://localhost:` + PORT)
console.log(`Hello ${creator}`)
})

module.exports = app

