for (let number = 0 ; number <= 100 ; number ++){

    console.log (number)
    
    if (number % 3 == 0){

        number='Fizz'
        
        console.log (number);
        
    }
    else if (number % 5 == 0){

        number='Buzz'
        
        console.log (number);

    }
    else if (number % 3 == 0 && number % 5 == 0){
        
        console.log (number, 'FizzBuzz');
        
    }
}



    
    













