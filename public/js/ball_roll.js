Physics(function( world ){
  var canvasHeight = (window.innerHeight/10)*9
  var canvasWidth = (window.innerWidth/10)*9
  var renderer = Physics.renderer('canvas', {
    el: 'viewport',
    width: canvasWidth,
    height: canvasHeight
  });

  world.add( renderer );


  var circle = Physics.body('circle', {
    x: 140,
    y: (canvasHeight/4),
    vx: .75,
    radius: 50
  });
  world.add( circle );
  world.render();
})
