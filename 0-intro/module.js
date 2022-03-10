const PI = 3.14159;

const print_to_rows = line =>
    line.split(' ')
        .map(item => item.toUpperCase())
        .filter(item => item.length <= 8)
        .forEach(item => console.log(item));

const get_rows = (line) => {
    return line.split(' ')
        .map(item => item.toUpperCase())
        .filter(item => item.length <= 8)
        .reduce((acc, cur) => acc + cur + '\n', "");
    }

const get_lines = line => {
    return line
        .split(' ')
        .map(item => item.toUpperCase())
        .filter(item => item.length <= 8)
        .join('\n');
}

module.exports = {
    print_to_rows,
    PI,
    get_rows,
    get_lines
}
