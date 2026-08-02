import { arguments_assert } from "./arguments_assert.mjs";
import { literals_frozen_fused_all } from "./literals_frozen_fused_all.mjs";
import { literals_frozen_values } from "./literals_frozen_values.mjs";
import { property_get } from "./property_get.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { list_add_unique } from "./list_add_unique.mjs";
import { list_size } from "./list_size.mjs";
import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
export async function literals_frozen_fused_gate_run() {
  "QA gate: no frozen word is spelled into the middle of a joined-up address anywhere in this repo.";
  "Freezing a word says the value may never move, and the record beside it makes a move show up as a changed file. Both of those watch one function. A site that writes the word into a longer string is not watched by either, so it keeps the old spelling through a deliberate rename and there is nothing to notice - the freeze gate stays green because the function it reads still agrees with its own record.";
  "Ten of those were standing in this repo the day this was written, in the app that shares a bible passage and in two that drive the code app through its own links. Every one had been read past more than once.";
  "The count comes back as well as the finding, because this passes by finding nothing and so does a walk that has stopped reaching anything.";
  "Throws so the dispatcher seam exits nonzero.";
  arguments_assert(arguments, 0);
  let fused = await literals_frozen_fused_all();
  let named = [];
  for (let site of fused) {
    let f_name = property_get(site, "f_name");
    let getter = property_get(site, "getter");
    let text = property_get(site, "text");
    let sentence = text_combine_multiple([
      f_name,
      " writes ",
      text,
      " instead of asking ",
      getter,
    ]);
    list_add_unique(named, sentence);
  }
  named.sort();
  let values = await literals_frozen_values();
  let list = Object.keys(values);
  let watched = list_size(list);
  list_empty_is_assert_json(named, {
    hint: 'a frozen word is written into a joined-up address, where nothing watches it - split the string so the word is read off the function that holds it and only the punctuation is spelled out, as in base + "#" + the_key() + "=" + value',
    named,
  });
  let r = {
    watched,
    named,
  };
  return r;
}
