describe('Favorite Food Filter', function () {
	var $controller;

	beforeEach(module('app'));

	beforeEach(inject(function ($injector) {
		$filter = $injector.get('$filter');
	}));

	it('should filter on favorite food correctly', function() {
		var mockedList = [{
				name: 'Name1',
				favoriteFood: 'burger'
			},
			{
				name: 'Name2',
				favoriteFood: 'pizza'
			},
			{
				name: 'Name3',
				favoriteFood: 'salad'
			}];

			var results = $filter('favoriteFood')(mockedList, 'pizza');

			expect(results.length).toBe(1);
			expect(results[0].name).toBe('Name2');
	});
});
