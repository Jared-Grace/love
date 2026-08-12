import { list_map_property } from "./list_map_property.mjs";
import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
import { functions_page_auto_borrowing } from "./functions_page_auto_borrowing.mjs";
import { property_get } from "./property_get.mjs";
import { fn_name } from "./fn_name.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export async function functions_page_auto_borrowing_gate_run() {
  "Gate: running the normalize pass over a file that hands work to a browser must";
  "not leave a function sent to the page reading a name from the top of that file.";
  "The gate beside this one asks whether such a file is broken now. This one asks";
  "whether the pass would break it, which is the version that can be acted on. The";
  "difference is not academic: the operator rewrite was doing exactly this, a";
  "repair by hand turned the other gate green, and the next canonicalize put the";
  "whole break straight back. A repair that cannot survive the pass is not a";
  "repair, and nothing said so.";
  "It ratchets against ZERO. Twelve files talk to a page and all twelve come";
  "through the pass clean as of 2026-08-03, so there is nothing to grandfather.";
  "What was checked is printed even when nothing is wrong. Every file failing to";
  "get through the pass would empty this answer, and an empty answer reads exactly";
  "like a clean run - the count is how a reader tells those apart.";
  "The count and the skipped files are handed back rather than printed, which keeps that proof while dropping a leak: printed, they were read back out of a failure as accusations, and a file that could not get through the pass is the plainest innocent there is - nothing was found wrong with it, it was never asked.";
  "The offenders are thrown as a record for the same reason. The names each one borrows are advice, and they are innocent twice over: they are ordinary top-level names doing nothing wrong, and the fault belongs to the step that would send a function past them.";
  let v = await functions_page_auto_borrowing();
  let checked = property_get(v, "checked");
  let skipped = property_get(v, "skipped");
  let offenders = property_get(v, "offenders");
  let names = list_map_property(offenders, "name");
  let f_name = fn_name("js_page_serializing_call_is");
  let advice = text_combine_multiple([
    "these files would come back broken from the normalize pass - the step doing it must ask ",
    f_name,
    " and leave such a file alone, the way the built-in rewrite already does",
  ]);
  let hint = {
    advice,
    checked,
    skipped,
    offenders,
  };
  list_empty_is_assert_json(names, {
    hint,
  });
  let r = {
    checked,
    skipped,
    breaking: 0,
  };
  return r;
}
