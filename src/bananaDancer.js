var BananaDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps, '<img class="bananaDancer" src="img/banana.gif">');
  this.currentAngle=0;
};

BananaDancer.prototype = Object.create(Dancer.prototype);
BananaDancer.prototype.constructor = BananaDancer;

BananaDancer.prototype.step = function(){
  Dancer.prototype.step.call(this);
  // rotate 15 Degrees every call
  this.currentAngle += 15;

  this.$node.css({transform: 'rotate(' + this.currentAngle + 'deg)'});
};