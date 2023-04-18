
let EnemyHealthText = document.getElementById("EnemyHealth")
let PlayerHpText = document.getElementById("player_health")


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
  toString(EnemyHealth)
  EnemyHealthText = EnemyHealth
}
