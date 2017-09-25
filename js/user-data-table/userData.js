function User(name, sex, birth_date, address, phone, email) {
  this.name = name;
  this.sex = sex;
  this.birth_date = birth_date;
  this.address = address;
  this.phone = phone;
  this.email = email;
  this.elem = null;
  this.isDataVisible = true;
};

User.prototype.render = function(num) {
  this.elem = $('<tr>');
  this.elem.attr('id', num);
  var td_name = $('<td>');
  td_name.attr("name", "name");
  td_name.append(this.name);
  this.elem.append(td_name);
  console.log(td_name);
  var td_sex = $('<td>');
  td_sex.attr("name", "sex");
  td_sex.addClass("toHide");
  td_sex.append(this.sex);
  var td_birth_date = $('<td>');
  td_birth_date.attr("name", "birth_date");
  td_birth_date.append(this.birth_date);
  td_birth_date.addClass("toHide");
  var td_address = $('<td>');
  td_address.attr("name", "address");
  td_address.addClass("toHide");
  td_address.append(this.address);
  var td_phone = $('<td>');
  td_phone.attr("name", "phone");
  td_phone.addClass("toHide");
  td_phone.append(this.phone);
  var td_email = $('<td>');
  td_email.attr("name", "email");
  td_email.addClass("toHide");
  td_email.append(this.email);
  this.elem.append(td_sex, td_birth_date, td_address, td_phone, td_email);

  this.elem.on("click", function(){
    this.changeDataVisibility();
  }.bind(this));
  return this.elem;

};

User.prototype.changeDataVisibility = function (){
  this.isDataVisible = !this.isDataVisible;
  if(this.isDataVisible){
    this.elem.find(".toHide").show();
  }else{
    this.elem.find(".toHide").hide();
  }
};
