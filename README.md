# Trackerz
A web app that displays and tracks areas with cases of COVID-19. Submission For the Blue Hacks 2021

![Main][Main_Page]

[Trackerz Web App - Running Demo](trackerz-ic-tech.herokuapp.com)

## Table of contents
* [General info](#general-info)
* [Web App Tech](#web-app-tech)
* [Setup Web App](#setup-web-app)
* [How to use the Web App](#how-to-use-web-app)

## General info
As IC Tech, our plan is to build a web app that informs people about locations with Covid cases in the Philippines. In this way we may inform people about various statistics and even specifically pinpoint places where there are Covid Cases. This promotes safer travel and awareness among Citizens in the Philippines.

The project is built using flask for the backend and vanilla javascript, html, and css for the frontend. We used a variety of API's for our project. We want to also give a forecast about possible covid cases based on the cases pattern daily. Although not implemented within the web app, we are able to train and test the machin learning model.


## Web App Tech

- 🗺️ Google Maps Javascript API
- 👩‍⚕️ The Covid-19-API-Philippines-DOH [Link](https://documenter.getpostman.com/view/12463261/T1LV9jLU) 
- 💹 Chart.js Library API
- 🤖 ✨Tensorflow, Keras, Pandas ✨

These techs helped us build our product and most importantly the Covid 19 API that allowed us to query specific locations with details about the cases there. 

[Covid19API]:
https://github.com/Blue-Hacks-2021/Trackerz/blob/main/media/covid_api.png



## Setup Web App
To run this project, make sure you have npm installed and perhaps installed react client as well. Also, since this is built using the NoSQL database, MongoDB, provision a database on MongoDB Atlas (https://www.mongodb.com/cloud/atlas) or by install MongoDB in your local machine. Follow the tutorial by installing MongoDB Compass (https://docs.mongodb.com/guides/server/install/).

Before you try to run the app, make sure you set up the following environment variables to ensure you're connected to your database. So first create a ==**.env**== file in the root of your web app directory. 

Then add the following by replacing the caps texts with actual values.

```sh
MONGO_URI=
SESSION_SECRET=
SECRET_OR_KEY=
saltRounds=
NODE_ENV=
```

`SESSION_SECRET and SECRET_OR_KEY` are strings of your choice (with no quotes), `saltRounds` is an integer (preferably between 5 to 15 exclusive) and `NODE_ENV` may be either **development** or **production**

After setting up your **.env** file, you can proceed with the commands below.

```sh
$ cd MagisteriumWebApp
$ npm install
$ cd client
$ npm install 
$ npm run build
$ cd ..
$ npm run start
```

The following instructions will open the app. You can type [localhost:8080](localhost.8080) in your favorite browser to start using the app. 

```sh
127.0.0.1:8000
```

or 

```sh
localhost:8000
```

## How to use the Web App

The app can be divided into three categories: **Students**, **Tutors**, and **Admins**. Users can sign up as students and find the right tutor for them by sorting them by *Subject*, *Degree*, or *Availability*. Students can also provide their profiles and details for their booking like: *Duration*, *Subject*, *Time*, etc...

For **Tutors**, they can register via the `Register As Tutor`, and provide their credentials and other details. They specify their majors and minors as well as their time of availability, subject strengths, etc...

Lastly we created an **Admin** category for employees of the company to edit subjects and as well as profiles and users. This is to ensure that any activity is legal and would only involve booking for tutors. 

1.) **Login Page**

🧑‍💻 The app opens up with the login page and prompts the user to enter their email/username and their password.

![Login][Login]


2.) 🔱 **Register As Student**

As mentioned, users may opt to register as students to find and book the right tutor.

![RegisterStudent][RegisterStudent]

3.) ⚜️ **Register As Tutor**

Similarly, if you want to teach as a tutor, you can register as one then provide you details.

![RegisterTutor][RegisterTutor]


4.) 💻 **Dashboard**

Whether you're a student or tutor, you will have access to your own dashboard and you can provide details. For students, simple ones like school and grade are enough. For tutors, you must provide your attainment and other details to show you are really a qualified tutor. 

![Dashboard][Dashboard]

5.) 🖥️ **Side Panel**

There is also a neat side bar that allows you to navigate between pages such as **Profile**, **Booking**, **Appointments**, and **Logout** 

![SidePanel][SidePanel]

6.) ⌨️ **Book**

As a student you can search for tutors via the **Booking Page** and you with the search and tagging option, you can lower your options and find the best fit for you. 

![Book][Book]

7.) 💾 **BookDetails**

Once you have chosen your tutor, you can book him/her and provide details such as **Duration**, **Meetup (Online/Location)**, **Time**, and **Subject** so that the tutor knows what he/she should prepare.

![BookDetails][BookDetails]



 
[Main_Page]:
https://github.com/HansGabriel/Magisterium/blob/main/media/mg12.png
[Dashboard]:
https://github.com/HansGabriel/Magisterium/blob/main/media/mg9.png
[SidePanel]:
https://github.com/HansGabriel/Magisterium/blob/main/media/mg6.png
[Login]:
https://github.com/HansGabriel/Magisterium/blob/main/media/mg4.png
[Book]:
https://github.com/HansGabriel/Magisterium/blob/main/media/mg7.png
[RegisterStudent]:
https://github.com/HansGabriel/Magisterium/blob/main/media/mg5.png
[RegisterTutor]:
https://github.com/HansGabriel/Magisterium/blob/main/media/mg11.png
[BookDetails]:
https://github.com/HansGabriel/Magisterium/blob/main/media/mg8.png
[Template1]:
https://github.com/HansGabriel/Magisterium/blob/main/media/template1.png
[Template2]:
https://github.com/HansGabriel/Magisterium/blob/main/media/template2.png
[Template3]:
https://github.com/HansGabriel/Magisterium/blob/main/media/template3.png