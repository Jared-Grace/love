import { arguments_assert } from "./arguments_assert.mjs";
import { date_zone_date_time } from "./date_zone_date_time.mjs";
import { property_get } from "./property_get.mjs";
import { country_philippines } from "./country_philippines.mjs";
import { uuid_browser } from "./uuid_browser.mjs";
import { app_receipts_purchase_save } from "./app_receipts_purchase_save.mjs";
export async function app_receipts_purchase_new(folder_code) {
  "$plain folder_code";
  "Make an empty purchase in the folder the code names, dated with this moment in Philippine time, and keep it.";
  "The date and time are Philippine time whatever zone this device is set to, because the purchases are made in the Philippines: that is what a receipt says and what a person will correct it to, and every purchase then means the same clock.";
  arguments_assert(arguments, 1);
  let now = new Date();
  let object = country_philippines();
  let zone = property_get(object, "zone");
  let wall = date_zone_date_time(now, zone);
  let purchase = {
    key: uuid_browser(),
    folder_code,
    date: property_get(wall, "date"),
    time: property_get(wall, "time"),
    price: "",
    description: "",
    photos: [],
  };
  await app_receipts_purchase_save(purchase);
  return purchase;
}
