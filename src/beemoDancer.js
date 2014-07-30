var BeemoDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps, '<img class="beemoDancer" src="img/beemo.gif">');
  this.big = false;
  this.stopMoving = false;
};

BeemoDancer.prototype = Object.create(Dancer.prototype);
BeemoDancer.prototype.constructor = BeemoDancer;

BeemoDancer.prototype.step = function(){
  Dancer.prototype.step.call(this);
  if (!this.stopMoving) {
    if (this.big) {
      this.big = false;
      this.$node.stop().animate({width:'130px'},500);
    } else {
      this.big = true;
      this.$node.stop().animate({width:'100px'},500);
    }
  }

  var that = this;
  this.$node.mouseover(function(){
    BeemoDancer.prototype.scatter.call(that);
  });
};
BeemoDancer.prototype.lineUp = function(top, left) {
  this.stopMoving = true;

  top = top || 0;
  left = left || 0;

  this.$node.stop().animate({
    'top': top,
    'left': left
  }, 1000, '', function(){this.stopMoving = false;}.bind(this));
}
BeemoDancer.prototype.scatter = function() {
  this.stopMoving = true;
  this.$node.stop().animate({
    'top': $("body").height() * Math.random(),
    'left': $("body").width() * Math.random()
  }, 1000, '', function(){this.stopMoving = false}.bind(this));
}