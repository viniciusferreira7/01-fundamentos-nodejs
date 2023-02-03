import http from 'node:http'

const server = http.createServer((req, res) => {
  const { method, url } = req

  if(method === 'GET' && url === '/user'){
    return res.end('Listagem de usuários')
  }

  if(method === 'POST' && url === '/user'){
    return res.end('Usuário adicionado')
  }

 return res.end('Hello world')
})

server.listen(3333)