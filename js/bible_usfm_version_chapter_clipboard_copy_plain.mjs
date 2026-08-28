import { bible_usfm_version_withheld_why_or_null } from "./bible_usfm_version_withheld_why_or_null.mjs";
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
  ("One chapter of a named bible put on the clipboard with no verse numbers in it, handed back as well so that whoever asked can see what they got, and beside it the reason that bible is held back from readers where there is one.");
  ("This is the shape wanted wherever the words are going to be read or sung rather than studied - a slide, a card, a song. A number standing in the middle of a sung line is read as part of the line.");
  ("WHY THIS BIBLE IS HELD BACK FROM READERS COMES BACK BESIDE THE WORDS, when anything is held against it. A passage meant to be sung is copied once and pasted somewhere this repo will never see again, so the moment of copying is the last moment anybody can be told anything about it at all. The shelf carries translations that hand back the wrong passage in good English, and a caller that copied one and heard nothing would have no way left of finding out.");
  ("Its numbered twin is beside it, and the two differ by one word on purpose. Everything that decides how the passage looks is settled once, in what they both call, so the two cannot come to disagree about where a line breaks.");
  let text = await bible_usfm_version_chapter_paragraphed_text(
    version,
    book_code,
    chapter_number,
    false,
  );
  await clipboard_copy(text);
  let withheld = bible_usfm_version_withheld_why_or_null(version);
  let copied = {
    text,
    withheld,
  };
  return copied;
}
