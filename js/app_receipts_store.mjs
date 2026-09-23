import { text_frozen } from "./text_frozen.mjs";
export function app_receipts_store() {
  "the one store inside the receipts database: each photo not yet sent, kept under the storage address it will be sent to. frozen for the same reason its database is";
  let v = text_frozen("unsent");
  return v;
}
