import { fa, fakerDE } from "@faker-js/faker"

export const generateProduct = () => {
    return {
        _id: fakerDE.database.mongodbObjectId(),
        title: fakerDE.commerce.productName(),
        description: fakerDE.commerce.productDescription(),
        price: fakerDE.commerce.price(),
        stock: fakerDE.number.int({min: 0, max: 80}),
        img: fakerDE.image.url(),
        category: fakerDE.commerce.department(),
        code: fakerDE.commerce.isbn()
    }
}

export const generateUser = () => {
    let cart = []
    let numberProds = fakerDE.number.int({min: 1, max: 7})

    for(let i = 0; i < numberProds; i++) {
        cart.push(generateProduct())
    }
    return {
        _id: fakerDE.database.mongodbObjectId(),
        first_name: fakerDE.person.firstName(),
        last_name: fakerDE.person.lastName(),
        sex: fakerDE.person.sex(),
        gender: fakerDE.person.gender(),
        birth_date: fakerDE.date.birthdate(),
        phone: fakerDE.phone.number(),
        address: fakerDE.location.streetAddress(),
        img: fakerDE.image.avatar(),
        email: fakerDE.internet.email(),
        password: fakerDE.internet.password(),
        cart: cart
    }
}