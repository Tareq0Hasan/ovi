class Car {
  constructor (num1,num2){
this.first_num=num1;
this.second_num=num2;
// console.log(this.newbrand);

  }

 addnum() {

  let  add= this.first_num+this.second_num;
    console.log(add);
    
}
   




  }

 obj = new Car(1,2);
 obj.addnum();
 