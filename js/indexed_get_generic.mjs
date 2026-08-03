import { integer_is_assert_json } from "./integer_is_assert_json.mjs";
import { undefined_not_is_assert_lambda } from "./undefined_not_is_assert_lambda.mjs";
export function indexed_get_generic(indexed, index, kind, object_get) {
  "Reads one item out of something counted from the front, and says so kindly when there is nothing there.";
  "A list and a run of text are counted the same way, so getting one item out of either is the same three steps: check the index is a whole number, read it, and refuse an answer that came back missing. Only two words differ, and both are handed in - the word for what is being read, which goes into the hint, and the caller's own way of describing what it was holding when the read failed.";
  "The description arrives as a function rather than as an object because the object is only ever built when the read has already failed, and because the caller names its own thing in its own word - a list calls it a list, a run of text calls it a text.";
  integer_is_assert_json(index, {
    hint:
      "a " +
      kind +
      " index should be a whole number — did a non-integer index arrive?",
  });
  let item = indexed[index];
  undefined_not_is_assert_lambda(item, object_get);
  return item;
}
