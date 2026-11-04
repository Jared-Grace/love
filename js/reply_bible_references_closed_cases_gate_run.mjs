import { arguments_assert } from "./arguments_assert.mjs";
import { reply_bible_references_closed_cases } from "./reply_bible_references_closed_cases.mjs";
import { list_filter_property } from "./list_filter_property.mjs";
import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
import { list_size } from "./list_size.mjs";
export async function reply_bible_references_closed_cases_gate_run() {
  arguments_assert(arguments, 0);
  ("Gate: the step that closes a reply with verses still says what each case expects, having waited for the real download.");
  let checked = await reply_bible_references_closed_cases();
  let failures = list_filter_property(checked, "ok", false);
  list_empty_is_assert_json(failures, {
    failures,
    hint: "the verse step said something other than the case expects",
  });
  let r = {
    checked: list_size(checked),
  };
  return r;
}
