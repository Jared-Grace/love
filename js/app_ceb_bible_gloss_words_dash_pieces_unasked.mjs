import { app_ceb_bible_gloss_words_dash_pieces_absent } from "./app_ceb_bible_gloss_words_dash_pieces_absent.mjs";
import { property_get } from "./property_get.mjs";
import { binisaya_words_known } from "./binisaya_words_known.mjs";
import { list_map_unique } from "./list_map_unique.mjs";
import { text_lower_to } from "./text_lower_to.mjs";
import { property_exists_not } from "./property_exists_not.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_size } from "./list_size.mjs";
export async function app_ceb_bible_gloss_words_dash_pieces_unasked() {
  "The pieces of dashed Cebuano words that the store explains nowhere on its own and the dictionary has not been asked about yet - which is to say, what the next gather run is going to spend itself asking a small site about things nobody wrote.";
  "★ THESE ARE NOT A BACKLOG SOMEBODY COULD DECIDE NOT TO DO. The gather finds its own list from the store rather than being handed one, so every one of these is asked the next time it runs, and it waits several seconds between askings out of politeness to a small site. The cost is therefore already committed and is counted in hours, not in items.";
  "Whether a word counts as already asked is decided the same way the gather decides it - lowered first, then looked for among the answers actually kept - and not by whether a file with that name is on the disk. Those two can disagree, on purpose: an answer the dictionary read back and judged invented is dropped rather than deleted, so its file is still there while the word is going to be asked about again. Asked on 2026-09-07 they happened to agree, both saying 455, because the answers this dictionary drops are the ones whose word carried punctuation on its ends and a piece cut at a dash carries none. They agreed by luck of the subject and not by construction, and counting files is still the wrong question.";
  "This accuses a reading and not the store. Every piece named here was cut out of a word the store spells whole.";
  let measured = await app_ceb_bible_gloss_words_dash_pieces_absent();
  let absent = property_get(measured, "words_absent");
  let known = await binisaya_words_known();
  let lowered = list_map_unique(absent, text_lower_to);
  function unknown_is(word) {
    let asking = property_exists_not(known, word);
    return asking;
  }
  let wanted = list_filter(lowered, unknown_is);
  let r = {
    absent: list_size(absent),
    distinct: list_size(lowered),
    unasked: list_size(wanted),
    words: wanted,
  };
  return r;
}
