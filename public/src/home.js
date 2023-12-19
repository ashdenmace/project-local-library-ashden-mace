function getTotalBooksCount(books) {
  return books.length
}

function getTotalAccountsCount(accounts) {
  return accounts.length
}

function getBooksBorrowedCount(books) {
  const result = books.reduce((counter, book) => {
    if(book.borrows[0].returned === false)
      counter += 1 
    return counter
  }, 0)
  return result
}

//Helper Function for sorting getMostCommonGenres(), getMostPopularBooks(), getMostPopularAuthors().
function sortByCount(array) {
  return array.sort((objectA, objectB) => objectB.count - objectA.count)
}
//------------------------------------------------------------------------------------------

function getMostCommonGenres(books) {
  let countObj = {}
  books.forEach(aBook => {

    if (countObj[aBook.genre] != null) {
      countObj[aBook.genre]++
    } else {
      countObj[aBook.genre] = 1
    }
  })
 
  const result = Object.entries(countObj).map(([name, count]) => ({name,count}))
  const sorted = sortByCount(result)
  return sorted.slice(0,5)
}
 

function getMostPopularBooks(books) {
  const array = books.map((book) => {return {name: book.title, count: book.borrows.length}})
  const sorted = (sortByCount(array))
  return sorted.slice(0,5)

}

function getMostPopularAuthors(books, authors) {
  const authorList = books.reduce((result, book) => {
    const {authorId, borrows} = book
    const author = authors.find((author) => authorId === author.id)
    const name = author.name.first + " " + author.name.last
    const count = borrows.length
    const authorExists = result.find(author => author.name === name)
    if(authorExists) {
      authorExists.count += count
    }
    else {
      const newAuthor = {
        name,
        count
      }
      result.push(newAuthor)
    }
    return result
  },[])

  const sorted = sortByCount(authorList)
  return sorted.slice(0,5)
}


module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
