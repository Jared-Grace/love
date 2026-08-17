import { arguments_assert } from "./arguments_assert.mjs";
import { prayer_blessing_expand } from "./prayer_blessing_expand.mjs";
import { list_copy } from "./list_copy.mjs";
import { language_code_key } from "./language_code_key.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { list_join_comma } from "./list_join_comma.mjs";
import { list_concat_multiple } from "./list_concat_multiple.mjs";
import { list_join_newline_2_copy } from "./list_join_newline_2_copy.mjs";
export async function app_reply_copy_refresh(
  languages_chosen,
  responses,
  bible_texts,
) {
  arguments_assert(arguments, 3);
  let v = prayer_blessing_expand();
  ("the languages are named in the order they were chosen, matching the order their verses were just read in");
  let copy = list_copy(languages_chosen);
  let property_name = language_code_key();
  let mapped = list_map_property(copy, property_name);
  let result = list_join_comma(mapped);
  let concated = list_concat_multiple([responses, [v], bible_texts, [result]]);
  await list_join_newline_2_copy(concated);
}
