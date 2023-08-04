// alert('Hello World')

fetch('https://api.github.com/users/azagatti/repos')
  .then((response) => response.json())
  .then((repos) => {
    const root = document.querySelector('#root')
    const list = document.createElement('ul')
    repos.forEach((repo) => {
      const item = document.createElement('li')
      item.innerText = repo.name
      list.append(item)
    })
    root.append(list)
  })
