import { getOrders, getToppings, getCrusts, getSizes } from "./data.js";

const toppings = getToppings()
const crusts = getCrusts()
const sizes = getSizes()

export const Order = () => {
  const orders = getOrders()
  let ordersList = ""

  if ( orders.length > 0 ) {
    ordersList += `<ul>`
    const ordersArray = orders.map( (order) => {
  
      // use the order's sizeId property to get to the proper size obj, and its circumference prop
      const orderSize = sizes.find( (size) => size.id === order.sizeId )
      const orderTopping = toppings.find( (topping) => topping.id === order.toppingId )
      const orderCrust = crusts.find( (taco) => taco.id === order.crustId )
  
      const orderPrice = orderCrust.price + orderTopping.price + orderSize.price
      
      return `
        <li order--list-item">
          Order #${order.id} placed on ${new Date(order.timestamp).toLocaleString()},
          is a ${orderSize.circumference}-inch ${orderCrust.type} ${orderTopping.name} pizza.
          <p>
          Total Price: $${orderPrice.toFixed(2)}
          </p> 
        </li>
        `
    })
  
    ordersList += ordersArray.join("")
    ordersList += `</ul>`
  }

  return ordersList 
}