import { arguments_assert } from "./arguments_assert.mjs";
import { property_set } from "./property_set.mjs";
import { each } from "./each.mjs";
import { text_lower_to } from "./text_lower_to.mjs";
import { text_punctuation_dash_kept_split } from "./text_punctuation_dash_kept_split.mjs";
import { list_includes } from "./list_includes.mjs";
import { not } from "./not.mjs";
import { equal } from "./equal.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { list_add } from "./list_add.mjs";
import { list_unique } from "./list_unique.mjs";
export function gloss_explain_verse_numbers_generic(
  explain,
  verse_numbers,
  markers,
  joiner,
  lambda_spell,
) {
  "The verses of its own chapter that one word explanation names, read in whatever language the explanation was written in, as a list with nothing said twice.";
  "$plain markers";
  "the markers are the words the explanation's own language uses for verse, and the joiner is its word for and. Both are words from a language and neither names anything that runs.";
  "AN EXPLANATION THAT SAYS WHERE ELSE IN THE CHAPTER A WORD STANDS IS MAKING A CLAIM ANYONE CAN CHECK, and it makes that claim the same way in every language: it says the word for verse, and then it says which. What changes from one store to the next is only the word and the shapes the number is written with, so those are handed in and the reading itself is written once.";
  "The chapter's own verse numbers are handed in and written out here rather than the writing being read back into numbers. Writing forward needs only the one speller the language already has; reading backward would want a second table saying the same thing, which would then be free to come to disagree with the first. It also means a verse the chapter does not have is never named, however the sentence spells it.";
  "A number counts only where it follows the word for verse, because ordinary prose is full of small numbers that are not verses at all. A list carries on past its joining word, so verses thirteen, sixteen, nineteen and twenty names four of them, and the run ends at the first word that is not one.";
  "Everything is folded to one case before it is read. That is what the English reading needs and it costs the others nothing, because a script with no capitals is handed back exactly as it came.";
  arguments_assert(arguments, 5);
  let written_numbers = {};
  function verse_number_read(verse_number) {
    let written = lambda_spell(verse_number);
    property_set(written_numbers, written, verse_number);
  }
  each(verse_numbers, verse_number_read);
  let lower = text_lower_to(explain);
  let tokens = text_punctuation_dash_kept_split(lower);
  let named = [];
  let inside = false;
  function token_read(token) {
    let marker_is = list_includes(markers, token);
    if (marker_is) {
      inside = true;
      return;
    }
    if (not(inside)) {
      return;
    }
    let joining = equal(token, joiner);
    if (joining) {
      return;
    }
    let verse_number = property_get_or_null(written_numbers, token);
    if (null_is(verse_number)) {
      inside = false;
      return;
    }
    list_add(named, verse_number);
  }
  each(tokens, token_read);
  let once = list_unique(named);
  return once;
}
