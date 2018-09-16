var mapper= require('./mapper').mapper;

var heaeriesjson = require("../uss/heaeriesjson");
var InternalServerError = require("../libs/error/InternalServer");
var sjson = []; 
var  json = [];
var  தரவுதளசெயலக்கு = function(pageId, pageType, SchemaJson, DataJson, respSchemaJson, calback) {
	var err = heaeriesjson.valWithSch(SchemaJson, DataJson);
	if (err) {
		throw calback(err);
	}
	log.info(JSON.stringify(mapper, null, 4));
	var path= './map/' + mapper[pageId].map;
	var map=require('./map/' + mapper[pageId].map);
	if (map && map[pageType]) {
		map[pageType](SchemaJson, DataJson, respSchemaJson, calback);
	} else {
		throw calback(new InternalServerError("Internal Server Error"));
	}
}
exports.தரவுதளசெயலக்கு = தரவுதளசெயலக்கு;
