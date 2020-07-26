const express = require('express')
const app = express()
const router = express.Router()
const port = process.env.PORT || 3000
app.use(express.static(__dirname))

router.get('/',(req,res) => res.sendFile(`${__dirname}/index.html`))

app.use( '/' ,router);
app.listen(port, () => console.log(`app running on port: ${port}`))
