function radianToDegree(radian) {
    if ((typeof radian) != 'number') {
        return "plase enter Number type Value"
    }
    const degree = radian * 57.2958;
    return parseFloat(degree.toFixed(2));
}


// isJavaScriptFile
function isJavaScriptFile(string) {
    if ((typeof string) != 'string') {
        return "please enter text"
    }
    const validFile = string.endsWith('.js');
    return validFile;
}
let geti = 'hasam';
console.log(isJavaScriptFile(geti));
console.log(isJavaScriptFile('index.js'));
console.log(isJavaScriptFile('img.js.png'));
console.log(isJavaScriptFile('img.jpg.js'));

