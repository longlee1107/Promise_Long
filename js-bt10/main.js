function primeNum() {
    let num = document.getElementById("inputNum").value;
    var flag = true;

    if (num < 2) {
        flag = false;
    } else {
        for (var i = 2; i < num - 1; i++) {
            if (num % i == 0) {
                flag = false;
                break;
            }
        }
    }

    if (flag == true) {
        document.write(num + " is prime number <br/>");
    } else {
        document.write(num + " is not prime number <br/>");
    }
    for (let i = 1; i <= num / 2; i++) {
        if (num % i == 0) {
            document.write(num + " is perfect number");
        } else {
            document.write(num + " is not perfect number");
        }

    }
}