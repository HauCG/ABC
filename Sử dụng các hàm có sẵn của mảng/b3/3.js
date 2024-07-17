
function processText() {
    let input = document.getElementById('textInput').value;


    let result = '';
    for (let char of input) {
        if (char === char.toUpperCase()) {
            result += char.toLowerCase();
        } else {
            result += char.toUpperCase();
        }
    }


    document.getElementById('result').textContent = result;
}
