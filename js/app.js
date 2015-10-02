const GAMEHEIGHT = 500;
const GAMEWIDTH = 1200;
const SPEED = 150;

var game = new Phaser.Game(GAMEWIDTH, GAMEHEIGHT, Phaser.AUTO, 'game', { preload: preload, create: create, update: update });
var cursors;
var player;
var spacebar;
var background;

function preload(){
  game.load.image('rocket', 'assets/rocket.png');
  game.load.image('paper', 'assets/paper.png');
}

function create(){
  background = game.add.tileSprite(0, 0, GAMEWIDTH, GAMEHEIGHT, 'paper');
  player = game.add.sprite(0, 0, 'rocket');

  game.physics.startSystem(Phaser.Physics.ARCADE);

  game.physics.arcade.enable(player);

  cursors = game.input.keyboard.createCursorKeys();

  spacebar = game.input.keyboard.addKey(Phaser.Keyboard.Spacebar);
}

function update(){
  background.tilePosition.x -= 2;

  player.body.velocity.x = 0;
  player.body.velocity.y = 0;

  if (cursors.left.isDown){
    player.body.velocity.x = -1 * SPEED;
  }

  if (cursors.right.isDown){
    player.body.velocity.x = SPEED;
  }

  if (cursors.down.isDown){
    player.body.velocity.y = SPEED;
  }

  if (cursors.up.isDown){
    player.body.velocity.y = -1 * SPEED;
  }
}
