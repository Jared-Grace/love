import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_gloss_bible_generate_generic_word } from "./app_shared_gloss_bible_generate_generic_word.mjs";
import { property_get } from "./property_get.mjs";
import { list_size } from "./list_size.mjs";
import { equal } from "./equal.mjs";
import { add } from "./add.mjs";
import { list_get } from "./list_get.mjs";
import { gloss_word_bare } from "./gloss_word_bare.mjs";
import { text_lower_to } from "./text_lower_to.mjs";
import { gloss_word_folded } from "./gloss_word_folded.mjs";
import { text_includes } from "./text_includes.mjs";
import { list_add } from "./list_add.mjs";
import { gloss_chapters_roots_claimed_entries_generic } from "./gloss_chapters_roots_claimed_entries_generic.mjs";
import { app_ceb_bible_gloss_generate } from "./app_ceb_bible_gloss_generate.mjs";
export async function app_ceb_bible_gloss_roots_claimed_outside_word() {
  "How many Cebuano explanations name a root that is not spelled anywhere inside the word they are explaining, counted over the sentences that plainly say the word root - the side of the store that three readings all step over on purpose and none of them has ever measured.";
  "★ THE EXEMPTION THIS FILLS IN IS WRITTEN DOWN AS A REASON AND THE REASON IS FALSE. Three readings skip these sentences, and one of them says why: where the sentence writes the word root outright the person has said what they mean, so a wrong answer there is theirs rather than the reading's. Three sentences in PSA144 say ‘awit’ is the root ‘to sing’, and the reader hands back to sing. The person said what they meant, they meant awit, and the reading got it wrong anyway - which is the one thing the exemption asserts cannot happen. So this side has been left unmeasured for a reason that a reader on it disproves.";
  "Being outside the word is not by itself a fault and the number must not be read as one. Cebuano drops the vowel out of a root's last syllable when a suffix goes on, so kupot is genuinely the root of gikuptan and is genuinely not spelled inside it. What the number is for is that nobody has one: an unmeasured side cannot be said to be small, and a count that turns out to be tiny is worth as much as one that turns out to be large.";
  "Spellings are folded before they are compared, the way the rest of this reading folds them, so that a root written with one letter for a sound and a word written with another do not read as a root standing outside its own word.";
  "The sentences are handed back rather than only counted, because the reading beside this one arrives at a count of three and returns without any of the three in it, and a count nobody can walk back to says a fault exists and refuses to say where.";
  "The word is read off the entry with the reader that throws when it is absent, and that is this reading's own choice rather than the shared walk's: the walk hands the whole entry over precisely so that each reading keeps the reader it had.";
  arguments_assert(arguments, 0);
  let word_key = app_shared_gloss_bible_generate_generic_word();
  let strict_total = 0;
  let inside = 0;
  let rows = [];
  function entry_read(found) {
    let chapter_code = property_get(found, "chapter_code");
    let entry = property_get(found, "entry");
    let explain = property_get(found, "explain");
    let claimed = property_get(found, "claimed");
    let claimed_count = list_size(claimed);
    let empty = equal(claimed_count, 0);
    if (empty) {
      return;
    }
    strict_total = add(strict_total, 1);
    let first = list_get(claimed, 0);
    let word = property_get(entry, word_key);
    let word_bare = gloss_word_bare(word);
    let word_lowered = text_lower_to(word_bare);
    let word_folded = gloss_word_folded(word_lowered);
    let root_bare = gloss_word_bare(first);
    let root_lowered = text_lower_to(root_bare);
    let root_folded = gloss_word_folded(root_lowered);
    let held = text_includes(word_folded, root_folded);
    if (held) {
      inside = add(inside, 1);
      return;
    }
    let row = {
      chapter: chapter_code,
      word,
      root: first,
      explain,
    };
    list_add(rows, row);
  }
  let walked = await gloss_chapters_roots_claimed_entries_generic(
    app_ceb_bible_gloss_generate,
    entry_read,
  );
  let r = {
    chapters: property_get(walked, "chapters"),
    strict_total,
    inside,
    outside: list_size(rows),
    rows,
  };
  return r;
}
