import { arguments_assert } from "./arguments_assert.mjs";
import { property_get_or } from "./property_get_or.mjs";
import { app_receipts_payment_get } from "./app_receipts_payment_get.mjs";
export function app_receipts_purchase_from_metadata(
  id,
  folder_code,
  custom,
  photos,
) {
  "$plain id";
  "$plain folder_code";
  "$plain custom";
  "$plain photos";
  "One purchase as this phone keeps it, made from what storage says about its details file: custom is that file's own metadata, and anything it leaves out is empty, except the colour, which is blue.";
  arguments_assert(arguments, 4);
  let purchase = {
    key: id,
    folder_code,
    date: property_get_or(custom, "date", ""),
    time: property_get_or(custom, "time", ""),
    price: property_get_or(custom, "price", ""),
    description: property_get_or(custom, "description", ""),
    notes: property_get_or(custom, "notes", ""),
    color: property_get_or(custom, "color", "blue"),
    payment: app_receipts_payment_get(custom),
    photos,
  };
  return purchase;
}
