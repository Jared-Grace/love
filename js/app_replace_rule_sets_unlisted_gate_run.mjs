import { app_replace_rule_sets_unlisted } from "./app_replace_rule_sets_unlisted.mjs";
import { fn_name } from "./fn_name.mjs";
import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export async function app_replace_rule_sets_unlisted_gate_run() {
  "Gate: every finished exercise the repo writes is named in the list the app reads, so none of them is invisible to the player.";
  "Against zero rather than against a baseline: an exercise nobody can reach is worth nothing to anybody in every case, and adding its name to the list is one line, so there is nothing here to grandfather.";
  let unlisted = await app_replace_rule_sets_unlisted();
  let f_name = fn_name("app_replace_rule_sets_fns");
  list_empty_is_assert_json(unlisted, {
    hint: text_combine_multiple([
      "an exercise exists that the app never shows - add it to ",
      f_name,
      ", or delete it if a listed exercise already teaches the same thing",
    ]),
  });
}
