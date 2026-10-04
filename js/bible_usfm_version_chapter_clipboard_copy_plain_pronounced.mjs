import { arguments_assert } from "./arguments_assert.mjs";
import { bible_usfm_version_chapter_paragraphed_text } from "./bible_usfm_version_chapter_paragraphed_text.mjs";
import { song_text_pronounced } from "./song_text_pronounced.mjs";
import { bible_usfm_version_text_clipboard_copy_withheld } from "./bible_usfm_version_text_clipboard_copy_withheld.mjs";
export async function bible_usfm_version_chapter_clipboard_copy_plain_pronounced(
  version,
  book_code,
  chapter_number,
) {
  arguments_assert(arguments, 3);
  ("$plain version");
  ("$plain book_code");
  ("$plain chapter_number");
  ("One chapter of a named bible put on the clipboard with no verse numbers in it and every name a song generator says wrongly spelled the way it sounds, handed back as well, and beside it the reason that bible is held back from readers where there is one.");
  ("This is the plain copy made ready to be sung. The respelling is wrong anywhere the words are read, so it is its own command rather than a step the plain copy takes.");
  let paragraphed = await bible_usfm_version_chapter_paragraphed_text(
    version,
    book_code,
    chapter_number,
    false,
  );
  let text = song_text_pronounced(paragraphed);
  let copied = await bible_usfm_version_text_clipboard_copy_withheld(
    text,
    version,
  );
  return copied;
}
