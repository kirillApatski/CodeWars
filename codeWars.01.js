function sayHello( name, city, state ) {
    let userName = name.reduce((e, i) => e + ' ' + i);
    return `Hello, ${userName}! Welcome to ${city}, ${state}`; 
}

console.log(sayHello(['John', 'Smith'], 'Phoenix', 'Arizona'));
