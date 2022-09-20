// bai 24
//24. Cho một mảng là một tập các số nguyên dương, lọc ra một bảng b gồm tất cả các số là số nguyên tố? (Dùng filter)
//VD: a = [1,2,3,2,3,4,6,7] .Output: b=[2,3,2,3,7]
function checkNumber(n) {
        let flag = true;
        if (n < 2) {
            flag = false;
        }
        if (n === 2) {
            flag = true;
        }
        if (n > 2) {
            for (let i = 2; i <= Math.sqrt(n); i++) {
                if (n%i == 0) {
                    flag = false;
                    break
                    }
            }
        } 
    return flag;
}
let a = [1,2,3,2,3,4,6,7];
const b = a.filter(checkNumber)
