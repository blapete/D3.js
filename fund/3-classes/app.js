/*
const el = d3
    .select('body')
    .append('p')
    .attr('class', 'foo')
    .text('Hello World');
*/

// attr() method allowed us to add a class to an element - not the ideal method for adding classes
// One caveat of working with the attribute method
// The attribute method will override the existing value of an attribute, if it already exists (if we want to add an additional class that would be a problem)

const el = d3
    .select('body')
    .append('p')
    .attr('class', 'foo')
    .attr('class', 'bar')
    .text('Hello World');

/*
attr() replaces the foo class with the bar class
if the goal is to add additional classes, attr() is not the best
*/

console.log(el);
