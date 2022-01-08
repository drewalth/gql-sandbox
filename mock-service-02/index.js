require('dotenv').config()
const app = require('express')()
const faker = require('faker')

const {PORT} = process.env
const data = [...Array(100)].map((el, index) => ({
    id: index + 1,
    name: faker.lorem.word(),
    description: faker.lorem.words(),
    productId: faker.random.number(50)
}))
app.get('/', async (req,res) => {
    // to highlight apollo client caching
    await new Promise(resolve => setTimeout(resolve, 2000))
    res.send(data)
})

app.listen(PORT, () => {
    console.log('Mock Service listening on: ', PORT)
})
