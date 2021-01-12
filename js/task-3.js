"use strict";

class Storage {
  constructor(items) {
    this.items = items;
  }

  getItems() {
    this.items;
  }

  addItem(item) {
    this.item = item;
    this.items.push(item);
  }

  removeItem(item) {
    this.item = item;
    if (this.items.includes(this.item))
      return this.items.splice(this.items.indexOf(this.item), 1);
    else return "Sorry, there's nothing";
  }
}

const storage = new Storage([
  "Нанитоиды",
  "Пролонгер",
  "Железные жупи",
  "Антигравитатор",
]);

console.log(Storage);

const items = storage.getItems();
console.table(storage.items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор" ]

storage.addItem("Дроид");
console.table(storage.items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор", "Дроид" ]

storage.removeItem("Пролонгер", "Дроид");
console.table(storage.items); // [ "Нанитоиды", "Железные жупи", "Антигравитатор", "Дроид" ]
