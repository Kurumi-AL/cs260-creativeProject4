// const express = require('express');
// // const bodyParser = require("body-parser");

// const app = express();
// app.use(express.json());

const mongoose = require('mongoose');

// connect to the database
mongoose.connect('mongodb://localhost:27017/kiltons-shop', {
    useNewUrlParser: true
});

// Schema
const itemSchema = new mongoose.Schema({
    item_name: String,
    pic_path: String,
    price_mon: Number
});


const exchangeRateSchema = new mongoose.Schema({
    monster_parts: String,
    pic_path: String,
    price_mon: Number
});

// Create a model for items in the museum
const Item = mongoose.model('Item', itemSchema);
const ExchangeRate = mongoose.model('ExchangeRate', exchangeRateSchema);


// Add all data in itemList.js to Mongo db
async function main() {
    console.log('hi')
    try {
        // await Item.remove()
        await Item.insertMany(
            [
                {
                "id": 1,
                "item_name": "Monster Extract",
                "pic_path": "https://static.wikia.nocookie.net/zelda_gamepedia_en/images/a/a3/BotW_Monster_Extract_Icon.png",
                "price_mon": 9
                }, 
                {
                "id": 2,
                "item_name": "Wooden Mop",
                "pic_path": "https://static.wikia.nocookie.net/zelda/images/d/da/Breath_of_the_Wild_Improvised_Weapons_Wooden_Mop_%28Icon%29.png",
                "price_mon": 19
                }, 
                {
                "id": 3,
                "item_name": "Spring Loaded Hammer",
                "pic_path": "https://static.wikia.nocookie.net/zelda_gamepedia_en/images/8/85/BotW_Spring-Loaded_Hammer_Model.png",
                "price_mon": 199
                 }, 
                 {
                "id": 4,
                "item_name": "Bokoblin Mask",
                "pic_path": "https://static.wikia.nocookie.net/zelda_gamepedia_en/images/a/aa/BotW_Bokoblin_Mask_Icon.png",
                "price_mon": 99
                }, 
                {
                "id": 5,
                "item_name": "Moblin Mask",
                "pic_path": "https://static.wikia.nocookie.net/zelda_gamepedia_en/images/6/6d/BotW_Moblin_Mask_Icon.png",
                "price_mon": 199
                 }, 
                 {
                "id": 6,
                "item_name": "Lizalfos Mask",
                "pic_path": "https://static.wikia.nocookie.net/zelda_gamepedia_en/images/3/3e/BotW_Lizalfos_Mask_Icon.png",
                "price_mon": 299
                 },
                 {
                "id": 7,
                "item_name": "Lynel Mask",
                "pic_path": "https://static.wikia.nocookie.net/zelda_gamepedia_en/images/6/65/BotW_Lynel_Mask_Icon.png",
                "price_mon": 999
                 }, 
                 {
                "id": 8,
                "item_name": "Monster Bridle",
                "pic_path": "https://static.wikia.nocookie.net/zelda_gamepedia_en/images/a/ab/BotW_Monster_Bridle_Icon.png",
                "price_mon": 399
                }, 
                {
                "id": 9,
                "item_name": "Monster Saddle",
                "pic_path": "https://static.wikia.nocookie.net/zelda_gamepedia_en/images/4/45/BotW_Monster_Saddle_Icon.png",
                "price_mon": 299
                 }, 
                 {
                "id": 10,
                "item_name": "Dark Hood",
                "pic_path": "https://static.wikia.nocookie.net/zelda_gamepedia_en/images/9/97/BotW_Dark_Hood_Icon.png",
                "price_mon": 1999
                }, 
                {
                "id": 11,
                "item_name": "Dark Tunic",
                "pic_path": "https://static.wikia.nocookie.net/zelda_gamepedia_en/images/5/5a/BotW_Dark_Tunic_Icon.png",
                "price_mon": 999
                }, 
                {
                "id": 12,
                "item_name": "Dark Trousers",
                "pic_path": "https://static.wikia.nocookie.net/zelda_gamepedia_en/images/9/91/BotW_Dark_Trousers_Icon.png",
                "price_mon": 999
                }
            ]
        );    
        console.log('done')
    } catch (error) {
        console.log(error);
    }
    
    // Add all data in exchangeRate.js
    try {
        // await ExchangeRate.remove()
        await ExchangeRate.insertMany(
            [
                {
                "id": 1,
                "monster_parts": "Octo Balloon",
                "pic_path": "https://static.wikia.nocookie.net/zelda_gamepedia_en/images/0/0e/BotW_Octo_Balloon_Icon.png",
                "price_mon": 1
                 }, 
                 {
                "id": 2,
                "monster_parts": "Moblin Horn",
                "pic_path": "https://static.wikia.nocookie.net/zelda_gamepedia_en/images/0/04/BotW_Moblin_Horn_Icon.png",
                "price_mon": 2
                }, 
                {
                "id": 3,
                "monster_parts": "Keese Wing",
                "pic_path": "https://www.zeldadungeon.net/wiki/images/2/28/Keese_Wing.png",
                "price_mon": 2
                }, 
                {
                "id": 4,
                "monster_parts": "Ancient Screw",
                "pic_path": "https://www.zeldadungeon.net/wiki/images/c/c9/Ancient_Screw.png",
                "price_mon": 2
                }, 
                {
                "id": 5,
                "monster_parts": "Monster Extract",
                "pic_path": "https://static.wikia.nocookie.net/zelda_gamepedia_en/images/a/a3/BotW_Monster_Extract_Icon.png",
                "price_mon": 2
                }, 
                {
                "id": 6,
                "monster_parts": "Bokoblin Horn",
                "pic_path": "https://www.zeldadungeon.net/wiki/images/5/58/Bokoblin_Horn.png",
                "price_mon": 3
                }, 
                {
                "id": 7,
                "monster_parts": "Chuchu Jelly",
                "pic_path": "https://www.zeldadungeon.net/wiki/images/e/e9/Chuchu_Jelly.png",
                "price_mon": 3
                },
                {
                "id": 8,
                "monster_parts": "Bokoblin Fang",
                "pic_path": "https://www.zeldadungeon.net/wiki/images/f/f7/BokoblinFang.png",
                "price_mon": 5
                }, 
                {
                "id": 9,
                "monster_parts": "Lizalfos Horn",
                "pic_path": "https://static.wikia.nocookie.net/zelda_gamepedia_en/images/c/c9/BotW_Lizalfos_Horn_Icon.png",
                "price_mon": 5
                }, 
                {
                "id": 10,
                "monster_parts": "White Chuchu Jelly",
                "pic_path": "https://www.zeldadungeon.net/wiki/images/9/92/White_Chuchu_Jelly.png",
                "price_mon": 5
                }, 
                {
                "id": 11,
                "monster_parts": "Red Chuchu Jelly",
                "pic_path": "https://www.zeldadungeon.net/wiki/images/b/ba/Red_Chuchu_Jelly.png",
                "price_mon": 5
                }, 
                {
                "id": 12,
                "monster_parts": "Yellow Chuchu Jelly",
                "pic_path": "https://www.zeldadungeon.net/wiki/images/4/49/Yellow_Chuchu_Jelly.png",
                "price_mon": 5
                }, 
                {
                "id": 13,
                "monster_parts": "Octorok Tentacle",
                "pic_path": "https://static.wikia.nocookie.net/zelda_gamepedia_en/images/4/49/BotW_Octorok_Tentacle_Model.png",
                "price_mon": 5
                }, 
                {
                "id": 14,
                "monster_parts": "Ancient Spring",
                "pic_path": "https://www.zeldadungeon.net/wiki/images/e/ea/Ancient_Spring.png",
                "price_mon": 5
                }, 
                {
                "id": 15,
                "monster_parts": "Moblin Fang",
                "pic_path": "https://static.wikia.nocookie.net/zelda_gamepedia_en/images/8/81/BotW_Moblin_Fang_Icon.png",
                "price_mon": 6
                }, 
                {
                "id": 16,
                "monster_parts": "Fire Keese Wing",
                "pic_path": "https://www.zeldadungeon.net/wiki/images/d/d5/Fire_Keese_Wing.png",
                "price_mon": 6
                }, 
                {
                "id": 17,
                "monster_parts": "Electric Keese Wing",
                "pic_path": "https://www.zeldadungeon.net/wiki/images/e/e0/Electric_Keese_Wing.png",
                "price_mon": 6
                }, 
                {
                "id": 18,
                "monster_parts": "Lizalfos Talon",
                "pic_path": "https://www.zeldadungeon.net/wiki/images/e/e0/Lizalfos_Talon.png",
                "price_mon": 8
                }, 
                {
                "id": 19,
                "monster_parts": "Bokoblin Guts",
                "pic_path": "https://www.zeldadungeon.net/wiki/images/e/ec/BokoblinGuts.png",
                "price_mon": 10
                }, 
                {
                "id": 20,
                "monster_parts": "Keese Eyeball",
                "pic_path": "https://static.wikia.nocookie.net/zelda_gamepedia_en/images/f/f2/BotW_Keese_Eyeball_Icon.png",
                "price_mon": 10
                }, 
                {
                "id": 21,
                "monster_parts": "Ancient Gear",
                "pic_path": "https://static.wikia.nocookie.net/zelda_gamepedia_en/images/c/c9/BotW_Ancient_Gear_Icon.png",
                "price_mon": 10
                }, 
                {
                "id": 22,
                "monster_parts": "Moblin Guts",
                "pic_path": "https://static.wikia.nocookie.net/zelda_gamepedia_en/images/3/3a/BotW_Moblin_Guts_Icon.png",
                "price_mon": 12
                }, 
                {
                "id": 23,
                "monster_parts": "Lizalfos Tail",
                "pic_path": "https://static.wikia.nocookie.net/zelda_gamepedia_en/images/3/38/BotW_Lizalfos_Tail_Render.png",
                "price_mon": 12
                }, 
                {
                "id": 24,
                "monster_parts": "Octorok Eyeball",
                "pic_path": "https://static.wikia.nocookie.net/zelda_gamepedia_en/images/4/42/BotW_Octorok_Eyeball_Icon.png",
                "price_mon": 13
                }, 
                {
                "id": 25,
                "monster_parts": "Molduga Fin",
                "pic_path": "https://static.wikia.nocookie.net/zelda_gamepedia_en/images/8/82/BotW_Molduga_Fin_Icon.png",
                "price_mon": 15
                },
                {
                    "id": 26,
                    "monster_parts": "Hinox Toenail",
                    "pic_path": "https://www.zeldadungeon.net/wiki/images/b/bb/Hinox_Toenail.png",
                    "price_mon": 15
                },
                {
                    "id": 27,
                    "monster_parts": "Icy Lizalfos Tail",
                    "pic_path": "https://www.zeldadungeon.net/wiki/images/9/91/Icy_Lizalfos_Tail.png",
                    "price_mon": 16
                },
                {
                    "id": 28,
                    "monster_parts": "Red Lizalfos Tail",
                    "pic_path": "https://static.wikia.nocookie.net/zelda_gamepedia_en/images/a/a8/BotW_Red_Lizalfos_Tail_Icon.png",
                    "price_mon": 16
                },
                {
                    "id": 29,
                    "monster_parts": "Yellow Lizalfos Tail",
                    "pic_path": "https://www.zeldadungeon.net/wiki/images/2/29/Yellow_Lizalfos_Tail.png",
                    "price_mon": 16
                },
                {
                    "id": 30,
                    "monster_parts": "Hinox Tooth",
                    "pic_path": "https://www.zeldadungeon.net/wiki/images/7/79/Hinox_Tooth.png",
                    "price_mon": 18
                },
                {
                    "id": 31,
                    "monster_parts": "Lynel Horn",
                    "pic_path": "https://static.wikia.nocookie.net/zelda_gamepedia_en/images/3/38/BotW_Lynel_Horn_Icon.png",
                    "price_mon": 20
                },
                {
                    "id": 32,
                    "monster_parts": "Ancient Shaft",
                    "pic_path": "https://static.wikia.nocookie.net/zelda_gamepedia_en/images/8/81/BotW_Ancient_Shaft_Icon.png",
                    "price_mon": 20
                },
                {
                    "id": 33,
                    "monster_parts": "Lynel Hoof",
                    "pic_path": "https://static.wikia.nocookie.net/zelda_gamepedia_en/images/9/9e/BotW_Lynel_Hoof_Icon.png",
                    "price_mon": 30
                },
                {
                    "id": 34,
                    "monster_parts": "Hinox Guts",
                    "pic_path": "https://static.wikia.nocookie.net/zelda_gamepedia_en/images/b/b3/BotW_Hinox_Guts_Model.png",
                    "price_mon": 40
                },
                {
                    "id": 35,
                    "monster_parts": "Ancient Core",
                    "pic_path": "https://static.wikia.nocookie.net/zelda_gamepedia_en/images/6/69/BotW_Ancient_Core_Icon.png",
                    "price_mon": 40
                },
                {
                    "id": 36,
                    "monster_parts": "Dragon’s Scale",
                    "pic_path": "https://static.wikia.nocookie.net/zelda_gamepedia_en/images/8/81/BotW_Dinraal%27s_Scale_Icon.png",
                    "price_mon": 60
                },
                {
                    "id": 37,
                    "monster_parts": "Lynel Guts",
                    "pic_path": "https://static.wikia.nocookie.net/zelda_gamepedia_en/images/7/7c/BotW_Lynel_Guts_Icon.png",
                    "price_mon": 100
                },
                {
                    "id": 38,
                    "monster_parts": "Giant Ancient Core",
                    "pic_path": "https://www.zeldadungeon.net/wiki/images/4/4c/Giant_Ancient_Core.png",
                    "price_mon": 100
                },
                {
                    "id": 39,
                    "monster_parts": "Shard of Dragon’s Fang",
                    "pic_path": "https://static.wikia.nocookie.net/zelda_gamepedia_en/images/1/10/BotW_Shard_of_Farosh%27s_Fang_Icon.png",
                    "price_mon": 110
                },
                {
                    "id": 40,
                    "monster_parts": "Shard of Dragon’s Horn",
                    "pic_path": "https://static.wikia.nocookie.net/zelda_gamepedia_en/images/9/93/BotW_Shard_of_Farosh%27s_Horn_Icon.png",
                    "price_mon": 150
                }
            ]
        );
    } catch (error) {
        console.log(error);
    }
    console.log('done twice')
}

main().then(() => mongoose.connection.close())

// app.listen(3000, () => console.log('Server listening on port 3000!'));