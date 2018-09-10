var heaeriesjson = require("./heaeriesjson");



var sjson = [{"group":"USS","name":"loginDetailsRequest","label":"Basic Details","task":"ES","desc":"","htmlType":"PAGE","entitle":"NONREADONLY","enttlname":"","mndf":"N","dataType":"PAGE","cclass":"ctable","parent":"","parentHtmlType":"","validate":"","dflt":"","min":"0","max":"60","tips":"","onkeyup":"onKeyUp(this);","onchange":"onChange(this);","onkeydown":"onKeyDown(this);","onkeypress":"onKeyPress(this);","onclick":"onClick(this);","onblure":"onBlure(this);","listVal":"0","help":"N","helpLink":"helpload","xml":"Y","xmlname":"","Xpath":"/","maxCol":"1","col":"0","childs":
	[
	{"group":"USS","name":"userDeatils","label":"","task":"NONE","desc":"","htmlType":"CONTAINER","entitle":"READONLY","enttlname":"","mndf":"Y","dataType":"CONTAINER","cclass":"ctable","parent":"","parentHtmlType":"","validate":"","dflt":"","min":"0","max":"60","tips":"","onkeyup":"onKeyUp(this);","onchange":"onChange(this);","onkeydown":"onKeyDown(this);","onkeypress":"onKeyPress(this);","onclick":"onClick(this);","onblure":"onBlure(this);","listVal":"||A|A-ADD|M|M-MODIFY|I|I-INQURY|C|C-CANCEL|V|V-VERIFY","help":"N","helpLink":"helpload","xml":"Y","xmlname":"","Xpath":"/","maxCol":"1","col":"0","childs":
		[{"group":"USS","name":"username","label":"Username","task":"NONE","desc":"","htmlType":"TEXT","entitle":"READONLY","enttlname":"","mndf":"Y","dataType":"VARCHAR","cclass":"ctable","parent":"","parentHtmlType":"","validate":"","dflt":"","min":"0","max":"60","tips":"","onkeyup":"onKeyUp(this);","onchange":"onChange(this);","onkeydown":"onKeyDown(this);","onkeypress":"onKeyPress(this);","onclick":"onClick(this);","onblure":"onBlure(this);","listVal":"||A|A-ADD|M|M-MODIFY|I|I-INQURY|C|C-CANCEL|V|V-VERIFY","help":"N","helpLink":"helpload","xml":"Y","xmlname":"","Xpath":"/","maxCol":"1","col":"0","childs":[]}
		,{"group":"USS","name":"password","label":"Password","task":"NONE","desc":"","htmlType":"TEXT","entitle":"READONLY","enttlname":"","mndf":"Y","dataType":"VARCHAR","cclass":"ctable","parent":"","parentHtmlType":"","validate":"","dflt":"","min":"0","max":"60","tips":"","onkeyup":"onKeyUp(this);","onchange":"onChange(this);","onkeydown":"onKeyDown(this);","onkeypress":"onKeyPress(this);","onclick":"onClick(this);","onblure":"onBlure(this);","listVal":"||A|A-ADD|M|M-MODIFY|I|I-INQURY|C|C-CANCEL|V|V-VERIFY","help":"N","helpLink":"helpload","xml":"Y","xmlname":"","Xpath":"/","maxCol":"1","col":"0","childs":[]}
		]
	}
	,{"group":"USS","name":"portalDeatils","label":"","task":"NONE","desc":"","htmlType":"CONTAINER","entitle":"READONLY","enttlname":"","mndf":"Y","dataType":"CONTAINER","cclass":"ctable","parent":"","parentHtmlType":"","validate":"","dflt":"","min":"0","max":"60","tips":"","onkeyup":"onKeyUp(this);","onchange":"onChange(this);","onkeydown":"onKeyDown(this);","onkeypress":"onKeyPress(this);","onclick":"onClick(this);","onblure":"onBlure(this);","listVal":"||A|A-ADD|M|M-MODIFY|I|I-INQURY|C|C-CANCEL|V|V-VERIFY","help":"N","helpLink":"helpload","xml":"Y","xmlname":"","Xpath":"/","maxCol":"1","col":"0","childs":[{"group":"USS","name":"portalKey","label":"","task":"NONE","desc":"","htmlType":"TEXT","entitle":"READONLY","enttlname":"","mndf":"Y","dataType":"VARCHAR","cclass":"ctable","parent":"","parentHtmlType":"","validate":"","dflt":"","min":"0","max":"60","tips":"","onkeyup":"onKeyUp(this);","onchange":"onChange(this);","onkeydown":"onKeyDown(this);","onkeypress":"onKeyPress(this);","onclick":"onClick(this);","onblure":"onBlure(this);","listVal":"||A|A-ADD|M|M-MODIFY|I|I-INQURY|C|C-CANCEL|V|V-VERIFY","help":"N","helpLink":"helpload","xml":"Y","xmlname":"","Xpath":"/","maxCol":"1","col":"0","childs":[]}]
	}
	]
}]; 
/*
var  json = [{"loginDetailsRequest":[{"userDeatils":[{"username":"Username","password":"Password"}],
					"portalDeatils":[{"portalKey":"test", "portalKey2" : "thie is error"}]}]}];
 
 


var err=heaeriesjson.valWithSch(sjson, json);
if (err) {
	return	console.log(err);
}
*/

var rec= [{"loginDetailsRequest":[{"userDeatils":[{"username":"Username","password":"Password"}],"portalDeatils":[{"portalKey":"test"}]}]}]
var recSch= [{"childs":[{"childs":[{"childs":[],"col":"0","maxCol":"1","Xpath":"/","xmlname":"","xml":"Y","helpLink":"helpload","help":"N","listVal":"||A|A-ADD|M|M-MODIFY|I|I-INQURY|C|C-CANCEL|V|V-VERIFY","onblure":"onBlure(this);","onclick":"onClick(this);","onkeypress":"onKeyPress(this);","onkeydown":"onKeyDown(this);","onchange":"onChange(this);","onkeyup":"onKeyUp(this);","tips":"","max":"60","min":"0","dflt":"","validate":"","parentHtmlType":"","parent":"","cclass":"ctable","dataType":"VARCHAR","mndf":"Y","enttlname":"","entitle":"READONLY","htmlType":"TEXT","desc":"","task":"NONE","label":"Username","name":"username","group":"USS"},{"childs":[],"col":"0","maxCol":"1","Xpath":"/","xmlname":"","xml":"Y","helpLink":"helpload","help":"N","listVal":"||A|A-ADD|M|M-MODIFY|I|I-INQURY|C|C-CANCEL|V|V-VERIFY","onblure":"onBlure(this);","onclick":"onClick(this);","onkeypress":"onKeyPress(this);","onkeydown":"onKeyDown(this);","onchange":"onChange(this);","onkeyup":"onKeyUp(this);","tips":"","max":"60","min":"0","dflt":"","validate":"","parentHtmlType":"","parent":"","cclass":"ctable","dataType":"VARCHAR","mndf":"Y","enttlname":"","entitle":"READONLY","htmlType":"TEXT","desc":"","task":"NONE","label":"Password","name":"password","group":"USS"}],"col":"0","maxCol":"1","Xpath":"/","xmlname":"","xml":"Y","helpLink":"helpload","help":"N","listVal":"||A|A-ADD|M|M-MODIFY|I|I-INQURY|C|C-CANCEL|V|V-VERIFY","onblure":"onBlure(this);","onclick":"onClick(this);","onkeypress":"onKeyPress(this);","onkeydown":"onKeyDown(this);","onchange":"onChange(this);","onkeyup":"onKeyUp(this);","tips":"","max":"60","min":"0","dflt":"","validate":"","parentHtmlType":"","parent":"","cclass":"ctable","dataType":"CONTAINER","mndf":"Y","enttlname":"","entitle":"READONLY","htmlType":"CONTAINER","desc":"","task":"NONE","label":"","name":"userDeatils","group":"USS"},{"childs":[{"childs":[],"col":"0","maxCol":"1","Xpath":"/","xmlname":"","xml":"Y","helpLink":"helpload","help":"N","listVal":"||A|A-ADD|M|M-MODIFY|I|I-INQURY|C|C-CANCEL|V|V-VERIFY","onblure":"onBlure(this);","onclick":"onClick(this);","onkeypress":"onKeyPress(this);","onkeydown":"onKeyDown(this);","onchange":"onChange(this);","onkeyup":"onKeyUp(this);","tips":"","max":"60","min":"0","dflt":"","validate":"","parentHtmlType":"","parent":"","cclass":"ctable","dataType":"VARCHAR","mndf":"Y","enttlname":"","entitle":"READONLY","htmlType":"TEXT","desc":"","task":"NONE","label":"","name":"portalKey","group":"USS"}],"col":"0","maxCol":"1","Xpath":"/","xmlname":"","xml":"Y","helpLink":"helpload","help":"N","listVal":"||A|A-ADD|M|M-MODIFY|I|I-INQURY|C|C-CANCEL|V|V-VERIFY","onblure":"onBlure(this);","onclick":"onClick(this);","onkeypress":"onKeyPress(this);","onkeydown":"onKeyDown(this);","onchange":"onChange(this);","onkeyup":"onKeyUp(this);","tips":"","max":"60","min":"0","dflt":"","validate":"","parentHtmlType":"","parent":"","cclass":"ctable","dataType":"CONTAINER","mndf":"Y","enttlname":"","entitle":"READONLY","htmlType":"CONTAINER","desc":"","task":"NONE","label":"","name":"portalDeatils","group":"USS"}],"col":"0","maxCol":"1","Xpath":"/","xmlname":"","xml":"Y","helpLink":"helpload","help":"N","listVal":"0","onblure":"onBlure(this);","onclick":"onClick(this);","onkeypress":"onKeyPress(this);","onkeydown":"onKeyDown(this);","onchange":"onChange(this);","onkeyup":"onKeyUp(this);","tips":"","max":"60","min":"0","dflt":"","validate":"","parentHtmlType":"","parent":"","cclass":"ctable","dataType":"PAGE","mndf":"Y","enttlname":"","entitle":"NONREADONLY","htmlType":"PAGE","desc":"","task":"ES","label":"Basic Details","name":"loginDetailsRequest","group":"USS"}]

var err=heaeriesjson.valWithSch(recSch, rec);
if (err) {
	return	console.log(err);
}


console.log("Successfully processed");
