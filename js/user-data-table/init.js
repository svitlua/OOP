(function() {

	var userDataTable = null;

	function init() {
	$( "#addPersonBtn" ).click(function() {
		if (userDataTable === null){
		var mainCnt = $('#main_cnt');
		userDataTable = new Table();
		mainCnt.append(userDataTable.render());
		}
		var name = $('#name').val();
		var sex = $('#sex').val();
		var birth_date = $('#birth_date').val();
		var address = $('#address').val();
		var phone = $('#phone').val();
		var email = $('#email').val();

		var user = new User(name, sex, birth_date, address, phone, email);
		console.log(user);
		userDataTable.addChild(user);
		console.log(userDataTable);
		});
	};

	init();
})();
