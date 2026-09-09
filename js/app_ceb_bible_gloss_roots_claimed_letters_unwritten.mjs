import { arguments_assert } from "./arguments_assert.mjs";
import { app_ceb_bible_gloss_roots_claimed_letters_rare } from "./app_ceb_bible_gloss_roots_claimed_letters_rare.mjs";
import { property_get } from "./property_get.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
import { add } from "./add.mjs";
import { each } from "./each.mjs";
import { text_accent_marks_removed } from "./text_accent_marks_removed.mjs";
import { text_size } from "./text_size.mjs";
import { or } from "./or.mjs";
import { list_size } from "./list_size.mjs";
import { list_add } from "./list_add.mjs";
export async function app_ceb_bible_gloss_roots_claimed_letters_unwritten() {
  "Every root an explanation states outright that is spelled with a character the Cebuano bible never writes at all, gathered under that character.";
  "This is the bottom band of the run app_ceb_bible_gloss_roots_claimed_letters_rare already files, taken out and named. That run orders every character by how many bible words hold it and says in its own words that where along it a root stops being Cebuano is the reader's judgement. It is right, and this band is the one part of it that is not a judgement: a character standing in no bible word at all is not a rare letter of the language, it is notation, another language, or a mark, and the line under it is drawn by the bible rather than by anybody here.";
  "★ THE BAND IS A FAULT LIST AND THE RUN ABOVE IT IS NOT. Immediately above zero sit f in two hundred and forty three words, j in three hundred and fifty seven and c in four hundred and five, and those are the letters of Efraim, Jesus and Cristo, where a name really is the root. So the reading stops at zero and does not creep upward, because the first step up is into names and the fault would then be the reading's rather than the store's.";
  "★ REACHING THE BAND IS NOT KNOWING THE REPAIR, AND THE KINDS INSIDE IT DO NOT SHARE ONE. Three mechanical facts are carried for each character so the kinds can be told apart without anybody judging them: whether it is a space, whether it carries an accent, and the number the character is stored as. A space means a phrase of another language was filed where a root goes; an accent means a dictionary's pronunciation notation was copied in; anything else is notation of some other kind. Those want three different repairs and this decides none of them.";
  "The character number is carried because two of these cannot be told apart by looking. An accent written as one character and the same accent written as a letter followed by a separate mark read the same on a screen and are different spellings underneath, so a repair listing the letters it knows about would silently pass over the second kind.";
  "Measured over the store on 2026-09-09: eight characters, eighteen roots, thirty six sightings, out of two thousand and ninety four distinct roots stated across forty two thousand four hundred and eighty four entries. Small on purpose - a class this cheap to test should be empty, and the reason to name it is that it is complete rather than that it is large.";
  "★ THE BESPOKE READINGS BESIDE THIS ONE ARE ITS CASES, AND THEY WERE BUILT ONE AT A TIME BY SOMEBODY NOTICING A ROW. The accents, the brackets and the spaces each already have a reading of their own, and each was reached by reading rows until a notation showed itself. This test needed no noticing and it also finds the one character none of them looks for, a leading asterisk on a single root. That is the argument for the general test: not that it beats them on the notations already known, but that the next notation nobody has thought of is inside it already.";
  "Nothing is written and nothing is asked of the site.";
  arguments_assert(arguments, 0);
  let read = await app_ceb_bible_gloss_roots_claimed_letters_rare();
  let letters = property_get(read, "letters");
  let listed = [];
  let roots_total = 0;
  let sightings_total = 0;
  function letter_ask(row) {
    let bible_words = property_get(row, "bible_words");
    let unwritten = equal(bible_words, 0);
    if (not(unwritten)) {
      return;
    }
    let character = property_get(row, "letter");
    let roots = property_get(row, "listed");
    let sightings = 0;
    function root_count(root_row) {
      let seen = property_get(root_row, "sightings");
      sightings = add(sightings, seen);
    }
    each(roots, root_count);
    let stripped = text_accent_marks_removed(character);
    let size = text_size(stripped);
    let emptied = equal(size, 0);
    let same = equal(stripped, character);
    let changed = not(same);
    let accented = or(emptied, changed);
    let spaced = equal(character, " ");
    let code_point = character.codePointAt(0);
    let count = list_size(roots);
    roots_total = add(roots_total, count);
    sightings_total = add(sightings_total, sightings);
    let out = {
      character: character,
      code_point: code_point,
      spaced: spaced,
      accented: accented,
      roots: count,
      sightings: sightings,
      listed: roots,
    };
    list_add(listed, out);
  }
  each(letters, letter_ask);
  let r = {
    chapters: property_get(read, "chapters"),
    strict_total: property_get(read, "strict_total"),
    roots_distinct: property_get(read, "roots_distinct"),
    characters: list_size(listed),
    roots_total: roots_total,
    sightings_total: sightings_total,
    listed: listed,
  };
  return r;
}
