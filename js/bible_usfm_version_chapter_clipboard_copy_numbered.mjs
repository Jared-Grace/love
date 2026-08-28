import { arguments_assert } from "./arguments_assert.mjs";
import { bible_berean_chapter_paragraphed_text } from "./bible_berean_chapter_paragraphed_text.mjs";
import { clipboard_copy } from "./clipboard_copy.mjs";
export async function bible_usfm_version_chapter_clipboard_copy_numbered(
  book_code,
  chapter_number,
) {
  arguments_assert(arguments, 2);
  ("$plain book_code");
  ("$plain chapter_number");
  ("One chapter of the Berean release put on the clipboard with its verse numbers in it, and handed back as well so that whoever asked can see what they got.");
  ("Whether the numbers show is settled by which of these two names is called rather than by a word handed to one of them. A word would have to arrive from a command line as writing, so yes and true and 1 and no would all have to be read and agreed on, and every one of them read wrongly would quietly give the other answer. Two names cannot be got wrong.");
  ("The writing is handed back and not only copied, because a clipboard cannot be read back to check. A command that copies and says nothing is indistinguishable from one that copied nothing at all.");
  let text = await bible_berean_chapter_paragraphed_text(
    book_code,
    chapter_number,
    true,
  );
  await clipboard_copy(text);
  return text;
}
