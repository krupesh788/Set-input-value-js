
function change(){


    let name = document.getElementById("name").value;
    let message = document.getElementById("message").value;


    
    document.getElementById("p1").innerHTML = `${message} : Message from  ${name}`;

    // document.getElementById("p1").innerHTML = message + ":" + "Message from " + name;


}


