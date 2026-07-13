import { text_is_assert_json } from "./text_is_assert_json.mjs";
import { function_name_unalias_only } from "./function_name_unalias_only.mjs";
import { text_replace } from "./text_replace.mjs";
import { function_rename_open } from "./function_rename_open.mjs";
export async function function_rename_replace(f_name_before, from, to) {
  text_is_assert_json(from, {
    hint: "the text to replace should be text — did an empty or non-text value arrive?",
    f_name_before,
    from,
    to,
  });
  f_name_before = await function_name_unalias_only(f_name_before);
  let f_name_after = text_replace(f_name_before, from, to);
  let v = await function_rename_open(f_name_before, f_name_after);
  return v;
}
