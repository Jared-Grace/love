import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_bible_picker_card } from "./app_shared_bible_picker_card.mjs";
import { app_shared_bible_chapters_render } from "./app_shared_bible_chapters_render.mjs";
export async function app_shared_bible_chapters_card(
  content,
  book_name,
  folder,
  book_code,
  on_open,
  current_chapter_code,
) {
  "The chapter picker whole: a card headed with the book, holding every chapter of it as a button.";
  "Both readers show this and they used to build it a line at a time each - the verse reader as its own screen, the whole-chapter reader drawn in place over the text. The buttons inside were already shared; the card around them was not, so the two could be headed differently or padded differently without anything saying so. Heading and grid are one unit here because a heading with no grid under it, or a grid with nothing saying what book it is of, is not a thing either reader wants.";
  "What genuinely differs between the two stays a parameter: which version's chapters to list, what a chosen chapter does, and which chapter to mark as the one being read - the whole-chapter reader marks none, because it only shows this after the chapter has been cleared out of the address.";
  arguments_assert(arguments, 6);
  let card = app_shared_bible_picker_card(content, book_name);
  await app_shared_bible_chapters_render(
    card,
    folder,
    book_code,
    on_open,
    current_chapter_code,
  );
}
