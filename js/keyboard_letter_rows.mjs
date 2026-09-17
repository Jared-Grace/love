import { arguments_assert } from "./arguments_assert.mjs";
export function keyboard_letter_rows() {
  arguments_assert(arguments, 0);
  ("The three rows of letters on an ordinary English keyboard, top row first, each row read left to right.");
  ("★ EACH ROW SITS A LITTLE TO THE RIGHT OF THE ONE ABOVE IT on a real keyboard, and nothing in these three words says so. Whoever reads them for which keys touch has to supply that offset themselves.");
  let rows = ["qwertyuiop", "asdfghjkl", "zxcvbnm"];
  return rows;
}
