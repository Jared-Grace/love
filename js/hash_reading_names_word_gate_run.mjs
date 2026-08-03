import { arguments_assert } from "./arguments_assert.mjs";
import { fn_name } from "./fn_name.mjs";
import { hash_code_word } from "./hash_code_word.mjs";
import { hash_reading_names } from "./hash_reading_names.mjs";
import { list_add } from "./list_add.mjs";
import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
import { list_size } from "./list_size.mjs";
import { not } from "./not.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { text_includes } from "./text_includes.mjs";
export function hash_reading_names_word_gate_run() {
  "QA gate: every name a reading of a page address has to meet says the word that decides which files are opened at all.";
  "Both readings of an address start by narrowing the whole repo down to the files whose code says one word. That is sound only while every way of reaching an address carries the word in its own name, and today every one of them does. A way that did not would be reached from files the narrowing never opens, and the readings would then hand back an empty answer over a repo publishing words - the one failure this whole family exists to prevent, wearing the face of a repo in order.";
  "One name is enough to break it, and breaking it blanks every reading at once rather than one of them. So this is asked of the narrowing itself rather than left to whoever adds the next door to notice.";
  arguments_assert(arguments, 0);
  let names = hash_reading_names();
  let word = hash_code_word();
  let silent = [];
  for (let name of names) {
    let says = text_includes(name, word);
    if (not(says)) {
      list_add(silent, name);
    }
  }
  let f_name = fn_name("hash_function_names");
  list_empty_is_assert_json(silent, {
    hint: text_combine_multiple([
      "a way of reaching the address of a page is named without the word ",
      word,
      " in it, so ",
      f_name,
      " would never open the files that use it and every reading of published address words would go quiet - either name it so it says the word, or stop narrowing by a word and derive the files from these names",
    ]),
    word,
    silent,
  });
  let r = {
    names: list_size(names),
    word,
    silent,
  };
  return r;
}
