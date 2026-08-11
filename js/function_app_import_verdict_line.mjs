import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { function_app_import_verdict_advice } from "./function_app_import_verdict_advice.mjs";
import { list_join_comma_space } from "./list_join_comma_space.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function function_app_import_verdict_line(verdict) {
  arguments_assert(arguments, 1);
  ("One answer about one app-owned import written as a single line: the name, the app it claims, the one-word answer, what to do about it, and the evidence that decided it.");
  ("The evidence is carried along rather than left behind, because the answer rests on the callers' names, which is a strong hint and not a proof - a caller can wear a prefix that is itself a lie. Whoever is reading this has to be able to disagree with it.");
  ("The two kinds of evidence are told apart and each is left out when it is empty. Run together they read as one list, and they are opposite things - who inside the app calls it, and what inside the app it calls - so a name held up by the second would look to a reader exactly like one held up by the first. That confusion is the mistake this whole reading exists to stop.");
  let imported = property_get(verdict, "imported");
  let app = property_get(verdict, "app");
  let word = property_get(verdict, "verdict");
  let advice = function_app_import_verdict_advice(word);
  let callers_own = property_get(verdict, "callers_own");
  let reaches = property_get(verdict, "reaches");
  let parts = [imported, " (", app, ") ", word, " - ", advice];
  let callers_any_is = list_empty_not_is(callers_own);
  if (callers_any_is) {
    let callers_text = list_join_comma_space(callers_own);
    list_add_multiple(parts, [" - called by ", callers_text]);
  }
  let reaches_any_is = list_empty_not_is(reaches);
  if (reaches_any_is) {
    let reaches_text = list_join_comma_space(reaches);
    list_add_multiple(parts, [" - reaches ", reaches_text]);
  }
  let r = text_combine_multiple(parts);
  return r;
}
