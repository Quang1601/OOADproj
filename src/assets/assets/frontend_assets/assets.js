import basket_icon from './basket_icon.png'
import logo from './logo.png'
import header_img from './header_img.png'
import search_icon from './search_icon.png'

import menu_N from './MienNam.png'
import menu_B from './MienBac.png'
import menu_T from './MienTrung.png'



import menu_1 from './menu_1.png'
import menu_2 from './menu_2.png'
import menu_3 from './menu_3.png'
import menu_4 from './menu_4.png'
import menu_5 from './menu_5.png'
import menu_6 from './menu_6.png'
import menu_7 from './menu_7.png'
import menu_8 from './menu_8.png'

import food_1 from './food_1.png'
import food_2 from './food_2.png'
import food_3 from './food_3.png'
import food_4 from './food_4.png'
import food_5 from './food_5.png'
import food_6 from './food_6.png'
import food_7 from './food_7.png'
import food_8 from './food_8.png'
import food_9 from './food_9.png'
import food_10 from './food_10.png'
import food_11 from './food_11.png'
import food_12 from './food_12.png'
import food_13 from './food_13.png'
import food_14 from './food_14.png'
import food_15 from './food_15.png'
import food_16 from './food_16.png'
import food_17 from './food_17.png'
import food_18 from './food_18.png'
import food_19 from './food_19.png'
import food_20 from './food_20.png'
import food_21 from './food_21.png'
import food_22 from './food_22.png'
import food_23 from './food_23.png'
import food_24 from './food_24.png'
import food_25 from './food_25.png'
import food_26 from './food_26.png'
import food_27 from './food_27.png'
import food_28 from './food_28.png'
import food_29 from './food_29.png'
import food_30 from './food_30.png'
import food_31 from './food_31.png'
import food_32 from './food_32.png'
import food_33 from './food_33.png' 

import add_icon_white from './add_icon_white.png'
import add_icon_green from './add_icon_green.png'
import remove_icon_red from './remove_icon_red.png'
import app_store from './app_store.png'
import play_store from './play_store.png'
import linkedin_icon from './linkedin_icon.png'
import facebook_icon from './facebook_icon.png'
import X_icon from './XX.png'
import cross_icon from './cross_icon.png'
import selector_icon from './selector_icon.png'
import rating_starts from './rating_starts.png'
import profile_icon from './profile_icon.png'
import bag_icon from './bag_icon.png'
import logout_icon from './logout_icon.png'
import parcel_icon from './parcel_icon.png'

export const assets = {
    logo,
    basket_icon,
    header_img,
    search_icon,
    rating_starts,
    add_icon_green,
    add_icon_white,
    remove_icon_red,
    app_store,
    play_store,
    linkedin_icon,
    facebook_icon,
    X_icon: X_icon,
    cross_icon,
    selector_icon,
    profile_icon,
    logout_icon,
    bag_icon,
    parcel_icon
}
export const menu_region = [
    {
        region_name: "Bắc",
       region_id: "north",
        region_image:  menu_B
    },
    {
        region_name: "Trung",
       region_id: "central",
        region_image:  menu_T
    },
    {
        region_name: "Nam",
       region_id: "south",
        region_image: menu_N
    }
];


export const menu_list = [
    {
        menu_name: "mặn",
        menu_image: menu_2,
    },
    {
        menu_name: "nước",
        menu_image: menu_1
    },
    {
        menu_name: "tráng miệng",
        menu_image: menu_3
    },
  ]

export const food_list = [
    {
        _id: "1",
        name: "Phở",
        image: food_1,
        price: 12,
        description: "A fragrant Vietnamese noodle soup with beef or chicken, served with fresh herbs and lime.",
        rid: "north",
        category: "nước",
        instructions: [
            { step: 1, text: "Boil the beef bones in water for 10 minutes and drain." },
            { step: 2, text: "Roast the ginger and onions until charred, then add to the broth." },
            { step: 3, text: "Season the broth with fish sauce, sugar, and salt." },
            { step: 4, text: "Add the beef slices and rice noodles to a bowl, then pour hot broth over them." }
        ]
    },
    {
        _id: "2",
        name: "Bún ngan ",
        image: food_2,
        price: 18,
        description: "A comforting noodle dish with duck and rich, savory broth.",
        rid: "north",
        category: "nước",
        instructions: [
            { step: 1, text: "Clean the duck and simmer with ginger and salt." },
            { step: 2, text: "Prepare the broth with aromatics like onions and spices." },
            { step: 3, text: "Cook the noodles and assemble the dish with broth, duck slices, and herbs." }
        ]
    }, {
        _id: "3",
        name: "Bún ốc",
        image: food_3,
        price: 16,
        description: "A tangy snail noodle soup made with tomatoes and herbs, a northern delicacy.",
        rid: "north",
        category: "nước",
        instructions: [
            { step: 1, text: "Clean and boil the snails with lemongrass and lime leaves." },
            { step: 2, text: "Prepare the tomato-based broth with vinegar and spices." },
            { step: 3, text: "Cook rice noodles, add snails and broth, and garnish with herbs." }
        ]
    }, {
        _id: "4",
        name: "phở cuốn",
        image: food_4,
        price: 24,
        description: "Delicious rice noodle rolls filled with beef, herbs, and dipping sauce.",
        rid: "north",
        category: "mặn",
        instructions: [
            { step: 1, text: "Mix rice flour and cornstarch with water to make a smooth batter." },
            { step: 2, text: "Coat whole shrimp in batter, fry until golden and crispy." },
            { step: 3, text: "Serve hot with sweet chili dipping sauce and fresh greens." }
        ]
    }, {
        _id: "5",
        name: "Chả cá Lã Vọng",
        image: food_5,
        price: 14,
        description: "Grilled fish marinated with turmeric and dill, served sizzling on a skillet.",
        rid: "north",
        category: "mặn",
        instructions: [
            { step: 1, text: "Mix rice flour and cornstarch with water to make a smooth batter." },
            { step: 2, text: "Coat whole shrimp in batter, fry until golden and crispy." },
            { step: 3, text: "Serve hot with sweet chili dipping sauce and fresh greens." }
        ]
    }, {
        _id: "6",
        name: "Bánh tôm Hồ Tây",
        image: food_6,
        price: 12,
        description: "Crispy shrimp fritters served with tangy dipping sauce.",
        rid: "north",
        category: "mặn",
        instructions: [
            { step: 1, text: "Mix rice flour and cornstarch with water to make a smooth batter." },
            { step: 2, text: "Coat whole shrimp in batter, fry until golden and crispy." },
            { step: 3, text: "Serve hot with sweet chili dipping sauce and fresh greens." }
        ]
    }, {
        _id: "7",
        name: "chè dừa dầm",
        image: food_7,
        price: 20,
        description: "A refreshing coconut dessert with jelly and tropical fruits.",
        rid: "north",
        category: "tráng miệng",
        instructions: [
            { step: 1, text: "Prepare coconut milk and sweeten with sugar to taste." },
            { step: 2, text: "Dice jelly and fruit; combine with sweetened coconut milk." },
            { step: 3, text: "Serve chilled with ice or refrigerate before serving." }
        ]
    }, {
        _id: "8",
        name: "Chè trôi nước",
        image: food_8,
        price: 15,
        description: "Sweet glutinous rice balls filled with mung bean paste, in a warm ginger syrup.",
       rid: "central",
        category: "tráng miệng",
        instructions: [
            { step: 1, text: "Prepare mung bean paste filling and roll into small balls." },
            { step: 2, text: "Wrap glutinous rice dough around the filling, forming smooth balls." },
            { step: 3, text: "Simmer in boiling water, then serve in a ginger syrup." }
        ]
    }, {
        _id: "9",
        name: "Bánh đa kê",
        image: food_9,
        price: 14,
        description: "A crunchy snack of rice paper topped with mung bean and sugar.",
        rid: "north",
        category: "tráng miệng",
        instructions: [
            { step: 1, text: "Prepare mung bean paste and spread onto crispy rice paper." },
            { step: 2, text: "Sprinkle sugar evenly across the top." },
            { step: 3, text: "Cut into portions and serve immediately for crunchiness." }
        ]
    }, {
        _id: "10",
        name: "Bún bò Huế",
        image: food_10,
        price: 22,
        description: "A spicy beef noodle soup with lemongrass and chili from central Vietnam.",
        rid: "central",
        category: "nước",
        instructions: [
            { step: 1, text: "Simmer beef shank, pork bones, and lemongrass to make a rich broth." },
            { step: 2, text: "Season with fish sauce, shrimp paste, and chili oil." },
            { step: 3, text: "Serve hot with rice noodles, herbs, and lime wedges." }
        ]
    }, {
        _id: "11",
        name: "Mì quảng",
        image: food_11,
        price: 10,
        description: "A flavorful noodle dish with a small amount of broth, served with herbs and crackers.",
        rid:"central",
        category: "nước",
        instructions: [
            { step: 1, text: "Prepare a rich broth with chicken, shrimp, and pork." },
            { step: 2, text: "Cook noodles and top with broth, meat, and shrimp." },
            { step: 3, text: "Garnish with fresh herbs, peanuts, and crispy crackers." }
        ]
    }, {
        _id: "12",
        name: "Bánh canh cá lóc ",
        image: food_12,
        price: 12,
        description: "Thick noodles in a savory broth with snakehead fish and herbs.",
        rid: "central",
        category: "nước",
        instructions: [
            { step: 1, text: "Boil snakehead fish and debone, reserving the broth." },
            { step: 2, text: "Season broth with fish sauce, turmeric, and scallions." },
            { step: 3, text: "Add thick noodles and fish pieces; serve with fresh herbs." }
        ]
    },
    {
        _id: "13",
        name: "Bánh xèo",
        image: food_13,
        price: 12,
        description: "Crispy Vietnamese pancakes filled with shrimp, pork, and bean sprouts.",
        rid: "central",
        category: "mặn",
        instructions: [
            { step: 1, text: "Mix rice flour, coconut milk, and turmeric to create the batter." },
            { step: 2, text: "Pour batter onto a hot skillet, then add shrimp, pork, and bean sprouts." },
            { step: 3, text: "Fold pancake in half when crispy and serve with dipping sauce." }
        ]
    },
    {
        _id: "14",
        name: "Bánh căn ",
        image: food_14,
        price: 18,
        description: "Small savory pancakes topped with shrimp or pork, served with dipping sauce.",
        rid: "central",
        category: "mặn",
        instructions: [
            { step: 1, text: "Prepare batter using rice flour and water." },
            { step: 2, text: "Cook batter in small molds, adding shrimp or pork as topping." },
            { step: 3, text: "Serve with a tangy fish sauce-based dipping sauce." }
        ]
    }, {
        _id: "15",
        name: "Cơm hến",
        image: food_15,
        price: 16,
        description: "A unique dish of rice topped with baby clams and crunchy toppings.",
        rid: "central",
        category: "mặn",
        instructions: [
            { step: 1, text: "Clean and cook baby clams, reserving the broth." },
            { step: 2, text: "Serve cooked clams over rice with peanuts, fried shallots, and herbs." },
            { step: 3, text: "Pour clam broth over rice or serve as a side soup." }
        ]
    }, {
        _id: "16",
        name: "Cao lầu",
        image: food_16,
        price: 24,
        description: "Hoi An’s iconic noodle dish with pork and crispy crackers.",
        rid: "central",
        category: "mặn",
        instructions: [
            { step: 1, text: "Prepare noodles with a unique lye water soak for texture." },
            { step: 2, text: "Top noodles with slices of char siu pork and fresh greens." },
            { step: 3, text: "Garnish with crispy crackers and serve with a light broth." }
        ]
    }, {
        _id: "17",
        name: "Chè bắp",
        image: food_17,
        price: 14,
        description: "A sweet corn dessert with creamy coconut sauce.",
        rid: "central",
        category: "tráng miệng",
        instructions: [
            { step: 1, text: "Cook corn kernels in water until soft and sweet." },
            { step: 2, text: "Sweeten with sugar and thicken with tapioca starch." },
            { step: 3, text: "Serve warm or chilled with coconut sauce on top." }
        ]
    }, {
        _id: "18",
        name: "Bánh chuối chiên",
        image: food_18,
        price: 12,
        description: "Crispy deep-fried bananas, a popular street snack.",
        rid: "central",
        category: "tráng miệng",
        instructions: [
            { step: 1, text: "Flatten ripe bananas slightly for even frying." },
            { step: 2, text: "Coat bananas with a batter made of rice flour and water." },
            { step: 3, text: "Deep-fry until golden and crispy, serve immediately." }
        ]
    }, {
        _id: "19",
        name: "Bún quậy",
        image: food_19,
        price: 20,
        description: "A Southern specialty with noodles and fresh seafood, mixed tableside.",
        rid: "south",
        category: "mặn",
        instructions: [
            { step: 1, text: "Prepare fresh noodles and seafood broth." },
            { step: 2, text: "Serve with shrimp, squid, and fresh herbs." },
            { step: 3, text: "Mix tableside with a spicy dipping sauce." }
        ]
    }, {
        _id: "20",
        name: "Hủ tiếu nam vang",
        image: food_20,
        price: 15,
        description: "A savory noodle soup with pork, shrimp, and a delicate broth.",
        rid: "south",
        category: "nước",
        instructions: [
            { step: 1, text: "Simmer pork bones to create a clear broth." },
            { step: 2, text: "Cook noodles and add shrimp, pork slices, and broth." },
            { step: 3, text: "Garnish with bean sprouts, lime, and fried garlic." }
        ]
    }, {
        _id: "21",
        name: "Bánh canh ghẹ  ",
        image: food_21,
        price: 14,
        description: "A rich and hearty crab noodle soup with thick rice noodles and fresh herbs.",
       rid: "south",
        category: "nước",
        instructions: [
            { step: 1, text: "Boil crab and reserve meat and broth." },
            { step: 2, text: "Cook thick rice noodles and combine with crab meat." },
            { step: 3, text: "Serve hot with fresh herbs and lime wedges." }
        ]
    }, {
        _id: "22",
        name: "Bún riêu cua",
        image: food_22,
        price: 22,
        description: "A tangy and aromatic crab paste noodle soup with tomatoes and tofu.",
        rid: "south",
        category: "nước",
        instructions: [
            { step: 1, text: "Prepare a crab paste base with minced crab and broth." },
            { step: 2, text: "Simmer with tomatoes, tofu, and seasoning for a tangy flavor." },
            { step: 3, text: "Serve over noodles with herbs, lime, and chili." }
        ]
    }, {
        _id: "23",
        name: "Cơm tấm",
        image: food_23,
        price: 10,
        description: "Broken rice served with grilled pork, egg, and pickled vegetables, a southern classic.",
        rid: "south",
        category: "mặn",
        instructions: [
            { step: 1, text: "Cook broken rice until soft and fluffy." },
            { step: 2, text: "Grill pork chops and fry eggs." },
            { step: 3, text: "Serve with pickled vegetables and fish sauce." }
        ]
    }, {
        _id: "24",
        name: "Bò xào cải chua",
        image: food_24,
        price: 12,
        description: "Stir-fried beef with tangy pickled mustard greens, perfect with steamed rice.",
        rid: "south",
        category: "mặn",
        instructions: [
            { step: 1, text: "Slice beef thinly and marinate with soy sauce and garlic." },
            { step: 2, text: "Stir-fry beef quickly, then add pickled mustard greens." },
            { step: 3, text: "Serve hot with steamed rice." }
        ]
    },
    {
        _id: "25",
        name: "Thịt kho hột vịt",
        image: food_25,
        price: 12,
        description: "Caramelized pork belly and boiled eggs simmered in a sweet-savory sauce.",
        rid: "south",
        category: "mặn",
        instructions: [
            { step: 1, text: "Caramelize sugar, then add pork belly and cook until browned." },
            { step: 2, text: "Add coconut water, fish sauce, and boiled eggs." },
            { step: 3, text: "Simmer until tender and flavorful, serve with rice." }
        ]
    },
    {
        _id: "26",
        name: "Sườn kho chua ngọt ",
        image: food_26,
        price: 18,
        description: "Sweet and sour braised pork ribs, a comforting family favorite.",
        rid: "south",
        category: "mặn",
        instructions: [
            { step: 1, text: "Marinate pork ribs with garlic, sugar, and fish sauce." },
            { step: 2, text: "Cook ribs until browned, then add a sweet-sour sauce." },
            { step: 3, text: "Simmer until the sauce thickens, serve hot." }
        ]
    }, {
        _id: "27",
        name: "Bánh da lợn",
        image: food_27,
        price: 16,
        description: "A layered steamed dessert made with pandan and mung beans.",
        rid: "south",
        category: "tráng miệng",
        instructions: [
            { step: 1, text: "Blend pandan leaves for juice, and cook mung beans until soft." },
            { step: 2, text: "Layer the batter and mung bean paste in a steamer." },
            { step: 3, text: "Steam each layer until set, cool and slice to serve." }
        ]
    }, {
        _id: "28",
        name: "Bò bía ngọt",
        image: food_28,
        price: 24,
        description: "Sweet spring rolls filled with shredded coconut, sugar, and sesame seeds.",
        rid: "south",
        category: "tráng miệng",
        instructions: [
            { step: 1, text: "Mix shredded coconut with sugar and roasted sesame seeds." },
            { step: 2, text: "Place the mixture on rice paper and roll tightly." },
            { step: 3, text: "Serve as a sweet snack or dessert." }
        ]
    }, {
        _id: "29",
        name: "Bánh tráng trộn",
        image: food_29,
        price: 14,
        description: "A popular street snack of mixed rice paper with dried shrimp, mango, and herbs.",
        rid: "south",
        category: "tráng miệng",
        instructions: [
            { step: 1, text: "Cut rice paper into strips and mix with dried shrimp and mango." },
            { step: 2, text: "Add chili sauce, lime juice, and peanuts." },
            { step: 3, text: "Toss well and serve immediately." }
        ]
    }, {
        _id: "30",
        name: "Bún kèn",
        image: food_30,
        price: 12,
        description: "A coconut milk-based noodle soup with minced fish, a southern specialty.",
        rid: "south",
        category: "nước",
        instructions: [
            { step: 1, text: "Simmer minced fish in a fragrant coconut milk-based broth." },
            { step: 2, text: "Add spices like turmeric, lemongrass, and chili." },
            { step: 3, text: "Serve over noodles with fresh herbs and lime." }
        ]
    }, {
        _id: "31",
        name: " Bún chả ",
        image: food_31,
        price: 20,
        description: "Grilled pork served with vermicelli noodles, herbs, and a tangy dipping sauce.",
        rid: "north",
        category: "mặn",
        instructions: [
            { step: 1, text: "Grill marinated pork patties and slices until charred." },
            { step: 2, text: "Prepare a tangy dipping sauce with fish sauce, vinegar, and sugar." },
            { step: 3, text: "Serve pork with vermicelli, herbs, and dipping sauce." }
        ]
    }, {
        _id: "32",
        name: "Bánh chưng ",
        image: food_32,
        price: 15,
        description: "A traditional square rice cake filled with pork and mung beans, wrapped in banana leaves.",
        rid: "north",
        category: "mặn",
        instructions: [
            { step: 1, text: "Soak sticky rice and mung beans overnight." },
            { step: 2, text: "Layer rice, pork, and mung beans, then wrap in banana leaves." },
            { step: 3, text: "Boil for hours until the cake is cooked through, then cool and slice." }
        ]
    },
    {
        _id: "33",
        name: "Hủ tiếu chay", 
        image: food_33,        
        price: 30,
        description: "A light vegetarian noodle soup made with fresh vegetables and tofu.",
        rid: "south",
        category: "nước",
        instructions: [
            { step: 1, text: "Prepare a vegetable broth with carrots, radish, and mushrooms." },
            { step: 2, text: "Add tofu, noodles, and fresh vegetables." },
            { step: 3, text: "Serve hot with herbs and chili sauce." }
        ]
 

    }
]
