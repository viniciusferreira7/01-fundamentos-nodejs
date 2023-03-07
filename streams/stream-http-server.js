import http from 'node:http'
import { Transform } from 'node:stream'

 class InverseNumberStream extends Transform {
  _transform(chunk, encoding, callback){
    const negativeNumber = Number(chunk.toString() * -1)

    console.log(negativeNumber)

    callback(null, Buffer.from(String(negativeNumber)))
  }
}

const server = http.createServer((req, res) => {
 return req
  .pipe(new InverseNumberStream())
  .pipe(res)

  res.writeHead(201).end()

} )

server.listen(3334)