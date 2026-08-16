import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_bible_hash_to_languages_chosen } from "./app_shared_bible_hash_to_languages_chosen.mjs";
import { app_shared_bible_share } from "./app_shared_bible_share.mjs";
import { html_button_share_text } from "./html_button_share_text.mjs";
import { app_shared_button } from "./app_shared_button.mjs";
export function app_shared_bible_home_share_button(
  hash,
  book_name,
  chapter_name,
  verse_number,
  bottom,
) {
  arguments_assert(arguments, 5);
  ("a link to this one verse, the same button the whole-chapter reader has carried on the end of this row - a reader looking at a single verse is the reader most likely to want to hand it to somebody, and until now the only way to was to open the whole chapter first. the verse numbers are a list because the chapter reader can have several picked at once; here there is exactly one, so it goes in on its own.");
  ("the languages have to be read again rather than taken from the languages_chosen already standing here: that one holds whole language objects and the share link wants the codes that go in the hash, which is what the chapter reader's variable of the same name holds. two shapes, one word - so the shape is named here instead.");
  let language_codes = app_shared_bible_hash_to_languages_chosen(hash);
  async function share() {
    await app_shared_bible_share(
      book_name,
      chapter_name,
      [verse_number],
      language_codes,
    );
  }
  let share_text = html_button_share_text();
  app_shared_button(bottom, share_text, share);
}
