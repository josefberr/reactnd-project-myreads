# reactnd-project-myreads
Udacity ReactJS nanodegree program. Project MyReads

Managing a set of books for multiple shelfs.
Shelfs are:
* currently reading
* want to read
* read

Additionaly there is a search function to add books from an provided BooksAPI.
A router manages the navigation from and to the overview and search views. A not found page is also catched by that.

## App.js
Handles the current books a user has connected to him.

## BookShelf.js
Is rendering the book shelf and displays the books for each shelf.

## Book.js
Renders the details for each book

## ChangeBookShelf.js
Handles changes on the book's shelf.

## Search.js
Provides the search function for the BooksAPI and returns books by query string. The books in the result can be added to the users books.

## ErrorNotFound.js
Just catches not routed urls and provides an info and a back link to the main page.