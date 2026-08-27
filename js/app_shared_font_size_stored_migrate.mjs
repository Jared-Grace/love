import { equal } from "./equal.mjs";
import { divide } from "./divide.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { null_is } from "./null_is.mjs";
export function app_shared_font_size_stored_migrate(pixels, value_default) {
  "The factor a reader opens at who has never been given one, from whatever the old scheme left on their device: nothing at all, the size that scheme wrote there itself, or a size they actually chose.";
  "The old scheme stored a count of pixels and every app opened at 20 of them, a quarter larger than the size the rest of the internet opens at. This one stores a multiple of the size the reader's own browser is set to, so 1 is that size.";
  "A stored 20 is thrown away rather than converted, because 20 is what the old scheme WROTE INTO STORAGE the first time an app was opened. It is the old opening size sitting there, not a size anybody picked, and carrying it forward would freeze the old base on every reader who ever opened a page, forever - which is the whole of what was being changed.";
  "Anything else was reached by pressing a button, so it is kept at the same size on the screen: divided by the 16 pixels a browser opens at when nobody has told it otherwise. Somebody who made the words bigger did not ask for a ratio, they asked to be able to read.";
  arguments_assert(arguments, 2);
  let never = null_is(pixels);
  if (never) {
    return value_default;
  }
  let unchosen = equal(pixels, 20);
  if (unchosen) {
    return value_default;
  }
  let factor = divide(pixels, 16);
  return factor;
}
