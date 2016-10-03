function sum_even_numbers(){
    var sum = 0;
    for(x=1; x<=1000; x=x+1){
        if(x % 2 === 0){
            sum += x;
        }
    }
    return sum; 
}
