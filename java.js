function miFuncion(number1, number2) {
  if( number1 > number2){
    console.log("number1 debe ser menor que number2")
  }
  else{
      for (let ciclo = number1; ciclo <= number2; ciclo++){
        if(ciclo %3==0 && ciclo %5==0){
          console.log("Biz Buzz")
        }
         else if (ciclo % 3 == 0){
          console.log("buzz");
        } else if(ciclo % 5 == 0){
          console.log("bizz")
        }
          else{
            console.log(ciclo)
        }
      }
    }
  }
miFuncion(1, 20)
console.log(24%5)

