import { repo_functions_code } from "./repo_functions_code.mjs";
import { text_includes } from "./text_includes.mjs";
import { not } from "./not.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { literals_frozen_values } from "./literals_frozen_values.mjs";
import { repo_love_name } from "./repo_love_name.mjs";
import { names_leading_words_shared_count } from "./names_leading_words_shared_count.mjs";
import { less_than } from "./less_than.mjs";
import { function_ast } from "./function_ast.mjs";
import { js_address_fused_words } from "./js_address_fused_words.mjs";
import { property_get } from "./property_get.mjs";
import { list_add } from "./list_add.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
export async function literals_frozen_fused_all() {
  "Every place a frozen word is spelled into the middle of a joined-up address rather than read off the function that holds it, as {f_name, getter, word, text}. Read-only.";
  "Freezing a word only protects the sites that ask for it. A site that writes the word into a longer string keeps the old spelling when the function is deliberately given a new one, and nothing says so - the freeze record still matches its own source, and the site is a string the record was never about.";
  "A word is only counted against a file of the same family, meaning the two names begin with the same two words. Without that, every one-letter word collides with somebody else's protocol: the version in a cache-busting address reads as the verse of a bible link, and the query of a search engine reads as the query of this repo's own search. Those are different meanings that happen to be spelled the same, and asking a person to tell them apart every time is the reading nobody would keep.";
  "The repo is read once for the whole walk, and each word is then asked of what is already in hand. Reading it per word instead cost this check thirteen minutes, which was nine times the next slowest gate and set the wall clock of every run of q on its own.";
  "Of the two narrowings the family one goes first, because it compares two names and opens nothing, while the word with its equals sign - which every fused shape contains - still spares the reading of a tree.";
  arguments_assert(arguments, 0);
  let values = await literals_frozen_values();
  let repo_name = repo_love_name();
  let entries = await repo_functions_code(repo_name);
  let getters = Object.keys(values);
  let fused = [];
  for (let getter of getters) {
    let word = property_get(values, getter);
    let needle = word + "=";
    for (let entry of entries) {
      let candidate = property_get(entry, "name");
      let shared = names_leading_words_shared_count(getter, candidate);
      let stranger = less_than(shared, 2);
      if (stranger) {
        continue;
      }
      let code = property_get(entry, "code");
      let mentions = text_includes(code, needle);
      if (not(mentions)) {
        continue;
      }
      let tree = await function_ast(candidate);
      let sites = js_address_fused_words(tree, [word]);
      let clean = list_empty_is(sites);
      if (clean) {
        continue;
      }
      for (let site of sites) {
        let text = property_get(site, "text");
        let found = {
          f_name: candidate,
          getter,
          word,
          text,
        };
        list_add(fused, found);
      }
    }
  }
  return fused;
}
