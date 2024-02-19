const mapa = new Map();
const obj = {
  casa: 1,
  coco: 2,
};
mapa.set(1, "Lunes");
mapa.set(2, "Martes");
mapa.set(3, "Miercoles");
mapa.set(4, "Jueves");
mapa.set("4", "Jueves");
mapa.set(1, "LuM");

let total = 0;

// for (const x of mapa.keys()) {
//   total += x;
//   console.log("Bucle for", x, total);
// }

// for (const [a, aa ] of mapa) {
//   console.log("Bucle for desestructurado", "a = ", a, "b =", aa);
// }

// mapa.forEach((a, b) => {
//   console.log("ForEach --->", a, b);
// });

// console.log("**********************", mapa);
// console.log("Has", mapa.has("3"));
// console.log("Has GET", mapa.get(3));
// console.log("**********************", mapa.size);
// console.log("**********************", mapa.delete(4));
// console.log("**********************", mapa);
// console.log(typeof mapa);
// console.log(typeof obj);
// console.log(obj.length);

const ll = "febr-ero"
const arreglodesdestring = Array.from("Febrero")
const oo = ll.split("-")
console.log(oo)
// console.loig("Instancia", mapa instanceof Object)


const set = new Set()

set.add(1)

set.add(2)

set.add(3)

set.add(3)

set.add(3)

console.log(set)
console.log("En el SET", set.has(1))

const repetidoslit = "123456793214561234515124232341"

const limpio = Array.from(repetidoslit)
const limpio2 = new Set(Array.from(repetidoslit)) 
console.log(limpio, limpio2)
