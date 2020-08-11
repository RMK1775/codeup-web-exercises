"use strict";
console.log("Hello from external JavaScript");
//Greeting
alert("Welcome to my Website!");

//Color question and response
var whatColor = "What's your favorite color?";
var chosenColor = prompt(whatColor);

alert("Great, " + chosenColor +" is my favorite color too!");

//Movie Rentals
alert("I see you've rented some movies recently. Let's review how much is due. \n(Please enter only numbers for the following questions.)");

var rentedMovie1 = prompt("How many days have you had Little Mermaid?");
var rentedMovie2 = prompt("How many days have you had Brother Bear?");
var rentedMovie3 = prompt("How many days have you had Hercules?");
const rate = 3;
var daysRented = Number(rentedMovie1) + Number(rentedMovie2) + Number(rentedMovie3);
var amtDue = daysRented * 3;
alert("Thank you. Your current amount due is $" + amtDue.toFixed(2));

//Contractor Pay
alert("Due to our intrusive scraping of your online presence, we see you have several income streams to pay for your video rentals.");
//Prompt for hourly wages and hours worked in current week
var rateCompany1 = prompt("How much does Google pay you per hour?");
var hoursCompany1 = prompt("For how many hours this week?");
var rateCompany2 = prompt("What's the going rate to work for Amazon?");
var hoursCompany2 = prompt("How many hours this week?");
var rateCompany3 = prompt("Working for Mark brings in how much per hour at Facebook?");
var hoursCompany3 = prompt("you were able to squeeze in how many hours with them this week?");
//Compute total hours and wages earned
var wagesEarned = (Number(rateCompany1)*Number(hoursCompany1)) + (Number(rateCompany2)*Number(hoursCompany2)) + (Number(rateCompany3)*Number(hoursCompany3));
alert("You've earned a respectable amount of $" + wagesEarned.toFixed(2) + " this week.");

//Class Enrollment
alert("Movie buff, working for three of the world's largest online entities and still seeking more? \nLiving life to the fullest, well done!");
var classCapacity = confirm("Does the class you're enrolling in still have open slots? Press ok for yes or cancel for no.");
var scheduleConflict = confirm("Is the class held during times outside your current classes? Ok = yes, Cancel = no");
var canEnroll = (classCapacity && scheduleConflict);
console.log(typeof canEnroll);
    if(canEnroll == true){
        alert("Excellent! You are eligible to enroll in this course.");
    }else if(canEnroll == false){let output = alert("Bummer, looks like that class will have to wait.");
    }

//Product Offer
alert("Looks like the product you're buying may be eligible for a special offer. \nLet's find out!");
var isExpired = confirm("Is the offer expired? Ok = yes, cancel = no. (Please see details on webpage.)");
if(isExpired == true){
    alert("We're sorry, but the offer doesn't apply this time.");
    }else(isExpired == false)
        var isPremium = confirm("Are you a premium member? Ok=yes");
        if(isPremium == true){
        alert("Awesome, that special offer is yours!");
            }else(isPremium == false)
                var howMany = prompt("No problem, this may still apply. \nHow many are you buying today?");
                if(howMany >= 2){
                    alert("Awesome, that special offer is yours!");
                    }else{
                    alert("We're sorry, but the offer doesn't apply this time.");
                        }