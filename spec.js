describe("Hello World", function(){
 it('should increment value by 1', function(){
	expect(add(1)).toBe(2);
	function add(value){
	return value +1;};
});

 it('should decrement value by 1', function(){
	expect(sub(5)).toBe(4);
	function sub(value){
	return value -1;};


});
 it('should be even', function(){
	expect(even(10)).toBe(0);
	function even(value){
	return value%2;};


});


});