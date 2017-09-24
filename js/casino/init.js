(function() {

	  var casino = null;

	  function init() {
      var enter_num = prompt("Enter number of slot machines in the casino", 4);
      var num = parseInt(enter_num);
      var enter_money = prompt("Enter money in the casino", 100);
      var money = parseInt(enter_money);

      if (num>0 && money>0){
        var casino_cnt = $('#casino_cnt');
    		casino = new Casino();
    		casino_cnt.append(casino.render());

        var addToFirtSlot = money % num;
        var addEach = (money - addToFirtSlot) / num;
        for (var i=0; i<num; i++){
          if(i===0){
          casino.addSlotMachine(addEach+addToFirtSlot);
        }else {
          casino.addSlotMachine(addEach);
        }
      }

      }
      else{
        alert("Enter correct number!");
        init();
      }

  	};
  	init();
})();
