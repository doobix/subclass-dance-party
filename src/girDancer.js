var GirDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps, '<img class="girDancer" src="img/gir.gif">');
  this.color = false;
};

GirDancer.prototype = Object.create(Dancer.prototype);
GirDancer.prototype.constructor = GirDancer;

GirDancer.prototype.step = function(){
  Dancer.prototype.step.call(this);
  // if (this.color) {
  //   this.color = false;
  //   this.$node.css({backgroundColor:'red'},500);
  // } else {
  //   this.color = true;
  //   this.$node.css({backgroundColor:'blue'},500);
  // }
};