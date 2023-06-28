var express = require('express');
var path = require('path');
var cors = require('cors')
var cookieParser = require('cookie-parser');
var logger = require('morgan');
require('./models/connection')

var indexRouter = require('./routes/index');
var tripsRouter = require('./routes/trips');
var myCartRouter = require('./routes/myCart')

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors())

app.use('/', indexRouter);
app.use('/trips', tripsRouter);
app.use('/myCart',myCartRouter);

module.exports = app;
