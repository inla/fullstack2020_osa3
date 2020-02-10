const mongoose = require('mongoose')

if (process.argv.length < 3) {
    console.log('give password as argument')
    process.exit(1)
}

const password = process.argv[2]
// const name = process.argv[3]
// const number = process.argv[4]

const url =
    `mongodb+srv://fullstack:<password>@cluster0-m4ccw.mongodb.net/test?retryWrites=true&w=majority`

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })

const personSchema = new mongoose.Schema({
    name: String,
    number: String,
})

const Person = mongoose.model('Person', personSchema)

const person = new Person({
    name: 'testihenkilö',
    number: 'testinumero',
  })
  
  person.save().then(response => {
    console.log('person saved!');
    mongoose.connection.close();
  })

// if (process.argv.length > 3) {
//     const person = new Person({
//         name: process.argv[3],
//         number: process.argv[4],
//     })

//     person.save().then(response => {
//         console.log('person saved!');
//         mongoose.connection.close();
//     })

// } else {
//     console.log('phonebook:')
//     Person
//         .find({})
//         .then(result => {
//             result.forEach(person => {
//                 console.log(person.name, person.number)
//             })
//             mongoose.connection.close()
//         })
// }