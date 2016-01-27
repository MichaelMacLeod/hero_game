var Hero = function (name, health, fav_food) {
  this.name = name;
  this.health = health;
  this.fav_food = fav_food;
}

Hero.prototype ={
  talk: function(){
    return ('My name is '+this.name);
  },
  eat: function(food){
    if (this.fav_food === food.name){
      this.health += (food.value*1.5);
    }else{
      this.health += food.value;
    }
  },
}

var andrew = new Hero('Andrew', 100, 'eggs');

//Food constructor: 

var Food = function (name, value){
  this.name = name;
  this.value = value;
}

var bread = new Food("bread", 10)
var eggs = new Food("eggs", 20)

andrew.eat(eggs);

//// Further. D. - Create a Rat constructor - Rats should be able to touch food, if they do the food become poisonous. - Heroes that eat poisonous food should lose health.

var Rat = function(name, damage){
  this.name = name;
  this.damage = damage;
}

Rat.prototype ={
  infect: function(food){
    food.value = (-10 * this.damage);
  },
}

var suarez = new Rat("Suarez", 5)

// suarez.infect(eggs);


module.exports = {
  hero:andrew, 
  eggs:eggs,
  bread:bread,
  suarez: suarez};



