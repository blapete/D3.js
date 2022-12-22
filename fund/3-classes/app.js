/*
const el = d3
    .select('body')
    .append('p')
    .attr('class', 'foo')
    .text('Hello World');
*/

/*
attr() method allowed us to add a class to an element - not the ideal method for adding classes
One caveat of working with the attribute method
The attribute method will override the existing value of an attribute, if it already exists (if we want to add an additional class that would be a problem)
*/

/*
const el = d3
    .select('body')
    .append('p')
    .attr('class', 'foo')
    .attr('class', 'bar')
    .text('Hello World');


attr() replaces the foo class with the bar class
if the goal is to add additional classes, attr() is not the best
*/

/*
Two ways to solve the issues:
We can update the attr() method to add both classes, but not practical (the more classes you have to add the more you have to manage them)

D3 provides an alternative method for this problem:

classed() => first arg is a string of class names, second arg is a boolean (if true, the class will be added to the element. a false value will remove the class)

This method will not remove existing classes on the element, it only affects the class being passed in for the first argument

style() will add inline css to the element

The first arg is the name of the CSS property to modify, the second arg is the value for the CSS property
*/

const el = d3
    .select('body')
    .append('p')
    .classed('foo', true)
    .classed('bar', true)
    .text('Hello World')
    .style('color', 'blue');

console.log(el);

/*
Summ

Make selections with select() and selectAll()

To modify an element, use transformation methods

Most important thing to understand is what is returned by the methods

Always returned with a new selection object

The docs tell you what selection is returned:

Generally if a method selects or creates an element, it returns a new selection

If a method manipulates a current selection, it will return that same selection
*/
