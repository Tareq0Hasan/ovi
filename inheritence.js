class inheri{


first(){
    console.log('this is the first one');
}

seco(){
    console.log('this is the 2nd one');
}

third(){
    console.log('this is the 3rd one');
}



}


class child extends inheri{


first(){
    console.log('this is the first one but i change it');
};


}



var obj = new child();
obj.first();