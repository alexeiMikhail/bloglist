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

module.exports = { dummy, totalLikes }