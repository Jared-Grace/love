import { arguments_assert } from "./arguments_assert.mjs";
import { bible_usfm_version_chapter_paragraphed_text } from "./bible_usfm_version_chapter_paragraphed_text.mjs";
import { whitespace_normalize } from "./whitespace_normalize.mjs";
import { clipboard_copy } from "./clipboard_copy.mjs";
import { bible_usfm_version_withheld_why_or_null } from "./bible_usfm_version_withheld_why_or_null.mjs";
export async function bible_usfm_version_chapter_clipboard_copy_plain_whitespace_normalized(
  book_code,
  chapter_number,
  version,
) {
  arguments_assert(arguments, 3);
  ("$plain book_code");
  ("$plain chapter_number");
  ("$plain version");
  ("One chapter of a named bible put on the clipboard with no verse numbers in it and all of it run together onto one line, handed back as well so that whoever asked can see what they got, and beside it the reason that bible is held back from readers where there is one.");
  ("THIS IS THE SHAPE FOR SOMEWHERE THAT DOES ITS OWN LINE BREAKING. A box that lays the words out itself - a prompt, a caption, a field on a page - is handed a paragraph break it did not ask for and either honours it, breaking the passage where the bible's paragraphs happen to fall rather than where the box is wide, or strips it and leaves two spaces stuck together in the middle of a sentence. Neither is anybody's decision; both come of sending line breaks somewhere that had no use for them.");
  ("Every run of blank space becomes one space and the ends are trimmed, so a line break, a paragraph gap and an indent all arrive as the single space that separates two words. That is the same reader the rest of the repo runs writing through, so a passage tidied here and a name tidied anywhere else are tidied by one rule rather than by two that can drift.");
  ("Its plain twin is beside it and the two differ by that one step. Which of them is called settles the shape, rather than a word handed to one of them, for the reason the numbered twin gives: a word arriving from a command line is writing, and every way of writing yes that gets read wrongly quietly gives the other answer.");
  ("Why this bible is held back from readers comes back beside the words, when anything is held against it, exactly as it does from the twins - a passage is copied once and pasted somewhere this repo will never see again, so the moment of copying is the last moment anybody can be told anything about it at all.");
  let paragraphed = await bible_usfm_version_chapter_paragraphed_text(
    version,
    book_code,
    chapter_number,
    false,
  );
  let text = whitespace_normalize(paragraphed);
  await clipboard_copy(text);
  let withheld = bible_usfm_version_withheld_why_or_null(version);
  let copied = {
    text,
    withheld,
  };
  return copied;
}
