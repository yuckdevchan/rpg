att_btn = document.getElementById("attack_btn")
EnemyHealth = documen.getElementById("EnemyHealth")
EHealth = 0
Attack = 10

function attack() {
  EHealth = EnemyHealth - Attack
  att_btn.InnerText = EnemyHeath
}
