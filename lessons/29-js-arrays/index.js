const mySiblings=["Huswah", "Ridwan", "Abdurrahman","Toyyib"];
const myParents=["Mother", "Dad"];
const combinedArrays=mySiblings.concat(myParents)
console.log(combinedArrays);
combinedArrays.push("Ruby","Emerald");
combinedArrays.reverse();
console.log(myParents[1])
myParents[0]=("Momma")
const combinedArrays = ["Huswah", "Ridwan", "Abdurrahman","Toyyib","Momma","Dad"];

for (let i = 0; i < combinedArrays.length; i++) {
  alert( combinedArrays[i] );
}

let combinedArrays = ["Huswah", "Ridwan", "Abdurrahman","Toyyib","Momma","Dad"];

for (let item of combinedArrays) {
  alert( item );
}