// const readline = require('readline');
// const jwt = require("jsonwebtoken")
// const bcrypt = require('bcrypt');

// // Terminal bilan ishlash uchun readline interfeysi obyekti yaratish
// const rl = readline.createInterface({
//     input: process.stdin, // terminaldan ma'lumot olish
//     output: process.stdout // terminalga ma'lumot chiqarish
// });

// // Foydalanuvchidan ma'lumot so'raslik
// let user = ["username", "password", "secretKey"]
// let data = {}

// const hashedPasswordAndCompare = async (password) => {
//     bcrypt.hash(password, 10, (err, hash) => {
//         if (err) {
//             console.error('Hashlashda xatolik:', err);
//             return;
//         }

//         bcrypt.compare(password, hash, (err, res) => {
//             if (err) {
//                 console.log(err);

//                 return
//             }
//             if (res) {
//                 console.log(`Hash=> ${hash}| va Password=> ${password}| tugri keldi`);
//             } else {
//                 console.log(`Hash=> ${hash}| va Password=> ${password}| tugri kelmadi`);
//             }


//         });
//     });




// }

// // Ma'lumotlarni olish funksiyasi
// const askQuestions = async (index) => {
//     if (index === user.length) {
//         rl.close(); // Interfeysni yopish
//         console.log(data);


//         const saltRounds = 10;

//         hashedPasswordAndCompare(data.password)


//         let token = jwt.sign(data, "ncdjcndjcndj")
//         console.log("Token ", token);

//         jwt.verify(token, "ncdjcndjcndj", (err, decoded) => {
//             if (err) {
//                 console.error('Tokenni tekshirishda xatolik:', err.message);
//                 return;
//             }

//             console.log('Token shifri yechildi:', decoded);
//             const timestamp = decoded.iat * 1000; // Millisekundlar bazasiga o'tkazish
//             const date = new Date(timestamp);

//             console.log('Sana va vaqti:', date);
//         });




//         return;
//     }

//     const element = user[index];

//     rl.question(`Please enter ${element}: `, (dataElement) => {
//         data[element] = dataElement;
//         askQuestions(index + 1); // Keyingi so'rovni bajarish
//     });
// };

// // Asosiy funksiya boshlanishi
// askQuestions(0);





// // let user = { username: 'abbos', password: 'qaqnus3112', secretKey: 'chdcndjcnd', date: new Date().getTime() }




const sonlar = [12, 14, 26]
//              [24, 28, 52]

let sonlar2 = sonlar.map(value => {
    return value * 2
})

console.log(sonlar2);

