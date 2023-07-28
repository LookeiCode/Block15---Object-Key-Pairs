// DEFINING THE CUSTOMER

const customer =  {
firstName: "Jake",
lastName: "Smith",
email: "jaekSmih@aol.com",
phone: undefined,
zipCode: "631",
favoriteFlavors: 32,
cupSize: "medium",
favoriteStore: "Target",
firstVisit:	false,
};

console.log(Object.entries(customer));

// MODIFYING KEY/PAIRS

customer.email = "Jak3Smith1992@email.com";
customer.phone = "3195551234";
customer.zipCode = "63132";
customer.favoriteFlavors = "coffee, strawberry, and matcha";

console.log(Object.entries(customer));

// DELETING KEY/PAIRS

delete customer.zipCode;
delete customer.favoriteStore;

console.log(Object.entries(customer));

// ADDING KEY/PAIRS

customer.toppings = "chocolate sprinkles, wafer straws, and gummy bears";
customer.futureFlavors = "mango";
customer.todaysPurchaseCost = 5.32;

console.log(Object.entries(customer));

// CHECKING KEYS

console.log(Object.keys(customer));