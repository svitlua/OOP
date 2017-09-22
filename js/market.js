///////CLASSES and METHODS////////////////////
function Product(){
  this.info= {
    type: "",
    name: "",
    price: "",
    weight: ""
  }
  this.elem = null;
}

Product.prototype.render = function() {
    this.elem = $('<form>');
    this.elem.addClass('product_data_form');
    this.renderFields();
    return this.elem;
};

Product.prototype.renderFields = function(){
  var inputs = _.map(this.info, function(value, key) {
      if (key==="type"){
        var select = $('<select>');
        select.addClass("custom-select");
        for (var i=0; i<productTypes.length; i++){
          var option = $("<option>");
          if(i===productTypes.length-1){
            option.attr("selected", "selected");
            this.info["type"] = productTypes[i];
            console.log(this.info);
          }
          option.val(productTypes[i]);
          option.append(productTypes[i]);
          select.append(option);
        }
        select.on('change', function (e) {
          this.info["type"] = e.target.value;
        }.bind(this));
        return select;
      }
      else{
      var input = $('<input>');
      input.attr('placeholder', key);
      if(key==="price" || key==="weight"){
        input.attr('type', 'number');
      }
      input.val(value);

      input.on('keyup', function(e) {
          this.info[key] = e.target.value;
      }.bind(this));
      return input;
    }
  }, this);
  this.elem.append(inputs);
};

function Market(number){
  this.productNumber = number;
  this.boughtProducts = [];
  this.elem = null;
}
Market.prototype.render = function() {
    this.elem = $('<div>');
    this.elem.addClass('product_data_table');
    return this.elem;
};
Market.prototype.addProduct = function() {
    var product = new Product();
    this.boughtProducts.push(product);
    this.elem.append(product.render());
};

Market.prototype.getReceipt = function (){
  var receipt ="==================================</br>";
  receipt += 'Bought Products:</br>';
  var totalCost = 0;
  for (var i=0; i<this.boughtProducts.length; i++){
    var product = this.boughtProducts[i].info;
    var price = product.price*product.weight;
    receipt += product.type + ": " + product.name + " " + product.weight + "gr " + price + "uah</br>";
    totalCost += price;
  }
  receipt +="==================================</br>";
  receipt += "Total Cost: " + totalCost+"uah";
  return receipt;
}

///////////////////////////////////////////////////////////////
var productTypes = ["fish","fruit-veggie", "meat", "milk","other"];

(function() {
	var shop = null;

    function init() {
      var enter_num = prompt("Enter number of products to buy", 5);
      var num = parseInt(enter_num);
      if (num>0)
        {
    		var productForm = $('#productForm');
    		shop = new Market();
    		productForm.append(shop.render());
    		_.each(new Array(num).fill(), function(value, index) {
    				shop.addProduct();
    		});
    	}
      else{
        alert("Enter correct number!");
        init();
      }

      $( "#shopBtn" ).click(function() {
        var receipt = shop.getReceipt();
        var receiptDiv = $('#receiptDiv');
        receiptDiv.empty();
        receiptDiv.append(receipt);
      });
    }
    	init();
})();
