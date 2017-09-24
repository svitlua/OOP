function SlotMachine(num){
  this.elem = null;
  this.data ={
    num1: 0,
    num2: 0,
    num3: 0,
    youWin: 0,
    moneyLeft: num,
    isLucky: false
  }
}

SlotMachine.prototype.render = function(){
  this.elem = $('<div>');
  this.elem.addClass('slotmachine');
  this.renderFields();
  return this.elem;
};

SlotMachine.prototype.renderFields = function(){
  var list = $('<ul>');
  var li_1 =$('<li>');
  li_1.append(this.data["num1"]);
  var li_2 =$('<li>');
  li_2.append(this.data["num2"]);
  var li_3 =$('<li>');
  li_3.append(this.data["num3"]);
  list.append(li_1, li_2, li_3);
  var div = $('<div>');
  div.addClass('slotmachine-text');
  var p1 = $('<p>');
  p1.append("You win: "+this.data["youWin"]);
  var p2 = $('<p>');
  p2.addClass('moneyLeft');
  p2.append("Money Left: "+this.data["moneyLeft"]);
  var button = $('<button>');
  button.addClass('playBtn');
  button.append('Play');
  div.append(p1,p2, button);
  this.elem.append(list,div);
  ///PLAY BUTTON FUCNTIONALITY
  this.elem.find('.playBtn').on('click', function(){
    this.play();
  }.bind(this));
};

SlotMachine.prototype.clearFields = function(){
  this.elem.children().empty();
};

SlotMachine.prototype.getMoney = function(){
  return this.data["moneyLeft"];
};


SlotMachine.prototype.putMoney = function(number){
  this.data["moneyLeft"] += number;
};

SlotMachine.prototype.removeMoney = function(number){
  this.data["moneyLeft"] -= number;
};

SlotMachine.prototype.removeAllMoney = function(){
  this.data["moneyLeft"] = 0;
};

SlotMachine.prototype.play = function(){
  var enter_sum = prompt("Enter sum you play with", 10);
  var sum = parseInt(enter_sum);
  if (sum>0)
  {
    console.log(sum);
    this.clearFields();
    var num1 = Math.floor(Math.random() * 10);
    var num2 = Math.floor(Math.random() * 10);
    var num3 = Math.floor(Math.random() * 10);

    this.data["num1"] = num1;
    this.data["num2"] = num2;
    this.data["num3"] = num3;
    this.putMoney(sum);
    ///Checking how much money youWin
    if (num1 === 7 && num2 === 7 && num3 === 7){
      this.data["youWin"] = this.data["moneyLeft"];
    }
    else if (num1 === num2 && num1 === num3){
      this.data["youWin"] = sum*5;
    } else if(num1===num2 || num1 === num3 || num2 === num3){
      this.data["youWin"] = sum*2;
    }else{
      this.data["youWin"] = 0;
    }
    ///Checking how much money the slotMachine can give back
    if(this.data["youWin"]>0){
      if (this.data["youWin"] <= this.data["moneyLeft"]){
        this.removeMoney(this.data["youWin"]);
      }else{
        alert ("Congratulations! You won "+this.data["youWin"]+" - this is more than we have in our slot machine. We can only give you "+ this.data["moneyLeft"]+ ". For more money, please, contact casino to gain your prize");
        this.data["youWin"] = this.data["moneyLeft"];
        this.removeAllMoney();
      }
    }
    this.renderFields();
  }else{
    alert("Enter correct number!");
    this.play();
  }
};

SlotMachine.prototype.destroy = function(){
  if (this.elem) {
      this.elem.remove();
      this.elem = null;
  }
};
