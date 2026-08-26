import { arguments_assert } from "./arguments_assert.mjs";
import { bible_chapter_suno_sections } from "./bible_chapter_suno_sections.mjs";
import { list_size } from "./list_size.mjs";
import { subtract } from "./subtract.mjs";
import { list_get_or_null } from "./list_get_or_null.mjs";
import { null_not_is_assert_json } from "./null_not_is_assert_json.mjs";
import { clipboard_copy } from "./clipboard_copy.mjs";
import { text_size } from "./text_size.mjs";
export async function bible_chapter_suno_section_copy(
  bible_folder,
  chapter_code,
  section_number,
) {
  "$plain bible_folder";
  "$plain chapter_code";
  "$plain section_number";
  "One numbered piece of a chapter put on the clipboard ready to be pasted into the song, answering with how many pieces the chapter came to in all.";
  "HOW MANY THERE ARE IS ANSWERED EVERY TIME AND NOT ONLY THE FIRST TIME. Somebody working through a chapter is going to come back to this between songs, and having to remember a number from an answer several songs ago is the kind of thing that ends with a piece missed. It costs nothing to say, because the chapter had to be cut all the way up to find any one piece of it.";
  "The pieces are numbered from one rather than from zero. This is typed by a person at a command line who is going to ask for the first one first.";
  "Putting it on the clipboard is the whole point of the command. The next thing that happens is a paste into somebody else's website, and a piece of text this long is not something a person can carry across by reading it off a screen.";
  "The words come back as well as going to the clipboard, so that the cut can be looked at without pasting it anywhere. Where a piece ends is the one thing here that could be wrong in a way nothing complains about.";
  arguments_assert(arguments, 3);
  let texts = await bible_chapter_suno_sections(bible_folder, chapter_code);
  let sections = list_size(texts);
  let index = subtract(section_number, 1);
  let text = list_get_or_null(texts, index);
  null_not_is_assert_json(text, {
    bible_folder,
    chapter_code,
    section_number,
    sections,
  });
  await clipboard_copy(text);
  let characters = text_size(text);
  let r = {
    sections,
    section_number,
    characters,
    text,
  };
  return r;
}
