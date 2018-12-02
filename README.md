# My Weeb List

# Overview

When you're a high key weeb with a bit too many animes in your watchlist (and possibly some you'd like to keep private), most commonplace websites just aren't sophisticated enough to deal with filering shows of a certain genre in your watchlist for custom recoomendation lists and even creating a private list unless you want to create a different account.   

My Weeb List is a web app that will allow users to keep track of their watchlist while also being able to sort the list according to genre and privacy. Users can register and login. Once they're logged in, they can either add a new anime or view their list. For the list, they will have the option to filter the list.

# Data Model

The application will store Users, a List and Items

Users will only have one list (via references).
Each list will have multiple items (by embedding).

An Example User:

{

  username: "xXW33B420Xx",

  hash: // a password hash,
  
  lists: // a reference to List documents
  
}

An Example List with Embedded Items: 

{

  user: // a reference to a User object
  
  name: user.name + "'s Weeb List",
  
  items: [
  
    { name: "Pokemon", rating: "8", genres: "Action, Adventure, Comedy, Kids, Fantasy", show: true},
    
    { name: "Mobile Suit Gundam 00", rating: "9", genres: "Action, Military, Sci-Fi, Space, Drama, Mecha", show: true},
    
  ],
  
  lastUpdated: // timestamp
  
}

# Link to Commented First Draft Schema

# Wireframes

/weeb/options

[![list-options.png](https://i.postimg.cc/Y9jyQSTh/list-options.png)](https://postimg.cc/JDVqLRrL)

/weeb/add

[![list-add.png](https://i.postimg.cc/RhLfF7Gf/list-add.png)](https://postimg.cc/Cnddrf3L)

/weeb/list

[![list-list.png](https://i.postimg.cc/pTnJ25gY/list-list.png)](https://postimg.cc/VrmCgvsd)

# Site Map

[![list-map.png](https://i.postimg.cc/Rh78ZDjR/list-map.png)](https://postimg.cc/YLS8Xb2G)

# User Stories or Use Cases

1. As a non-registered user, I can register a new account with the site
2. As a user, I can log in to the site
3. As a user, I can add a new anime to my watchlist
4. As a user, I can view my watchlist
5. As a user, I can filter my watchlist to not show private entries
6. As a user, I can filter my watchlist by genre

# Research Topics

(3 points) Unit testing with JavaScript

Unit testing is a way to test code through modulized tests with control data. Each test tests anywhere from the functionality of a method to an entire class. Code is written into a short fragment and is run using what is being tested. Because unit testing is automated, it allows for quick tests of specific methods/classes as the tests have been precoded with values to test with and a value that the test should return. This means that the entire program doesn't need to be run to test the code. This also helps to narrow the scope of a coding error as the error will be limited to specific methods/classes instead of being "somewhere in the code". 

(3 points) Perform client side form validation using custom JavaScript or JavaScript library

(3 points) Configuration management

Configuration management is a process used to establish consistency in the performance of code. Once consistency is established, configuration management will ensure that the consistency is maintained, meaning that once a process becomes consistent, it will remain consistent. Configuration management uses the functional relations in code to help control the code. This is used to make sure that no matter how long the code is run for, it will stay consistent. It also helps in writing code as it allows for a generic outline to be created and easily followed. 

