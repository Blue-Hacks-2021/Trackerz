# Trackerz
A web app that displays and tracks areas with cases of COVID-19. Submission For the Blue Hacks 2021

![ZoomedIn][ZoomedIn]

![ZoomedOut][ZoomedOut]

## Table of contents
* [General info](#general-info)
* [Web App Tech](#web-app-tech)
* [Setup Web App](#setup-web-app)
* [How to use the Web App](#how-to-use-web-app)

## General info
As IC Tech, our plan is to build a web app that informs people about locations with Covid cases in the Philippines. In this way we may inform people about various statistics and even specifically pinpoint places where there are Covid Cases. This promotes safer travel and awareness among Citizens in the Philippines.

The project is built using flask for the backend and vanilla javascript, html, and css for the frontend. We used a variety of API's for our project. We want to also give a forecast about possible covid cases based on the cases pattern daily. Although not implemented within the web app, we are able to train and test the machine learning model.


## Web App Tech

- 🗺️ Google Maps Javascript API
- 👩‍⚕️ The Covid-19-API-Philippines-DOH [Link](https://documenter.getpostman.com/view/12463261/T1LV9jLU) 
- 💹 Chart.js Library API
- 🤖 ✨Tensorflow, Keras, Pandas ✨

These techs helped us build our product and most importantly the Covid 19 API that allowed us to query specific locations with details about the cases there. 

![Covid19API][Covid19API]

Charts.js also helped with the visualization portion of our timegraph.

![Timeline][Timeline]



## Setup Web App
To run this project, make sure you have installed python and git. Some of the API's like the google maps API used my Google Cloud Platform so if you want to use your own then just edit the API Key. Also make sure you've install virtualenv with pip to create a virutal environment for this project.

 Furthermore just use a Code Editor like VS Code, Atom, or Sublime (Even Vim probably if you want) to edit stuffs or run in the terminal.

To run this app, do the following below.

```sh
$ git clone https://github.com/Blue-Hacks-2021/Trackerz.git
$ cd Trackerz
$ virtualenv venv
$ source venv/scripts/activate
$ pip install -r requirements.txt
$ EXPORT FLASK_APP=app.py
$ EXPORT FLASK_ENV=development
$ flask run
```

The following instructions will open the app. You can type [localhost:5000](localhost.5000) in your favorite browser to start using the app. 

```sh
127.0.0.1:5000
```

or 

```sh
localhost:5000
```

Note that if you try to edit the javascript file, make sure to refresh the browser using **Ctrl + F5** as the javascript is usually cached in the browswer.

[Covid19API]:
https://github.com/Blue-Hacks-2021/Trackerz/blob/main/media/covid_api.png
[ZoomedIn]:
https://github.com/Blue-Hacks-2021/Trackerz/blob/main/media/zoomed-in.png
[ZoomedOut]:
https://github.com/Blue-Hacks-2021/Trackerz/blob/main/media/zoomed-out.png
[Timeline]:
https://github.com/Blue-Hacks-2021/Trackerz/blob/main/media/timeline.png