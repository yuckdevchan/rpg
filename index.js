var EnemyHealth = 100
var EnemyDefence = 5
var EnemyAttack = 5

var PlayerAttack = 10
var PlayerHealth = 100
var PlayerDefence = 10



function EnemyAttackEvent() {
  PlayerHealth -= EnemyAttack
  PlayerHpText -= PlayerHealth
}

function PlayerAttackEvent() {
  EnemyHealth = EnemyHealth - PlayerAttack
  console.log(EnemyHealth)
  toString(EnemyHealth)
  EnemyHealthText = EnemyHealth
  document.getElementById("EnemyHealth").innerHTML = EnemyHealthText
  var metal_pipe = new Audio('pipe.mp3');
  metal_pipe.play();
}
