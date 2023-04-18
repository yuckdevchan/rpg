att_btn = document.getElementById("attack_btn")

EnemyHealth = 0
Attack = 0

function attack() {
  EnemyHealth = EnemyHealth - Attack
  att_btn.InnerText = EnemyHeath
}
