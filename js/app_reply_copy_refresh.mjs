import { arguments_assert } from "./arguments_assert.mjs";
import { prayer_blessing_expand } from "./prayer_blessing_expand.mjs";
import { prayer_blessing_aaronic } from "./prayer_blessing_aaronic.mjs";
import { list_map } from "./list_map.mjs";
import { text_emojis_jewish } from "./text_emojis_jewish.mjs";
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
  let said = responses;
  if (jewish) {
    v = prayer_blessing_aaronic();
    said = list_map(responses, text_emojis_jewish);
  }
  let ending = [];
  if (languages_show) {
    let result = app_reply_languages_codes_text(languages_chosen);
    ending = [result];
  }
  let concated = list_concat_multiple([said, [v], bible_texts, ending]);
  await list_join_newline_2_copy(concated);
}
