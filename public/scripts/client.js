console.log('client.js is loaded');

//app on client side refers to angular app
//creating our angular application (es5 language)
//angular app needs to know name('myApp') and list of dependencies (array)
var app = angular.module('MyApp', []);

//do NOT use arrow functions in angular apps

app.controller('WelcomeController', function () {
    //this controller is self
    //SELF.SOMETHING WILL BECOME VM.SOMETHING IN HTML (do to line 14 here and line 17 in html)
    //e.g. self.message === vm.message === 'Hello World'
    var self = this;
    self.message = 'Hello World';
    self.greet = function (username) {
        console.log(`Hello ${username}`);
    };
    self.names = [
        {
            name: 'Greg',
            greeting: 'Hi',
            github: 'gvorvik'
        },
        {
            name: 'Emily',
            greeting: 'Heyo',
        },
        {
            name: 'Ellen',
            greeting: 'Yo',
            github: 'llenk'
        },
        {
            name: 'Bob',
            greeting: 'Sup'
        }
    ]
});
