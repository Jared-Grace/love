import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { fn_name } from "./fn_name.mjs";
import { less_than } from "./less_than.mjs";
import { less_than_equal } from "./less_than_equal.mjs";
import { not } from "./not.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { app_supper_references } from "./app_supper_references.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { list_size } from "./list_size.mjs";
import { verse_number_key } from "./verse_number_key.mjs";
import { text_split_colon } from "./text_split_colon.mjs";
import { list_size_equal } from "./list_size_equal.mjs";
import { list_add } from "./list_add.mjs";
import { list_first } from "./list_first.mjs";
import { list_last } from "./list_last.mjs";
import { text_split_dash } from "./text_split_dash.mjs";
import { number_from_text } from "./number_from_text.mjs";
import { property_set } from "./property_set.mjs";
import { text_from_number } from "./text_from_number.mjs";
import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
import { app_supper_passages_get } from "./app_supper_passages_get.mjs";
import { equal_assert_json } from "./equal_assert_json.mjs";
import { json_equal_assert } from "./json_equal_assert.mjs";
import { number_word_english_or_null } from "./number_word_english_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { app_shared_descriptions } from "./app_shared_descriptions.mjs";
import { property_get } from "./property_get.mjs";
import { text_includes } from "./text_includes.mjs";
export function app_supper_passages_count_gate_run() {
  "QA gate: the supper page offers one passage for every reference its own list names, keeps every verse, keeps them in the order they were written, and says that same number on the card a stranger is handed.";
  "THE PAGE ONCE OFFERED EIGHT WHERE THE CARD PROMISED NINE, AND NOTHING SAID SO. Two of the nine references name different parts of the same chapter, and the passages were cut apart wherever the chapter changed - so those two were served as one passage running verse thirty-five straight into verse forty-eight, holding twenty of their thirty-two verses with nothing marking the gap. It drew, it scrolled, it looked finished, and it was read aloud at a table that way.";
  "IT NEEDS NO BIBLE, WHICH IS THE WHOLE REASON IT CAN BE A GATE. The verses are made up here from the references themselves rather than fetched, because the cutting apart reads nothing but which chapter a verse is in and what its number is - both of which the reference already says. Asking a bible would mean downloading one, and a check nobody can afford to run is not a check.";
  "THE CHAPTER IS STOOD IN FOR BY THE WORDS THE REFERENCE WAS WRITTEN WITH, not by the short code the real verses carry. What the cutting needs of a chapter is only whether two verses are in the same one, and the written words answer that as long as one chapter is always written the same way - which is a thing a person reading this list can see, and the reason this says so out loud rather than pretending to more.";
  "THE CARD IS CHECKED TOO, BECAUSE THE NUMBER ON IT IS THE PART A STRANGER READS FIRST. A sentence promising nine passages beside a list naming ten is a promise broken before the page has even opened, and it goes stale in silence: adding a reference is one line and nothing anywhere connects that line to the sentence. Both cards are checked, the English and the Tagalog, because they carry the same number and either could be the one that was edited.";
  arguments_assert(arguments, 0);
  let references = app_supper_references();
  let lines = text_split_newline(references);
  let authored = list_size(lines);
  let malformed = [];
  let verses = [];
  let property_name = verse_number_key();
  for (let line of lines) {
    let halves = text_split_colon(line);
    let two = list_size_equal(halves, 2);
    if (not(two)) {
      list_add(malformed, line);
      continue;
    }
    let chapter = list_first(halves);
    let span = list_last(halves);
    let ends = text_split_dash(span);
    let text = list_first(ends);
    let first = number_from_text(text);
    let text2 = list_last(ends);
    let last = number_from_text(text2);
    let backwards = less_than(last, first);
    if (backwards) {
      list_add(malformed, line);
      continue;
    }
    for (let n = first; less_than_equal(n, last); n = n + 1) {
      let verse = {
        chapter_code: chapter,
        reference: line,
      };
      let value = text_from_number(n);
      property_set(verse, property_name, value);
      list_add(verses, verse);
    }
  }
  list_empty_is_assert_json(malformed, {
    hint: "these lines of the supper page's own reference list cannot be read as a chapter and a verse or a run of verses, so the page cannot be cut into passages at all - write each one as Book chapter:verse or Book chapter:first-last",
  });
  let passages = app_supper_passages_get(verses);
  let offered = list_size(passages);
  equal_assert_json(offered, authored, {
    hint: text_combine_multiple([
      "the supper page offers a different number of passages than its own list of references names, so at least two references are being served welded into one passage or one is being cut in two - the cutting apart is in ",
      fn_name("app_supper_passages_get"),
      " and it reads the chapter and the verse number of each verse",
    ]),
  });
  ("Every verse, still there and still in the order it was written, because a cutting that loses one or reorders them would otherwise pass this on the count alone.");
  let flat = [];
  for (let passage of passages) {
    for (let verse of passage) {
      list_add(flat, verse);
    }
  }
  json_equal_assert(flat, verses);
  let word = number_word_english_or_null(authored);
  let unspellable = null_is(word);
  if (unspellable) {
    list_add(malformed, authored);
  }
  list_empty_is_assert_json(malformed, {
    hint: text_combine_multiple([
      "the supper page's reference list has grown past the numbers this gate can spell as a word, so the card sentence can no longer be checked against it - widen ",
      fn_name("number_word_english_or_null"),
      " or write the card with digits",
    ]),
  });
  let descriptions = app_shared_descriptions();
  let cards = ["supper", "supper_tl"];
  let wrong = [];
  for (let card of cards) {
    let sentence = property_get(descriptions, card);
    let said = text_includes(sentence, word + " passages");
    if (not(said)) {
      list_add(wrong, {
        card,
        sentence,
      });
    }
  }
  list_empty_is_assert_json(wrong, {
    hint: "these cards promise a different number of passages than the supper page's reference list names, and the card is what a stranger reads before opening anything - say the number the list actually holds",
    word,
  });
  ("Says how much it looked at, because a gate that answers nothing cannot be told apart from one that did nothing.");
  let r = {
    references: authored,
    verses: list_size(verses),
    passages: offered,
    cards: list_size(cards),
  };
  return r;
}
