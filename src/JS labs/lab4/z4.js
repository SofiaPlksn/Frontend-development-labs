function progressBar(percent) {
    if (percent % 10 !== 0 || percent < 0 || percent > 100) {
        console.log("Введите число от 0 до 100, делящееся на 10.");
        return;
    }

    const blocks = percent / 10; // Сколько «полных» блоков
    const bar = '%'.repeat(blocks) + '.'.repeat(10 - blocks);

    if (percent === 100) {
        console.log(`100% Complete!`);
        console.log(`[${bar}]`);
    } else {
        console.log(`${percent}% [${bar}]`);
        console.log("Still loading...");
    }
}

progressBar(30);
progressBar(50);
progressBar(100);