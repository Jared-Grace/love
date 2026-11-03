import { not_equal } from "./not_equal.mjs";
import { less_than } from "./less_than.mjs";
import { currency_php_per_usd_date_path } from "./currency_php_per_usd_date_path.mjs";
import { firebase_storage_url_project_jg } from "./firebase_storage_url_project_jg.mjs";
import { firebase_storage_url } from "./firebase_storage_url.mjs";
import { http_json_browser_quiet } from "./http_json_browser_quiet.mjs";
import { catch_null_async } from "./catch_null_async.mjs";
import { date_iso_to } from "./date_iso_to.mjs";
import { json_to } from "./json_to.mjs";
import { firebase_upload_text_browser_quiet } from "./firebase_upload_text_browser_quiet.mjs";
export async function currency_php_per_usd_date_browser(date) {
  "$plain date";
  "How many pesos one US dollar bought on one day, written YYYY-MM-DD, asked from a browser: the shared store first, then the free Frankfurter service, and what Frankfurter answers is kept in the store for everybody after.";
  "A day that has not finished is answered but never kept, because the store only ever takes a day's first answer and a rate asked for this morning would stand in for that whole day for good.";
  "Failing to read or to keep is not failing to answer: a store that cannot be reached, or another phone that kept this day a moment earlier, still leaves a good rate to hand back. A day Frankfurter has no rate for throws, since no number is the honest answer there.";
  let path = currency_php_per_usd_date_path(date);
  let project_url = firebase_storage_url_project_jg();
  let url_kept = firebase_storage_url(path, project_url);
  async function kept_read() {
    let kept_read_answer = await http_json_browser_quiet(url_kept);
    return kept_read_answer;
  }
  let kept = await catch_null_async(kept_read);
  if (not_equal(kept, null)) {
    let r = kept.rate;
    return r;
  }
  let url_asked = "https://api.frankfurter.dev/v2/rate/USD/PHP?date=" + date;
  let asked = await http_json_browser_quiet(url_asked);
  let today = date_iso_to(new Date()).slice(0, 10);
  if (less_than(date, today)) {
    let content = json_to(asked);
    async function keep() {
      await firebase_upload_text_browser_quiet(path, content);
      return true;
    }
    await catch_null_async(keep);
  }
  let r2 = asked.rate;
  return r2;
}
