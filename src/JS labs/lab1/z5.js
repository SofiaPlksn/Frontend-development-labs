function LeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        console.log("yes");
    } else {
        console.log("no");
    }
}


LeapYear(1984);   // yes
LeapYear(2003);   // no
LeapYear(4);   // yes