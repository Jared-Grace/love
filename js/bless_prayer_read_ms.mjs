import { arguments_assert } from "./arguments_assert.mjs";
import { list_size } from "./list_size.mjs";
import { multiply } from "./multiply.mjs";
import { text_words } from "./text_words.mjs";
export function bless_prayer_read_ms(prayer) {
  arguments_assert(arguments, 1);
  ("How long a prayer takes to say out loud, at the unhurried pace somebody praying uses.");
  ("It is a FLOOR and never a limit. The amen is held back this long and then waits as long");
  ("as the player likes, so the one thing that cannot be optimised away is the reading -");
  ("which is the player's whole part in this game.");
  ("Measured from the words rather than fixed, because the prayers differ: blessing one");
  ("person is five words and blessing everyone on their continent is ten, and one time for");
  ("both would either rush the long one or leave the short one waiting for nothing.");
  ("Six hundred milliseconds a word is slower than reading and slower than speech, which is");
  ("right - a prayer read at conversation speed is being got through.");
  let words = text_words(prayer);
  let count = list_size(words);
  let ms = multiply(count, 600);
  return ms;
}
