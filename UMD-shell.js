(function UMD(name,context,definition){
	if (typeof module !== "undefined" && module.exports) { module.exports = definition(); }
	else if (typeof define === "function" && define.amd) { define(definition); }
	else { context[name] = definition(name,context); }
})("YourModuleName",this,function DEF(name,context){

	var publicAPI = { /*..*/ };

	return publicAPI;
});
