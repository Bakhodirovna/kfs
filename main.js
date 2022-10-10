let menu = {
    burgers : ["Chefburger", "Cheeseburger", "De Luxe Cheeseburger"],
    fries : ["Fries small", "Fries medium"],
    chicken: {
        strips : ["3 strips","5 strips", "8 strips" ],
        nuggets : ["Nuggets 6 pcs", "Nuggets 8 pcs", "Nuggets 18 pcs",],
        bites : ["bites small", "bites medium" ],
        wings : ["3 wings", "5 wings", "8 wings"]
    },
    drinks : {
        tea : {
            greenTea : ["0.5 L", "0.4 L", "0.3 L"],
            blacTea : ["0.5 L", "0.4 L", "0.3 L"]
        },
        sodas : {
            cocaCola : ["0.5 L", "0.4 L", "0.3 L"],
            sprite : ["0.5 L", "0.4 L", "0,3 L"],
            fanta : ["0.5 L", "0.4 L", "0.3 L"]
        },
        coffee : ["Cappuccino", "Americano", "Espresso", "Latte", "Ice coffe"]
    },
    deserts : ["Ice cream Cone", "Chocolate muffin", "Blueberry Muffin", "Nutty donut", "Donut strowbery"],
    sauces : ["cheese", "Garlic", "ketchup Tomato" ,"Chili"],
    lunchBox : ["5 for 25.000", "5 for 30.000", "5 for 35.000"]
}


let is_kfs_open = true;

let order = (time, work) => {
    return new Promise((resolve, reject) => {
        if (is_kfs_open) {
            setTimeout(() => {
                resolve(work())
            },time)
        } else {
            reject(console.log("The kfs is closed"))
        }
    })
}


order(2000, () => console.log("The customer ordered"))
    .then(() => {
    return order(0000, ()=> console.log("Preparation for the order began."))
    })
    .then(() => {
    return order(3000, ()=> console.log(`The ${menu.burgers[0]}  was prepared.` ))
    })
    .then(() => {
    return order(2000, ()=> console.log(`The ${menu.fries[1]} too prepared`))
    })
    .then(() => {
    return order(2000, ()=> console.log(`The ${menu.drinks.sodas.cocaCola[0]} was also prepared.`))
    })
    .then(() => {
    order(2000, () => console.log(`${menu.sauces[0]} sous also joined the order`))
    })
    .then(() => {
        return order(2000, ()=> console.log("The order was given to the customer 'Bon Appetit'!"))
    })
