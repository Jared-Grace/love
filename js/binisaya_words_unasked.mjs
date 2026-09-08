import { arguments_assert } from "./arguments_assert.mjs";
import { binisaya_words_known } from "./binisaya_words_known.mjs";
import { list_map_unique } from "./list_map_unique.mjs";
import { text_lower_to } from "./text_lower_to.mjs";
import { property_exists_not } from "./property_exists_not.mjs";
import { list_filter } from "./list_filter.mjs";
export async function binisaya_words_unasked(words) {
  "$plain words";
  "Of the words handed in, the ones binisaya.com has never been asked about, beside the answers already held and the lowered list the question was actually put in.";
  "★ THE WORDS ARE PUT INTO ONE CASE BEFORE ANYTHING IS LOOKED FOR, AND THAT HAS TO HAPPEN BEFORE THE ASKING RATHER THAN WHERE THE ANSWERS ARE FILED. The site answers the same whichever case it is asked in. A word standing at the head of a sentence arrives wearing a capital, and filed in one case while looked for in another it would read as missing on every run, be asked for again, and be filed again where the looking will not find it - fetched forever rather than once. Measured over a Bible's vocabulary that was three hundred and thirty five words asked for twice, every one answering identically, which is half an hour of asking a small site for pages it had already given.";
  "Whether a word counts as already asked is decided by looking for it among the answers actually kept, and never by whether a file with that name is on the disk. Those two can disagree on purpose: an answer the dictionary read back and judged invented is dropped rather than deleted, so its file is still there while the word is going to be asked about again.";
  "The answers already held are handed back rather than only the count of them, because the gather that acts on this list wants to say how many it started from and a reading of the same list wants only the names.";
  "Nothing is asked of the site here and nothing is written. This says what would be asked.";
  arguments_assert(arguments, 1);
  let known = await binisaya_words_known();
  let lowered = list_map_unique(words, text_lower_to);
  function unknown_is(word) {
    let asking = property_exists_not(known, word);
    return asking;
  }
  let wanted = list_filter(lowered, unknown_is);
  let r = {
    known: known,
    lowered: lowered,
    unasked: wanted,
  };
  return r;
}
