module.exports = {
    // a function to run the logic for this role
    run: function(creep) {
        // if in target room
        creep.moveTo(Game.rooms['W37S86'].controller);
        creep.claimController(creep.room.controller);
        
        
        
      //  if (creep.room.name != 'W82N38') {
            // find exit to target room
          //  var exit = creep.room.findExitTo('W82N38');
            // move to exit
          //  creep.moveTo(creep.pos.findClosestByRange(exit));
            
            //move to specific target
          //  creep.moveTo(Game.rooms['W82N38']);
            //claim controller
           // if(creep.claimController(creep.room.controller) == ERR_NOT_IN_RANGE) {
           //     creep.moveto(creep.room.controller);
          //  }
      //  }
        //else {
            // try to claim controller
           // if (creep.claimController(creep.room.controller) == ERR_NOT_IN_RANGE) {
                // move towards the controller
             //  creep.moveTo(creep.room.controller);
         //  }
   //     }
   }
};
