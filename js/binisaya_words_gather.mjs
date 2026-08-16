import { list_map_unique } from "./list_map_unique.mjs";
import { text_lower_to } from "./text_lower_to.mjs";
import { property_exists_not } from "./property_exists_not.mjs";
import { binisaya_word_read_cache } from "./binisaya_word_read_cache.mjs";
import { binisaya_words_gather_failures_allowed } from "./binisaya_words_gather_failures_allowed.mjs";
import { binisaya_words_known } from "./binisaya_words_known.mjs";
import { catch_null_async } from "./catch_null_async.mjs";
import { each_async } from "./each_async.mjs";
import { add } from "./add.mjs";
import { greater_than_equal } from "./greater_than_equal.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_size } from "./list_size.mjs";
import { not } from "./not.mjs";
import { null_is } from "./null_is.mjs";
import { object_property_names } from "./object_property_names.mjs";
export async function binisaya_words_gather(words) {
  "Look up every one of a list of Cebuano words on binisaya.com, skipping whatever is already held, and answer with how many were asked for, how many were already there, how many failed, and whether it gave up.";
  "Words already held are dropped before anything is asked rather than being asked and thrown away, because each asking waits several seconds out of politeness to a small site - so the difference between the two is hours, and it is what lets a run that was interrupted be started again from the top instead of from a remembered place.";
  "They are asked for one at a time and in order, never all at once. A list this long handed to something that fans out would arrive at the far end as thousands of connections, which is the opposite of what waiting between them is for.";
  "A word that fails is stepped over rather than ending the run. A list this long takes most of a day, and one name server answering slowly once used to throw away every hour already spent - while the word itself is not written down when it fails, so the next run simply asks again. Enough failures in a row is a different thing entirely, and the run stops: the far end is not there, and asking it thousands more times would be neither useful nor kind.";
  "It answers with the failures and with whether it stopped, because a run that reached nothing at all otherwise looks exactly like a run that found everything already held.";
  "The words are put into one case before anything is asked, because the site answers the same whichever case it is asked in. A word standing at the head of a sentence arrives wearing a capital and would otherwise be asked for a second time and filed a second time, under a name the first answer is not held under - so the same page is fetched twice and neither asking knows about the other. Measured over a Bible's vocabulary that was three hundred and thirty five words asked for twice, every one of them answered identically, which is half an hour of asking a small site for pages it had already given.";
  "The lowering has to happen here rather than where the answers are filed, because what is already held is looked at before anything is asked. Filed in one case and looked for in another, a word would read as missing on every run, be asked for again, and be filed again where the looking will not find it - so it would be fetched forever rather than once.";
  let known = await binisaya_words_known();
  let lowered = list_map_unique(words, text_lower_to);
  function unknown_is(word) {
    let asking = property_exists_not(known, word);
    return asking;
  }
  let wanted = list_filter(lowered, unknown_is);
  let list = object_property_names(known);
  let held = list_size(list);
  let allowed = binisaya_words_gather_failures_allowed();
  let failed = 0;
  let consecutive = 0;
  let stopped = false;
  async function word_read(word) {
    if (stopped) {
      return;
    }
    async function lambda() {
      let r2 = await binisaya_word_read_cache(word);
      return r2;
    }
    let read = await catch_null_async(lambda);
    let missed = null_is(read);
    if (not(missed)) {
      consecutive = 0;
      return;
    }
    failed = add(failed, 1);
    consecutive = add(consecutive, 1);
    let given_up = greater_than_equal(consecutive, allowed);
    if (given_up) {
      stopped = true;
    }
  }
  await each_async(wanted, word_read);
  let r = {
    asked: list_size(wanted),
    held,
    failed,
    stopped,
  };
  return r;
}
