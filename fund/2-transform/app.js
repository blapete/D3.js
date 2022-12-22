// append() is a transformation method

// Transoformation methods always return a new selection

// The new selection will be the previous selection but with the changes the function made to it

/* --------------------------------------------------------------------------------------------------------- */

// const el = d3.select('body').append('p').attr('class', 'foo');
// attr() takes two arguments (name of the attribute and value for the attribute, second arg optional)
// if you do not use the second arg, d3 will assume you wanted to return the attributes current value

// const el = d3.select('body').append('p').attr('class', 'foo').text();

const el = d3
    .select('body')
    .append('p')
    .attr('class', 'foo')
    .text('Hello World');

console.log(el);
