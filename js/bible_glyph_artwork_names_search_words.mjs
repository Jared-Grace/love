import { fn_name } from "./fn_name.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { bible_glyph_artwork_names_available } from "./bible_glyph_artwork_names_available.mjs";
import { text_lower_to } from "./text_lower_to.mjs";
import { text_includes } from "./text_includes.mjs";
import { list_add } from "./list_add.mjs";
export async function bible_glyph_artwork_names_search_words(words) {
  ("The names the artwork set holds that carry each of several words, keyed by the word - the many-word twin of ",
    fn_name("bible_glyph_artwork_names_search"),
    ".");
  ("$plain words");
  ("the words are a list of words to look for inside the set's own names, each asked separately.");
  ("IT READS THE LISTING ONCE FOR ALL THE WORDS. The listing service allows about sixty requests an hour, and asking the one-word search in a loop spent the whole hour on one batch of choices; one listing answers any number of words.");
  arguments_assert(arguments, 1);
  let names = await bible_glyph_artwork_names_available();
  let result = {};
  for (let word of words) {
    let lowered = text_lower_to(word);
    let found = [];
    for (let name of names) {
      let name_lowered = text_lower_to(name);
      let carries = text_includes(name_lowered, lowered);
      if (carries) {
        list_add(found, name);
      }
    }
    result[word] = found;
  }
  return result;
}
