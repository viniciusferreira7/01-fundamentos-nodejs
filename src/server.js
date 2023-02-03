import http from 'node:http'

const users = []

const server = http.createServer((req, res) => {
  const { method, url } = req

  if(method === 'GET' && url === '/users'){
    return res
    .setHeader('Content-Type', 'application/json')
    .end(JSON.stringify(users))
  }

  if(method === 'POST' && url === '/users'){
    users.push({
      id: 1,
      name: 'John Doe',
      email: 'johndoe@exemple.com'
    })
    return res.end(`Usuário adicionado`)
  }

 return res.end('Hello world')
})

server.listen(3333)