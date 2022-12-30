// eslint-disable-next-line no-unused-vars
const dummy = (blogs) => {
  return 1
}

const totalLikes = (blogs) => {
  if (blogs.length === 0) {
    return 0
  }
  return blogs.reduce((sum, b) => {
    return b.likes + sum
  }, 0)
}

const favorite = (blogs) => {
  const likes = blogs.map(b => b.likes)
  //console.log('likes', likes)
  const max = Math.max(...likes)
  //console.log('max', max)
  const fave = blogs.find(b => b.likes === max)
  //console.log('fave', fave)
  const formattedFave = {
    title: fave.title,
    author: fave.author,
    likes: fave.likes
  }
  //console.log('formatted fave', formattedFave)

  return formattedFave
}

module.exports = { dummy, favorite, totalLikes }