exports.testSomething = function(test){
	test.ok(true, "this assertion should pass");
};
exports.testSomethingElse = function(test) {
	test.ok(true, "this assertion should fail");
};

