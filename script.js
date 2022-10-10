function names(){
    let fullname;
    let name=document.getElementById('name')
     fullname =name.value
     document.getElementById('fullname').innerHTML = fullname;
     name.value = fullname.toUpperCase()
}

function emails(){
    let email;
    let output=document.getElementById('email')
     email =output.value
     document.getElementById('emails').innerHTML = email;
     output.value = email.toLowerCase()
}


function phoneno(){
    let input = document.getElementById('phone');
    let output = document.getElementById('phoneno');
    output.innerHTML = input.value
    let number = document.getElementById('phone').value;

    if (number.startsWith('081') || number.startsWith('080') || number.startsWith('091') || number.startsWith('090')  || number.startsWith('070') || number.startsWith('071') ) {
        if (number.length== 11 ){
            valid = input.value
        }
     else{
        valid = "invalid"
     }
    }
    else{
        valid = "invalid"
    }
    
    document.getElementById('phoneno').innerHTML = valid;
}