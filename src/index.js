module.exports = function check(string, brackets) {
    let strArr = string.split('');
    let i = 0;

    do {
        // console.log(`Сравниваем скобку "${strArr[i]}" со скобкой "${strArr[i + 1]}"`);
        if ((bracketO(strArr[i]) == bracketC(strArr[i + 1]) && (bracketO(strArr[i]) != undefined))) {
            console.log(strArr.join(' '));
            // console.log(`Нашли парные скобки "${strArr[i]}" и "${strArr[i + 1]}" на позициях ${i} и ${i + 1} - удаляем`);
            strArr.splice(i, 2);
            i > 1 ? i -= 2 : i = -1;
            console.log(strArr.join(' '));
            // console.log(`Начинаем с позиции ${i + 1}`);
        }
        i++;
    } while (i >= 0 && i < strArr.length - 1);

    console.log(strArr);

    if (strArr.length == 0) {
        return true;
    } else {
        return false;
    }

    function bracketO(s) {
        for (let i = 0; i < brackets.length; i++) {
            if (brackets[i][0] == String(s)) {
                return i;
            }
        }
    }

    function bracketC(s) {
        for (let i = 0; i < brackets.length; i++) {
            if (brackets[i][1] == String(s)) {
                return i;
            }
        }
    }
}