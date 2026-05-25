// console.log(1);
// setTimeout(() => {
// console.log(2);
// }, 0);
// Promise.resolve().then(() => {
// console.log(3);
// });
// console.log(4);

// setTimeout(() => console.log(1), 0);
// Promise.resolve().then(() => {
// console.log(2);
// setTimeout(() => console.log(3), 0);
// Promise.resolve().then(() => {
// console.log(4);
// });
// });

// async function demo() {
// console.log(1);
// await Promise.resolve();
// console.log(2);
// await Promise.resolve();
// console.log(3);
// }
// console.log(4);
// demo();
// console.log(5);

// async function level3() {
// console.log(1);
// await new Promise((resolve,reject) => {
// console.log(2)
// resolve()
// });
// console.log(3);
// }
// async function level2() {
// console.log(4);
// await level3();
// console.log(5);
// }
// async function level1() {
// console.log(6);
// await level2();
// console.log(7);
// }
// level1();

// async function level3() {
// console.log(1);
// await new Promise((resolve,reject) => {
// console.log(2)
// resolve()
// });
// console.log(3);
// }
// async function level2() {
// console.log(4);
// await level3();
// console.log(5);
// }
// async function level1() {
// console.log(6);
// level2();
// console.log(7);
// }
// level1();