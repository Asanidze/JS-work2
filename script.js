// 1.

// for (let i = 5; i < 100; i++){
//     console.log(i);
// }



// 2.

// let array1= [1, 2, 4, -1, -3, 8, 7, 0, -5, 18, 12];

// for (i = 0; i < array1.length; i++){
//     if (array1[i] > 0 && array1[i] < 10){
//         console.log(array1[i]);
//     }
// }



// 3.

// let array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// for (i = 0; i < array2.length; i++){
//     if(array2[i] == 5){
//         console.log("aris")
//         break;
//     }
//     console.log(array2[i]);
// }



// 4.

// let array3= [1, 2, 3, 4, 5];

// let sum = 0;

// for(i = 0; i < array3.length; i++){
//     sum = sum + array3[i];
// }

// console.log(sum);



// 5.

// let array4 = [1, 2, 3, 7, 6, 9];

// let sum = 0;

// for(i = 0; i < array4.length; i++){
//     sum = sum + array4[i];
// }

// let result = sum / array4.length;

// console.log(result);



// 6.

// let array5 = [1, 2, 3, 7, 6, 9];

// for(i = 0; i < array5.length; i++){
//     if(array5[i] == 7){
//         continue;
//     }
//     console.log(array5[i]);
// }



// 7.

// let user = {
//     firstname: "giorgi",
//     lastname: "smith",
//     age: 25,
//     studentstatus: "active"
// }

// console.log(user.studentstatus);

// delete user.studentstatus;
// console.log(user);


// 8.

// let user = {
//     name: 'giorgi',
//     age:  20,
//     studentstatus: 'active'
// }

// if (user.age < 18 && user.studentstatus == "active"){
//     console.log("Hello");
// }
// else if (user.name == "levani") {
//     console.log("hello levani");
// }
// else if (user.studentstatus == "active" || user.age < 25) {
//     console.log("hello world");
// }
// else {
//     console.log("error")
// }



// 9.

// let array = [ [2, -3, 5, 10], [25, -24, -11, 100], [-6, -7, 10] ];

// for (let lst of array) {
//     for (let clear_lst of lst){
//         if (clear_lst > 0)
//         console.log(clear_lst)
//     }
// }


// 10.

// let array = [ 2, 3, 5, 10,25,24,11, 100 , 6,7, 10 ]

// 1.
// for (let item of array){
//     if (item % 2 == 0){
//         console.log(item)
//     }
// }

// 2.
// for (let item of array){
//     if (item % 2 != 0){
//         console.log(item)
//     }
// }


// 11.

// let users = [
//     {username: 'giorgi', status: false},
//     {username: 'levani', status: false},
//     {username: 'anna', status: true}
// ]

// for (i = 0; i < users.length; i++){
//     if (users[i].status == true) {
//         console.log(users[i]);
//     }
// }