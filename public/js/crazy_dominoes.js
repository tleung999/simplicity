Physics(function( world ){
  var viewWidth = window.innerWidth
      ,viewHeight = window.innerHeight
      // bounds of the window
      ,viewportBounds = Physics.aabb(0, 0, viewWidth, viewHeight)
      ,renderer
      ;

  renderer = Physics.renderer('canvas', {
    el: 'viewport'
    ,width: viewWidth
    ,height: viewHeight
  });

  world.add( renderer );

  var dominoes = [];
    for ( var i = 0, l = 35; i < l; ++i ){

      dominoes.push( Physics.body('rectangle', {
        width: 10
        ,height: 70
        ,x: (i*25) + (viewWidth/3)
        ,y: viewHeight - 40
        ,vx: 0
        ,mass: 5
        ,cof: 0
        ,restitution: 3
        ,styles: {
            fillStyle: '#000000'
            ,angleIndicator: '#FFFFFF'
        }
      }));
    }

  world.add( dominoes );


  var circle = Physics.body('circle', {
    x: 50,
    y: viewHeight-200,
    vx: .1,
    radius: 20
  });

  world.add( circle )
  world.render()



})
