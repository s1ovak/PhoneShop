# Requirements Document
### Contents
1. [Introduction](#1)
2. [User Requirements](#2) <br>
  2.1. [Software Interfaces](#2.1) <br>
  2.2. [User Interfaces](#2.2) <br>
  2.3. [User Characteristics](#2.3) <br>
3. [System Requirements](#3) <br>
  3.1 [Functional Requirements](#3.1) <br>
  3.2 [Non-Functional Requierements](#3.2) <br>
    3.2.1 [Software Quality Attributes](#3.2.1) <br>
      3.2.1.1 [Usability requirements](#3.2.1.1) <br>
      3.2.1.2 [Security requirements](#3.2.1.2) <br>
	3.2.2 [Limitations](#3.2.2) <br>
 4. [Analogues](#4) <br>
 
 ### Glossary
 
 ### 1. Introduction <a name="1"></a>
There are a huge number of online stores, but most of them do not guarantee the security of personal information for the user, and many also have a huge number of various "features" that prevent the user from understanding the simplest things. And, of course, it is worth mentioning that the amount of advertising on the Internet is going off scale at the moment. PhoneShop is a web application designed to solve these problems. This project has the basic functions of an online store, and also implements the protection of user data from intruders.
* Product - a mobile device used in the web application as items of sale.
* Order - the final document, not subject to editing, which is issued to the user after confirming the data. A copy of this document is stored in the database after payment.
* Security - requirements for a project to protect user data during its operation.
* Pagination - sequential enumeration.

### 2. User Requirements <a name="2"></a>
#### 2.1. Software Interfaces <a name="2.1"></a>
The project uses the Java language, as well as the Spring Framework; a MySQL database is used to store data; it implements the Angular Framework user interface.
#### 2.2. User Interfaces <a name="2.2"></a>
- View window for all products
  ![View window for all products](https://raw.githubusercontent.com/s1ovak/PhoneShop/master/ProjectDocumentation/Mockups/View%20products%20list.png)
- Product details viewer
  ![Product details viewer](https://raw.githubusercontent.com/s1ovak/PhoneShop/master/ProjectDocumentation/Mockups/View%20detailed%20product%20.png)
- Get order
  ![Get Order](https://raw.githubusercontent.com/s1ovak/PhoneShop/master/ProjectDocumentation/Mockups/Get%20order.png)
- Registration page
  ![Registration page](https://raw.githubusercontent.com/s1ovak/PhoneShop/master/ProjectDocumentation/Mockups/Registration.png)
- Login page
  ![Login page](https://raw.githubusercontent.com/s1ovak/PhoneShop/master/ProjectDocumentation/Mockups/Login.png)

#### 2.3. User Characteristics <a name="2.3"></a>
The target audience:
* Users buying products in the online store.

### 3. System Requirements <a name="3"></a>
#### 3.1. Functional Requirements <a name="3.1"></a>
The user is provided with the following options:

| Function | Requirements | 
|:---|:---|
| Registration | When you click "save" on a separate web page with valid entered data, the application adds a new user to the system. |
| Login | When you click "login" on the corresponding page, you are logged in using the previously entered data. |
| Browse products | Show product photo, current quantity, price. The user must be able to search and sort products. |
| View product details | Display all product information. Implement the functionality of adding to the product cart. |
| Place order | The function creates and places an order in the database, which cannot be changed in the future, and also sends a copy of the order to the user's email. |
| Go to one of the last pages of products | Display the 3 most recently viewed products at the bottom of all pages. |

### 3.2 Non-Functional Requierements <a name="3.2"></a>
#### 3.2.1 Software Quality Attributes <a name="3.2.1"></a>
Important attributes of the application are low resource consumption and high performance, namely the absence of delays in switching between web pages. Also, quality attributes are ease of use due to the lack of unnecessary functionality and advertising, the protection of user data by encoding.
##### 3.2.1.1 Usability requirements <a name="3.2.1.1"></a>
1. All functional elements of the user interface have names that describe the action that will occur when an element is selected;
2. Product items contain links to related products;
3. For more convenient viewing of products, implement pagination.
##### 3.2.1.2 Security requirements <a name="3.2.1.2"></a>
1. Administrators have access to the database;
2. During registration and subsequent use, user data is encoded;
3. After creating an order, you cannot change it.
#### 3.2.2 Limitations <a name="3.2.2"></a>
* The application is implemented in Java.
* The application is available for the GoogleChrome browser version no lower than 3.29, for other browsers there are no restrictions.
### 4. Analogues <a name="4"></a>
This project is a simplified version [mobilestore.by](https://mobistore.by/) and [shop.by](https://shop.by/telefony_mobilnye/)