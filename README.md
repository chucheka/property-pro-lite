[![Build Status](https://travis-ci.com/ucheka22/property-pro-lite.svg?branch=develop)](https://travis-ci.com/ucheka22/property-pro-lite)

# PropertyPro-Lite
>PropertyPro Lite is a online platform where people can create and search properties for sale or rent.

## Pivotal Tracker Stories
https://www.pivotaltracker.com/n/projects/2354376

## UI hosted on gh-pages
https://ucheka22.github.io/property-pro-lite/UI/

## Table of Content
 * [Getting Started](#getting-started)

* [Prerequisites for installation](#prerequisites-for-installation)
 
 * [Installation](#installation)

 * [Test](#test)
 
 * [API End Points Test Using Postman](#api-end-points-test-using-postman)

 * [Linting Style](#linting-style)
 
 * [Features](#features)
 
 * [Built With](#built-with)
 
 * [Author](#author)


## Getting Started

### Prerequisites for installation
1. Node js
2. Express
3. Git

### Installation
1. Clone this repository into your local machine:
```
e.g git clone https://github.com/ucheka22/property-pro-lite.git
```
2. Install dependencies 
```
e.g npm install.
```
3. Start the application by running the dev script.

```
e.g npm run dev
```

4. Install postman to test all endpoints on port 3000.

### Test
run test using ```npm test```.

### API End Points Test Using Postman

<table>
<tr><th>HTTP VERB</th><th>ENDPOINT</th><th>FUNCTIONALITY</th></tr>

<tr><td>POST</td> <td>/api/v1/auth/signup</td>  <td>User signup</td></tr>

<tr><td>POST</td> <td>/api/v1/auth/signin</td>  <td>User signin</td></tr>

<tr><td>POST</td> <td>/api/v1/property</td>  <td>Create a property ad</td></tr>

<tr><td>PATCH</td> <td>/api/v1/property/:property-id</td>  <td>Update a property data</td></tr>

<tr><td>PATCH</td> <td>/api/v1/property/:property-id/sold</td>  <td>Mark a property as sold</td></tr>

<tr><td>DELETE</td> <td>/api/v1/property/:property-id</td>  <td>Delete a property advert</td></tr>

<tr><td>GET</td> <td>/api/v1/property/ads</td>  <td>Get all property adverts</td></tr>

<tr><td>GET</td> <td>/api/v1/property/property-id?type =propertyType</td>  <td>Get all property adverts of specific type</td></tr>

<tr><td>GET</td> <td>/api/v1/property/:property-id</td>  <td>Get a specific property advert</td></tr> 
</table>

### Linting Style
* ESLint with Airbnb style guide. 

## Features

 ### Users
 * A user can signup
 * A user can signin
 * A user(agent) can post property advert
 * A user(agent) can update details of a property advert
 * A user(agent) can mark his/her posted advert as sold
 * A user(agent) can delete a property advert
 * A user can view all properties adverts
 * A user can view property adverts of specific type eg -2 Bedroom
 * A user can view a specific property advert 
 
## Built With
* NodeJs-EXPRESS: Node.js is a javascript runtime built on Chrome's V8 javascript engine.

* html5: It is used for structuring the frontend.

* css: It is used for styling the frontend.

## Author
*  [Ucheka chike](https://twitter.com/ucheka_wilson)

## License
This project is licensed under the MIT license - see the LICENSE.md file for details.
