import { subtract } from "./subtract.mjs";
import { less_than } from "./less_than.mjs";
import { date_today_iso } from "./date_today_iso.mjs";
import { date_add_days } from "./date_add_days.mjs";
import { app_shared_open_entries } from "./app_shared_open_entries.mjs";
import { property_get } from "./property_get.mjs";
import { property_initialize } from "./property_initialize.mjs";
import { list_add_if_not_includes } from "./list_add_if_not_includes.mjs";
import { property_count_add } from "./property_count_add.mjs";
import { list_size } from "./list_size.mjs";
import { list_add } from "./list_add.mjs";
import { list_sort_number_mapper_reverse } from "./list_sort_number_mapper_reverse.mjs";
export async function app_shared_open_report(days) {
  "how much each app was used over the last so many days, today included: how many different devices opened it, and how many device-days that came to";
  "Devices is the one to read for reach - a device that comes back every day is still one device. Device-days is the one to read for habit - the same device on ten days counts ten.";
  "Apps come out most-used first, so the answer to which apps matter is the top of the list.";
  let today = date_today_iso();
  let back = subtract(1, days);
  let from = date_add_days(today, back);
  let entries = await app_shared_open_entries();
  let by_app = {};
  for (let entry of entries) {
    let date = property_get(entry, "date");
    let early = less_than(date, from);
    if (early) {
      continue;
    }
    let app = property_get(entry, "app");
    let found = property_initialize(by_app, app, {
      devices: [],
      device_days: 0,
    });
    let user_id = property_get(entry, "user_id");
    let list = property_get(found, "devices");
    list_add_if_not_includes(list, user_id);
    property_count_add(found, "device_days", 1);
  }
  let apps = [];
  for (let app in by_app) {
    let found = property_get(by_app, app);
    let list2 = property_get(found, "devices");
    let devices = list_size(list2);
    let device_days = property_get(found, "device_days");
    list_add(apps, {
      app,
      devices,
      device_days,
    });
  }
  function lambda(a) {
    let value = property_get(a, "devices");
    return value;
  }
  list_sort_number_mapper_reverse(apps, lambda);
  let r = {
    from,
    to: today,
    apps,
  };
  return r;
}
