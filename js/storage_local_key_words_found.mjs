import { arguments_assert } from "./arguments_assert.mjs";
import { storage_local_key_sites } from "./storage_local_key_sites.mjs";
import { property_get } from "./property_get.mjs";
import { list_map_concat_multiple } from "./list_map_concat_multiple.mjs";
import { list_unique } from "./list_unique.mjs";
export async function storage_local_key_words_found() {
  "Every word the repo writes after an owner to make a browser storage key today, read off the source rather than off any record. Read-only.";
  "The key a browser looks under is the owner and this joined. The owner half has its own reading, because it is a function name and a command moves it; this half moves by hand, which is the whole difficulty - there is no transform to catch and nothing about the edit looks dangerous.";
  "The same word may be written at several owners and comes back once. That is the right shape for what is asked of it: what matters is whether a word is still written somewhere, because a word nobody writes any more is a key nobody reads any more, and whatever was saved under it is stranded whichever owner it belonged to.";
  arguments_assert(arguments, 0);
  let sites = await storage_local_key_sites();
  function site_words(site) {
    let words = property_get(site, "words");
    return words;
  }
  let all = list_map_concat_multiple(sites, site_words);
  let unique = list_unique(all);
  unique.sort();
  return unique;
}
