const express = require("express");

const mongoose = require("mongoose");

const cors = require("cors");
 
const app = express();
const PORT = process.env.PORT || 5000;
 
app.use(cors());
app.use(express.json());
 

mongoose.connect('mongodb://127.0.0.1:27017/dineout', {

    useNewUrlParser: true,

    useUnifiedTopology: true,
});
 

const restaurantSchema = new mongoose.Schema({

    name: String,

    image: String,

    menu: [

        {

            name: String,

            price: Number,

            image: String,

        },

    ],

    rating: Number,
});
 

const Restaurant = mongoose.model("Restaurant", restaurantSchema);
 
// Seed initial data
const seedData = [

    {

        name: "Chinese Wok",

        image: "https://b.zmtcdn.com/data/pictures/chains/2/19364242/652e979b87b41fe3112c41adffa572df.jpg?fit=around|750:500&crop=750:500;,",

        menu: [

            {

                name: "Chilli Chicken Dry",

                price: 169,

                image: "https://b.zmtcdn.com/data/dish_photos/f6e/8b4c31c6d7dede60769909ec8663cf6e.jpeg",

            },

            {

                name: "Paneer Chilli Dry",

                price: 169,

                image: "https://b.zmtcdn.com/data/dish_photos/10b/fc44155659dd421ebea5de901ae1910b.jpeg?fit=around|130:130&crop=130:130;,",

            },

            {

                name: "Veg Spring Roll",

                price: 169,

                image: "https://b.zmtcdn.com/data/dish_photos/032/fdb3a5d725d3cfd4130893f6d8342032.jpeg?fit=around|130:130&crop=130:130;,",

            },

            {

                name: "Kung Pao Chicken Dry",

                price: 169,

                image: "https://c8.alamy.com/comp/2NR4JDW/top-view-of-kung-pao-chicken-stir-fried-chinese-traditional-dish-with-chicken-peanuts-vegetables-chili-peppers-in-a-wok-pan-chinese-dinner-2NR4JDW.jpg",

            },
            {
                
            

                name: "Veg Manchurian Dry",

                price: 346,

                image: "https://b.zmtcdn.com/data/dish_photos/bf0/a798a694b3f26de51f31f485b1a79bf0.jpeg?output-format=webp&fit=around|130:130&crop=130:130;,",

            },

            {

                name: "Sweet Chilli Potato",

                price: 169,

                image: "https://b.zmtcdn.com/data/dish_photos/3e6/4a723dcc75e546dacd0b069e8089c3e6.jpeg?output-format=webp&fit=around|130:130&crop=130:130;,",

            },

            {

                name: "Veg Manchow Soup with Crispy Noodles",

                price: 219,

                image: "https://b.zmtcdn.com/data/dish_photos/002/4f2a951f8495470a4355c291efc4b002.jpg?fit=around|130:130&crop=130:130;,",

            },

            {

                name: "Veg Schezwan Noodle Soup",

                price: 219,

                image: "https://b.zmtcdn.com/data/dish_photos/712/39248b033b280d95f5b70f7569c56712.jpg?fit=around|130:130&crop=130:130;,",

            },


        ],
        rating: 4.0,
    },

    {

        name: "Pandit ",

        image: "https://content.jdmagicbox.com/comp/kanpur/t2/0512px512.x512.110825154339.q3t2/catalogue/pandit-upvan-hotel-pvt-ltd-kanpur-cantt-kanpur-hotels-380ywwc.jpg",

        menu: [

            {

                name: "Aloo Tikki",

                price: 110,

                image: "https://b.zmtcdn.com/data/dish_photos/b78/72621ea534247f8cb2860e6d5050ab78.jpg?fit=around|130:130&crop=130:130;,",

            },

            {

                name: "Dahi Bhalla",

                price: 90,

                image: "https://b.zmtcdn.com/data/dish_photos/bbc/67950414288778ea51bd779d1bd89bbc.jpg?fit=around|130:130&crop=130:130;,",
               
              

            },
            {

                name: "water Balls",

                price: 90,

                image: "https://b.zmtcdn.com/data/dish_photos/123/e2ddfc8bb725a81c370c2912cd7a0123.jpg?fit=around|130:130&crop=130:130;,",
               
            },
            {

                name: "Daal Makhni",

                price: 350,

                image: "https://b.zmtcdn.com/data/dish_photos/900/b7bc882d79fd5d1caa3473c861987900.jpg?fit=around|130:130&crop=130:130;,",
               
            },
            {

                name: "Paneer Kulcha with Chola",

                price: 220,

                image: "https://b.zmtcdn.com/data/dish_photos/3e1/d58501913ee5d42ffa23133d0a09f3e1.jpg?fit=around|130:130&crop=130:130;,",
               
            },
            {

                name: "Regular Thali",

                price: 280,

                image: "https://b.zmtcdn.com/data/dish_photos/38e/acc8f992c73163bf17bb52c2f8aa538e.jpg?fit=around|130:130&crop=130:130;,",
               
            },
            {

                name: "Executive Thali",

                price: 330,

                image: "https://b.zmtcdn.com/data/dish_photos/d0f/5f6ca8216f066e2cff65b22af18ced0f.jpg?fit=around|130:130&crop=130:130;,",
               
            },
            {

                name: "Hot and Sour Soup",

                price: 140,

                image: "https://b.zmtcdn.com/data/dish_photos/97f/cfc44b8e7e82bacb79e14fe9d7e8597f.jpg?fit=around|130:130&crop=130:130;,",
               
            },
            
            
    ],
        rating: 3.8,

    },

    {
        name: "Hestia Restaurant",

        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR579EB9BcK7pprLf_lCto_qoe1A3zSX1GFyw&s",

        menu: [

            {

                name: "Cheese Sandwich",

                price: 179,

                image: "https://b.zmtcdn.com/data/dish_photos/61f/9b692e168c8f13f0548e6a3d4666961f.jpeg?fit=around|130:130&crop=130:130;,",

            },

            {

                name: "Veg Manchuriyan",

                price: 219,

                image: "https://b.zmtcdn.com/data/dish_photos/402/fee8e5b73c80a75cb14a0101a26db402.jpeg?fit=around|130:130&crop=130:130;,",

            },

            {

                name: "Dahi Kabab",

                price: 199,

                image: "https://b.zmtcdn.com/data/dish_photos/34d/0f68d3a31fe2183cf0526106245da34d.jpeg?fit=around|130:130&crop=130:130;,",

            },
            {

                name: "White Sauce Pasta",

                price: 299,

                image: "https://b.zmtcdn.com/data/dish_photos/6bc/14ad6d0af31f84e1be00f32f55f666bc.jpg?fit=around|130:130&crop=130:130;,",

            },
            {

                name: "Crispy Corn",

                price: 219,

                image: "https://b.zmtcdn.com/data/dish_photos/64b/01bf92576bf09f29627295af2c46b64b.jpeg?fit=around|130:130&crop=130:130;,",

            },
            {

                name: "Honey Chilli Potato",

                price: 189,

                image: "https://b.zmtcdn.com/data/dish_photos/3e7/a53bee695c552508071fe0e24588e3e7.jpeg?fit=around|130:130&crop=130:130;,",

            },
            {

                name: "Paneer 65",

                price: 259,

                image: "https://b.zmtcdn.com/data/dish_photos/512/028c8d966630a52f656efdc4dd5df512.jpg?fit=around|130:130&crop=130:130;,",

            },
            {

                name: "Schzwan Fried Rice",

                price: 209,

                image: "https://b.zmtcdn.com/data/dish_photos/01a/565a6da597b696e402498a4fff50a01a.png?fit=around|130:130&crop=130:130;,",

            },


        ],

        rating: 3.9,

    },

    {

        name: "Ajmeri Darbar",

        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJbn9xkrD9ppjnpXp1vbVFNS4aukfnPcPvEg&s",

        menu: [

            {

                name: "Butter Chicken with Biryani Combo",

                price: 299,

                image: "https://b.zmtcdn.com/data/dish_photos/d14/d0bc79b89880e9c2b9bfeae5bc04ed14.jpg?fit=around|130:130&crop=130:130;,",

            },

            {

                name: "Chicken Korma with Rice",

                price: 299,

                image: "https://b.zmtcdn.com/data/dish_photos/af0/85b5c4fb49367f7172db673b3b86eaf0.jpg?fit=around|130:130&crop=130:130;,",

            },

            {

                name: "Chicken Biriyani",

                price: 249,

                image: "https://b.zmtcdn.com/data/dish_photos/acd/c0fcb8c9088fd7827f06733e18db9acd.jpg?fit=around|130:130&crop=130:130;,",

            },

            {

                name: "Mutton Biriyaani",

                price: 399,

                image: "https://b.zmtcdn.com/data/dish_photos/d65/5ab38068a1e09e153cc22a0a56ed8d65.jpg?fit=around|130:130&crop=130:130;,",

            },
            {

                name: "Butter Chicken",

                price: 299,

                image: "https://b.zmtcdn.com/data/dish_photos/20c/bab3fbb6e6f957eeaa2e75425bea120c.jpg?fit=around|130:130&crop=130:130;,",

            },
            {

                name: "Chicken Korma",

                price: 299,

                image: "https://b.zmtcdn.com/data/dish_photos/c5b/0474c8db7e56a53708e9d310399bdc5b.jpg?fit=around|130:130&crop=130:130;,",

            },
            {

                name: "Mutton Stew",

                price: 399,
 
                image: "https://b.zmtcdn.com/data/dish_photos/41b/1d8deee007d595cf031aca7d26a4a41b.jpg?fit=around|130:130&crop=130:130;,",

            },
            {

                name: "Mutton Keema Kaleji",

                price: 399,

                image: "https://b.zmtcdn.com/data/dish_photos/4fc/af21cefc70ab0a0f58004666295dc4fc.jpg?fit=around|130:130&crop=130:130;,",

            },

       
        ],

        rating: 4.1,

    },

    {

        name: "Zyka (Parade)",

        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5nLdqE8HmfbXPbSS1xbbYmaujdoTit9cmFw&s",

        menu: [

            {

                name: "Phirni",

                price: 60,

                image: "https://b.zmtcdn.com/data/dish_photos/6fe/d7c61f8a520a3aa449d8523307d7e6fe.png?fit=around|130:130&crop=130:130;,",

            },

            {

                name: "Zarda",

                price: 110,

                image: "https://b.zmtcdn.com/data/dish_photos/97a/7994aa6eb356eff298e67617c65d197a.jpeg?fit=around|130:130&crop=130:130;,",

            },

            {

                name: "Chicken Afghani",

                price: 210,

                image: "https://b.zmtcdn.com/data/dish_photos/396/83a4a9d3a31aa02adf7404236d4f0396.jpeg?fit=around|130:130&crop=130:130;,",
            },

            {
           

                name: "Tandoori Chicken",

                price: 530,

                image: "https://b.zmtcdn.com/data/dish_photos/116/15649933cb4f4f916f198d9349df2116.jpeg?fit=around|130:130&crop=130:130;,",

            },
            {
           

                name: "Chicken Sweet Corn Soup",

                price: 200,

                image: "https://b.zmtcdn.com/data/dish_photos/724/33bca4f5ba8ec9002185a66b7bc76724.jpeg?fit=around|130:130&crop=130:130;,",

            },
            {
           

                name: "Veg Hot And Sour Soup",

                price: 200,

                image: "https://b.zmtcdn.com/data/dish_photos/b1d/078089c2d2122789d566689ef0c9db1d.jpeg?fit=around|130:130&crop=130:130;,",

            },
            {
           

                name: "Veg Sweet Corn Soup",

                price: 200,

                image: "https://b.zmtcdn.com/data/dish_photos/68d/ff3ec887ac9d072334a84a48c3d0368d.jpeg?fit=around|130:130&crop=130:130;,",

            },
            {
           

                name: "Specicl Chicken Tikka Biryani(3pec)",

                price: 310,

                image: "https://b.zmtcdn.com/data/dish_photos/551/4a02a3692c9b53b1272d3c0d2d4ac551.png?fit=around|130:130&crop=130:130;,",

            },

        ],
 
           rating: 3.9,

    },

    {

        name: "Bhagwati's",

        image: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTN81HYKc48p7NihOkyLb56Uv_fmXJHSfwWR4ca0kCin6arB7ZM",

        menu: [

            {

                name: "Rasmalai [2 Pieces]",

                price: 95,

                image: "https://b.zmtcdn.com/data/dish_photos/abe/4fa8a65929c8805103706b3288552abe.jpg?fit=around|130:130&crop=130:130;,",

            },

            {

                name: "Chandrakala",

                price: 145,

                image: "https://b.zmtcdn.com/data/dish_photos/e92/6e1c73f4e3f7fa3eca05c4cb04235e92.jpg?fit=around|130:130&crop=130:130;,",

            },
            {

                name: "Kalajam [2 Pieces]",

                price: 65,

                image: "https://b.zmtcdn.com/data/dish_photos/267/fdc6747bad65e934733f63607945f267.jpg?output-format=webp&fit=around|130:130&crop=130:130;,",

            },
            {

                name: "chena Malai Chap",
                price: 65,

                image: "https://b.zmtcdn.com/data/dish_photos/bfc/aab1d9eabfdb17201102bfd7f604cbfc.jpg?output-format=webp&fit=around|130:130&crop=130:130;,",

            },
            {

                name: "Rasbhari",
                price: 165,

                image: "https://b.zmtcdn.com/data/dish_photos/f79/203b797663b9403138bbd1f7a0818f79.jpg?output-format=webp&fit=around|130:130&crop=130:130;,",

            },


            {

                name: "Kaaju Jalebi",

                price: 315,

                image: "https://b.zmtcdn.com/data/dish_photos/9bc/4884aca7af722ba0c777a845027ff9bc.jpg?fit=around|130:130&crop=130:130;,",

            },

            {

                name: "Patisa Roll",

                price: 160,

                image: "https://b.zmtcdn.com/data/dish_photos/46c/212de6fe66225c6d61d8ae20ac82046c.jpg?fit=around|130:130&crop=130:130;,",

            },
            {

                name: "Mohan Laddu ",

                price: 160,

                image: "https://b.zmtcdn.com/data/dish_photos/802/051ac92fa83254ac42ca7d2ec25c5802.jpg?output-format=webp&fit=around|130:130&crop=130:130;,",

            },

        ],
        rating: 4.0,

    },

    {

        name: "Nirvana",

        image: "https://b.zmtcdn.com/data/pictures/5/2304815/7e2d7126c3b63f4352a9782986b7e7d4.jpeg",

        menu: [

            {

                name: "Peri Peri Masala Fries",

                price: 80,

                image: "https://b.zmtcdn.com/data/reviews_photos/f4c/66da55b1e44843d1939ac3f243879f4c_1686108107.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",

            },

            {

                name: "Malai soyachap",

                price: 120,

                image: "https://b.zmtcdn.com/data/reviews_photos/19c/09881a518f0f2beaf62fdef308b5719c_1629892940.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",

            },

            {

                name: "Chocolate/Dateshake",

                price: 120,

                image: "https://b.zmtcdn.com/data/reviews_photos/9b8/187bd0ac27e267dc494fae38294019b8_1606203744.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
            },

            {
           

                name: "Classic Veg Sandwich",

                price: 90,

                image: "https://b.zmtcdn.com/data/reviews_photos/859/7b42420662f607b072ce1d1a0c423859_1686108108.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",

            },
            {
           

                name: "Veg Butter Maggie",

                price: 76.19,

                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8k_dJQWerj2vobOFRI8Tb6-BkteeATf9jwQ&s",

            },
            {
           

                name: "Garlic Naan",

                price: 57.14,

                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXh-pQfPBA5kxr0RqsQA0L1jiOXCHcr71MJw&s",

            },
            {
           

                name: "5 Pepper Pizza",

                price: 247.62,

                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8rkTv_zsgP1XZoa6IbmNAAH3KpwbF24mUbg&s",

            },


        ],

        rating: 3.9,

    },

    {

        name: "Cosmozin",

        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpichSm5JOhHu22O2HRIgt4Sw38SB_krfLSg&s",

        menu: [

            {

                name: "Masal Bread Garlic",

                price: 269,

                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP_embUeKEceCc0DG6IHKlUNm5itUQOdULrg&s",

            },

            {

                name: "Subz ki Handi",

                price: 469,

                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuo6BjU58ns0n4KfjITUcwaYWxdsLe482eKg&s",

            },

            {

                name: "Chicken Loaded nachos",

                price: 349,

                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQguWIJXh5RihlwLNB2tBCAIkfOLfGwCsQr3Q&s",
            },

            {
           

                name: "Shashlik Paneer Tikka",

                price: 399,

                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToeBoVqXmwjEjpYEGK1Y1AZi964zw-iK-Vqg&s",

            },
            {
           

                name: "Chicken Fried Rice",

                price: 399,

                image: "https://vismaifood.com/storage/app/uploads/public/9c1/148/420/thumb__1200_0_0_0_auto.jpg",

            },
            {
           

                name: "Amritsari Kulcha",

                price: 79,

                image: "https://media-assets.swiggy.com/swiggy/image/upload/f_auto,q_auto,fl_lossy/oplyvzwomqdub6k7ak8z",

            },
            {

                name: "Punjabi Chicken Tikka Pizza [9 inches]",

                price: 499,

                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdT-IYvch6r1xLqBqlIWEZ1w4dq--RZxb4Ag&s",

            },
            {

                name: "Veg Penne",

                price: 499,

                image: "https://b.zmtcdn.com/data/dish_photos/ae5/f96dabda25f985febe02e6a23a1beae5.jpg?fit=around|130:130&crop=130:130;,",

            },


        ],
        
        rating: 2.1,

    },

    {

        name: "The Yacht Club",

       image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbBIMFj9Tbl7YJrJhqTmmx7SdoXKYD9y2MSQ&s",

        menu: [

            {

                name: "Dal Tadka",

                price: 365,

                image: "https://b.zmtcdn.com/data/dish_photos/84d/2d21deb462e45b28930731659974e84d.jpg?fit=around|130:130&crop=130:130;,",

            },

            {

                name: "Lucknowi Dum Aloo",

                price: 365,

                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtuIkLWj1l18pby7OZCILLxI6njXTWmqTVbQ&s",

            },

            {

                name: "Nizami Diwani Handi",

                price: 395,

                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgXiHAY_uxgRWG-R3Co64-pCgQ5iLbGPYTog&s",
            },

            {
                          
                name: "Paneer Dhania Adraki",

                price: 425,

                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgri_EGwOwv8g6pCMmkVV8mpn7koloGY8Uvg&s",

            },
            {
                          
                name: "Hickory Mediterranean Grilled Cottage Cheese Sizzler",

                price: 575,

                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXkEFXPe3rtH0Kv093nZ9lNip6gV7wIxgUpg&s",

            },
            {
                          
                name: "Tomato Kaffir Lime Soup",

                price: 350,

                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6jDoCGsr5eseKJIGbNQlzVZMRNRHWMKfhZQ&s",

            },

            {
                          
                name: "Creamy Chestnut Broth Soup",

                price: 350,

                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQrK5et4Z3lqZHTkOjYrIC2tqANWTeVocqxA&s",

            },

            {
                          
                name: "Beet Roots and Organic Quinoa Salad",

                price: 425,

                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAXfhfbBr8ijaFHde97PO1zgXP55W19w44bw&s",

            },




        ],
        rating: 4.2,

    },

    {

        name: "Wow! Momo",

        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxqmJhewwYYL-Ucggcm6UMQtRNf2FrhM3U7w&s",
       
        menu: [
            {

                name: "Chicken Cheese Steam Momo",

                price: 259,

                image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/FOOD_CATALOG/IMAGES/CMS/2024/4/19/d7707281-bddb-435d-9b83-c80a6a215e2b_7ddeebe1-cf61-4612-b6f7-3e0f6ddbb5fd.png",

            },

            {

                name: "Corn Cheese Steam Momo",

                price: 239,

                image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/FOOD_CATALOG/IMAGES/CMS/2024/4/19/9dc09a66-a6f8-4880-8d0d-72b595381677_a30da8b4-b263-4e53-8b17-ba7fe32482e3.png",

            },

            {

                name: "Chicken Darjeeling Pan Fried Momo in Schezwan Sauce [Spicy]",

                price: 276,

                image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/gonswh0mpgfjswgrn6lq",

            },

            {      

                name: "Chicken Delight Steam Momo",

                price: 159,

                image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/6005544c724cf9c3163be64b60d5d45b",

            },
            {      

                name: "Paneer Steam Momo",

                price: 221,

                image: "https://b.zmtcdn.com/data/dish_photos/f7c/02b5a6c40878b8671c242ac1233b7f7c.png?output-format=webp&fit=around|130:130&crop=130:130;,",

            },
              {

                name: "Corn Cheese Moburg",

                price: 159,

                image: "https://b.zmtcdn.com/data/dish_photos/5fb/b8b6f0e4e6330d1c2daacd2a19eea5fb.jpg?output-format=webp&fit=around|130:130&crop=130:130;,",

            },
            {      

                name: "Cheesy Veggie Moburg",

                price: 139,

                image: "https://b.zmtcdn.com/data/dish_photos/bba/1ed40c6cf91f352642bd7112e5279bba.png?output-format=webp&fit=around|130:130&crop=130:130;,",

            },

            {
                name: "Veggie Moburg",

                price: 109,

                image: "https://b.zmtcdn.com/data/dish_photos/452/25a488651f4acfba280a2e9f7a72f452.png?output-format=webp&fit=around|130:130&crop=130:130;,",

            },


        ],
        rating: 4.7,

    },

    {

        name: "Side Walk Bakehouse & Cafe",

        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX8fiGZJIK78icz2IrasPefKpISzcW-0mPUQ&s",

        menu: [

            {

                name: "Og Irish Coffee",

                price: 220,

                image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/db18a31e4f5a05559f72da2d31893d40",

            },

            {

                name: "Almond Praline Brewccino",

                price: 310,

                image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/05342ec195d02e7b86f66bdc6090c30c",

            },

            {

                name: "S'mores Brewccino",

                price: 285,

                image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/2e34e8a4a63cb6c9919930c179f41266",
            },

            {

                name: "Xmas Brewccino",
                

                price: 330,

                image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/456559233589f50eb12ec6293d543291",

            },
            {

                name: "Pull Apart Cheesy Garlic Loaf",
                

                price: 300,

                image: "https://b.zmtcdn.com/data/dish_photos/a66/3d011b02b5be93fe1a4a8756a5479a66.jpeg?fit=around|130:130&crop=130:130;,",

            },
            {

                name: "Classic Cheesy Garlic Bread",
                

                price: 300,

                image: "https://b.zmtcdn.com/data/dish_photos/2da/7cf9adc45151d1f5161d162edaf2b2da.jpeg?fit=around|130:130&crop=130:130;,",

            },
            {

                
                
                name: "Belgian Chocolate Waffle",
                price: 330,

                image: "https://b.zmtcdn.com/data/dish_photos/579/7adb2aa28505fe5505adc2d9ecd9e579.jpeg?fit=around|130:130&crop=130:130;,",

            },
            {

                name: "Classic Butter Waffle",
                

                price: 280,

                image: "https://b.zmtcdn.com/data/dish_photos/417/690e084e1d297b610df47ddaebba2417.jpeg?fit=around|130:130&crop=130:130;,",

            },

        ],
        rating: 4.2,

    },

    {

        name: "Stone",

        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS16OJpVs3jFQ8TnQMtsO96mp9tUqX46svLcg&s",

        menu: [

            {

                name: "Veg Kabab Platter",

                price: 700,

                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcrIvImJuHs8R5ZQgygtqHwNRK9YCGqIJEwg&s",

            },

            {

                name: "Veg Stir Fried Rice",

                price: 300,

                image: "https://shwetainthekitchen.com/wp-content/uploads/2014/03/Brown-Rice-Stir-Fry.jpg",

            },

            {

                name: "Veg Burnt Garlic Fried Rice",

                price: 300,

                image: "https://c.ndtvimg.com/albumgeo_rice_625x300_20_August_18.jpg?im=FeatureCrop,algorithm=dnn,width=1200,height=675",
            },

            {

                name: "Veg Udon Noodles",

                price: 350,

                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz1oHFdZ0JE8u5NEoz8DsYpJlM-_3NTdOBzA&s",

            },
            {

                name: "Chicken Manchow Soup",

                price: 250,

                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwosxWuU9VKyx4g7ilhpF133rydLlw_6xgvQ&s",

            },
            {

                name: "Khao Suey Soup",

                price: 400,

                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlFaTL5ydfagw3c7EGG6UgtuvDjmQZGqYzQA&s",

            },
            {

                name: "Roti Pe Galauti Kebab",

                price: 500,

                image: "https://b.zmtcdn.com/data/dish_photos/ffd/a05e72de43ef4fdfb94c6853d2d33ffd.png?fit=around|130:130&crop=130:130;,",

            },
            {

                name: "Butter Naan",

                price: 80,

                image: "https://im.hunt.in/local/Gallery/2997333/l/2997333_00bfc.jpg",

            },



        ],
        rating: 4.2,

    },

    {

        name: "Veer Ji Malai Chaap Wale",
        image: "https://content.jdmagicbox.com/comp/patna/g3/0612px612.x612.221205141651.w8g3/catalogue/veer-ji-malai-chaap-wale-kankarbagh-patna-restaurants-92cx3tvjy1.jpg",

        menu: [

            {

                name: "Veg Lemon Garlic Chicken",

                price: 230,

                image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/442de9c16d4421d2c5ff9f47553fa685",
            },

            {

                name: "Veg Masala Chicken",

                price: 230,

                image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/ddb5b44a60d1b33b2a9d135594af97fa",

            },

            {

                name: "Veg Afghani Chicken",
                
                price: 230,

                image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/01c8f10278b2687f074dc746bff5136c",
            },

            {
           
                name: "Stuff Chaap",
             
                price: 240,

                image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/c3abb235e8b8596a628e14f521018f74",

            },
           
            {
           
                name: "Sunny Leone Chaap with Achari Chaap Combo",
             
                price: 519,

                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwfCLQe9NUBomCphnXVK8WSMyq2QCwMKJY-w&s",

            },
            
            {
           
                name: "Punjabi Spicy Chaap",
             
                price: 221,

                image: "https://b.zmtcdn.com/data/dish_photos/887/f7706bf07483a90e7bd17c1c13da7887.jpg?fit=around|130:130&crop=130:130;,",

            },


            {
           
                name: "Hariyali Chap",
             
                price: 221,

                image: "https://b.zmtcdn.com/data/dish_photos/d3b/7ff882fe94fd94f0fc04910f384e3d3b.jpg?fit=around|130:130&crop=130:130;,",

            },

            {
           
                name: "Veg Fish Tikka",
             
                price: 219,

                image: "https://b.zmtcdn.com/data/dish_photos/00b/c5831fcb80a510d3f5e7aa4e7698d00b.jpg?fit=around|130:130&crop=130:130;,",

            },





        ],
        rating: 4.3,

    },

    {

        name: "Kake di Hatti",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLBogVvdy3i3lsyS3_2LXNZBfMWJcUbHs1XA&s",

        menu: [

            {

                name: "Veg Manchurian Dry",

                price: 319,

                image: "https://b.zmtcdn.com/data/dish_photos/c16/c0f7ca182606c793f06148842bb39c16.png?fit=around|130:130&crop=130:130;,",
            },

            {

                name: "Veg Spring Roll",

                price: 279,

                image: "https://b.zmtcdn.com/data/dish_photos/316/e719dee407afcc4e73662c7875c48316.png?fit=around|130:130&crop=130:130;,",

            },

            {

                name: "Honey Chilli Potato",

                price: 289,

                image: "https://b.zmtcdn.com/data/dish_photos/6b8/80a56d31b279c44e3ad0d1d9ec17a6b8.jpeg?fit=around|130:130&crop=130:130;,",
            },
            {
                           
                name: "Mushroom Stuffed Tikka",

                price: 289,

                image: "https://b.zmtcdn.com/data/dish_photos/48c/b57de27bb7d9814202ef073d391e448c.jpg?fit=around|130:130&crop=130:130;,",

            },
            {
                           
                name: "Chole Kulcha Pockets",

                price: 199,

                image: "https://b.zmtcdn.com/data/dish_photos/7ac/e8991d6f02c596d13d8584bcb8bef7ac.png?fit=around|130:130&crop=130:130;,",

            },
            {
                           
                name: "Dal Makhani Shots",

                price: 289,

                image: "https://b.zmtcdn.com/data/dish_photos/9b5/9a5dcdd55e67aefb719c9d2ddca6a9b5.png?fit=around|130:130&crop=130:130;,",

            },
            {
                           
                name: "Veg Manchurian Gravy",

                price:319,

                image: "https://b.zmtcdn.com/data/dish_photos/bb2/50ac840bbc3b2106eada65b2bc971bb2.jpeg?fit=around|130:130&crop=130:130;,",

            },
            {
                           
                name: "Amritsari Tawa Paneer",

                price : 389,

                image: "https://b.zmtcdn.com/data/dish_photos/744/facadc44a00d7a23c1166cd5c2999744.jpg?fit=around|130:130&crop=130:130;,",

            },

        ],
        rating: 3.3,

    },
    
    {

        name: "Shree Ram Bhojnalaya",
        image: "https://img.restaurantguru.com/re3f-Shri-Ram-Restaurant-food-2022-10-2.jpg",

        menu: [

            {

                name: "Dal Fry Meal",

                price: 150,

                image: "https://b.zmtcdn.com/data/dish_photos/b54/3436153bcdc9302ee708b1f15cd80b54.png?fit=around|130:130&crop=130:130;,",
            },

            {

                name: "Special Thali",

                price: 249,

                image: "https://b.zmtcdn.com/data/dish_photos/335/837e4b2cbb86176685566efabfbce335.png?fit=around|130:130&crop=130:130;,",

            },

            {

                name: "2 Pyaaz Paratha",

                price: 170,

                image: "https://b.zmtcdn.com/data/dish_photos/c86/d5080e00274b22726f1f2bf68c402c86.png?fit=around|130:130&crop=130:130;,",
            },

            {
           
                name: "Egg Masala Maggi",

                price: 170,

                image: "https://b.zmtcdn.com/data/dish_photos/411/230395bed049ecdeb619c3c109c7a411.png?fit=around|130:130&crop=130:130;,",

            },
            {
           
                name: "Mix Veg Meal",

                price: 170,

                image: "https://b.zmtcdn.com/data/dish_photos/57e/2423495465277579d0547dcab443257e.png?fit=around|130:130&crop=130:130;,",

            },
            {
           
                name: "Matar Paneer Meal",

                price: 195,
               

                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqZkII4NfUJQD_0GqxOljbeT8z8GLqiPEhOA&s",

            },
            {
           
                name: "Stuffed Dum Aloo",

                price: 180,

                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbtt6XfZtKVNwRcqvttFOzF44E7QalvmF1Bw&s",

            },
            {

                name: "Shahi Paneer",

                price: 230,

                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXltUGf_HF7ATt4VWmCol_RiAD1SVCMAJ7wQ&s",
            },

        ],
        rating: 4.2,

    },
    {

        name: "Haveli",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR91zomu5tBFkUnXXxmO0thf5NCPc9EpbCcrg&s",

        menu: [

            {

                name: "Dahl Kabab",

                price: 249,

                image: "https://b.zmtcdn.com/data/dish_photos/5c0/88360b03b06f62e513b5409be9e4f5c0.jpg?output-format=webp&fit=around|130:130&crop=130:130;,",
            },

            {

                name: "French Fry",

                price: 189,

                image: "https://b.zmtcdn.com/data/dish_photos/9f5/335d01c19395df4a523469815b9ed9f5.jpg?output-format=webp&fit=around|130:130&crop=130:130;,",

            },

            {

                name: "Paneer Tikka",

                price: 269,

                image: "https://b.zmtcdn.com/data/dish_photos/fea/7bdb044d51d641152e901e23b94fffea.jpg?output-format=webp&fit=around|130:130&crop=130:130;,",
            },

            {
           
                name: "Cheese Cigar Roll",

                price: 249,

                image: "https://b.zmtcdn.com/data/dish_photos/172/a5975355711ec2d13c45b46cb4cc4172.jpeg?output-format=webp&fit=around|130:130&crop=130:130;,",
              

            },
            {
           
                name: "Veg Manchurian Gravy",

                price: 259,

                image: "https://b.zmtcdn.com/data/dish_photos/2aa/0957607c7d0398a3cc5957bdc15b52aa.jpg?output-format=webp&fit=around|130:130&crop=130:130;,",

            },
            {
           
                name: "Honey Chilli Potato",

                price: 239,
               

                image: "https://b.zmtcdn.com/data/dish_photos/ea0/cfa5f6ca2dc3aa6cd4e94b43da0bdea0.jpg?output-format=webp&fit=around|130:130&crop=130:130;,",

            },
            {
           
                name: "Chilli Paneer Dry",

                price: 259,

                image: "https://b.zmtcdn.com/data/dish_photos/db5/99e141851565d6fdffa7e38d6128cdb5.jpg?output-format=webp&fit=around|130:130&crop=130:130;,",

            },
            {

                name: "Chilli Garlic Noodles",

                price: 239,

                image: "https://b.zmtcdn.com/data/dish_photos/e0e/6d22da29dd2b2f446dcb368a5c6d7e0e.jpg?output-format=webp&fit=around|130:130&crop=130:130;,",
            },

        ],
        rating: 4.2,

    },
    {

        name: "Mocha",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNE-SAOITPu4TQTkyEn-PO093Igya3wYFW0Q&s",

        menu: [

            {

                name: "OG Veggie Aloolicious Burger",

                price: 229,

                image: "https://b.zmtcdn.com/data/dish_photos/d34/77fbffb6e1cac5fa7d3ef7d405adad34.jpeg?fit=around|130:130&crop=130:130;,",
            },

            {

                name: "Arrabiata Sauce Penne Pasta",

                price: 425,

                image: "https://b.zmtcdn.com/data/dish_photos/636/990351d067f26aeea3b1d0ddfeee2636.jpg?fit=around|130:130&crop=130:130;,",

            },

            {

                name: "Farm Fresh Pizza",

                price: 445,

                image: "https://b.zmtcdn.com/data/dish_photos/e8d/5ad07f2d20af8bd81bf3bc6239e11e8d.jpg?fit=around|130:130&crop=130:130;,",
            },

            {
           
                name: "Chicken Tikka Pizza",

                price: 450,

                image: "https://b.zmtcdn.com/data/dish_photos/11f/16f4e16c8c4c7be6f3e86105a03a111f.jpg?fit=around|130:130&crop=130:130;,",

            },
            {
           
                name: "Blue Berry Cheese Cake",

                price: 250,

                image: "https://b.zmtcdn.com/data/dish_photos/8c4/bcc6c714ef4cee0315f25272a01c78c4.jpg?fit=around|130:130&crop=130:130;,",

            },
            {
           
                name: "Pink Lemonade",

                price: 150,
               

                image: "https://b.zmtcdn.com/data/dish_photos/e3a/fdfd5c8b9bb70822d0f1cf3260c74e3a.jpg?fit=around|130:130&crop=130:130;,",

            },
            {
           
                name: "Country Lemonade",

                price: 150,

                image: "https://b.zmtcdn.com/data/dish_photos/e75/c51eea867169aa597920bc7a0db72e75.jpg?fit=around|130:130&crop=130:130;,",

            },
            {

                name: "Mocha Shake",

                price: 245,

                image: "https://b.zmtcdn.com/data/dish_photos/c46/5ca6bbdfeb91b60b221d735f8fb51c46.jpg?fit=around|130:130&crop=130:130;,",
            },

        ],
        rating: 4.9,

    },
    {

        name: "Bistro 57 cafe",
        image: "https://b.zmtcdn.com/data/pictures/2/19793742/9f7cb8866cde349a9659300d3a3b2219_featured_v2.jpg",

        menu: [

            {

                name: "Belgium Hot Chocolate",

                price: 199,

                image: "https://b.zmtcdn.com/data/dish_photos/7e8/065ec4ba492e07696696e197d87307e8.jpeg?fit=around|130:130&crop=130:130;,",
            },

            {

                name: "Cafe Latte",

                price: 159,

                image: "https://b.zmtcdn.com/data/dish_photos/6d1/3a5b9c19d93ec922aef047dd97c9b6d1.jpeg?fit=around|130:130&crop=130:130;,",

            },

            {

                name: "Brownie Cookies Shake",

                price: 199,

                image: "https://b.zmtcdn.com/data/dish_photos/729/1ed747079dc52ce39f34fe0d1d126729.jpeg?fit=around|130:130&crop=130:130;,",
            },

            {
           
                name: "Red Velvet Shake",

                price: 199,

                image: "https://b.zmtcdn.com/data/dish_photos/8a5/957bfdfd8a77dae23460749e3ab1d8a5.jpeg?fit=around|130:130&crop=130:130;,",

            },
            {
           
                name: "Mushroom Cream Sauce Pasta",

                price: 299,

                image: "https://b.zmtcdn.com/data/dish_photos/5ef/5479e18325ab995277df3123d7ee25ef.jpeg?fit=around|130:130&crop=130:130;,",

            },
            {
           
                name: "Bruschetta",

                price: 219,
               

                image: "https://b.zmtcdn.com/data/dish_photos/77a/2556e42e54c8c68c35de98ea5fdc877a.jpeg?fit=around|130:130&crop=130:130;,",

            },
            {
           
                name: "Death By Chocolate",

                price: 229,

                image: "https://b.zmtcdn.com/data/dish_photos/5b3/4b5381cd481594c0ff76fc500f9c05b3.jpeg?fit=around|130:130&crop=130:130;,",

            },
            {

                name: "Veg Singapore Noodles",

                price: 249,

                image: "https://b.zmtcdn.com/data/dish_photos/da5/4ce8747efc91d469c713dfd72ce95da5.png?fit=around|130:130&crop=130:130;,",
            },

        ],
        rating: 4.1,

    },
    {

        name: "Cawnpore Kitchen",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-AWevsYd_-Q4yrVm5WPvdcAkY9z93FELsaA&s",

        menu: [

            {

                name: "Hara Bhara Kebab",

                price: 202,

                image: "https://b.zmtcdn.com/data/dish_photos/2f9/3af4a0d7a4ca41442a8aa62d462772f9.jpg?fit=around|130:130&crop=130:130;,",
            },

            {

                name: "Makke De Kebab",

                price: 197,

                image: "https://b.zmtcdn.com/data/dish_photos/ac1/9df6814acf51c88fe5440562aeeb4ac1.jpg?fit=around|130:130&crop=130:130;,",

            },

            {

                name: "Hariyali Paneer Tikka",

                price: 310,

                image: "https://b.zmtcdn.com/data/dish_photos/73a/84a5b3312fdab8af4a57d9f8a460273a.jpg?fit=around|130:130&crop=130:130;,",
            },

            {
           
                name: "Dahi Ke Sholey ",

                price: 237,

                image: "https://b.zmtcdn.com/data/dish_photos/fe2/1e1dab3373202a48fe0168ff96343fe2.jpg?fit=around|130:130&crop=130:130;,",

            },
            {
           
                name: "Corn Palak",

                price: 326,

                image: "https://b.zmtcdn.com/data/dish_photos/6f6/968a736e6f72e7a4add6455247ec26f6.jpg?fit=around|130:130&crop=130:130;,",

            },
            {
           
                name: "Kadhai Chaap",

                price: 303,
               

                image: "https://b.zmtcdn.com/data/dish_photos/cdd/2009b47ed4793b919d5e23f8ec1bacdd.jpg?fit=around|130:130&crop=130:130;,",

            },
            {
           
                name: "Kadhai Paner",

                price: 332,

                image: "https://b.zmtcdn.com/data/dish_photos/c71/6de9a81579a9ef841d040819737dac71.jpg?fit=around|130:130&crop=130:130;,",

            },
            {

                name: "Handi Veg Biryani",

                price: 270,

                image: "https://b.zmtcdn.com/data/dish_photos/10c/f9ee150263f27cb7e10c5e990632010c.jpg?fit=around|130:130&crop=130:130;,",
            },

        ],
        rating: 3.9,

    },
    {

        name: "The Zaffran - Banquet & Restaurant",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNwuGxGi3ZaiFz-mTArluvEJtZXCB7bbosLQ&s",

        menu: [

            {

                name: "Surkh Paneer Tikka",

                price: 390,

                image: "https://b.zmtcdn.com/data/dish_photos/3d0/04d0bd6b8646031c05d0e4d575a533d0.jpg?fit=around|130:130&crop=130:130;,",
            },

            {

                name: "Makhmali Kebab",

                price: 390,

                image: "https://b.zmtcdn.com/data/dish_photos/b21/189ba3f765fd98babc9f48210d22ab21.jpg?fit=around|130:130&crop=130:130;,",

            },

            {

                name: "Chilli Paneer",

                price: 390,

                image: "https://b.zmtcdn.com/data/dish_photos/94a/4595c3d605a46d1be793d0d5f576694a.jpg?fit=around|130:130&crop=130:130;,",
            },

            {
           
                name: "Tangdi Kebab",

                price: 535,

                image: "https://b.zmtcdn.com/data/dish_photos/9a9/8def70313d1639aab0f04425f241b9a9.jpg?fit=around|130:130&crop=130:130;,",

            },
            {
           
                name: "Fish n Chips",

                price: 545,

                image: "https://b.zmtcdn.com/data/dish_photos/508/aecacc1b375af9119a7a6fdde9c14508.jpg?fit=around|130:130&crop=130:130;,",

            },
            {
           
                name: "Paneer Butter Masala",

                price: 440,
               

                image: "https://b.zmtcdn.com/data/dish_photos/ee5/4259339a7751912711eb0520d8a90ee5.jpg?fit=around|130:130&crop=130:130;,",

            },
            {
           
                name: "Zaffrans Special Yogurt Chicken",

                price: 585,

                image: "https://b.zmtcdn.com/data/dish_photos/d10/64f9ffb39fd0baf199b88b83da965d10.jpg?fit=around|130:130&crop=130:130;,",

            },
            {

                name: "Mutton Rogan Josh",

                price: 585,

                image: "https://b.zmtcdn.com/data/dish_photos/42e/b4990daabfa45b34e6a6ae50af3d442e.jpg?fit=around|130:130&crop=130:130;,",
            },

        ],
        rating: 3.8,

    },
];


const seedDatabase = async () => {

    try {

        await Restaurant.deleteMany(); // Clear existing data

        await Restaurant.insertMany(seedData);

        console.log("Database seeded successfully.");

    } catch (error) {

        console.error("Error seeding the database:", error.message);

    }
};
 
// Seed data when the server starts
seedDatabase();
 

app.get("/restaurants", async (req, res) => {

    try {

        // Use the 'find' method of the 'Restaurant' model to retrieve all restaurants

        const restaurants = await Restaurant.find({});
 

        // Send the retrieved restaurants as a JSON response

        res.json(restaurants);

    } catch (error) {

        // Handle any errors that may occur during the process and send a 500 Internal Server Error response

        res.status(500).json({ error: error.message });

    }
});
 
app.listen(PORT, () => {

    console.log(`Server is running on port ${PORT}`);
});
