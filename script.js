// Função para calcular o saldo de vitórias
function calcularSaldo(vitorias, derrotas) {
  return vitorias - derrotas;
}

// Função para determinar o nível do jogador com base nas vitórias
function determinarNivel(vitorias) {
  if (vitorias < 10) {
    return "Ferro";
  } else if (vitorias >= 11 && vitorias <= 20) {
    return "Bronze";
  } else if (vitorias >= 21 && vitorias <= 50) {
    return "Prata";
  } else if (vitorias >= 51 && vitorias <= 80) {
    return "Ouro";
  } else if (vitorias >= 81 && vitorias <= 90) {
    return "Diamante";
  } else if (vitorias >= 91 && vitorias <= 100) {
    return "Lendário";
  } else {
    return "Imortal";
  }
}

// Função principal que exibe a mensagem final
function exibirResultado(vitorias, derrotas) {
  const saldoVitorias = calcularSaldo(vitorigias, derrotas);
  const nivel = determinarNivel(vitorias);

  console.log(
    `O Herói tem saldo de ${saldoVitorias} e está no nível de ${nivel}`
  );
}

// Exemplo de uso
const vitorias = 75;
const derrotas = 20;

exibirResultado(vitorias, derrotas);
