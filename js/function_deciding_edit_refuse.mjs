import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { process_human_seam_is } from "./process_human_seam_is.mjs";
import { fn_name } from "./fn_name.mjs";
import { text_split_comma } from "./text_split_comma.mjs";
import { function_name_unalias_only } from "./function_name_unalias_only.mjs";
import { function_seams_reached_memo } from "./function_seams_reached_memo.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { assert_json } from "./assert_json.mjs";
export async function function_deciding_edit_refuse(f_names_comma) {
  "Refuses, from Claude's seam, a transform aimed at a function that can reach the writer of the files deciding what runs without asking, or at this refusal itself.";
  "The safe overwrite already refuses such a function, but a selector-and-transform command is approved by its name alone, and the name of the function it edits arrives as an argument. So an edit those functions say cannot land unasked could land unasked by this other road. The person running it from their own terminal is the one who sees what it does, so they pass.";
  "Asked before anything is parsed, so a refusal leaves no file half changed. The names are split and unaliased the way the transform runner reads them, because a comma or an alias would otherwise carry a protected name past this.";
  "This looks only at the function being edited. A helper one of these functions calls can still be edited, which the safe overwrite's flow check covers and this does not try to.";
  arguments_assert(arguments, 1);
  let human = process_human_seam_is();
  if (human) {
    return;
  }
  let seams = [
    fn_name("file_overwrite_deciding"),
    fn_name("function_deciding_edit_refuse"),
  ];
  let remembered = {};
  let names = text_split_comma(f_names_comma);
  for (let name of names) {
    let f_name = await function_name_unalias_only(name);
    let reached = await function_seams_reached_memo(f_name, seams, remembered);
    let clean = list_empty_is(reached);
    assert_json(clean, {
      hint: text_combine_multiple([
        "this function helps decide what runs without asking, so an edit to it needs a person to see it - draft it with ",
        fn_name("function_temp_write"),
        " and hand the human: node scripts/r.mjs ",
        fn_name("function_overwrite_from_temp"),
        " <name>",
      ]),
      f_name,
      reached,
    });
  }
}
