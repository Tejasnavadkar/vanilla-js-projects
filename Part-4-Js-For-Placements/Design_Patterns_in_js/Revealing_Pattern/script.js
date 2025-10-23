// revealing pattern

// its same as module pattern but ek differnce hai ham jab object return karenge tab uska name change kar sakte hai

// eg

// iife
const Bank = (  // here all variables and functions are private 
    function(){
        let bankBalance = 10000

        function checkbalance(){
            console.log(bankBalance)
        }

        return { // we have to return it from here then only we can use it but here we can change the name
            check:checkbalance
        }
    }
)()

Bank.check()