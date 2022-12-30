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

const mostBlogs = (blogs) => {
  const counts = {}
  blogs.map(b => b.author).forEach(author => {
    counts[author] = (counts[author] || 0) + 1
  })
  console.log('counts', counts)

  let maxBlogs = 0
  let topAuthor = ''

  for (const [author, count] of Object.entries(counts)) {
    if (count > maxBlogs) {
      maxBlogs = count
      topAuthor = author
    }
  }
  return { author: topAuthor, blogs: maxBlogs }
}

module.exports = { dummy, favorite, mostBlogs, totalLikes }