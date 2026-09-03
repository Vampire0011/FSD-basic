/*
let n = "x";
let a = 21;

let student = {
  a,
  n,
  
  display:function(){
    console.log(this.n);
        console.log(this.a);

  }
}

student.display();
*/
let pname = "HyperX Omen 16 Valorant Edition";
let price = 189000;

let student = {
  pname,
  price,
  
  display:function(){
    console.log("Product Name:", this.pname);
        console.log("Price:", this.price);

  }
}

student.display();