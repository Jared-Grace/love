import { arguments_assert } from "./arguments_assert.mjs";
import { json_to } from "./json_to.mjs";
import { property_set } from "./property_set.mjs";
import { html_clear } from "./html_clear.mjs";
import { property_get } from "./property_get.mjs";
import { app_g_verify_home_lambda } from "./app_g_verify_home_lambda.mjs";
import { g_sermon_passage_verses_key } from "./g_sermon_passage_verses_key.mjs";
import { list_includes } from "./list_includes.mjs";
import { not } from "./not.mjs";
export function app_g_verify_home_prepared(
  chapter_shown,
  status_shown,
  chapter_state_shown,
  held,
  root,
) {
  "Everything a draw of the verify page has to work out before it can put anything on the screen: the passages in order, the key each one answers to, which one has been approved, and whether a verse is being worked on that has not been written down yet.";
  "WHAT IS BEING SHOWN IS WRITTEN DOWN HERE AS ONE PIECE OF TEXT, so a later look-again can tell at a glance that nothing has changed and leave the screen alone.";
  "THE PAGE IS EMPTIED HERE rather than by the caller, because emptying it and writing down what it now shows are the same decision.";
  arguments_assert(arguments, 5);
  let shown = json_to({
    chapter: chapter_shown,
    status: status_shown,
    chapter_state: chapter_state_shown,
  });
  property_set(held, "shown_json", shown);
  html_clear(root);
  let passages = property_get(chapter_shown, "passages");
  function passage_order(a, b) {
    let r = app_g_verify_home_lambda(a, b);
    return r;
  }
  passages = passages.slice().sort(passage_order);
  let busy = property_get(status_shown, "busy");
  let status_verse = property_get(status_shown, "verse");
  function passage_key(p) {
    let key = g_sermon_passage_verses_key(p);
    return key;
  }
  let real_keys = passages.map(passage_key);
  let approved_key = property_get(chapter_state_shown, "approved");
  let approved_index = real_keys.indexOf(approved_key);
  let pending = null;
  let written = list_includes(real_keys, status_verse);
  if (busy && not(written)) {
    pending = status_verse;
  }
  let r2 = {
    passages,
    real_keys,
    approved_key,
    approved_index,
    pending,
    busy,
    status_verse,
  };
  return r2;
}
