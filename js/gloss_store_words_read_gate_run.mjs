import { gloss_store_words_read_cases } from "./gloss_store_words_read_cases.mjs";
import { property_get } from "./property_get.mjs";
import { gloss_stores } from "./gloss_stores.mjs";
import { gloss_store_words_read } from "./gloss_store_words_read.mjs";
import { list_add } from "./list_add.mjs";
import { each } from "./each.mjs";
import { list_sort_text_property } from "./list_sort_text_property.mjs";
import { json_equal_not } from "./json_equal_not.mjs";
import { log } from "./log.mjs";
import { json_to } from "./json_to.mjs";
import { error } from "./error.mjs";
import { list_size } from "./list_size.mjs";
export function gloss_store_words_read_gate_run() {
  "Read one dashed Cebuano word through the reader every gloss store on the roster is given, and fail if any store reads it differently from what was written down.";
  "★ THE STORES ARE ASKED FOR BY THE ROSTER AND NOT LISTED HERE, SO THIS FAILS ON A STORE NOBODY CHOSE A READING FOR. That is the failure worth having. A gate that walked its own list of stores would answer about the stores it happened to know, and a store added later would be read by whatever the chooser falls back to without anyone deciding that it should be.";
  "The whole answer is compared and not the counts. Two stores here expect the same reading, so a chooser that returned one reader for everything would keep both of their rows right and only the Cebuano row would move - and a count of rows would not move at all.";
  let expected = gloss_store_words_read_cases();
  let word = property_get(expected, "word");
  let stores = gloss_stores();
  let reads = [];
  function store_read(fn) {
    let store = property_get(fn, "name");
    let read = gloss_store_words_read(fn);
    let words = read(word);
    let row = {
      store,
      read: words,
    };
    list_add(reads, row);
  }
  each(stores, store_read);
  list_sort_text_property(reads, "store");
  let got = {
    word,
    reads,
  };
  let differs = json_equal_not(got, expected);
  if (differs) {
    log(json_to(got));
    log(json_to(expected));
    error("gloss store word readers disagree with the cases");
  }
  let r = {
    checked: list_size(reads),
    defects: 0,
  };
  return r;
}
