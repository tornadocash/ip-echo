const geoip = require('geoip-lite')
const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000

app.use(cors())

app.get('/', (req, res) => {
	const ip = req.headers['x-real-ip'] || req.connection.remoteAddress
	const geo = geoip.lookup(ip) || {}
	geo.ip = ip
	res.send(geo)
})

app.listen(port, () => console.log(`App is listening on port ${port}!`))
