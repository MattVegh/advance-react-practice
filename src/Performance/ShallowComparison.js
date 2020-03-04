// ===
// Primitive types (strings, numbers, booleans)
console.log("Hi" === "Hi")
//true

// Complex types (array, object)
console.log({name: "Joe"} === {name: "Joe"})
//false

const state = {
    favNumber: 42,
    name: "Bob",
    address: {
        street: "123 Main Street",
        city: "Nowhere, PA",
        zip: 12345
    }
}

const state2 = {
    favNumber: 42,
    name: "Bob",
    address: {
        street: "123 Main Street",
        city: "Nowhere, PA",
        zip: 12345
    }
}

console.log(state.favNumber === state2.favNumber)
console.log(state.name === state2.name)
//true

console.log(state.address === state2.address)
//false