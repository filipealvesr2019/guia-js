async function main() {
    let nome = prompt("Digite seu nome: ");
    let fase1 = Number(prompt("Pontuação na fase 1: "));
    let fase2 = Number(prompt("Pontuação na fase 2: "));
    let fase3 = Number(prompt("Pontuação na fase 3: "));
    
    let media = (fase1 + fase2 + fase3) / 3;
    
    let resultado = media >= 70 ? `Parabens, ${nome}! Voce venceu! 🎉` : `Tente Novamenete, ${nome}. 😞`;
    
    console.log(`Sua media foi: ${media}`);
    console.log(resultado);

}