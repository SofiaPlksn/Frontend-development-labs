function solve() {
    const textInput = document.getElementById('text').value;
    const conventionInput = document.getElementById('naming-convention').value;
    const resultSpan = document.getElementById('result');

    if (!textInput || !conventionInput) {
        resultSpan.textContent = "Error!";
        return;
    }

    const words = textInput.trim().toLowerCase().split(/\s+/);
    let result = "";

    if (conventionInput === "Camel Case") {
        result = words[0];
        for (let i = 1; i < words.length; i++) {
            const word = words[i];
            if (word.length === 0) continue;
            result += word[0].toUpperCase() + word.slice(1);
        }
    } else if (conventionInput === "Pascal Case") {
        for (let word of words) {
            if (word.length === 0) continue;
            result += word[0].toUpperCase() + word.slice(1);
        }
    } else {
        result = "Error!";
    }

    resultSpan.textContent = result;
}
