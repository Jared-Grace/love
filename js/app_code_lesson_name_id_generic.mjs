import { text_replace_space_underscore_lower } from "./text_replace_space_underscore_lower.mjs";
import { text_adjascent_duplicates_remove_underscore } from "./text_adjascent_duplicates_remove_underscore.mjs";
import { list_join_underscore } from "./list_join_underscore.mjs";
import { list_concat_single } from "./list_concat_single.mjs";
import { text_first_upper_to } from "./text_first_upper_to.mjs";
export function app_code_lesson_name_id_generic(rights, left, name_get) {
  left = text_first_upper_to(left);
  let concated = list_concat_single(left, rights);
  let joined_id = list_join_underscore(concated);
  ('normalize the id to a clean underscore slug so shareable URLs are uniform: the rights carry vestigial spaces (a leading space from the old console.log prefix, plus internal spaces in multi-word names like "less than or equal to"), so lowercase and turn every space into an underscore, then collapse the runs of underscores that produces (operators_ less than -> operators_less_than)');
  let spaced_id = text_replace_space_underscore_lower(joined_id);
  let id = text_adjascent_duplicates_remove_underscore(spaced_id);
  let lambda = name_get(left);
  let name_id = {
    name: lambda,
    id,
  };
  return name_id;
}
