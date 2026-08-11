import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_api } from "./app_shared_api.mjs";
import { fn_name } from "./fn_name.mjs";
import { property_get } from "./property_get.mjs";
import { equal } from "./equal.mjs";
import { subtract } from "./subtract.mjs";
import { app_g_verify_view_suggestion_text_normalize } from "./app_g_verify_view_suggestion_text_normalize.mjs";
export async function app_g_verify_view_suggestion_applied_is(
  chapter_code,
  verse,
  value4,
  ignore_applied,
) {
  arguments_assert(arguments, 4);
  try {
    let all = await app_shared_api({
      f_name: fn_name("g_verify_suggest_history_read"),
      args: [chapter_code],
    });
    let mine = [];
    function lambda_mine(h) {
      let one = property_get(h, "verse");
      if (equal(one, verse)) {
        mine.push(h);
      }
    }
    all.forEach(lambda_mine);
    if (equal(mine.length, 0)) {
      return false;
    }
    let last = mine[subtract(mine.length, 1)];
    let value11 = property_get(last, "text");
    let sent = app_g_verify_view_suggestion_text_normalize(value11);
    let now = app_g_verify_view_suggestion_text_normalize(value4);
    let eq3 = equal(sent, now);
    return eq3;
  } catch (ignore_applied) {
    ignore_applied;
    return false;
  }
}
