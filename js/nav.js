var active =false ;
function navEffect(){
    if(!active) {
        active=true;
        document.getElementById('nav-mobile').style.display ="block";
    }else{
        document.getElementById('nav-mobile').style.display ="none";
        active=false;
    }
}
function sendContact(event){
    event.preventDeafult()
    var name = document.getElementsByName('name')[0].value,
        email = document.getElementsByName('email')[0].value,
        description = document.getElementsByName('comments')[0].value
    console.log(name,email,description)

    if(!name){
        alert('Complete nombre')
        return false
    }
}