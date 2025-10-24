const usuarios = new Map();

usuarios.set("email@gmail.com", "Felipe");
usuarios.set("user2@gmail.com", "Ana");

console.log(usuarios.get("email@gmail.com"));
console.log(usuarios.size);

usuarios.delete("user2@gmail.com");
console.log(usuarios.size);