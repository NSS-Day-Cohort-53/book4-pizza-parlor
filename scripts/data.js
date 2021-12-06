const database = {
  toppings: [
    {
      id: 1,
      name: "black olives",
      price: 1.25,
      type: "veggie"
    },
    {
      id: 2,
      name: "pepperoni",
      price: 2.25,
      type: "meat"
    },
    {
      id: 3,
      name: "banana peppers",
      price: 1.25,
      type: "veggie"
    },
    {
      id: 4,
      name: "pineapple",
      price: 1.25,
      type: "disgusting"
    },
    {
      id: 5,
      name: "bell peppers",
      price: 1.25,
      type: "veggie"
    },
    {
      id: 6,
      name: "bacon",
      price: 2.25,
      type: "meat"
    }
  ],
  crusts: [
    {
      id: 1,
      type: "deep dish",
      price: 2
    },
    {
      id: 2,
      type: "NY style",
      price: 1
    },
    {
      id: 3,
      type: "traditional hand tossed",
      price: 0
    }
  ],
  sizes: [
    {
      id: 1,
      circumference: 12,
      price: 7
    },
    {
      id: 2,
      circumference: 14,
      price: 10
    },
    {
      id: 3,
      circumference: 16,
      price: 12
    }
  ],
  orders: [
    {
      id: 1,
      sizeId: 2,
      crustId: 2,
      toppingId: 1,
      timestamp: 1620059468223
    },
    {
      id: 2,
      sizeId: 3,
      crustId: 1,
      toppingId: 4,
      timestamp: 1620059468300
    },
    {
      id: 3,
      sizeId: 2,
      crustId: 3,
      toppingId: 6,
      timestamp: 1620059468300
    }
  ]
}

export const getToppings = () => {
  // return [...database.toppings] // a bald-faced lie. 
  return database.toppings.map( (topping) => ({...topping}) )
}

export const getCrusts = () => {
  return database.crusts.map( (crust) => ({...crust}) )
}

export const getSizes = () => {
  return database.sizes.map( (size) => ({...size}) )
}

// ==================================
// Our transient state
let orderState = {}

export const setOrderTopping = (id) => { 
  orderState.toppingId = id
}
export const setOrderSize = (id) => orderState.sizeId = id
export const setOrderCrust = (id) => orderState.crustId = id

// ==================
// Update the db order state 
export const addCustomerOrder = () => {
  const newOrder = {
    sizeId: orderState.sizeId,
    crustId: orderState.crustId,
    toppingId: orderState.toppingId,
    timestamp: Date.now(),
    id: calcId(database.orders)
  }

  database.orders.push(newOrder)
  orderState = {}
}

const calcId = (arr) => {
  const lastIndex = arr.length - 1
  if (lastIndex === -1) {
    // return always ends the function
    const newId = 1
    return newId
  }
  const lastItemId = arr[lastIndex].id
  const newId = lastItemId + 1
  return newId
}