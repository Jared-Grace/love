import { each } from "./each.mjs";
import { equal } from "./equal.mjs";
import { list_add } from "./list_add.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_unique } from "./list_unique.mjs";
import { not } from "./not.mjs";
import { null_is } from "./null_is.mjs";
import { number_from_text } from "./number_from_text.mjs";
import { number_to_words } from "./number_to_words.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { property_set } from "./property_set.mjs";
import { text_lower_to } from "./text_lower_to.mjs";
import { text_punctuation_dash_kept_split } from "./text_punctuation_dash_kept_split.mjs";
export function gloss_explain_verse_numbers(explain, verse_numbers) {
  "The verses of its own chapter that one word explanation names, as a list with nothing said twice.";
  "An explanation that says where else in the chapter a word stands is making a claim anyone can check, which is what separates this from the rest of what an explanation says. The verse has to be named before the claim can be looked at, and this is the naming.";
  "The chapter's own verse numbers are handed in and spelled out here rather than the words being read back into numbers. Spelling forward needs only the speller the repo already has; reading backward would need a second table of the same words, which would then be free to disagree with the first. It also means a verse the chapter does not have is never named, so a number is either a real verse of this chapter or it is nothing.";
  "A number word counts only where it follows the word verse or verses, because ordinary prose is full of small numbers that are not verses at all. A list carries on past its joining word, so verses thirteen, sixteen, nineteen and twenty names four of them, and the run ends at the first word that is not one.";
  let words_numbers = {};
  function verse_number_read(verse_number) {
    let number = number_from_text(verse_number);
    let spelled = number_to_words(number);
    property_set(words_numbers, spelled, verse_number);
  }
  each(verse_numbers, verse_number_read);
  let markers = ["verse", "verses"];
  let joiner = "and";
  let lower = text_lower_to(explain);
  let tokens = text_punctuation_dash_kept_split(lower);
  let named = [];
  let inside = false;
  function token_read(token) {
    let marker = list_includes(markers, token);
    if (marker) {
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
    let verse_number = property_get_or_null(words_numbers, token);
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
