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
1. Fork the repo to your Github account
2. Clone the fork down onto your local machine
3. Create a new file in public/js YOURMODULE.js (with the name of your module)
4. Copy the contents of the file public/js/sample.js into YOURMODULE.js. This will serve as your template.
5. Do not delete anything from the template file!(accept setTimeout, if your module is shorter than 30, which it should be!)
6. Put your view in the render function in View, follow MVC as best you can.
7. In public/js/mastercontroller.js, add the following line to the $(document).ready function:
```javascript
  newYourModule = new Module.YourModule();
```
8. add newYourModule to the moduleList array.

9. Do not leave any variables that would pollute the global namespace.
10. if your script includes any dependancies (besides jQuery) delete those libraries in your .done function

###Have Fun!!




