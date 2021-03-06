var myApp = angular.module('myApp', [
  'ui.router', 'ngAnimate']);


myApp.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise("/home");

  $stateProvider
    .state('home', {
      url: "/home",
      templateUrl: "partials/home.html"
    })
    .state('about', {
      url: "/about",
      templateUrl: "partials/about.html",
      controller: "aboutCtrl as peopleList"
    })
    .state('work', {
      url: "/work",
      templateUrl: "partials/work.html",
      controller: 'workCtrl as projectList'
    })
    .state('blog', {
      url: "/blog",
      templateUrl: "partials/blog.html",
      controller: "postCtrl as postList"
    })
    .state('price', {
      url: "/price",
      templateUrl: "partials/price.html"
    })
    .state('contact', {
      url: "/contact",
      templateUrl: "partials/contact.html"
    });

});



 myApp.controller('workCtrl',  function() {

  var projectList = this;

   projectList.list = [
     {
       title: "Antouch App",
       tag: "web design",
       date: "16/03/2016",
       imgSrc: "https://unsplash.it/278/200?image=1073"
     },
     {
       title: "Strong-In",
       tag: "brand design",
       date: "25/02/2015",
       imgSrc: "https://unsplash.it/278/200?image=1068"
     },
     {
       title: "Vivafresh",
       tag: "logo design",
       date: "13/06/2015",
       imgSrc: "https://unsplash.it/278/200?image=1060"
     },
     {
       title: "Zen-Tex",
       tag: "web design",
       date: "05/07/2015",
       imgSrc: "https://unsplash.it/278/200?image=1002"
     },
     {
       title: "Stan Solotip",
       tag: "logo design",
       date: "10/2/2015",
       imgSrc: "https://unsplash.it/278/200?image=998"
     },
     {
       title: "Fabrica Landing Page",
       tag: "web design",
       date: "01/03/2014",
       imgSrc: "https://unsplash.it/278/200?image=972"
     }
   ];
});

myApp.controller("postCtrl", function() {

  var postList = this;

  postList.list = [
    {
      title: "Post Sidewalk",
      author: "Nathanael Warring",
      date: "13/06/2016",
      imgSrc: "https://unsplash.it/278/200?image=522"
    },
    {
      title: "Post Relation",
      author: "Martin Hover",
      date: "5/06/2016",
      imgSrc: "https://unsplash.it/278/200?image=432"
    },
    {
      title: "Post Cure",
      author: "Lenita Schamber",
      date: "25/05/2016",
      imgSrc: "https://unsplash.it/278/200?image=122"
    },
    {
      title: "Post Mass",
      author: "Tom Rooks",
      date: "16/05/2016",
      imgSrc: "https://unsplash.it/278/200?image=222"
    },
    {
      title: "Post Permit",
      author: "Krishna Jess",
      date: "10/05/2016",
      imgSrc: "https://unsplash.it/278/200?image=822"
    },
    {
      title: "Post Zip",
      author: "Micha Dauphin",
      date: "1/05/2016",
      imgSrc: "https://unsplash.it/278/200?image=367"
    }
  ];

});


myApp.controller("aboutCtrl", function() {

  var peopleList = this;

  peopleList.list = [
    {
      title: "Harry Balicki",
      subtitle: "Founder & CEO",
      imgSrc: "img/people/01.jpg"
    },
    {
      title: "Deane Sweatt",
      subtitle: "Web Designer",
      imgSrc: "img/people/02.jpg"
    },
    {
      title: "Marty Ricketson",
      subtitle: "Front-end Developer",
      imgSrc: "img/people/03.jpg"
    },
    {
      title: "Forrest Braggs",
      subtitle: "Back-end Developer",
      imgSrc: "img/people/04.jpg"
    }
  ];

});
