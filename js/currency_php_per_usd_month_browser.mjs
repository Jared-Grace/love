import { not_equal } from "./not_equal.mjs";
import { equal } from "./equal.mjs";
import { date_iso_to } from "./date_iso_to.mjs";
import { currency_php_per_usd_month_finished_is } from "./currency_php_per_usd_month_finished_is.mjs";
import { currency_php_per_usd_month_path } from "./currency_php_per_usd_month_path.mjs";
import { firebase_storage_url_project_jg } from "./firebase_storage_url_project_jg.mjs";
import { firebase_storage_url } from "./firebase_storage_url.mjs";
import { http_json_browser_quiet } from "./http_json_browser_quiet.mjs";
import { catch_null_async } from "./catch_null_async.mjs";
import { json_to } from "./json_to.mjs";
import { firebase_upload_text_browser_quiet } from "./firebase_upload_text_browser_quiet.mjs";
export async function currency_php_per_usd_month_browser(month) {
  "$plain month";
  "How many pesos one US dollar bought on each day of one month, written YYYY-MM, asked from a browser: an object from each day, written YYYY-MM-DD, to its rate.";
  "A finished month comes from the shared store. The first browser to need one that is not there yet asks the free Frankfurter service and leaves it in the store for everybody after, so a month costs Frankfurter one request in all.";
  "A month that is not finished is asked of Frankfurter and never kept, because the store takes only a month's first answer and its rates may still change. So is a month with a day missing from the answer, because a short file could never be corrected.";
  "Failing to read or to keep is not failing to answer: a store that cannot be reached, or another phone that kept this month a moment earlier, still leaves good rates to hand back.";
  let today = date_iso_to(new Date()).slice(0, 10);
  let finished = currency_php_per_usd_month_finished_is(month, today);
  let path = currency_php_per_usd_month_path(month);
  if (finished) {
    let project_url = firebase_storage_url_project_jg();
    let url_kept = firebase_storage_url(path, project_url);
    async function kept_read() {
      let kept_read_answer = await http_json_browser_quiet(url_kept);
      return kept_read_answer;
    }
    let kept = await catch_null_async(kept_read);
    if (not_equal(kept, null)) {
      return kept;
    }
  }
  let parts = month.split("-");
  let v = Number(parts[0]);
  let v2 = Number(parts[1]);
  let v3 = Date.UTC(v, v2, 0);
  let last = date_iso_to(new Date(v3)).slice(0, 10);
  let url_asked =
    "https://api.frankfurter.dev/v2/rates?from=" +
    month +
    "-01&to=" +
    last +
    "&base=USD&quotes=PHP";
  let rows = await http_json_browser_quiet(url_asked);
  let rates = {};
  for (let row of rows) {
    rates[row.date] = row.rate;
  }
  if (finished && equal(rows.length, Number(last.slice(8)))) {
    let content = json_to(rates);
    async function keep() {
      await firebase_upload_text_browser_quiet(path, content);
      return true;
    }
    await catch_null_async(keep);
  }
  return rates;
}
