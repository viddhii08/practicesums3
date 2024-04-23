let inc = 400000;
if(inc<=10000){
    let tax =( 0.5 * inc)
        console.log(tax)
    }else if(inc>10001 && inc< 50000){
        let tax = (0.1 * inc)
        console.log(tax)
    }else if (inc>50001 && inc<100000){
        let tax = (0.15 * inc)
        console.log(tax)
    }else{
        let tax = (0.2 * inc)
        console.log(tax)
    }

