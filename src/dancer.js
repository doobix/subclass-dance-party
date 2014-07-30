// Creates and returns a new dancer object that can step
var Dancer = function(top, left, timeBetweenSteps, dancer){
  this.timeBetweenSteps = timeBetweenSteps;
  // use jQuery to create an HTML <span> tag
  this.$node = $(dancer) || $('<span class="dancer"></span>');
  this.step();
  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body
  this.setPosition(top, left);
};
Dancer.prototype.step = function(){
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
  
  var that = this;
  this.$node.mouseover(function(){
    Dancer.prototype.scatter.call(that);
  });
};
Dancer.prototype.move = function(top, left){
  $(this).stop().animate({
    'top': top,
    'left': left
  }, 1000);
};
Dancer.prototype.setPosition = function(top, left){
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  //
  this.$node.css({
    'top': top,
    'left': left
  });
};
Dancer.prototype.lineUp = function(top, left) {
  top = top || 0;
  left = left || 0;
  Dancer.prototype.move.call(this.$node, top, left);
}
Dancer.prototype.scatter = function() {
  this.newTop = $("body").height() * Math.random();
  this.newLeft = $("body").width() * Math.random();
  Dancer.prototype.move.call(this.$node, this.newTop, this.newLeft);
}