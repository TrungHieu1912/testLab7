// var student=(name, age, address)=>{
//     console.log(
//         `Học sinh có tên : ${name}, lứa tuổi ${age}, địa chỉ ${address}`
//     )
// }
// // ===============================================
// function foo(x, y, z) {
//     console.log(x, y, z);
// }
// var foo = (x, y, z) => { console.log(x, y, z); }
// foo(1,2,3)
// function foo() {
//     alert('Hello')
// }
// var foo = () => { alert('Hello') }
// function foo(a, b) {
//     let m = a + b * 100
//     return m
// }
// foo();
// var foo = (a, b) => {
//     let m = a + b * 100
//     return console.log(m)
// }
// foo(10,20)
// // ===============================================
// var smartPhones = [
//     { name: 'iphone', price: 649 },
//     { name: 'Galaxy S6', price: 576 },
//     { name: 'Galaxy Note 5', price: 489 }
// ];
// var show = (a) => {
//     a.map((e, i) => {
//         console.log(`Sản phẩm ${e.name} có giá ${e.price}`)
//     })
// }
// show(smartPhones);
// // ===============================================
findEven=(n)=>{
    if(4>n && n >20){
        console.log('nhập số có giá trị trong khoảng từ 4-20')
    }
    else{
        for(let i = 0 ; i < n; i++){
            if(i%2==0){
                console.log(i)
            }
        }
    }
}
findEven(10)

numberOneTriangle=(N)=>{
    for (i = 0; i < N; i++) {
        for (j = 0; j <= i; j++) {
            document.writeln(" 1 ")
        }
        document.writeln("<br/>")
    }
}
numberOneTriangle(5)
function clock() {
    var hours = new Date().getHours();
    var minutes = new Date().getMinutes();
    var seconds = new Date().getSeconds();
    var gio = document.getElementById("gio");
    var phut = document.getElementById("phut");
    var giay = document.getElementById("giay");
    gio.innerHTML = hours;
    phut.innerHTML = minutes;
    giay.innerHTML = seconds;
}
var Dem_gio = setInterval(clock, 1000);