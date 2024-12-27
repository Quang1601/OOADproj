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
       
    },
    {
        _id: "2",
        name: "Bún ngan ",
        image: food_2,
        price: 18,
        description: "A comforting noodle dish with duck and rich, savory broth.",
        rid: "north",
        category: "nước"
    }, {
        _id: "3",
        name: "Bún ốc",
        image: food_3,
        price: 16,
        description: "A tangy snail noodle soup made with tomatoes and herbs, a northern delicacy.",
        rid: "north",
        category: "nước"
    }, {
        _id: "4",
        name: "phở cuốn",
        image: food_4,
        price: 24,
        description: "Delicious rice noodle rolls filled with beef, herbs, and dipping sauce.",
        rid: "north",
        category: "mặn"
    }, {
        _id: "5",
        name: "Chả cá Lã Vọng",
        image: food_5,
        price: 14,
        description: "Grilled fish marinated with turmeric and dill, served sizzling on a skillet.",
        rid: "north",
        category: "mặn"
    }, {
        _id: "6",
        name: "Bánh tôm Hồ Tây",
        image: food_6,
        price: 12,
        description: "Crispy shrimp fritters served with tangy dipping sauce.",
        rid: "north",
        category: "mặn"
    }, {
        _id: "7",
        name: "chè dừa dầm",
        image: food_7,
        price: 20,
        description: "A refreshing coconut dessert with jelly and tropical fruits.",
        rid: "north",
        category: "tráng miệng"
    }, {
        _id: "8",
        name: "Chè trôi nước",
        image: food_8,
        price: 15,
        description: "Sweet glutinous rice balls filled with mung bean paste, in a warm ginger syrup.",
       rid: "central",
        category: "tráng miệng"
    }, {
        _id: "9",
        name: "Bánh đa kê",
        image: food_9,
        price: 14,
        description: "A crunchy snack of rice paper topped with mung bean and sugar.",
        rid: "north",
        category: "tráng miệng"
    }, {
        _id: "10",
        name: "Bún bò Huế",
        image: food_10,
        price: 22,
        description: "A spicy beef noodle soup with lemongrass and chili from central Vietnam.",
        rid: "central",
        category: "nước"
    }, {
        _id: "11",
        name: "Mì quảng",
        image: food_11,
        price: 10,
        description: "A flavorful noodle dish with a small amount of broth, served with herbs and crackers.",
        rid:"central",
        category: "nước"
    }, {
        _id: "12",
        name: "Bánh canh cá lóc ",
        image: food_12,
        price: 12,
        description: "Thick noodles in a savory broth with snakehead fish and herbs.",
        rid: "central",
        category: "nước"
    },
    {
        _id: "13",
        name: "Bánh xèo",
        image: food_13,
        price: 12,
        description: "Crispy Vietnamese pancakes filled with shrimp, pork, and bean sprouts.",
        rid: "central",
        category: "mặn"
    },
    {
        _id: "14",
        name: "Bánh căn ",
        image: food_14,
        price: 18,
        description: "Small savory pancakes topped with shrimp or pork, served with dipping sauce.",
        rid: "central",
        category: "mặn"
    }, {
        _id: "15",
        name: "Cơm hến",
        image: food_15,
        price: 16,
        description: "A unique dish of rice topped with baby clams and crunchy toppings.",
        rid: "central",
        category: "mặn"
    }, {
        _id: "16",
        name: "Cao lầu",
        image: food_16,
        price: 24,
        description: "Hoi An’s iconic noodle dish with pork and crispy crackers.",
        rid: "central",
        category: "mặn"
    }, {
        _id: "17",
        name: "Chè bắp",
        image: food_17,
        price: 14,
        description: "A sweet corn dessert with creamy coconut sauce.",
        rid: "central",
        category: "tráng miệng"
    }, {
        _id: "18",
        name: "Bánh chuối chiên",
        image: food_18,
        price: 12,
        description: "Crispy deep-fried bananas, a popular street snack.",
        rid: "central",
        category: "tráng miệng"
    }, {
        _id: "19",
        name: "Bún quậy",
        image: food_19,
        price: 20,
        description: "A Southern specialty with noodles and fresh seafood, mixed tableside.",
        rid: "south",
        category: "mặn"
    }, {
        _id: "20",
        name: "Hủ tiếu nam vang",
        image: food_20,
        price: 15,
        description: "A savory noodle soup with pork, shrimp, and a delicate broth.",
        rid: "south",
        category: "nước"
    }, {
        _id: "21",
        name: "Bánh canh ghẹ  ",
        image: food_21,
        price: 14,
        description: "A rich and hearty crab noodle soup with thick rice noodles and fresh herbs.",
       rid: "south",
        category: "nước"
    }, {
        _id: "22",
        name: "Bún riêu cua",
        image: food_22,
        price: 22,
        description: "A tangy and aromatic crab paste noodle soup with tomatoes and tofu.",
        rid: "south",
        category: "nước"
    }, {
        _id: "23",
        name: "Cơm tấm",
        image: food_23,
        price: 10,
        description: "Broken rice served with grilled pork, egg, and pickled vegetables, a southern classic.",
        rid: "south",
        category: "mặn"
    }, {
        _id: "24",
        name: "Bò xào cải chua",
        image: food_24,
        price: 12,
        description: "Stir-fried beef with tangy pickled mustard greens, perfect with steamed rice.",
        rid: "south",
        category: "mặn"
    },
    {
        _id: "25",
        name: "Thịt kho hột vịt",
        image: food_25,
        price: 12,
        description: "Caramelized pork belly and boiled eggs simmered in a sweet-savory sauce.",
        rid: "south",
        category: "mặn"
    },
    {
        _id: "26",
        name: "Sườn kho chua ngọt ",
        image: food_26,
        price: 18,
        description: "Sweet and sour braised pork ribs, a comforting family favorite.",
        rid: "south",
        category: "mặn"
    }, {
        _id: "27",
        name: "Bánh da lợn",
        image: food_27,
        price: 16,
        description: "A layered steamed dessert made with pandan and mung beans.",
        rid: "south",
        category: "tráng miệng"
    }, {
        _id: "28",
        name: "Bò bía ngọt",
        image: food_28,
        price: 24,
        description: "Sweet spring rolls filled with shredded coconut, sugar, and sesame seeds.",
        rid: "south",
        category: "tráng miệng"
    }, {
        _id: "29",
        name: "Bánh tráng trộn",
        image: food_29,
        price: 14,
        description: "A popular street snack of mixed rice paper with dried shrimp, mango, and herbs.",
        rid: "south",
        category: "tráng miệng"
    }, {
        _id: "30",
        name: "Bún kèn",
        image: food_30,
        price: 12,
        description: "A coconut milk-based noodle soup with minced fish, a southern specialty.",
        rid: "south",
        category: "nước"
    }, {
        _id: "31",
        name: " Bún chả ",
        image: food_31,
        price: 20,
        description: "Grilled pork served with vermicelli noodles, herbs, and a tangy dipping sauce.",
        rid: "north",
        category: "mặn"
    }, {
        _id: "32",
        name: "Bánh chưng ",
        image: food_32,
        price: 15,
        description: "A traditional square rice cake filled with pork and mung beans, wrapped in banana leaves.",
        rid: "north",
        category: "mặn"
    },
    {
        _id: "33",
        name: "Hủ tiếu chay", 
        image: food_33,        
        price: 30,
        description: "A light vegetarian noodle soup made with fresh vegetables and tofu.",
        rid: "south",
        category: "nước"
 

    }
]
