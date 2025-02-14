const mongoose=require('mongoose');
const Food=require('./models/food');



const Dummy_food=[
    {
        name:'Burger',
        price:10,
        desc:'Extra cheese and spicy'
    },
    {
        name:'Paneer Tikka',
        price:22.25,
        desc:'Smooth and delicious paneer grilled with perfection'
    },
    {
        name:'Pasta Pizza',
        price:19.25,
        desc:'pasta pizza with mushroom and black olives'
    },
    {
    
            name:'Pasta ',
            price:15.99,
            desc:'red sauce pasta'
    

    },
    {
        name:'Noodles',
        price:15.99,
        desc:'hakka noodles'


    },
];
const seedDb=async()=>
{
    await Food.deleteMany({});
    await Food.insertMany(Dummy_food);
    console.log('Db seeded');

}

module.exports=seedDb;


