var PeanutsDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps, '<img class="peanutsDancer" src="img/peanuts.gif">');
};

PeanutsDancer.prototype = Object.create(Dancer.prototype);
PeanutsDancer.prototype.constructor = PeanutsDancer;

PeanutsDancer.prototype.step = function(){
  Dancer.prototype.step.call(this);
};