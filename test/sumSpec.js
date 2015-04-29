var expect = require('chai').expect;
var sum = require('../lib/sum.js');

describe('加法工具 sum', function(){
	describe('陣列加總 #fromArray', function(){
		it('傳入空陣列應該回傳0', function(){
			//Given
			var numbers = [];
			//When
			var results = sum.fromArray(numbers);
			//Then
			expect(results).to.equal(0);
		});

		it('傳入一串數字，總合要正確', function(){
			var numbers = [1,2,3];
			var results = sum.fromArray(numbers);

			expect(results).to.equal(6);
		});

		it('傳入內部帶有字串的陣列要觸發例外', function(){
			var numbers = [1,'a',3];

			//expect(function(){sum.fromArray(numbers);}).to.throw('element type error');
			expect(sum.fromArray.bind(sum, numbers)).to.throw(/element type error/);
		});
	});
});