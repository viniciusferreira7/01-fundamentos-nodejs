import http from 'node:http'

const users = []

const server = http.createServer( async (req, res) => {
  const { method, url } = req

  const buffer = []

  for await (const chuck of req){
    buffer.push(chuck)
  }

  try{
    req.body = JSON.parse(Buffer.concat(buffer).toString())
  } catch {
    req.body = null

    return res.writeHead(400).end()
  }


  if(method === 'GET' && url === '/users'){
    return res
    .setHeader('Content-Type', 'application/json')
    .end(JSON.stringify(users))
  }

  if(method === 'POST' && url === '/users'){
    const { name, email } = req.body

    users.push({
      id:1,
      name,
      email
    })
    return res.writeHead(201).end()
  }

 return res.writeHead(404).end()
})

server.listen(3333)