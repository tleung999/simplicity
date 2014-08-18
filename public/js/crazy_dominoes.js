Physics(function( world ){
  var viewWidth = window.innerWidth
      ,viewHeight = window.innerHeight
      // bounds of the window
      ,viewportBounds = Physics.aabb(0, 0, viewWidth, viewHeight)
      ,edgeBounce
      ,renderer
      ;

  renderer = Physics.renderer('canvas', {
    el: 'viewport'
    ,width: viewWidth
    ,height: viewHeight
  });

  world.add( renderer );
})
