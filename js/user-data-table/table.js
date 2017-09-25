function Table() {
    this.elem = null;
    this.children = [];
};

Table.prototype.render = function() {
    this.elem = $('<table>');
    this.elem.addClass('user_data_table');
    var thead = $('<thead>');
    thead.append($('<tr>'));
    var th_name = $('<th>');
    th_name.append('Name');
    var th_sex = $('<th>');
    th_sex.append('Sex');
    var th_birth_date = $('<th>');
    th_birth_date.append('Birth Date');
    var th_address = $('<th>');
    th_address.append('Address');
    var th_phone = $('<th>');
    th_phone.append('Phone');
    var th_email = $('<th>');
    th_email.append('Email');
    this.elem.append(th_name, th_sex, th_birth_date, th_address, th_phone, th_email);
    return this.elem;
};

Table.prototype.addChild = function(child) {
    this.children.push(child);
    var num = this.getNum();
    this.elem.append(child.render(num));
};

Table.prototype.getNum = function(){
  return (this.children.length - 1);
}

Table.prototype.destroy = function() {
    this.elem.empty();
    this.children.forEach(function(child) {
        child.destroy();
    });
    this.elem = null;
    this.children = [];
};

Table.prototype.getData = function() {
    return _.map(this.children, function(child) {
        return child.getData();
    });
};
