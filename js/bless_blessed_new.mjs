import { arguments_assert } from "./arguments_assert.mjs";
import { set_new } from "./set_new.mjs";
export function bless_blessed_new() {
  arguments_assert(arguments, 0);
  ("A fresh record of everywhere that has been prayed for - empty, because nobody has yet.");
  ("A set rather than a count, because the game asks WHICH and never how many. Whether this");
  ("person is marked, whether every building on this block is done: both are questions about");
  ("membership, and a number cannot answer either of them.");
  ("Praying twice over the same place is therefore free and changes nothing, which is the");
  ("right shape - a second blessing is not an error to guard against.");
  let blessed = set_new();
  return blessed;
}
