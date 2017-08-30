/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports.thing = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('role.miner');
 * mod.thing == 'a thing'; // true
 */

module.exports = {
    run:function(creep) {
        let source = Game.getObjectById(creep.memory.sourceId);
        let container = source.pos.findInRange(FIND_STRUCTURES, 1, {
            filter: s => s.structureType == STRUCTURE_CONTAINER
        })[0];
        
        if (creep.pos.isEqualTo(container.pos)){
            creep.harvest(source);
        }
        else {
            creep.moveTo(container);
        }
    }

};