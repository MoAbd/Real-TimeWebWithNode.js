#!/usr/bin/env node

function printHelp(){
	console.log("3.js (c) MoAbd")
	console.log("");
	console.log("usage:");
	console.log("--help            print this help");
	console.log("--file={NAME}     read the file of {NAME}");
	console.log("");
}

var args = require("minimist")(process.argv.slice(2),{ string: "file"});

if (args.help || !args.file){
	printHelp();
	process.exit(3)
}

var hello= require("./helloworld3.js");
hello.say(args.file)
.val(function(contents){
	console.log(contents.toString());
})
.or(function(err) {
	console.error(err);
});

