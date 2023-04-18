
EnemyHealthText = document.getElementById("EnemyHealth")
PlayerHpText = document.getElementById("player_health")


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
  EnemyHealthText.InnerText = EnemyHeath
}
