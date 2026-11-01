import { arguments_assert } from "./arguments_assert.mjs";
import { equal } from "./equal.mjs";
import { ebible_testament_new_name } from "./ebible_testament_new_name.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function biblehub_strong_url(testament_name, strong) {
  arguments_assert(arguments, 2);
  ("BibleHub's page for one Strong's number, like https://biblehub.com/hebrew/8064.htm.");
  ("$plain testament_name strong");
  ("the testament is a name the book divisions give, and the number is a Strong's number written as digits. Both are joined into an address and neither runs.");
  ("THE TESTAMENT DECIDES THE FOLDER, because Hebrew and Greek numbers collide: 3056 is one word in Hebrew and another in Greek, so a number alone names two pages.");
  let folder = "hebrew";
  let right = ebible_testament_new_name();
  if (equal(testament_name, right)) {
    folder = "greek";
  }
  let url = text_combine_multiple([
    "https://biblehub.com/",
    folder,
    "/",
    strong,
    ".htm",
  ]);
  return url;
}
