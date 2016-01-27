var heroGame = require('./hero_game');
var hero = heroGame.hero;
var eggs = heroGame.eggs;
var bread = heroGame.bread;
var suarez = heroGame.suarez;

var chai = require('chai');
var assert = chai.assert;
var expect = chai.expect;


// C. - A hero should be able to eat food, and health should go up by the replenishment value - If the food is their favourite food, their health should go up by 1.5 * value. 

describe('assert', function(){
  it('is name of hero Andrew', function(){
    assert.equal('Andrew', hero.name);
  });
  it('can hero talk', function(){
    assert.equal('My name is Andrew', hero.talk());
  });
  it('eggs are eggs and have value 20', function(){
    assert.equal('eggs', eggs.name);
    assert.equal(20, eggs.value);
  });
  it('eating eggs has increased health 130', function(){
    assert.equal(130, hero.health);
//RESETTING HEALTH:  
    hero.health = 100;
  });
    it('bread infected by Suarez the rat', function(){
      suarez.infect(bread);
      hero.eat(bread);
      assert.equal(50, hero.health);
  //RESETTING HEALTH:  
      hero.health = 100;
    });
//// Further. D. - Create a Rat constructor - Rats should be able to touch food, if they do the food become poisonous. - Heroes that eat poisonous food should lose health.



})




// E. Be creative. Extend the game











