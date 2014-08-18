Physics(function( world ){
  // ------------------------------------ //
  // Set globably scoped vars for use within closure
  var canvasHeight = (window.innerHeight/10)*9
  var canvasWidth = (window.innerWidth/10)*9

  // ------------------------------------ //
  // Generate the "View" for the Physics Library
  // Create a renderer
  var renderer = Physics.renderer('canvas', {
    el: 'viewport',
    width: canvasWidth,
    height: canvasHeight
  });

  // add renderer to the world
  world.add( renderer );
  // render on each step
  world.on('step', function(){
    world.render();
  });

  // ------------------------------------ //
  // Create Main Ball
  var circle = Physics.body('circle', {
    x: 140
    ,y: (canvasHeight/4)
    ,radius: 50
    ,vx: .01 //speed of the ball's movement
  });

  world.add( circle );


  // ------------------------------------ //
  // Animate the world
  // subscribe to ticker to advance the simulation
  Physics.util.ticker.on(function( time, dt ){
    world.step( time );
  });

  // start the ticker
  Physics.util.ticker.start();
})
