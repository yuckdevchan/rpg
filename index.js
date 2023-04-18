
var EnemyHealthText = document.getElementById("EnemyHealth").innerHTML
var PlayerHpText = document.getElementById("player_health").innerHTML


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
  EnemyHealthText = EnemyHealth
}
