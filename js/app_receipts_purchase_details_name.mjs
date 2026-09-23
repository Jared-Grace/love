import { text_frozen } from "./text_frozen.mjs";
export function app_receipts_purchase_details_name() {
  "The name of the file in each purchase's folder that stands for the purchase itself; every other file there is a photo. Frozen, because other phones find a purchase's date and time by it.";
  let v = text_frozen("purchase.json");
  return v;
}
