// 953261 Lab 2 — Kad Café daily report
// Run:  npm start
import { menu } from "./data/menu.js";
import { orders } from "./data/orders.js";
import { menuLine, orderTotal, averageOrder, itemsWithTag } from "./src/cafe.js";

console.log("=== Today's orders ===");
// TODO (Part D): print one line per order, e.g.  "A001 Mint — 160 THB"
orders.forEach((order) => {
  const total = orderTotal(order, menu);
  console.log(`${order.id} ${order.customer} — ${total} THB`);
});

console.log("\n=== Summary ===");
// TODO (Part D): print the number of orders, the total sales and the average order.
console.log(`Orders: ${orders.length}`);

const totalSales = orders.reduce((sum, order) => sum + orderTotal(order, menu), 0);
console.log(`Total sales: ${totalSales} THB`);
console.log(`Average order: ${averageOrder(orders, menu)} THB`);

// TODO (Part D): print the result of your own function (see the lab sheet).
console.log("\n=== Spicy Items ===");
const spicyItems = itemsWithTag(menu, "spicy");
console.log(spicyItems.join(", "));