import { app_ceb_bible_gloss_words_dash_pieces_absent_words } from "./app_ceb_bible_gloss_words_dash_pieces_absent_words.mjs";
import { property_get } from "./property_get.mjs";
import { binisaya_words_unasked } from "./binisaya_words_unasked.mjs";
import { list_size } from "./list_size.mjs";
export async function app_ceb_bible_gloss_words_dash_pieces_unasked() {
  "The pieces of dashed Cebuano words that the store explains nowhere on its own and the dictionary has not been asked about yet - which is to say, what the next gather run is going to spend itself asking a small site about things nobody wrote.";
  "★ THESE ARE NOT A BACKLOG SOMEBODY COULD DECIDE NOT TO DO. The gather finds its own list from the store rather than being handed one, so every one of these is asked the next time it runs, and it waits several seconds between askings out of politeness to a small site. The cost is therefore already committed and is counted in hours, not in items.";
  "Whether a word counts as already asked is decided the same way the gather decides it, because it is now decided by the same code rather than by two copies of it. Those two can disagree with a count of files on the disk, on purpose: an answer the dictionary read back and judged invented is dropped rather than deleted, so its file is still there while the word is going to be asked about again. Asked on 2026-09-07 they happened to agree, both saying 455, because the answers this dictionary drops are the ones whose word carried punctuation on its ends and a piece cut at a dash carries none. They agreed by luck of the subject and not by construction, and counting files is still the wrong question.";
  "This accuses a reading and not the store. Every piece named here was cut out of a word the store spells whole.";
  let absent = await app_ceb_bible_gloss_words_dash_pieces_absent_words();
  let asked = await binisaya_words_unasked(absent);
  let lowered = property_get(asked, "lowered");
  let wanted = property_get(asked, "unasked");
  let r = {
    absent: list_size(absent),
    distinct: list_size(lowered),
    unasked: list_size(wanted),
    words: wanted,
  };
  return r;
}
