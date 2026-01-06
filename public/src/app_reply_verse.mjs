import { ebible_verse } from "../../../love/public/src/ebible_verse.mjs";
import { list_pop } from "../../../love/public/src/list_pop.mjs";
import { list_shuffle } from "../../../love/public/src/list_shuffle.mjs";
import { list_copy } from "../../../love/public/src/list_copy.mjs";
import { null_is } from "../../../love/public/src/null_is.mjs";
import { retry_until_success } from "../../../love/public/src/retry_until_success.mjs";
import { equal } from "../../../love/public/src/equal.mjs";
import { catch_ignore_async } from "../../../love/public/src/catch_ignore_async.mjs";
import { ebible_folder_english } from "../../../love/public/src/ebible_folder_english.mjs";
export async function app_reply_verse(
  bible_folder,
  english_choices,
  chapter_code,
  verse_number,
) {
  let choices = null;
  let right = ebible_folder_english();
  let lambda11 = catch_ignore_async;
  const en_is = equal(bible_folder, right);
  if (en_is) {
    lambda11 = retry_until_success;
  }
  async function lambda() {
    if (en_is) {
      if (null_is(choices)) {
        choices = list_copy(english_choices);
        list_shuffle(choices);
      }
      bible_folder = list_pop(choices);
    }
    let d = await ebible_verse(bible_folder, chapter_code, verse_number);
    return d;
  }
  let r = await lambda11(lambda);
  return r;
}
