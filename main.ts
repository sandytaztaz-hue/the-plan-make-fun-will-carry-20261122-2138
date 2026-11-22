import * as fs from "node:fs";

const storesPulled = 200;
const offerPrice = 49;
const rewrittenCount = 10;
const soldCount = 8;
const bankedAmount = 392;
const spendAmount = 100;
const extraStores = 500;
const chargePrice = 99;

const plan = `Day 1: pull ${storesPulled} new Shopify stores from BuiltWith. Rewrite one product description free from its site and email it with a $${offerPrice} offer: all ${rewrittenCount} rewritten in a day, paid by Stripe link. Sell ${soldCount}, bank $${bankedAmount}, spend $${spendAmount} on BuiltWith Pro and Hunter for ${extraStores} more stores, then charge $${chargePrice}.`;

const outDir = "/output";
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}
fs.writeFileSync("/output/entry.txt", plan, { encoding: "utf8" });
