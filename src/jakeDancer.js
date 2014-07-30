var JakeDancer = function(top, left, timeBetweenSteps){
  this.stopMoving = true;
  Dancer.call(this, top, left, timeBetweenSteps, '<img class="jakeDancer" src="img/jake.gif">');
  this.stopMoving = false;
  this.move = false;
};

JakeDancer.prototype = Object.create(Dancer.prototype);
JakeDancer.prototype.constructor = JakeDancer;

JakeDancer.prototype.step = function(){
  Dancer.prototype.step.call(this);
  if (!this.stopMoving) {
    if (this.move) {
      this.move = false;
      this.$node.stop().animate({left:'+=50px'},500);
    } else {
      this.move = true;
      this.$node.stop().animate({left:'-=50px'},500);
    }
  }

  var that = this;
  this.$node.mouseover(function(){
    JakeDancer.prototype.scatter.call(that);
  });
};
JakeDancer.prototype.lineUp = function(top, left) {
  this.stopMoving = true;

  top = top || 0;
  left = left || 0;

  this.$node.stop().animate({
    'top': top,
    'left': left
  }, 1000, '', function(){this.stopMoving = false;}.bind(this));
}
JakeDancer.prototype.scatter = function() {
  this.stopMoving = true;
  this.$node.stop().animate({
    'top': $("body").height() * Math.random(),
    'left': $("body").width() * Math.random()
  }, 1000, '', function(){this.stopMoving = false}.bind(this));
}