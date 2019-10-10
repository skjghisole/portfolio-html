const express = require('express')
const path = require('path')

const app = express()

app.use(express.static(`${process.cwd()}/public`));

const port = process.env.PORT || 3000

app.listen(port, () => {
	console.log(`started at http://localhost:${port}`)
})