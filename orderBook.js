
const reconcileincomingOrder = (existingBook, incomingOrder) => {
  let updatedBook = []
  
  if (existingBook.length == 0) {
    return updatedBook = existingBook.concat(incomingOrder)
  }
  if (existingBook[0].type === incomingOrder.type) {
    return updatedBook = existingBook.concat(incomingOrder)
  }
  if (existingBook[0].type !== incomingOrder.type && existingBook[0].price !== incomingOrder.price) { 
    return updatedBook = existingBook.concat(incomingOrder)
  }

  if (existingBook[0].type !== incomingOrder.type && existingBook[0].quantity === incomingOrder.quantity && existingBook[0].price === incomingOrder.price) {
    updatedBook = existingBook.concat(incomingOrder)
    updatedBook.splice(0, 2)
    return updatedBook
  }
  if (existingBook[0].type !== incomingOrder.type && existingBook[0].quantity > incomingOrder.quantity) {
    incomingOrder.quantity = existingBook[0].quantity - incomingOrder.quantity
    incomingOrder.type = existingBook[0].type
    return updatedBook = updatedBook.concat(incomingOrder)
  }
  if (existingBook[0].type !== incomingOrder.type && existingBook[0].quantity < incomingOrder.quantity) {
    incomingOrder.quantity = incomingOrder.quantity - existingBook[0].quantity
    return updatedBook = updatedBook.concat(incomingOrder)
  }
}



module.exports = reconcileincomingOrder