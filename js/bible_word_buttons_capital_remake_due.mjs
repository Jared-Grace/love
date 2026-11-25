import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { fn_name } from "./fn_name.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { bible_word_buttons_guessed } from "./bible_word_buttons_guessed.mjs";
import { property_get } from "./property_get.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_map } from "./list_map.mjs";
import { local_function_folder } from "./local_function_folder.mjs";
import { app_learn_eng_gloss_urdu_words_sound } from "./app_learn_eng_gloss_urdu_words_sound.mjs";
import { gloss_word_sound_voices } from "./gloss_word_sound_voices.mjs";
import { file_modified_ms } from "./file_modified_ms.mjs";
import { path_join } from "./path_join.mjs";
import { gloss_word_sound_path } from "./gloss_word_sound_path.mjs";
import { path_modified_ms } from "./path_modified_ms.mjs";
import { equal } from "./equal.mjs";
import { less_than } from "./less_than.mjs";
import { list_add } from "./list_add.mjs";
import { not } from "./not.mjs";
import { subtract } from "./subtract.mjs";
import { list_includes_not } from "./list_includes_not.mjs";
import { list_size } from "./list_size.mjs";
import { english_words_sound_remake } from "./english_words_sound_remake.mjs";
export async function bible_word_buttons_capital_remake_due(bible_folder) {
  "$plain bible_folder";
  "Records again, in every voice and at both speeds, and sends up, every tapped-word recording of one bible that was guessed in small letters but has a written answer under its capital.";
  "★ IT FINDS ITS OWN WORDS RATHER THAN BEING HANDED THEM, because the list is two thousand words long and is exactly the answer the button check already gives. Handed a list, a caller could hand a stale one.";
  "★ IT GOES IN BATCHES OF A HUNDRED, EACH SENT UP BEFORE THE NEXT STARTS, because the whole set is most of a day of speaking. A run stopped part way has then already delivered every finished batch, rather than holding every recording on this machine until the last word is said.";
  "The recorder itself is what speaks the capital - a lone word it can only answer with a capital is read from that spelling - so this only chooses which recordings to make again. Bump both recording stamps in the same commit as the upload.";
  arguments_assert(arguments, 1);
  let reported = await bible_word_buttons_guessed(bible_folder);
  let guessed = property_get(reported, "guessed");
  function mended_is(g) {
    let known = property_get(g, "capital_known");
    return known;
  }
  let mended = list_filter(guessed, mended_is);
  function word_get(g) {
    let word = property_get(g, "word");
    return word;
  }
  let wanted = list_map(mended, word_get);
  let size = 100;
  ("★ A WORD ALREADY RECORDED SINCE THE RECORDER LAST CHANGED IS SKIPPED, SO A RUN THAT WAS STOPPED CARRIES ON INSTEAD OF STARTING OVER. Measured 2026-11-25: the first run was stopped for want of memory after 1,800 of 2,395 words, and starting again from the top would have spent eight hours re-saying words already right. A recording is counted as done only when every voice's file is newer than the speech engine's own source, so a later change to how words are read makes every word due again rather than leaving old readings counted as new.");
  ("★ THE NEWEST BATCH OF DONE WORDS IS MADE AGAIN ANYWAY, BECAUSE IT MAY NOT HAVE BEEN SENT. A batch is recorded whole before any of it goes up, so the files on this machine cannot tell a batch that was sent from one stopped half way through sending - and only the last one can be in that state.");
  let folder = local_function_folder(app_learn_eng_gloss_urdu_words_sound);
  let voices = gloss_word_sound_voices();
  let since = await file_modified_ms(
    text_combine_multiple(["./scripts/py/", fn_name("text_to_speech"), ".py"]),
  );
  let newest = [];
  async function recorded_ms(word) {
    let times = [];
    for (let voice of voices) {
      let path = gloss_word_sound_path(word, voice);
      let file_path = path_join([folder, path]);
      let ms = await path_modified_ms(file_path);
      if (equal(ms, null) || less_than(ms, since)) {
        return null;
      }
      list_add(times, ms);
    }
    let latest = Math.max(...times);
    return latest;
  }
  for (let word of wanted) {
    let ms = await recorded_ms(word);
    let b2 = equal(ms, null);
    if (not(b2)) {
      list_add(newest, {
        word,
        ms,
      });
    }
  }
  function newer_first(a, b) {
    let d = subtract(b.ms, a.ms);
    return d;
  }
  newest.sort(newer_first);
  let list = newest.slice(size);
  let done = list_map(list, word_get);
  function due_is(word) {
    let due = list_includes_not(done, word);
    return due;
  }
  let words = list_filter(wanted, due_is);
  let batches = [];
  for (let i = 0; less_than(i, list_size(words)); i += size) {
    let batch = words.slice(i, i + size);
    let joined = batch.join(",");
    let made = await english_words_sound_remake(joined);
    let sent = property_get(made, "sent");
    list_add(batches, {
      from: i,
      words: list_size(batch),
      sent: list_size(sent),
    });
  }
  let r = {
    wanted: list_size(wanted),
    skipped: list_size(done),
    words: list_size(words),
    batches,
  };
  return r;
}
