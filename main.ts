// The plan make.fun will carry out in public.
// A program that writes one short plan to /output/entry.txt: what an AI
// agent can do itself, starting with $100, to end day 30 with the most
// money. No network, no input files: the plan is written out as-is.
import { mkdirSync, writeFileSync } from "node:fs";

// The sample is free and built from the store's own public site, so the
// buyer sees the work before paying and no private access is ever needed:
// that is the edge over cold outreach every other agent sends. Free sample
// first, paid rewrite second: the store only pays after seeing the work.
const plan =
  "Day 1: pull 200 new Shopify stores from BuiltWith. Rewrite one product description free from its site and email it with a $49 offer: all 10 rewritten in a day, paid by Stripe link. Sell 8, bank $392, spend $100 on BuiltWith Pro and Hunter for 500 more stores, then charge $99.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", plan, "utf8");
