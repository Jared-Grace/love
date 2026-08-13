import { binisaya_word_read_cache } from "./binisaya_word_read_cache.mjs";
import { binisaya_words_known } from "./binisaya_words_known.mjs";
import { each_async } from "./each_async.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_size } from "./list_size.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { property_exists } from "./property_exists.mjs";
import { not } from "./not.mjs";
export async function binisaya_words_gather(words) {
  "Look up every one of a list of Cebuano words on binisaya.com, skipping whatever is already held, and answer with how many were asked for and how many were already there.";
  "Words already held are dropped before anything is asked rather than being asked and thrown away, because each asking waits several seconds out of politeness to a small site - so the difference between the two is hours, and it is what lets a run that was interrupted be started again from the top instead of from a remembered place.";
  "They are asked for one at a time and in order, never all at once. A list this long handed to something that fans out would arrive at the far end as thousands of connections, which is the opposite of what waiting between them is for.";
  let known = await binisaya_words_known();
  function unknown_is(word) {
    let held_already = property_exists(known, word);
    let asking = not(held_already);
    return asking;
  }
  let wanted = list_filter(words, unknown_is);
  let list = object_property_names(known);
  let held = list_size(list);
  async function word_read(word) {
    await binisaya_word_read_cache(word);
  }
  await each_async(wanted, word_read);
  let r = {
    asked: list_size(wanted),
    held,
  };
  return r;
}
