var வெளிப்படுத்து = require('express');
var கட்டமைப்பு = require('./கட்டமைப்பு/கட்டமைப்பு.json');
var சேவையகம் = வெளிப்படுத்து();
//var log = require('log')(தொகுதி);
var Log = require('log')
    , fs = require('fs')
    , stream = fs.createWriteStream(__dirname + '/file.log', { flags: 'a' })
    , log = new Log('debug', stream);
பதிவு = log;
log.debug('a debug message');

var உடல்பாகுபாடு = require('body-parser');
சேவையகம்.use(உடல்பாகுபாடு.json());
சேவையகம்.use(உடல்பாகுபாடு.urlencoded({ limit: '100mb', extended: true }));



மையசெயல்பாடுகளைசேர் = addCoreFunction = function (மனு, மீட்டல்) {
    மனு.getHeader = மனு.தலைப்பைப்பெறு = function (மாறி) {
        try {
            return மனு.headers[மாறி]
        } catch (e) {
            return "";
        }
    }
    மனு.setHeader = மனு.தலைப்பைப்பொறுத்து = function (மாறி, மதிப்பு) {
        மனு.headers[மாறி] = value;
    }
    //அளவுருவைபொறுத்து அளவுருவைப்பெறு
    மனு.getParam = மனு.அளவுருவைப்பெறு = function (மாறி) {
        if (மனு.method == "POST") {
            try {
                if (மனு.params[மாறி] == undefined) {
                   return மனு.body[மாறி];
                } else {
                    return மனு.params[மாறி];
                }

            } catch (e) {
                return "";
            }
        } else if (மனு.method == "GET") {
            try {
                return மனு.query[மாறி] || மனு.body[மாறி];
            } catch (e) {
                return "";
            }
        }
        return "";
    }
    மனு.getMethod = மனு.முறையைபெறு = function () {
        return மனு.method;
    }

    மீட்டல்(மனு);
}

சேவைHandler = சேவைக்கையாளி = function (req, res) {

    log.info("req.params.பணி:", req.params.பணி, "req.params.தொகுதி", req.params.தொகுதி);
    மையசெயல்பாடுகளைசேர்(req, function (req) {

        log.info("calling மையசெயல்பாடுகளைசேர்");
        log.info(req);
        /*
                var pageId = "சேவைDetails";
                var pageType = 'getசேவைDetails';
                //	var SchemaJson=[{"group":"USS","name":"சேவைDetails","label":"Basic Details","பணி":"ES","desc":"","htmlType":"PAGE","entitle":"NONREADONLY","enttlname":"","mndf":"N","dataType":"PAGE","cclass":"ctable","parent":"","parentHtmlType":"","validate":"","dflt":"","min":"0","max":"60","tips":"","onkeyup":"onKeyUp(this);","onchange":"onChange(this);","onkeydown":"onKeyDown(this);","onkeypress":"onKeyPress(this);","onclick":"onClick(this);","onblure":"onBlure(this);","listVal":"0","help":"N","helpLink":"helpload","xml":"Y","xmlname":"","Xpath":"/","maxCol":"1","col":"0","childs":[{"group":"USS","name":"சேவைs","label":"சேவைs","பணி":"NONE","desc":"","htmlType":"CONTAINER","entitle":"READONLY","enttlname":"","mndf":"N","dataType":"CONTAINER","cclass":"ctable","parent":"","parentHtmlType":"","validate":"","dflt":"","min":"0","max":"60","tips":"","onkeyup":"onKeyUp(this);","onchange":"onChange(this);","onkeydown":"onKeyDown(this);","onkeypress":"onKeyPress(this);","onclick":"onClick(this);","onblure":"onBlure(this);","listVal":"||A|A-ADD|M|M-MODIFY|I|I-INQURY|C|C-CANCEL|V|V-VERIFY","help":"N","helpLink":"helpload","xml":"Y","xmlname":"","Xpath":"/","maxCol":"unlimited","col":"0","childs":[{"group":"USS","name":"resSjson","label":"Response schema json","பணி":"NONE","desc":"","htmlType":"TEXT","entitle":"READONLY","enttlname":"","mndf":"N","dataType":"VARCHAR","cclass":"ctable","parent":"","parentHtmlType":"","validate":"","dflt":"","min":"0","max":"unlimited","tips":"","onkeyup":"onKeyUp(this);","onchange":"onChange(this);","onkeydown":"onKeyDown(this);","onkeypress":"onKeyPress(this);","onclick":"onClick(this);","onblure":"onBlure(this);","listVal":"||A|A-ADD|M|M-MODIFY|I|I-INQURY|C|C-CANCEL|V|V-VERIFY","help":"N","helpLink":"helpload","xml":"Y","xmlname":"","Xpath":"/","maxCol":"1","col":"0","childs":[]},{"group":"USS","name":"reqSjson","label":"Request schema json","பணி":"NONE","desc":"","htmlType":"TEXT","entitle":"READONLY","enttlname":"","mndf":"N","dataType":"VARCHAR","cclass":"ctable","parent":"","parentHtmlType":"","validate":"","dflt":"","min":"0","max":"unlimited","tips":"","onkeyup":"onKeyUp(this);","onchange":"onChange(this);","onkeydown":"onKeyDown(this);","onkeypress":"onKeyPress(this);","onclick":"onClick(this);","onblure":"onBlure(this);","listVal":"||A|A-ADD|M|M-MODIFY|I|I-INQURY|C|C-CANCEL|V|V-VERIFY","help":"N","helpLink":"helpload","xml":"Y","xmlname":"","Xpath":"/","maxCol":"1","col":"0","childs":[]},{"group":"USS","name":"authReqd","label":"Request Schema Json","பணி":"NONE","desc":"","htmlType":"TEXT","entitle":"READONLY","enttlname":"","mndf":"N","dataType":"VARCHAR","cclass":"ctable","parent":"","parentHtmlType":"","validate":"","dflt":"","min":"0","max":"60","tips":"","onkeyup":"onKeyUp(this);","onchange":"onChange(this);","onkeydown":"onKeyDown(this);","onkeypress":"onKeyPress(this);","onclick":"onClick(this);","onblure":"onBlure(this);","listVal":"||A|A-ADD|M|M-MODIFY|I|I-INQURY|C|C-CANCEL|V|V-VERIFY","help":"N","helpLink":"helpload","xml":"Y","xmlname":"","Xpath":"/","maxCol":"1","col":"0","childs":[]},{"group":"USS","name":"பணி","label":"பணி","பணி":"NONE","desc":"","htmlType":"TEXT","entitle":"READONLY","enttlname":"","mndf":"N","dataType":"VARCHAR","cclass":"ctable","parent":"","parentHtmlType":"","validate":"","dflt":"","min":"0","max":"60","tips":"","onkeyup":"onKeyUp(this);","onchange":"onChange(this);","onkeydown":"onKeyDown(this);","onkeypress":"onKeyPress(this);","onclick":"onClick(this);","onblure":"onBlure(this);","listVal":"||A|A-ADD|M|M-MODIFY|I|I-INQURY|C|C-CANCEL|V|V-VERIFY","help":"N","helpLink":"helpload","xml":"Y","xmlname":"","Xpath":"/","maxCol":"1","col":"0","childs":[]}]},{"group":"USS","name":"சேவைName","label":"","பணி":"NONE","desc":"","htmlType":"VARCHAR","entitle":"READONLY","enttlname":"","mndf":"N","dataType":"VARCHAR","cclass":"ctable","parent":"","parentHtmlType":"","validate":"","dflt":"","min":"0","max":"60","tips":"","onkeyup":"onKeyUp(this);","onchange":"onChange(this);","onkeydown":"onKeyDown(this);","onkeypress":"onKeyPress(this);","onclick":"onClick(this);","onblure":"onBlure(this);","listVal":"||A|A-ADD|M|M-MODIFY|I|I-INQURY|C|C-CANCEL|V|V-VERIFY","help":"N","helpLink":"helpload","xml":"Y","xmlname":"","Xpath":"/","maxCol":"1","col":"0","childs":[]}]}];
                var SchemaJson = [{
                    "group": "USS",
                    "name": "சேவைDetails",
                    "label": "Basic Details",
                    "பணி": "ES",
                    "desc": "",
                    "htmlType": "PAGE",
                    "entitle": "NONREADONLY",
                    "enttlname": "",
                    "mndf": "N",
                    "dataType": "PAGE",
                    "cclass": "ctable",
                    "parent": "",
                    "parentHtmlType": "",
                    "validate": "",
                    "dflt": "",
                    "min": "0",
                    "max": "60",
                    "tips": "",
                    "onkeyup": "onKeyUp(this);",
                    "onchange": "onChange(this);",
                    "onkeydown": "onKeyDown(this);",
                    "onkeypress": "onKeyPress(this);",
                    "onclick": "onClick(this);",
                    "onblure": "onBlure(this);",
                    "listVal": "0",
                    "help": "N",
                    "helpLink": "helpload",
                    "xml": "Y",
                    "xmlname": "",
                    "Xpath": "/",
                    "maxCol": "1",
                    "col": "0",
                    "childs": [{
                        "group": "USS",
                        "name": "சேவைs",
                        "label": "சேவைs",
                        "பணி": "NONE",
                        "desc": "",
                        "htmlType": "CONTAINER",
                        "entitle": "READONLY",
                        "enttlname": "",
                        "mndf": "N",
                        "dataType": "CONTAINER",
                        "cclass": "ctable",
                        "parent": "",
                        "parentHtmlType": "",
                        "validate": "",
                        "dflt": "",
                        "min": "0",
                        "max": "60",
                        "tips": "",
                        "onkeyup": "onKeyUp(this);",
                        "onchange": "onChange(this);",
                        "onkeydown": "onKeyDown(this);",
                        "onkeypress": "onKeyPress(this);",
                        "onclick": "onClick(this);",
                        "onblure": "onBlure(this);",
                        "listVal": "||A|A-ADD|M|M-MODIFY|I|I-INQURY|C|C-CANCEL|V|V-VERIFY",
                        "help": "N",
                        "helpLink": "helpload",
                        "xml": "Y",
                        "xmlname": "",
                        "Xpath": "/",
                        "maxCol": "unlimited",
                        "col": "0",
                        "childs": [{
                            "group": "USS",
                            "name": "resSjson",
                            "label": "Response schema json",
                            "பணி": "NONE",
                            "desc": "",
                            "htmlType": "TEXT",
                            "entitle": "READONLY",
                            "enttlname": "",
                            "mndf": "N",
                            "dataType": "VARCHAR",
                            "cclass": "ctable",
                            "parent": "",
                            "parentHtmlType": "",
                            "validate": "",
                            "dflt": "",
                            "min": "0",
                            "max": "unlimited",
                            "tips": "",
                            "onkeyup": "onKeyUp(this);",
                            "onchange": "onChange(this);",
                            "onkeydown": "onKeyDown(this);",
                            "onkeypress": "onKeyPress(this);",
                            "onclick": "onClick(this);",
                            "onblure": "onBlure(this);",
                            "listVal": "||A|A-ADD|M|M-MODIFY|I|I-INQURY|C|C-CANCEL|V|V-VERIFY",
                            "help": "N",
                            "helpLink": "helpload",
                            "xml": "Y",
                            "xmlname": "",
                            "Xpath": "/",
                            "maxCol": "1",
                            "col": "0",
                            "childs": []
                        }, {
                            "group": "USS",
                            "name": "reqSjson",
                            "label": "Request schema json",
                            "பணி": "NONE",
                            "desc": "",
                            "htmlType": "TEXT",
                            "entitle": "READONLY",
                            "enttlname": "",
                            "mndf": "N",
                            "dataType": "VARCHAR",
                            "cclass": "ctable",
                            "parent": "",
                            "parentHtmlType": "",
                            "validate": "",
                            "dflt": "",
                            "min": "0",
                            "max": "unlimited",
                            "tips": "",
                            "onkeyup": "onKeyUp(this);",
                            "onchange": "onChange(this);",
                            "onkeydown": "onKeyDown(this);",
                            "onkeypress": "onKeyPress(this);",
                            "onclick": "onClick(this);",
                            "onblure": "onBlure(this);",
                            "listVal": "||A|A-ADD|M|M-MODIFY|I|I-INQURY|C|C-CANCEL|V|V-VERIFY",
                            "help": "N",
                            "helpLink": "helpload",
                            "xml": "Y",
                            "xmlname": "",
                            "Xpath": "/",
                            "maxCol": "1",
                            "col": "0",
                            "childs": []
                        }, {
                            "group": "USS",
                            "name": "authReqd",
                            "label": "Request Schema Json",
                            "பணி": "NONE",
                            "desc": "",
                            "htmlType": "TEXT",
                            "entitle": "READONLY",
                            "enttlname": "",
                            "mndf": "N",
                            "dataType": "VARCHAR",
                            "cclass": "ctable",
                            "parent": "",
                            "parentHtmlType": "",
                            "validate": "",
                            "dflt": "",
                            "min": "0",
                            "max": "60",
                            "tips": "",
                            "onkeyup": "onKeyUp(this);",
                            "onchange": "onChange(this);",
                            "onkeydown": "onKeyDown(this);",
                            "onkeypress": "onKeyPress(this);",
                            "onclick": "onClick(this);",
                            "onblure": "onBlure(this);",
                            "listVal": "||A|A-ADD|M|M-MODIFY|I|I-INQURY|C|C-CANCEL|V|V-VERIFY",
                            "help": "N",
                            "helpLink": "helpload",
                            "xml": "Y",
                            "xmlname": "",
                            "Xpath": "/",
                            "maxCol": "1",
                            "col": "0",
                            "childs": []
                        }, {
                            "group": "USS",
                            "name": "பணி",
                            "label": "பணி",
                            "பணி": "NONE",
                            "desc": "",
                            "htmlType": "TEXT",
                            "entitle": "READONLY",
                            "enttlname": "",
                            "mndf": "N",
                            "dataType": "VARCHAR",
                            "cclass": "ctable",
                            "parent": "",
                            "parentHtmlType": "",
                            "validate": "",
                            "dflt": "",
                            "min": "0",
                            "max": "60",
                            "tips": "",
                            "onkeyup": "onKeyUp(this);",
                            "onchange": "onChange(this);",
                            "onkeydown": "onKeyDown(this);",
                            "onkeypress": "onKeyPress(this);",
                            "onclick": "onClick(this);",
                            "onblure": "onBlure(this);",
                            "listVal": "||A|A-ADD|M|M-MODIFY|I|I-INQURY|C|C-CANCEL|V|V-VERIFY",
                            "help": "N",
                            "helpLink": "helpload",
                            "xml": "Y",
                            "xmlname": "",
                            "Xpath": "/",
                            "maxCol": "1",
                            "col": "0",
                            "childs": []
                        }, {
                            "group": "USS",
                            "name": "method",
                            "label": "பணி",
                            "பணி": "NONE",
                            "desc": "",
                            "htmlType": "TEXT",
                            "entitle": "READONLY",
                            "enttlname": "",
                            "mndf": "Y",
                            "dataType": "VARCHAR",
                            "cclass": "ctable",
                            "parent": "",
                            "parentHtmlType": "",
                            "validate": "",
                            "dflt": "",
                            "min": "0",
                            "max": "60",
                            "tips": "",
                            "onkeyup": "onKeyUp(this);",
                            "onchange": "onChange(this);",
                            "onkeydown": "onKeyDown(this);",
                            "onkeypress": "onKeyPress(this);",
                            "onclick": "onClick(this);",
                            "onblure": "onBlure(this);",
                            "listVal": "||A|A-ADD|M|M-MODIFY|I|I-INQURY|C|C-CANCEL|V|V-VERIFY",
                            "help": "N",
                            "helpLink": "helpload",
                            "xml": "Y",
                            "xmlname": "",
                            "Xpath": "/",
                            "maxCol": "1",
                            "col": "0",
                            "childs": []
                        }]
                    }, {
                        "group": "USS",
                        "name": "சேவைName",
                        "label": "",
                        "பணி": "NONE",
                        "desc": "",
                        "htmlType": "VARCHAR",
                        "entitle": "READONLY",
                        "enttlname": "",
                        "mndf": "N",
                        "dataType": "VARCHAR",
                        "cclass": "ctable",
                        "parent": "",
                        "parentHtmlType": "",
                        "validate": "",
                        "dflt": "",
                        "min": "0",
                        "max": "60",
                        "tips": "",
                        "onkeyup": "onKeyUp(this);",
                        "onchange": "onChange(this);",
                        "onkeydown": "onKeyDown(this);",
                        "onkeypress": "onKeyPress(this);",
                        "onclick": "onClick(this);",
                        "onblure": "onBlure(this);",
                        "listVal": "||A|A-ADD|M|M-MODIFY|I|I-INQURY|C|C-CANCEL|V|V-VERIFY",
                        "help": "N",
                        "helpLink": "helpload",
                        "xml": "Y",
                        "xmlname": "",
                        "Xpath": "/",
                        "maxCol": "1",
                        "col": "0",
                        "childs": []
                    }]
                }];
                var DataJson = [{
                    "சேவைDetails": [{
                        "சேவைs": [{
                            "resSjson": "Response schema json",
                            "reqSjson": "",
                            "authReqd": "",
                            "பணி": req.params.பணி,
                            "method": "POST"
                        }],
                        "சேவைName": req.params.தொகுதி
                    }]
                }]
                log.info("calling InvokeDB for சேவைDetails");

                idb.InvokeDB(pageId, pageType, SchemaJson, DataJson, SchemaJson, function (err, respSchemaJson, respDataJson) {
                    if (err) {
                        log.error(" Request has bad format:", err);
                        res.statusCode = 404;
                        return res.send({
                            errorDesc: "Request is not found:" + err.message
                        });
                    }
                    log.info("calling validate response ");
                    err = heaeriesjson.valWithSch(respSchemaJson, respDataJson)
                    if (err) {
                        log.error("சேவை Details : Response Schema validation is failed : ", err);
                        res.statusCode = 500;
                        res.send({
                            errorDesc: "Internal Server Error"
                        });
                        throw new Error("Response Schema Validation Failed" + err.message);
                    }
                    log.info("calling validate response ");
                    //TODO: if பணி is not found return 404
                    findசேவை(respDataJson[0].சேவைDetails[0].சேவைs, req.params.பணி, req.getMethod(), function (err, currentசேவை) {
                        if (err) {
                            log.error("findசேவை : ", err);
                            res.statusCode = err.httpRespCode;
                            return res.send({
                                errorDesc: err.name + " " + err.message
                            });
                        }

                        clientParamInput(req, function (err, req, paramObj) {
                            log.info(" paramObj: ", paramObj);

                            if (err) {
                                log.error("Request has invalid format: ", err);
                                res.statusCode = 400;
                                return res.send({
                                    errorDesc: err.message
                                });
                            }
                            var apiPageId = req.params.தொகுதி;
                            var apiPageType = req.params.பணி;
                            log.info("currentசேவை.reqSjson[0].name =" + currentசேவை.reqSjson[0].name);
                            log.info("param =" + req.getParam(currentசேவை.reqSjson[0].name));
                            log.info("req.param:" + JSON.stringify(req.params));
                            log.info("req.body:" + JSON.stringify(req.body));
                            var apiParamDataJson = eval(req.getParam(currentசேவை.reqSjson[0].name));
                            log.info("validate input");
                            err = heaeriesjson.valWithSch(currentசேவை.reqSjson, apiParamDataJson);
                            if (err) {
                                log.error("Request has invalid format: ", err);
                                res.statusCode = 400;
                                return res.send({
                                    errorDesc: err.message
                                });
                            }
                            log.info("call api mசேவையகம்er..", JSON.stringify(apiParamDataJson));
                            idb.InvokeDB(apiPageId, apiPageType, currentசேவை.reqSjson, apiParamDataJson, currentசேவை.resSjson, function (err, apiSchemaJson, apiDataJson) {
                                //res.send({"சேவைDetails" : respDataJson[0].சேவைDetails});
                                if (err) {
                                    log.error("API  InvokeDB :", err);
                                    res.statusCode = err.httpRespCode;
                                    return res.send({
                                        errorDesc: err.name + " " + err.message
                                    });
                                }

                                err = heaeriesjson.valWithSch(apiSchemaJson, apiDataJson);
                                if (err) {
                                    log.error("Internal Server Errot", err);
                                    res.statusCode = 500;
                                    return res.send({
                                        errorDesc: err.message
                                    });
                                }

                                res.statusCode = 201;
                                signToken(res, secretkey, function (res) {
                                    return res.send(apiDataJson);
                                });
                            });

                        });
                    });
                });
                */
        return res.send({
            "test": "test"
        });
    });
}

சேவையகம்.post('/:சேவை/:தொகுதி/:பணி', சேவைHandler);
சேவையகம்.get('/:சேவை/:தொகுதி/:பணி', சேவைHandler);

சேவையகம்.post('/service/:தொகுதி/:பணி', சேவைHandler);
சேவையகம்.get('/service/:தொகுதி/:பணி', சேவைHandler);

சேவையகம்.use(வெளிப்படுத்து.static(__dirname + '/public'));
var server = சேவையகம்.listen(கட்டமைப்பு.இணையமுகம், function () {
    பதிவு.info("%s இணையத்தளம் %d என்ற இணையமுகத்தில் கவனிக்க தொடக்கிவிட்டது", கட்டமைப்பு.இணையதளம், server.address().port);
    console.log('%s இணையத்தளம் %d என்ற இணையமுகத்தில் கவனிக்க தொடக்கிவிட்டது ', கட்டமைப்பு.இணையதளம், server.address().port);
});