import { property_equals } from "./property_equals.mjs";
import { retry_standard } from "./retry_standard.mjs";
import { text_split_comma } from "./text_split_comma.mjs";
import { firebase_bucket } from "./firebase_bucket.mjs";
import { app_shared_open_entries } from "./app_shared_open_entries.mjs";
import { property_get } from "./property_get.mjs";
import { list_includes } from "./list_includes.mjs";
import { not } from "./not.mjs";
export async function app_shared_open_app_dates_delete(app, dates) {
  "remove every open one app recorded on the days named - for opens that were never a person, such as a test run that opened the app in a thousand fresh browsers";
  "Dates are one comma-joined word of 'YYYY-MM-DD' days, and the app is spelled as the counts spell it, so what a report showed is exactly what can be named here.";
  "Each file is named one by one and never removed as a folder, so the most a wrong word can do is remove nothing. Hands back what it removed, so a count of zero says the words matched nothing.";
  let days = text_split_comma(dates);
  let bucket = await firebase_bucket();
  let entries = await app_shared_open_entries();
  let removed = 0;
  for (let entry of entries) {
    let same_app = property_equals(entry, "app", app);
    let item = property_get(entry, "date");
    let named_day = list_includes(days, item);
    if (not(same_app && named_day)) {
      continue;
    }
    let name = property_get(entry, "name");
    async function remove() {
      await bucket.file(name).delete();
    }
    await retry_standard(remove);
    removed = removed + 1;
  }
  let r = {
    app,
    days,
    removed,
  };
  return r;
}
