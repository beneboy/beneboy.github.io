const PREFIX = "94900";

const renderBarcode = code => {
    JsBarcode("#barcode", code).EAN13(code).render();
}

const generateRandomDigits = () => {
    let result = '';
    for (let i = 0; i < 7; i++) {
        result += Math.floor(Math.random() * 10);
    }
    return result;
}

const calculateCheckDigit = numberWithoutCheck => {
    let sum = 0;
    for (let i = 0; i < numberWithoutCheck.length; i++) {
        const digit = parseInt(numberWithoutCheck[i], 10);
        const multiplier = i % 2 === 0 ? 1 : 3;
        sum += (multiplier * digit);
    }

    const nextPowerOfTen = Math.ceil(sum/10) * 10;
    return nextPowerOfTen - sum;
}

const generateCode = () => {
    const numberWithoutCheckDigit = PREFIX + generateRandomDigits();
    return numberWithoutCheckDigit + calculateCheckDigit(numberWithoutCheckDigit);
}

const regenerate = () => {
    renderBarcode(generateCode());
}

regenerate();

