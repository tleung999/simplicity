// Physics(function(){
//   var world = this;
//   // var bodyConstructor = new BodyConstructor(world)
//   var mainController = new Physics.MainController(world
//                                           ,Physics.MainView
//                                           ,Physics.BodyConstructor);
//   // ballController = new BallController(BallView, BallModel, this);

//   debugger
//   mainController.addToWorld('circle')
// });

// function Physics.MainController(world, view, bodyConstructor){
//   debugger
//   this.world = world;
//   this.view = new view(world);
//   this.bodyConstructor = new BodyConstructor(world);
// };

// function Physics.MainView(world) {
//   this.world        = world;
//   this.canvasHeight = (window.innerHeight/10)*9;
//   this.canvasWidth  = (window.innerWidth/10)*9;
// };



// function Physics.BodyConstructor(nameSpace) {
//   this.nameSpace = nameSpace;
// };
//   Physics.MainController.prototype = {
//     addToWorld: function(body){
//       var canvasX = this.view.canvasDimensions()[0];
//       var canvasY = this.view.canvasDimensions()[1];
//       var body    = this.bodyConstructor[body]( canvasX
//                                                ,canvasY);
//       this.world.add(body);
//     }
//   };

//   Physics.MainView.prototype = {
//     canvasDimensions: function(){
//       return [this.canvasWidth, this.canvasHeight];
//     },
//     renderWorld: function(){
//       this.world.render();
//     }
//   };

//   Physics.BodyConstructor.prototype = {
//     circle: function(canvasX,canvasY){
//       this.namespace.body('circle', {
//          x: 140
//         ,y: (canvasY/4)
//         ,radius: 50
//         ,vx: .01
//       })
//     }
//   }


// function BallController(view, model, namespace) {
//   this.view = view;
//   this.model = model;
//   this.namespace = namespace;
//   world.add( circle );
// }

// BallController.prototype = {

// }

// function BallView() {

// }

// function BallModel() {
//   var circle = Physics.body('circle', {
//     x: 140,
//     y: (canvasHeight/4),
//     vx: .75,
//     radius: 50
//   });
// }

// MainController
// MainView
// MainModel
