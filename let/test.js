let a = 10;
{
    // {} block scope ar bitor theke let ber hote pare na//
    let a = 2;
    document.getElementById("b").innerHTML = a ;
}
document.getElementById("a").innerHTML = a ;
// block scope: {} ar bitor ar gulo baire ace na....
let x = 20;
{
    let x = 50;
}
{
    let x = 80;
}
document.getElementById("c").innerHTML = x ;
