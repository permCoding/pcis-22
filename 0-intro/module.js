const check = item => item.length < 10;

const get = (line) => {
    return line
        .split(' ')
        .filter(check)
        .join('\n');
}

const print_array = (line) => {
    line
        .split(' ')
        .filter(check)
        .forEach(item => console.log(item));
}

module.exports = {
    get,
    print_array
}

