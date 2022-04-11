const header = document.getElementById('header');
const menu = document.getElementById('menu');
// On/off menu 
const headerHeight = header.clientHeight;
menu.onclick = function(){
    let isClose = header.clientHeight === headerHeight;
    if (isClose){
        header.style.height = 'auto';
    }else{
         header.style.height = null;
    }
}
//Tự đóng khi chon menu
const menuItems = document.querySelectorAll('#nav li a[href*="#"]');
    for (let i=0;i<menuItems.length;i++){
        let menuItem = menuItems[i];
        menuItem.onclick = function(){
            header.style.height = null;
        }
    }


// validate form
//name
let Name = document.getElementById("name");
let error_name = document.getElementById("error_name");

function validateName(Name){
    var NameRegex = /[^a-z0-9A-Z_ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễếệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ]/u

    return NameRegex.test(Name)
}
Name.onblur = function() {
    if(Name.value == ""){
        error_name.textContent = 'The name cannot be left blank!';
        error_name.style.color = 'red';
    }
    else if(validateName(Name.value)){
        error_name.textContent = '';
    }else{
        error_name.textContent= 'Invalid name';
        error_name.style.color= ' red';
    }
}
//email
let Email = document.getElementById("email");
let error_email = document.getElementById("error_email");

function validateEmail(Email){
    var EmailRegex = /^[a-zA-z0-9]+@[a-z]+\.[a-z]+$/mg;

    return EmailRegex.test(Email)
}
Email.onblur = function() {
    if(Email.value == ""){
        error_email.textContent = 'Email cannot be left blank!';
        error_email.style.color = 'red';
    }
    else if(validateEmail(Email.value)){
        error_email.textContent = '';
    }else{
        error_email.textContent= 'Invalid email!';
        error_email.style.color= ' red';
    }
}
//subject
let subject = document.getElementById("subject");
let error_subject = document.getElementById("error_subject");

subject.onblur = function() {
    if(subject.value == ""){
        error_subject.textContent = 'The subject cannot be left blank!';
        error_subject.style.color = 'red';
    }
    else{
        error_subject.textContent = '';
    }
}

