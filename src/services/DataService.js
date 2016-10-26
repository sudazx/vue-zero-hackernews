const fetch = window.fetch

const service = {}
// cache the ids of hacker type
const cache = {}

service.getUrl = (id) => {
  return `http://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`
}

service.getHacker = async (id) => {
  const url = service.getUrl(id)
  return await new Promise((resolve, reject) => {
    if (cache[id]) {
      resolve(cache[id])
    } else {
      fetch(url).then(resp => resp.json())
        .then(data => {
          cache[id] = data
          resolve(data)
        }).catch(e => reject(e))
    }
  })
}

service.getHackerIDs = async (type) => {
  const url = `http://hacker-news.firebaseio.com/v0/${type}stories.json?print=pretty`
  return await new Promise((resolve, reject) => {
    if (cache[type]) {
      resolve(cache[type])
    } else {
      fetch(url)
        .then(resp => resp.json())
        .then(data => {
          cache[type] = data
          resolve(data)
        }).catch(e => reject(e))
    }
  })
}

/**
 * @param type valid values from ['top','new','best','job','ask','show']
 * @param start the start index of data
 * @param size the expected number of data retained
 * @returns {*}
 */
service.getHackers = async (type, start, size) => {
  const ids = await service.getHackerIDs(type)

  let loadingIDs = ids.slice(start, start + size)

  let promises = loadingIDs.map(id => {
    return service.getHacker(id)
  })

  let hackers = []

  for (let promise of promises) {
    hackers.push(await promise)
  }
  return hackers
}

export default service
