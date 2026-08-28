import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_dev_shown_is } from "./app_shared_dev_shown_is.mjs";
import { not } from "./not.mjs";
import { html_hash_name_get } from "./html_hash_name_get.mjs";
import { list_includes } from "./list_includes.mjs";
export function app_g_bless_dev_opening_is(words) {
  arguments_assert(arguments, 1);
  ("Whether this visit was opened with one of these words after the hash mark, asked only");
  ("where the dev tools are on offer at all.");
  ("Every opening that WRITES into the record is asked this way, and asking it in one place");
  ("is what keeps the gate on all of them. An opening that only takes something away - a");
  ("door skipped, a panel skipped - costs the player nothing they could not have done");
  ("themselves; one that starts them off with prayers nobody said is a lie about their own");
  ("work, and it must not be reachable by somebody who came to play.");
  ("It takes a LIST because the openings come in families: one word sets a street up and");
  ("the next does the same thing and then acts on it, so the set-up has to answer to both");
  ("names while the acting answers to one. Asked a word at a time, the family would be a");
  ("run of comparisons that the next word in it would have to be added to by hand.");
  let shown = app_shared_dev_shown_is();
  if (not(shown)) {
    return false;
  }
  let name = html_hash_name_get();
  let asked = list_includes(words, name);
  return asked;
}
