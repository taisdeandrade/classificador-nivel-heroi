let nome = "Jhon";
let xp = 4300;

let nivel = level(xp);

console.log(`O Herói de nome ${nome} está no nível ${nivel}`);

function level(xp){
    if (xp <= 1000) {
        return "ferro";
    }
    else if (xp >= 1001 && xp <= 2000) {
        return "bronze";
    }
    else if (xp >= 2001 && xp <= 5000) {
        return "prata";
    }
    else if (xp >= 5001 && xp <= 7000) {
        return "ouro";
    }
    else if (xp >= 7001 && xp <= 8000) {
        return "platina";
    }
    else if (xp >= 8001 && xp <= 9000) {
        return "ascendente";
    }
    else if (xp >= 9001 && xp <= 10000) {
        return "imortal";
    }
    else {
        return "radiante";
    }
}
