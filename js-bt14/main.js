let money = 500;
amount = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(money - 10);
        console.log(amount);
    }, 1000);

});

amount.then(amount => {
    setTimeout(() => {
        console.log("Số tiền còn lại sau khi mua cá là " + (amount - 100));
    }, 2000);
});
amount.then(amount => {
    setTimeout(() => {
        console.log("Số tiền còn lại sau khi mua gà là " + (amount - 120));
    }, 3000);
});
amount.then(amount => {
    setTimeout(() => {
        console.log("Số tiền còn lại sau khi mua lợn là " + (amount - 70));
    }, 2000);
})