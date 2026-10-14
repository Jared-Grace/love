import { arguments_assert } from "./arguments_assert.mjs";
import { prayer_blessing_expand } from "./prayer_blessing_expand.mjs";
import { app_reply_languages_codes_text } from "./app_reply_languages_codes_text.mjs";
import { list_concat_multiple } from "./list_concat_multiple.mjs";
import { list_join_newline_2_copy } from "./list_join_newline_2_copy.mjs";
export async function app_reply_copy_refresh(
  languages_chosen,
  responses,
  bible_texts,
  languages_show,
  jewish,
) {
  arguments_assert(arguments, 5);
  let v = prayer_blessing_expand();
  let ending = [];
  if (languages_show) {
    let result = app_reply_languages_codes_text(languages_chosen);
    ending = [result];
  }
  let concated = list_concat_multiple([responses, [v], bible_texts, ending]);
  await list_join_newline_2_copy(concated);
}
