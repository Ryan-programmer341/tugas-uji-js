   var nama = "Muh.adrian";
   alert('HELLO WORLD ' + '' + nama);
    let a, b, c;
    a = 5; b= 6; c = a + b;
    document.getElementById("demo1").innerHTML = c;

    function myfunction(){
        document.getElementById("main1").innerHTML = "Hello World!";
        
        document.getElementById("main2").innerHTML = "how are you?";
    }

    let lastname, lastName;
    lastname = "rian";
    lastName = "rey";
    document.getElementById("name").innerHTML = lastname;

    let _x = 2;
    let _100 = 5;
    document.getElementById("variable").innerHTML = _x + _100;

    const car = {type:"Fiat", model:"500", color:"white"};
    car.color = "green";
    car.owner = "rayan";
    document.getElementById("merk").innerHTML = "Car color is " + car.color; 

    function toCelsius(f) {
        return (5/9) * (f-32);
    }

    let value = toCelsius(77);
    document.getElementById("demo2").innerHTML = value;

    const person = {
        firstName: "John",
        lastName : "Doe",
    };
    document.getElementById("his").innerHTML =
    "The first name is " +  person["firstName"];