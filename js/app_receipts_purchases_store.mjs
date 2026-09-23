import { text_frozen } from "./text_frozen.mjs";
export function app_receipts_purchases_store() {
  "the one store inside the purchases database: each purchase under its own id. frozen for the same reason its database is";
  let v = text_frozen("purchases");
  return v;
}
