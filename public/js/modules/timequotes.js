Module.TimeQuote = function() {
  var self = this;
  this.init = function() {

    $(this).on('load', function() {
      console.log("loading TimeQuote app");
      //preload some stuff to get your module ready
      $(document).trigger('loaded');
    });

    $(this).on('start', function() {
      console.log("starting TimeQuote app");
      //cleans up the main main-container
      $("#main-container").empty();
      //Enter Your View Render here
      new Module.TimeQuote.Controller(Module.TimeQuote.View, Module.TimeQuote.Model);
      // Module.View.render();

      setTimeout(function() {
        //Your module can only be 30 seconds long,
        //you can remove the timeout if the animation is less than 30 seconds
        console.log("TimeQuote app ending");
        $(document).trigger('next');
      },30000);
    });
  };
  //initialize this Module
  this.init();
};

//build your view stuff and add it to the init function up above.
//Use the start function to display your view.
//DONT put your view call in the setTimeout.

// USE THIS FRAMEWORK FOOLS

Module.TimeQuote.View = function() {
  var sayQuote =  "<h1 class='animated bounceInLeft' style='font-family:Helvetica;color:black'>" + quote + "</h1>";
};

Module.TimeQuote.View.prototype = {
  render: function() {

    $(document.body).css("background-image", "none");

    setTimeout(function(){
      $("#main-container").append(sayQuote);
    }, 500)
  },

  removeBackground: function(){
    // remove the background image if exists
    $(document.body).css("background-image", "none")
  },

};

Module.TimeQuote.Controller = function(view, model) {
  this.view = view;
  this.model = model;
  this.init();
};

Module.TimeQuote.Controller.prototype = {
  init: function(){
    // debugger
    var thisQuote = this.model.produceRandomQuote();
    this.view.removeBackground();
    this.view.render(quote);

  }
};

Module.TimeQuote.Model = function() {
  function produceRandomQuote(){
    var quote = quoteArray[Math.floor(Math.random() * quote.length)];
  };

  var quoteArray = ["Clocks slay time... time is dead as long as it is being clicked off by little wheels; only when the clock stops does time come to life. ~William Faulkner"
  ,"Time is what prevents everything from happening at once. ~John Archibald Wheeler"
  ,"The clock talked loud. I threw it away, it scared me what it talked. ~Tillie Olsen, Tell Me a Riddle"
  ,"Men talk of killing time, while time quietly kills them. ~Dion Boucicault"
  ,"Who forces time is pushed back by time; who yields to time finds time on his side. ~The Talmud"
  ,"How did it get so late so soon? ― Dr. Seuss"
  ,"Here we are, trapped in the amber of the moment. There is no why.― Kurt Vonnegut"
  ,"Time is an illusion. ― Albert Einstein"
  ,"And therein lies the whole of man's plight. Human time does not turn in a circle; it runs ahead in a straight line. That is why man cannot be happy: happiness is the longing for repetition. ― Milan Kundera, The Unbearable Lightness of Being"]
};


