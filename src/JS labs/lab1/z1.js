function age(age) {
    if (age >= 0 && age <= 2) console.log ("Младенец");
    else if (age >= 3 && age <= 13) console.log ("Ребёнок");
    else if (age >= 14 && age <= 19) console.log ("Подросток");
    else if (age >= 20 && age <= 65) console.log ("Взрослый");
    else if (age >= 66) console.log ("Пожилой");
    else console.log ("Неверный возраст");
}

// Tests
age(-1)
age(20)
age(1)
age(100)
