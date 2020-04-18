function sandwichCalc(slicesOfBread, slicesOfCheese) {
   
    var sandwiches = Math.floor(slicesOfBread / 2)

    if (sandwiches <= slicesOfCheese && sandwiches > 0) {
        return sandwiches
    } else if (sandwiches > slicesOfCheese && slicesOfCheese > 0)  {
        return slicesOfCheese
    } else {
        return 'Sorry! You dont have enough to make sandwiches.'
    }

}

console.log(sandwichCalc(20, 3));


