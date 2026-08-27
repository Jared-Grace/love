import { less_than } from "./less_than.mjs";
import { equal } from "./equal.mjs";
import { divide } from "./divide.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_font_size_default } from "./app_shared_font_size_default.mjs";
export function app_shared_font_size_stored_migrate(value) {
  "The factor to read a stored size as, given whatever is sitting on this reader's device: a factor is handed straight back, and a count of pixels left there by the old scheme is turned into one.";
  "The old scheme stored a count of pixels and every app opened at 20 of them, a quarter larger than the size the rest of the internet opens at. This one stores a multiple of the size the reader's own browser is set to, so 1 is that size. The two cannot be told apart by the word they are filed under, because it is the same word and it is frozen - only by how big they are. No factor anybody would choose reaches 4, and no count of pixels anybody could read falls below it.";
  "A stored 20 is thrown away rather than converted, because 20 is what the old scheme WROTE INTO STORAGE the first time an app was opened. It is the old opening size sitting there, not a size anybody picked, and converting it would freeze the old base on every reader who ever opened a page, forever. Anything else was reached by pressing a button, so it is kept at the same size on the screen: divided by the 16 pixels a browser opens at when nobody has told it otherwise.";
  arguments_assert(arguments, 1);
  let factor_already = less_than(value, 4);
  if (factor_already) {
    return value;
  }
  let unchosen = equal(value, 20);
  if (unchosen) {
    let value_default = app_shared_font_size_default();
    return value_default;
  }
  let factor = divide(value, 16);
  return factor;
}
