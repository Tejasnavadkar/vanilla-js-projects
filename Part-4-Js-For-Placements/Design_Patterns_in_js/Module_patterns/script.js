// module pattern

// Module Pattern ek design pattern hai jisme hum apna code ek self executing function (IIFE) ke andar likhte hain, taki variables aur functions private rahen. I

// Iske andar se hum sirf wahi cheezein return karte hain jo bahar use karni hain.

// Is pattern ka main fayda hai data hiding (encapsulation) aur clean structure, taaki code secure, reusable aur manageable ban sake.


// eg

// iife
const Bank = (  // here all variables and functions are private 
    function(){
        let bankBalance = 10000

        function checkbalance(){
            console.log(bankBalance)
        }

        return { // we have to return it from here then only we can use it
            checkbalance
        }
    }
)()

Bank.checkbalance()