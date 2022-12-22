const body = d3.select('body').append('p');
// Any new elements inserted into a selection will be inserted at the end of the element

// Two things about the append method:

// #1 Returns a selection (of the element inserted, it does this for you so that if you perform additional actions they occur on the paragraph element instead of the body element - method chaining)

console.log(body);

/*
To break the method chain ...

const body = d3.select('body');
const p = body.append('p');
*/
