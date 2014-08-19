simplicity

DBC Final Project

Simplicity is a web based [Rube Golberg Machine](http://en.wikipedia.org/wiki/Rube_Goldberg_machine). It is modular in design in hopes of making it as easy as possible for public contributions!

#How to make a succesful pull request to add an event to our machine:

##Style guide

###All modules must use one of the following colors for their backgrounds. Note: these are approximate names.
| Name | Hex Color Code |
|:------:|:----------------:|
| light-blue | #95D3E2 |
| navy-blue | #254D78 |
| purple | #825D75 |
| red | #F23E32 |
| orange | #FAB562 |
| light-green | #D2E594 |
| dark-green | #476054 |
| yellow | #FEDB74 |
| gray | #4D4550 |
| beige | #E7E3E3 |

###All modules should last between 5 and 30 seconds

###The tone should be lighthearted and fun

###It should have the feel of a Rube Goldberg Machine

###It should be pretty

##Technical guide
1. Getting Started
 *Fork the repo to your Github account
 *Clone the [fork] (https://help.github.com/articles/fork-a-repo) down onto your local machine 
 *This project requires Ruby 2.0, and bundler. 
 *Go into the project dir in the console
 *Run: bundle
 *Run: bundle exec shotgun
 *The app will open on http://127.0.0.1:9393/
2. Adding your module
 *You can comment out the other modules to test on your module alone. 
 *Create a new file in public/js YOURMODULE.js (with the name of your module)
 *Copy the contents of the file public/js/sample.js into YOURMODULE.js. This will serve as your template.
 *Do not delete anything from the template file!(accept setTimeout, if your module is shorter than 30, which it should be!)
 *Put your view in the render function in View, follow MVC as best you can.
 *In public/js/mastercontroller.js, add the following line to the $(document).ready function:
```javascript
  newYourModule = new Module.YourModule();
```
  *add newYourModule to the moduleList array.

 *Do not leave any variables that would pollute the global namespace.
 *If your script includes any dependancies (besides jQuery) please clean out those libraries in your .done function



###Have Fun!!






