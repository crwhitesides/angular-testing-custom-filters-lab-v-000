describe('removeAllVowels Filter', function () {
	var $controller, removeAllVowels;

	beforeEach(module('app'));

	beforeEach(inject(function ($injector) {
		removeAllVowels = $filter('removeAllVowels');
	}));

	it('should remove all vowels from a string', function() {
		expect(removeAllVowels('christian')).toEqual('chrstn');
	});
});
