import { arguments_assert } from "./arguments_assert.mjs";
import { text_split_comma } from "./text_split_comma.mjs";
import { bible_strong_glosses } from "./bible_strong_glosses.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { list_take } from "./list_take.mjs";
import { property_set } from "./property_set.mjs";
export async function bible_strong_gloss_wordings_multiple(
  strongs_comma,
  testament_name,
) {
  arguments_assert(arguments, 2);
  ("The commonest English wordings the interlinear gives each of several Strong's numbers inside one testament, keyed by number.");
  ("$plain strongs_comma");
  ("the numbers are words' own, spelled as the interlinear spells them and joined by commas. They name words to look up and nothing that runs.");
  ("$plain testament_name");
  ("the name is a testament's own, spelled as the book divisions spell it. It names a stretch of text to read and nothing that runs.");
  ("IT EXISTS SO A CHOICE BETWEEN RELATED WORDS IS ONE QUESTION. Seating a family of small words - the forms of I, of you, of to - means reading each one's split side by side, and asking one number at a time was a run per number over the same testament.");
  ("ONLY THE COMMONEST EIGHT WORDINGS COME BACK. A pronoun is glossed hundreds of ways, and past the first few the tail is the interlinear resolving it to whoever it points at, which says nothing about the word.");
  let strongs = text_split_comma(strongs_comma);
  let ranked = await bible_strong_glosses(testament_name);
  let r = {};
  for (let strong of strongs) {
    let found = property_get_or_null(ranked, strong);
    let none = null_is(found);
    let top = none ? [] : list_take(found, 8);
    property_set(r, strong, top);
  }
  return r;
}
