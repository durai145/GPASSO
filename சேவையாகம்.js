var வெளிப்படுத்து = require('express');
var கட்டமைப்பு = require('./கட்டமைப்பு/கட்டமைப்பு.json');
var சேவையகம் = வெளிப்படுத்து();
var தரவுத்தளவுஇயக்கம் = require('./தரவுத்தளவுஇயக்கம்/InvokeDB');
//var log = require('log')(தொகுதி);
var Log = require('log'),
    fs = require('fs'),
    stream = fs.createWriteStream(__dirname + '/file.log', {
        flags: 'a'
    }),
    log = new Log('debug', stream);
பதிவு = log;
log.debug('a debug message');

var உடல்பாகுபாடு = require('body-parser');
சேவையகம்.use(உடல்பாகுபாடு.json());
சேவையகம்.use(உடல்பாகுபாடு.urlencoded({
    limit: '100mb',
    extended: true
}));



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

serviceHandler = சேவைக்கையாளி = function(மனு, பதில்) {
    மனு.params.பணி = மனு.params.task;
    மனு.params.தொகுதி = மனு.params.module;
    பதிவு.info("மனு.params.பணி:", மனு.params.பணி, "மனு.params.தொகுதி", மனு.params.தொகுதி);
    மையசெயல்பாடுகளைசேர்(மனு, function (மனு) {

        பதிவு.info("calling மையசெயல்பாடுகளைசேர்");

        பதிவு.debug();
        //log.info(மனு);

        var pageId = "ServiceDetails";
        var pageType = 'getServiceDetails';
        //	var SchemaJson=[{"group":"USS","name":"சேவைDetails","label":"Basic Details","பணி":"ES","desc":"","htmlType":"PAGE","entitle":"NONREADONLY","enttlname":"","mndf":"N","dataType":"PAGE","cclass":"ctable","parent":"","parentHtmlType":"","validate":"","dflt":"","min":"0","max":"60","tips":"","onkeyup":"onKeyUp(this);","onchange":"onChange(this);","onkeydown":"onKeyDown(this);","onkeypபதில்s":"onKeyPபதில்s(this);","onclick":"onClick(this);","onblure":"onBlure(this);","listVal":"0","help":"N","helpLink":"helpload","xml":"Y","xmlname":"","Xpath":"/","maxCol":"1","col":"0","childs":[{"group":"USS","name":"சேவைs","label":"சேவைs","பணி":"NONE","desc":"","htmlType":"CONTAINER","entitle":"READONLY","enttlname":"","mndf":"N","dataType":"CONTAINER","cclass":"ctable","parent":"","parentHtmlType":"","validate":"","dflt":"","min":"0","max":"60","tips":"","onkeyup":"onKeyUp(this);","onchange":"onChange(this);","onkeydown":"onKeyDown(this);","onkeypபதில்s":"onKeyPபதில்s(this);","onclick":"onClick(this);","onblure":"onBlure(this);","listVal":"||A|A-ADD|M|M-MODIFY|I|I-INQURY|C|C-CANCEL|V|V-VERIFY","help":"N","helpLink":"helpload","xml":"Y","xmlname":"","Xpath":"/","maxCol":"unlimited","col":"0","childs":[{"group":"USS","name":"பதில்Sjson","label":"பதில்ponse schema json","பணி":"NONE","desc":"","htmlType":"TEXT","entitle":"READONLY","enttlname":"","mndf":"N","dataType":"VARCHAR","cclass":"ctable","parent":"","parentHtmlType":"","validate":"","dflt":"","min":"0","max":"unlimited","tips":"","onkeyup":"onKeyUp(this);","onchange":"onChange(this);","onkeydown":"onKeyDown(this);","onkeypபதில்s":"onKeyPபதில்s(this);","onclick":"onClick(this);","onblure":"onBlure(this);","listVal":"||A|A-ADD|M|M-MODIFY|I|I-INQURY|C|C-CANCEL|V|V-VERIFY","help":"N","helpLink":"helpload","xml":"Y","xmlname":"","Xpath":"/","maxCol":"1","col":"0","childs":[]},{"group":"USS","name":"மனுSjson","label":"மனுuest schema json","பணி":"NONE","desc":"","htmlType":"TEXT","entitle":"READONLY","enttlname":"","mndf":"N","dataType":"VARCHAR","cclass":"ctable","parent":"","parentHtmlType":"","validate":"","dflt":"","min":"0","max":"unlimited","tips":"","onkeyup":"onKeyUp(this);","onchange":"onChange(this);","onkeydown":"onKeyDown(this);","onkeypபதில்s":"onKeyPபதில்s(this);","onclick":"onClick(this);","onblure":"onBlure(this);","listVal":"||A|A-ADD|M|M-MODIFY|I|I-INQURY|C|C-CANCEL|V|V-VERIFY","help":"N","helpLink":"helpload","xml":"Y","xmlname":"","Xpath":"/","maxCol":"1","col":"0","childs":[]},{"group":"USS","name":"authமனுd","label":"மனுuest Schema Json","பணி":"NONE","desc":"","htmlType":"TEXT","entitle":"READONLY","enttlname":"","mndf":"N","dataType":"VARCHAR","cclass":"ctable","parent":"","parentHtmlType":"","validate":"","dflt":"","min":"0","max":"60","tips":"","onkeyup":"onKeyUp(this);","onchange":"onChange(this);","onkeydown":"onKeyDown(this);","onkeypபதில்s":"onKeyPபதில்s(this);","onclick":"onClick(this);","onblure":"onBlure(this);","listVal":"||A|A-ADD|M|M-MODIFY|I|I-INQURY|C|C-CANCEL|V|V-VERIFY","help":"N","helpLink":"helpload","xml":"Y","xmlname":"","Xpath":"/","maxCol":"1","col":"0","childs":[]},{"group":"USS","name":"பணி","label":"பணி","பணி":"NONE","desc":"","htmlType":"TEXT","entitle":"READONLY","enttlname":"","mndf":"N","dataType":"VARCHAR","cclass":"ctable","parent":"","parentHtmlType":"","validate":"","dflt":"","min":"0","max":"60","tips":"","onkeyup":"onKeyUp(this);","onchange":"onChange(this);","onkeydown":"onKeyDown(this);","onkeypபதில்s":"onKeyPபதில்s(this);","onclick":"onClick(this);","onblure":"onBlure(this);","listVal":"||A|A-ADD|M|M-MODIFY|I|I-INQURY|C|C-CANCEL|V|V-VERIFY","help":"N","helpLink":"helpload","xml":"Y","xmlname":"","Xpath":"/","maxCol":"1","col":"0","childs":[]}]},{"group":"USS","name":"சேவைName","label":"","பணி":"NONE","desc":"","htmlType":"VARCHAR","entitle":"READONLY","enttlname":"","mndf":"N","dataType":"VARCHAR","cclass":"ctable","parent":"","parentHtmlType":"","validate":"","dflt":"","min":"0","max":"60","tips":"","onkeyup":"onKeyUp(this);","onchange":"onChange(this);","onkeydown":"onKeyDown(this);","onkeypபதில்s":"onKeyPபதில்s(this);","onclick":"onClick(this);","onblure":"onBlure(this);","listVal":"||A|A-ADD|M|M-MODIFY|I|I-INQURY|C|C-CANCEL|V|V-VERIFY","help":"N","helpLink":"helpload","xml":"Y","xmlname":"","Xpath":"/","maxCol":"1","col":"0","childs":[]}]}];
        var SchemaJson = require("./" + கட்டமைப்பு.சேவைகோரிக்கை);
        var DataJson = [{
            "ServiceDetails": [{
                "services": [{
                    "பதில்Sjson": "பதில்ponse schema json",
                    "மனுSjson": "",
                    "authமனுd": "",
                    "பணி": மனு.params.பணி,
                    "method": "POST"
                }],
                "serviceName": மனு.params.தொகுதி
            }]
        }]
        log.info("calling InvokeDB for ServiceDetails");

        தரவுத்தளவுஇயக்கம்.InvokeDB(pageId, pageType, SchemaJson, DataJson, SchemaJson, function (err, பதில்pSchemaJson, பதில்pDataJson) {
            if (err) {
                log.error(" மனுuest has bad format:", err);
                பதில்.statusCode = 404;
                return பதில்.send({
                    errorDesc: "மனுuest is not found:" + err.message
                });
            }
            log.info("calling validate பதில்ponse ");
            err = heaeriesjson.valWithSch(பதில்pSchemaJson, பதில்pDataJson)
            if (err) {
                log.error("சேவை Details : பதில்ponse Schema validation is failed : ", err);
                பதில்.statusCode = 500;
                பதில்.send({
                    errorDesc: "Internal Server Error"
                });
                throw new Error("பதில்ponse Schema Validation Failed" + err.message);
            }
            log.info("calling validate பதில்ponse ");
            //TODO: if பணி is not found return 404
            சேவையைதேடு(பதில்pDataJson[0].சேவைDetails[0].சேவைs, மனு.params.பணி, மனு.getMethod(), function (err, currentசேவை) {
                if (err) {
                    log.error("சேவையைதேடு" : ", err);
                    பதில்.statusCode = err.httpபதில்pCode;
                    return பதில்.send({
                        errorDesc: err.name + " " + err.message
                    });
                }

                clientParamInput(மனு, function (err, மனு, paramObj) {
                    log.info(" paramObj: ", paramObj);

                    if (err) {
                        log.error("மனுuest has invalid format: ", err);
                        பதில்.statusCode = 400;
                        return பதில்.send({
                            errorDesc: err.message
                        });
                    }
                    var apiPageId = மனு.params.தொகுதி;
                    var apiPageType = மனு.params.பணி;
                    log.info("currentசேவை.மனுSjson[0].name =" + currentசேவை.மனுSjson[0].name);
                    log.info("param =" + மனு.getParam(currentசேவை.மனுSjson[0].name));
                    log.info("மனு.param:" + JSON.stringify(மனு.params));
                    log.info("மனு.body:" + JSON.stringify(மனு.body));
                    var apiParamDataJson = eval(மனு.getParam(currentசேவை.மனுSjson[0].name));
                    log.info("validate input");
                    err = heaeriesjson.valWithSch(currentசேவை.மனுSjson, apiParamDataJson);
                    if (err) {
                        log.error("மனுuest has invalid format: ", err);
                        பதில்.statusCode = 400;
                        return பதில்.send({
                            errorDesc: err.message
                        });
                    }
                    log.info("call api mசேவையகம்er..", JSON.stringify(apiParamDataJson));
                    தரவுத்தளவுஇயக்கம்.InvokeDB(apiPageId, apiPageType, currentசேவை.மனுSjson, apiParamDataJson, currentசேவை.பதில்Sjson, function (err, apiSchemaJson, apiDataJson) {
                        //பதில்.send({"சேவைDetails" : பதில்pDataJson[0].சேவைDetails});
                        if (err) {
                            log.error("API  InvokeDB :", err);
                            பதில்.statusCode = err.httpபதில்pCode;
                            return பதில்.send({
                                errorDesc: err.name + " " + err.message
                            });
                        }

                        err = heaeriesjson.valWithSch(apiSchemaJson, apiDataJson);
                        if (err) {
                            log.error("Internal Server Errot", err);
                            பதில்.statusCode = 500;
                            return பதில்.send({
                                errorDesc: err.message
                            });
                        }

                        பதில்.statusCode = 201;
                        signToken(பதில், secretkey, function (பதில்) {
                            return பதில்.send(apiDataJson);
                        });
                    });

                });
            });
        });
        return பதில்.send({
            "test": "test"
        });
    });
}


சேவையைதேடு = function (services, task, method, callback) {
    for (var i = 0; i < services.length; i++) {
        if ((services[i].task == task) && (services[i].method == method)) {
            return callback(null, services[i]);
        }
    }

    var TaskList = new Array();
    services.forEach(function (elem) {
        TaskList.push(elem.task)
    });

    if (!TaskList.some(function (elem) {
            return elem == task
        })) {
        return callback(new TaskNotFound("Task is not found :[" + task + "] in " + TaskList));
    } else {
        return callback(new MethodIsNotFound("Method is not found :[" + task + "]"));
    }
}


சேவையகம்.post('/service/:module/:task', சேவைHandler);
சேவையகம்.get('/service/:module/:task', சேவைHandler);

சேவையகம்.use(வெளிப்படுத்து.static(__dirname + '/public'));
var server = சேவையகம்.listen(கட்டமைப்பு.இணையமுகம், function () {
    பதிவு.info("%s இணையத்தளம் %d என்ற இணையமுகத்தில் கவனிக்க தொடக்கிவிட்டது", கட்டமைப்பு.இணையதளம், server.addபதில்s().port);
    console.log('%s இணையத்தளம் %d என்ற இணையமுகத்தில் கவனிக்க தொடக்கிவிட்டது ', கட்டமைப்பு.இணையதளம், server.addபதில்s().port);
});