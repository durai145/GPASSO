var mapper= require('./mapper').mapper;

var heaeriesjson = require("../uss/heaeriesjson");

var InternalServerError = require("../libs/error/InternalServer");
var Log = require('log')
	, fs = require('fs')
	, stream = fs.createWriteStream(__dirname + '/file.log', { flags: 'a' })
	, log = new Log('debug', stream);
பதிவு = log;

var sjson = []; 
var  json = [];
var  InvokeDB = function(pageId, pageType, SchemaJson, DataJson, respSchemaJson, calback) {
	log.info("InvokeDB:IDB.001 valWithSch");
	var err = heaeriesjson.valWithSch(SchemaJson, DataJson);
	if (err) {
		throw calback(err);
	}
	log.info("InvokeDB:IDB.002 mapper pageId:" + pageId); 	
	log.info("InvokeDB:IDB.002 mapper pageType:" + pageType); 
	log.info(JSON.stringify(mapper, null, 4));
	var path= './map/' + mapper[pageId].map;
	log.info("path=" + path);
	log.info("pageType=" + pageType);
	var map=require('./map/' + mapper[pageId].map);
	if (map && map[pageType]) {
		map[pageType](SchemaJson, DataJson, respSchemaJson, calback);
	} else {
		throw calback(new InternalServerError("Internal Server Error"));
	}
	log.info("InvokeDB:IDB.003 after");
}
exports.InvokeDB=InvokeDB;
