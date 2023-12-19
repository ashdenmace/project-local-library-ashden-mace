function findAuthorById(authors, id) {
  const result = authors.find((author) => author.id === id)
  return result
}

function findBookById(books, id) {
  const result = books.find((book) => book.id === id)
  return result
}

function partitionBooksByBorrowedStatus(books) {
  let checkedOut = books.filter((book) => book.borrows[0].returned === false)
  let returned = books.filter((book) => book.borrows[0].returned === true)
  const result = [checkedOut, returned]
  return result
}

function getBorrowersForBook(book, accounts) {
  const borrows = book.borrows
  const array = []
  borrows.forEach((borrow) => {
    const accountObj = accounts.find((account) => account.id === borrow.id)
    accountObj["returned"] = borrow.returned
    array.push(accountObj)
  })
  const result = array.slice(0,10)
  return result
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
