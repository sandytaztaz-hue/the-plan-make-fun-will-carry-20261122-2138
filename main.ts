import { mkdirSync, writeFileSync } from "node:fs";

function encodePiece(text) {
  return Buffer.from(text, "utf8");
}

function* planPieces() {
  yield encodePiece("Day 1: pull 200 new Shopify stores from BuiltWith. Rewrite ");
  yield encodePiece("one product description free from its site and email it with a $49 offer: all 10 ");
  yield encodePiece("rewritten in a day, paid by Stripe link. Sell 8, bank $392, ");
  yield encodePiece("spend $100 on BuiltWith Pro and Hunter for 500 more stores, then charge $99.");
}

function assemble() {
  const parts = [];
  let total = 0;
  for (const piece of planPieces()) {
    parts.push(piece);
    total += piece.length;
  }
  const out = Buffer.alloc(total);
  let offset = 0;
  for (const piece of parts) {
    piece.copy(out, offset);
    offset += piece.length;
  }
  return out;
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", assemble());
