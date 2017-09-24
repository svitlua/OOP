function Casino(){
  this.elem = null;
  this.slotMachineArray = [];
  this.money = 0;
};

Casino.prototype.render = function (){
  this.elem = $('<div>');
  this.elem.addClass('casino');

  var btn_cnt = $('<div>');
  var getMoneyBtn = $('<button>');
  getMoneyBtn.addClass('getMoneyBtn');
  getMoneyBtn.append('Money in the Casino');
  var getMachineBtn = $('<button>');
  getMachineBtn.addClass('getMachineBtn');
  getMachineBtn.append('Machines in the Casino');
  var addMachineBtn = $('<button>');
  addMachineBtn.addClass('addMachineBtn');
  addMachineBtn.append('Add slot machine');
  var removeMachineBtn = $('<button>');
  removeMachineBtn.addClass('removeMachineBtn');
  removeMachineBtn.append('Remove slot machine');

  btn_cnt.append(getMoneyBtn, getMachineBtn, addMachineBtn, removeMachineBtn);
  btn_cnt.addClass("btn_cnt");
  this.elem.append(btn_cnt);

  ///Get money in the casino BUTTON FUCNTIONALITY
  this.elem.find('.getMoneyBtn').on('click', function(){
    alert ("Money in the Casino: " + this.getMoney());
  }.bind(this));
  ///Count slot machines in the casino BUTTON FUCNTIONALITY
  this.elem.find('.getMachineBtn').on('click', function(){
    alert ("Slotmachines in the Casino: " + this.countSlotMachine());
  }.bind(this));

  ///Add New slot machine BUTTON FUCNTIONALITY
  this.elem.find('.addMachineBtn').on('click', function(){
    this.addNewMachine();
  }.bind(this));

  ///Add remove machine BUTTON FUCNTIONALITY
  this.elem.find('.removeMachineBtn').on('click', function(){
    var machine_num = prompt("Enter number of slotmachine to remove", 1);
    var num = parseInt(machine_num) - 1;
    if (num>=0 && num<this.slotMachineArray.length){
      this.removeSlotMachine(num);
    }else{
      alert ("Enter correct number of slot machine");
    }
  }.bind(this));

  return this.elem;
};

Casino.prototype.addSlotMachine = function(num) {
    var machine = new SlotMachine(num);
    this.slotMachineArray.push(machine);
    this.elem.append(machine.render());
};

Casino.prototype.addNewMachine = function(){
  var maxSumMachine = _.max(this.slotMachineArray, function(slot){ return slot.data["moneyLeft"]; });
  var maxsum = maxSumMachine.data["moneyLeft"];
  console.log(this);
  var sum = (maxsum - (maxsum % 2))/2;
  maxSumMachine.removeMoney(sum);
  var machine = new SlotMachine(sum);
  this.slotMachineArray.push(machine);
  console.log(this);
  this.elem.append(machine.render());
  for (var i=0; i<this.slotMachineArray.length; i++){
    this.slotMachineArray[i].clearFields();
    this.slotMachineArray[i].renderFields();
  }
};

Casino.prototype.removeSlotMachine = function(num) {
    if (num<this.slotMachineArray.length){
      var sum = this.slotMachineArray[num].data["moneyLeft"];
      console.log(this.slotMachineArray);
      this.slotMachineArray[num].destroy();
      this.slotMachineArray.splice(num, 1);
      console.log(this.slotMachineArray);
      if(this.slotMachineArray.length>=1){
        this.distributeMoney(sum);
      }
      this.render();
    }else {
      alert ("Slot Machine Number "+num+" doesnt exist");
    }
};

Casino.prototype.countSlotMachine = function(){
  return this.slotMachineArray.length;
};

Casino.prototype.distributeMoney = function (sum){
  var slotNumber = this.slotMachineArray.length;
  var addToFirtSlot = sum % slotNumber;
  this.slotMachineArray[0].putMoney(addToFirtSlot);
  var addEach = (sum - addToFirtSlot) / slotNumber;
  for (var i=0; i<this.slotMachineArray.length; i++){
    this.slotMachineArray[i].putMoney(addEach);
    this.slotMachineArray[i].clearFields();
    this.slotMachineArray[i].renderFields();
  }
};

Casino.prototype.getMoney = function (){
  var sum = 0;
  for (var i=0; i<this.slotMachineArray.length; i++){
    sum += this.slotMachineArray[i].data["moneyLeft"];
  }
  return sum;
};
