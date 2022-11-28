class Myname{

static add_num(first,second){
    this.one=first;
    this.two=second;
    let add=this.one+this.two;
    console.log(add);


}

}

// var obj =new Myname();
// obj.add_num(1,2);
//for static function call 
Myname.add_num(3,4);