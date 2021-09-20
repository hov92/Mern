import bcrypt from 'bcryptjs'

const data = {
    users: [
        {
            name: 'Dwayne',
            email: "admin@example.com",
            password: bcrypt.hashSync('1234', 8),
            isAdmin: true,
        },
        {
            name: 'Tanaeya',
            email: "tanaeya@example.com",
            password: bcrypt.hashSync('1234', 8),
            isAdmin: false
        },
        {
            name: 'steve',
            email: "steve@example.com",
            password: bcrypt.hashSync('1234', 8),
            isAdmin: false
        }
    ],
    products: [
        {
            name: 'Black Owned Suit',
            category: 'Men',
            image: 'https://i.pinimg.com/474x/64/ca/be/64cabe58dcee9791674e2ee61e1764e3--male-models-black-character-inspiration-male-black.jpg',
            price: 150,
            brand: 'Too Raw',
            rating: 4.5,
            numReviews: 10,
            description: 'high quality product'
        },
        {
            name: 'Black Shirt',
            category: 'Men',
            image: 'https://i1.adis.ws/i/boohooamplience/mzz45625_black_xl/black-short-sleeve-denim-shirt-in-muscle-fit?$product_image_main_thumbnail$&fmt=webp',
            price: 40,
            brand: 'R&B Rapper',
            rating: 4.5,
            numReviews: 21,
            description: 'high quality product'
        },
        {
            name: 'Folo',
            category: 'Men',
            image: 'https://images.riverisland.com/is/image/RiverIsland/black--white-short-sleeve-polo-shirts-2-pack_395360_main?$productImageLarge$',
            price: 60,
            brand: 'Folo',
            rating: 3.5,
            numReviews: 15,
            description: 'high quality product'
        },
        {
            name: 'Oreo',
            category: 'Women',
            image: 'https://www.rosewe.com/images/201905/source_img/222314_P_15587932650450.jpg',
            price: 120,
            brand: 'SlimThick',
            rating: 4.5,
            numReviews: 57,
            description: 'high quality product'
        },
        {
            name: 'Luna Jumpsuit',
            category: 'Women',
            image: 'https://cdn.shopify.com/s/files/1/1238/9850/products/LOOK-01-LUNABLACK_0090_1280x.jpg?v=1620421820',
            price: 45,
            brand: 'Luna',
            rating: 4.5,
            numReviews: 32,
            description: 'high quality product'
        },
        {
            name: "Kid's African Print Dashiki T-Shirt",
            category: 'Kids',
            image: 'https://cdn.shopify.com/s/files/1/0684/2619/products/blackdashiki_1000x.jpg?v=1596822141',
            price: 25,
            brand: "D'IYANU",
            rating: 4.5,
            numReviews: 17,
            description: 'high quality product'
        },
    ],
}
export default data;