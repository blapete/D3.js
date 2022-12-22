const data = [10, 20, 30, 40, 50];

/*
const el = d3.selectAll('li');

using selectAll() because there are multiple items in the array
fastest to merge multiple selections with an array
*/

const el = d3.selectAll('li').data(data);

console.log(el);

/*
5 elements in the groups array

In the contents of the first list item in the array, there are over 200 properties

The properties in the object are the same properties you would find in a regular DOM object

D3 has added additional properties to the object

FYI the developer tools may not display every property in an object to prevent an object from hijacking the developer tools

View full content of the object by clicking on the dots, this will expose a property called "__data__"

D3 created the property for us, the value of the property is 10 (for <li> #1)
*/
