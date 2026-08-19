import { fn_name } from "./fn_name.mjs";
import { ebible_languages_add_item } from "./ebible_languages_add_item.mjs";
import { ebible_languages_bible_folder_exists_not_assert } from "./ebible_languages_bible_folder_exists_not_assert.mjs";
import { ebible_languages_chapters_cache_refresh } from "./ebible_languages_chapters_cache_refresh.mjs";
import { ebible_version_upload } from "./ebible_version_upload.mjs";
export async function ebible_languages_add(bible_folder) {
  ebible_languages_bible_folder_exists_not_assert(bible_folder);
  await ebible_version_upload(bible_folder);
  await ebible_languages_add_item(bible_folder);
  ("The remembered chapters are worked out again last, after the language is in the list and not before. What is worked out there is read off the offered list, so a refresh asked first remembers the list as it was a moment ago - the new language absent - and that answer is then read from disk as if it were current. The language would be offered and hold no chapters, which is the one wrong answer the working-out refuses to make and would have been made behind its back.");
  let r = await ebible_languages_chapters_cache_refresh();
  return r;
  ("the following is here to serve as a link");
  fn_name("ebible_languages");
}
