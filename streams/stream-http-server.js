import http from 'node:http'
import { Transform } from 'node:stream'

 class InverseNumberStream extends Transform {
  _transform(chunk, encoding, callback){
    const negativeNumber = Number(chunk.toString() * -1)

    console.log(negativeNumber)

    callback(null, Buffer.from(String(negativeNumber)))
  }
}


const server = http.createServer(async (req, res) => {
  const buffer = []

  for await (const chuck of req ){
    buffer.push(chuck)
  }

  const fullSteamContent = buffer.concat(buffer).toString()

  console.log(fullSteamContent)

  return res.writeHead(201).end(fullSteamContent)

} )

server.listen(3334)