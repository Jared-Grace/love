import { words_early_reader } from "./words_early_reader.mjs";
import { list_size } from "./list_size.mjs";
import { assert_json } from "./assert_json.mjs";
import { text_letters_only } from "./text_letters_only.mjs";
import { property_or_null } from "./property_or_null.mjs";
import { list_sort_text } from "./list_sort_text.mjs";
import { list_join_space } from "./list_join_space.mjs";
import { greater_than } from "./greater_than.mjs";
import { equal } from "./equal.mjs";
export async function words_early_reader_gate_run() {
  "Holds the early-reader word list in the shape a human can actually correct: sorted, with nothing said twice and nothing in it that is not a plain lower-case word.";
  "IT GUARDS EDITABILITY RATHER THAN CONTENT, and that is the only promise a gate can make about this file. Whether six-year-olds know decent is not something anything here can check; whether the list is in an order somebody can search by eye is.";
  "SORTED IS THE WHOLE OF WHY IT STAYS EDITABLE. The one action this file exists for is a person deciding a word does or does not belong and going to find it, and out of order that is a read of six hundred entries every time. Adding a word to the end is the natural way to edit it and the exact thing that ends that.";
  "A REPEAT IS INVISIBLE AND HARMLESS, which is why it needs catching here rather than anywhere else. Two copies of one word change no answer the filter gives, so nothing will ever go wrong to reveal them - they just quietly make the file longer than the vocabulary it is claiming to be, until a count taken off it means nothing.";
  "Lower case and letters only, because that is what the filter it feeds compares against. A word stored with a capital or a stray mark can never match anything the report holds, so it would sit in the list looking like cover and covering nothing.";
  let words = await words_early_reader();
  let size = list_size(words);
  let any = greater_than(size, 0);
  assert_json(any, {
    hint: "the early-reader word list is empty",
  });
  let seen = {};
  for (let word of words) {
    let letters = text_letters_only(word);
    let plain = equal(letters, word);
    assert_json(plain, {
      word,
      hint: "an early-reader word must be lower-case letters and nothing else",
    });
    let before = property_or_null(seen, word);
    let fresh = equal(before, null);
    assert_json(fresh, {
      word,
      hint: "this word is in the early-reader list twice",
    });
    seen[word] = true;
  }
  let sorted = list_sort_text(words);
  let in_order = list_join_space(sorted);
  let as_written = list_join_space(words);
  let ordered = equal(in_order, as_written);
  assert_json(ordered, {
    hint: "the early-reader word list is out of alphabetical order - a human has to be able to find a word in it by eye",
  });
  let r = {
    words: size,
  };
  return r;
}
