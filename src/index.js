import express, { response } from 'express'

const app = express()
const PORT = process.env.PORT || 3000

app.get('/', (request, response) => {
    response.send(`
        <h1>Welcome</h1>
        <a href="/about">About</a>
    `)
})

app.get('/about', (request, response) => {
    response.send(`
        <h1>About</h1>
        <a href="/">Home</a>
    `)
})

app.listen(PORT)
console.log(`Server on port`, PORT)