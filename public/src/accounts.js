function findAccountById(accounts, id) {
  const result = accounts.find((account) => account.id === id)
  return result
}

function sortAccountsByLastName(accounts) {
  const result = accounts.sort((accountA, accountB) => {
    if(accountA.name.last < accountB.name.last)
      return -1 
    if(accountA.name.last > accountB.name.last)
      return 1
  })
  return result
}

function getTotalNumberOfBorrows(account, books) {
    let total = 0
    books.forEach((book) => book.borrows.forEach(borrow => {
      if(account.id === borrow.id)
        total += 1
        return total
    }))
    return total
  }
  
  function getBooksPossessedByAccount(account, books, authors) {
        const checkedOut = books.filter((book) => ((book.borrows[0].returned === false) && (book.borrows[0].id === account.id)))
        const result = checkedOut.forEach((book) => {
          const author = authors.find((author => author.id === book.authorId))
          book["author"] = author
      })
      return checkedOut
  }


module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
