import { Mage } from "./src/Mage";
import { Personagem } from "./src/Personagem";
import { Priest } from "./src/Priest";
import { Warrior } from "./src/Warrior";

let mage: Personagem = new Mage("Angelo mage");
let warrior: Personagem = new Warrior("Angelo warrior");
let priest: Personagem = new Priest("Angelo priest");

const personagens: Personagem[] = [];

console.log("mage :>> ", mage);
console.log("warrior :>> ", warrior);
console.log("priest :>> ", priest);

personagens.forEach((p)=> console.log(p.atacar()));