$(document).ready(function(){
  window.dancers = [];

  $(".scatter").on("click", function(){
    for (var i=0; i < window.dancers.length; i++) {
      window.dancers[i].scatter();
    }
  });

  $(".lineUp").on("click", function(){
    var totalLeft = 0;
    var totalTop = 30;
    for (var i=0; i < window.dancers.length; i++) {
      window.dancers[i].lineUp(totalTop, totalLeft);
      var width = window.dancers[i].$node[0].width;
      if (totalLeft+width > $("body").width()-width) {
        totalLeft = 0;
        totalTop += window.dancers[i].$node[0].height;
      } else {
        totalLeft += width;
      }
    }
  });

  $(".addDancerButton").on("click", function(event){
    /* This function sets up the click handlers for the create-dancer
     * buttons on index.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
    window.dancers.push(dancer);
  });

  $(".danceFloor").mousemove(function(e){
    var top = (e.clientY-100 > 32) ? e.clientY-100 : 32;
    $(".spongebob").offset({
      top: top,
      left: e.clientX-150
    });
  });
});