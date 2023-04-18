
EnemyHealthText = document.getElementById("EnemyHealth").innerHTML
PlayerHpText = document.getElementById("player_health").innerHTML


EnemyHealth = 100
EnemyDefence = 5
EnemyAttack = 5

PlayerAttack = 10
PlayerHealth = 100
PlayerDefence = 10



function EnemyAttack() {
  PlayerHealth -= EnemyAttack
  PlayerHpText -= PlayerHealth
}

function PlayerAttack() {
  EnemyHealth = EnemyHealth - Attack
  EnemyHealthText = EnemyHeath
}
