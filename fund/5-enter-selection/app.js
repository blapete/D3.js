const data = [10, 20, 30, 40, 50];

// const el = d3.selectAll('li').data(data);

/*
This time the enter selection is not empty anymore, the enter selection will have a total of 5 items in the array

The first two items are empty, its because the first two items in the array were able to be joined to an element

To see what data is joined to an element, look in the groups property => the enter selection will only contain what hasn't been joined

The last 3 items in the array (enter selection) hold whats called an EnterNode, D3 creates a virtual element (an element that doesn't occupy space in the document; it's stored in memory)

If you look inside any of the nodes, you will see the virtual element doesnt hold any attributes or content, it purely holds the data

The purpose of the enter selection is to tell us how many items of data haven't been joined to an element

The next step => create new elements that can be joined with the remaining data

D3 has a function that can handle this entire process

The join method will look at the current selection, if the enter selection exists, it begins the process of creating new elements in the document for each item in the array

As it adds a new element, the data will be moved from the virtual element to the element in the document

The new elements will be joined with the data that hasn't been joined

The join method has 1 arg => the name of the tag it should generate
*/

// const el = d3.selectAll('li').data(data).join('li');

/*

The join method creates new elements, it doesn't add attributes or insert content into the elements

Currently, this would add the <li> tags as children elements to the html element (at the bottom of the page after body) and each item will be empty

This issue is because of the parents proptery

The parents property will contain the parent selection of the current selection

Currently we are directly calling the selectAll() method on the d3 object

When we do this, d3 always sets the parents property to the html element, the join method will add the new elements it generates to the element stored in the parents property

Thats why the list items are in the wrong location

To fix, change the element stored in the parents property

If you call select or selectAll once, the parent element is the html element, call it again and able to update the parent element
*/

// const el = d3.select('ul').selectAll('li').data(data).join('li');

/*
So far, d3 just joined the data to the element, but there is no text

To complete the element => (remember the join method returns a selection)
*/

const el = d3
    .select('ul')
    .selectAll('li')
    .data(data)
    .join('li')
    .text('Hello World');

/*
Important: 

Every list item element will have it's content updated, this includes the 2 list items already in the document

Its because the join method will merge the groups and enter properties together, giving us a new selection

So, transoformation methods can work on an array of elements, they dont always have to be called on individual elements

D3 doesnt have a problem batching the changes
*/

console.log(el);
