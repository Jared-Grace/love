import { arguments_assert } from "./arguments_assert.mjs";
import { bible_interlinear_chapters_words_cache } from "./bible_interlinear_chapters_words_cache.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { bible_chapter_testament_name } from "./bible_chapter_testament_name.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { add } from "./add.mjs";
import { null_is } from "./null_is.mjs";
import { property_set } from "./property_set.mjs";
import { text_includes } from "./text_includes.mjs";
import { text_lower_to } from "./text_lower_to.mjs";
import { text_upper_to } from "./text_upper_to.mjs";
import { divide } from "./divide.mjs";
import { less_than } from "./less_than.mjs";
import { list_add } from "./list_add.mjs";
export async function bible_glyph_proper_name_numbers(testament_name) {
  "$plain testament_name";
  "the testament names which half of the Bible to read. It is compared against the name each chapter reports and nothing about it runs.";
  "Every Strong's number in one testament that is a PROPER NAME - a person, a place or a people - decided from what the interlinear itself carries.";
  "A NAME IS NOT DEBT AND THE COVERAGE MEASURE WAS COUNTING IT AS DEBT. A word left in English because no picture exists yet is work waiting to be done; a name left in English is finished, because Habakkuk is not a thing anybody can draw and a reader who saw a picture there would have lost the one fact the word carries. The share of a chapter that is drawn therefore reads low by however much of it is names, and the reading next door already says so in prose - a chapter whose undrawn words are all proper names loses far less than one whose undrawn words are its verbs. This is that sentence made countable.";
  "THE TWO TESTAMENTS ARE DECIDED BY DIFFERENT EVIDENCE BECAUSE THEY CARRY DIFFERENT EVIDENCE (2026-09-18). The Hebrew parsing says proper in as many words, so it is simply read. The Greek parsing does not say it at all - David reads Noun - Genitive Masculine Singular and so does every other masculine noun - and asking the Greek side with the Hebrew test returns zero names in the whole New Testament, which is not a fact about Greek but a join that failed.";
  "SO THE GREEK IS DECIDED BY THE GREEK. The printed text capitalises a proper noun wherever it stands and an ordinary noun nowhere, which is a rule of the source rather than a guess about it. A word standing first in its verse is capitalised for standing there, so only the times a word stands away from the front are counted, and a number is a name when nearly all of those carry a capital.";
  "IT IS DECIDED PER NUMBER AND NOT PER OCCURRENCE, because a picture is bought per number. The Hebrew for son is parsed proper the few times it is half of somebody's name, and treating those occurrences as names while the same number is seated on a picture would have one number be two things at once. A number is a name when nearly all of it is, and otherwise it is the word it mostly means.";
  "WHAT IT GETS WRONG IS SMALL AND IS IN THE THIN TAIL. Around three hundred Greek numbers rest on a single sighting away from the front, and reading them by hand found four that are not names - an inscription printed in capitals, and three ordinary words that happened to be capitalised. That is about one word in two hundred of what this claims, and it errs by claiming a name rather than missing one, so a share built on it reads very slightly high.";
  arguments_assert(arguments, 1);
  let chapters_words = await bible_interlinear_chapters_words_cache();
  let counts = {};
  for (let chapter_code of object_property_names(chapters_words)) {
    let side = bible_chapter_testament_name(chapter_code);
    let mine = equal(side, testament_name);
    if (not(mine)) {
      continue;
    }
    for (let verse of property_get_or_null(chapters_words, chapter_code)) {
      let index = 0;
      for (let word of verse.words) {
        let at_front = equal(index, 0);
        index = add(index, 1);
        let strong = String(word.strong);
        let unnumbered = equal(strong, "undefined") || equal(strong, "");
        if (unnumbered) {
          continue;
        }
        let found = property_get_or_null(counts, strong);
        let fresh = null_is(found);
        if (fresh) {
          found = {
            asked: 0,
            said: 0,
            gloss: word.gloss,
          };
          property_set(counts, strong, found);
        }
        let parsing = String(word.parsing) + " " + String(word.parsing_long);
        let input = text_lower_to(parsing);
        let parsed_proper = text_includes(input, "proper");
        if (parsed_proper) {
          found.asked = add(found.asked, 1);
          found.said = add(found.said, 1);
          continue;
        }
        let greek = equal(testament_name, "greek");
        if (not(greek)) {
          found.asked = add(found.asked, 1);
          continue;
        }
        if (at_front) {
          continue;
        }
        let original = String(word.original).trim();
        let letter = original.slice(0, 1);
        let blank = equal(letter, "");
        if (blank) {
          continue;
        }
        let right = text_upper_to(letter);
        let upper = equal(letter, right);
        let right2 = text_lower_to(letter);
        let lower = equal(letter, right2);
        let capital = upper && not(lower);
        found.asked = add(found.asked, 1);
        if (capital) {
          found.said = add(found.said, 1);
        }
      }
    }
  }
  let numbers = [];
  let words = 0;
  for (let strong of object_property_names(counts)) {
    let found = property_get_or_null(counts, strong);
    let none = equal(found.asked, 0);
    if (none) {
      continue;
    }
    let share = divide(found.said, found.asked);
    let thin = less_than(share, 0.9);
    if (thin) {
      continue;
    }
    list_add(numbers, strong);
    words = add(words, found.said);
  }
  let r = {
    testament_name,
    numbers,
    words,
  };
  return r;
}
