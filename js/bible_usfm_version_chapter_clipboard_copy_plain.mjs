import { arguments_assert } from "./arguments_assert.mjs";
import { bible_usfm_version_chapter_paragraphed_text } from "./bible_usfm_version_chapter_paragraphed_text.mjs";
import { clipboard_copy } from "./clipboard_copy.mjs";
export async function bible_usfm_version_chapter_clipboard_copy_plain(
  book_code,
  chapter_number,
  version,
) {
  arguments_assert(arguments, 3);
  ("$plain version");
  ("$plain book_code");
  ("$plain chapter_number");
  ("One chapter of a named bible put on the clipboard with no verse numbers in it, and handed back as well so that whoever asked can see what they got.");
  ("This is the shape wanted wherever the words are going to be read or sung rather than studied - a slide, a card, a song. A number standing in the middle of a sung line is read as part of the line.");
  ("Its numbered twin is beside it, and the two differ by one word on purpose. Everything that decides how the passage looks is settled once, in what they both call, so the two cannot come to disagree about where a line breaks.");
  let text = await bible_usfm_version_chapter_paragraphed_text(
    version,
    book_code,
    chapter_number,
    false,
  );
  await clipboard_copy(text);
  return text;
}
