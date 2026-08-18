import { arguments_assert } from "./arguments_assert.mjs";
import { bible_glyph_artwork_names_available } from "./bible_glyph_artwork_names_available.mjs";
import { text_lower_to } from "./text_lower_to.mjs";
import { text_includes } from "./text_includes.mjs";
import { list_add } from "./list_add.mjs";
export async function bible_glyph_artwork_names_search(word) {
  "The names the artwork set holds that carry a given word, for choosing which picture a glyph should be drawn with.";
  "$plain word";
  "the word is a word to look for inside the set's own names. It matches names and nothing else, and nothing here reads or writes a file.";
  "CHOOSING A PICTURE IS A DIFFERENT JOB FROM CORRECTING A NAME, and this is the one for choosing. When the set turns out to have no picture at all for the word somebody had in mind - no family, no brothers - the question stops being how that picture is spelled and becomes which of the pictures it does have says the same thing. That question needs the neighbourhood of a word, not one answer.";
  "It matches without regard to capital letters, because the set capitalises the first word of a name and nothing else, and a person searching should not have to remember which position their word sits in.";
  arguments_assert(arguments, 1);
  let names = await bible_glyph_artwork_names_available();
  let lowered = text_lower_to(word);
  let found = [];
  for (let name of names) {
    let name_lowered = text_lower_to(name);
    let carries = text_includes(name_lowered, lowered);
    if (carries) {
      list_add(found, name);
    }
  }
  return found;
}
