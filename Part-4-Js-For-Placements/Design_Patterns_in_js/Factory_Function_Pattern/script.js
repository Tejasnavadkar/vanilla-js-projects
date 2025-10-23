// Factory Function Pattern

// Ek function banate ho jo objects create karta hai (factory = object banane ki machine) |

// Factory Function Pattern ek aisa design pattern hai jisme hum ek simple function likhte hain jo naye objects banakar return karta hai, bina class ya new keyword use kiye.

// Is pattern ka main idea hai → object creation ko ek function ke through control karna.

// Har baar jab tum factory function call karte ho, tumhe ek naya ob milta hai jisme apne methods aur (agar chaho to) private data ho sa hai.

// Yeh pattern specially useful hai jab tumhe ek hi type ke bohot saare objects chahiye, jaise users, products, tasks, etc.

//eg

function createProduct (name,price){
    let stock = 1000
   return {
      name,
      price,
      buy (qty) {
        if (qty <= stock) {
         stock -= qty;
         console.log(`booked ${stock} pieces left.`);
        }else{
            console.error(`we only have ${stock} pieces`)
        }
},
     refill(qty) {
      stock += qty;
      console.log(`refilled the stock ${stock} pieces left.`);
     }
   };
}

createProduct("iphone",70000)