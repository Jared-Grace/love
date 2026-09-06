import { app_ceb_bible_gloss_generate } from "./app_ceb_bible_gloss_generate.mjs";
import { gloss_repairs_file_path } from "./gloss_repairs_file_path.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { property_get } from "./property_get.mjs";
import { property_set } from "./property_set.mjs";
import { each } from "./each.mjs";
import { binisaya_word_read_cache } from "./binisaya_word_read_cache.mjs";
import { text_lower_to } from "./text_lower_to.mjs";
import { each_async } from "./each_async.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { equal } from "./equal.mjs";
import { gloss_explain_root_quoted_only_is } from "./gloss_explain_root_quoted_only_is.mjs";
import { gloss_explains_repair_decided_generic } from "./gloss_explains_repair_decided_generic.mjs";
export async function app_ceb_bible_gloss_explains_repair_quoted_only() {
  "The Cebuano word explanations named in the repairs file put right only where the sentence already standing says nothing about where the word came from and merely appeared to, because the root's letters arrived inside the quoted word - leaving every other sighting exactly as its author wrote it.";
  "★ THIS IS THE THIRD DOOR ONTO THE SAME STORE AND IT REACHES SENTENCES NEITHER OF THE OTHER TWO CAN. The plain repair replaces every sighting of a word and would flatten hundreds of sound explanations to correct one. The narrow repair replaces only the sightings the root reading calls wrong - and a sentence caught here is one that reading calls right, so it walks straight past it. Measured 2026-09-06 over the Cebuano store, that blind spot is four hundred and thirty-two words, larger than the whole queue of sentences the reading does complain about.";
  "The test is the reading's own, asked from the same function, so a sentence this replaces is exactly a sentence that sweep names and there is no third opinion between them.";
  "A word the dictionary was never asked about is passed over rather than replaced, which is the opposite of what the narrow repair does with one. There the missing root means the reading could not have checked the sentence and the author's correction should stand; here the missing root means there was never a quotation to be fooled by, so there is nothing to put right.";
  "The dictionary is read for every word before the walk begins, because the decision is asked once per entry inside a walk that cannot wait on a read.";
  let fn = app_ceb_bible_gloss_generate;
  let path = gloss_repairs_file_path(fn);
  let repairs = await file_read_json(path);
  let chapter_codes = object_property_names(repairs);
  let met = {};
  function chapter_read(chapter_code) {
    let wanted = property_get(repairs, chapter_code);
    let words = object_property_names(wanted);
    function word_note(word) {
      property_set(met, word, true);
    }
    each(words, word_note);
  }
  each(chapter_codes, chapter_read);
  let words = object_property_names(met);
  let roots = {};
  let builds = {};
  async function word_root_read(word) {
    let held = await binisaya_word_read_cache(word);
    let root = property_get(held, "root");
    let lower = text_lower_to(root);
    property_set(roots, word, lower);
    let affixes = property_get(held, "affixes");
    property_set(builds, word, affixes);
  }
  await each_async(words, word_root_read);
  function entry_wanted_is(word, standing) {
    let root = property_get_or_null(roots, word);
    let none = null_is(root);
    if (none) {
      return false;
    }
    let bare = equal(root, "");
    if (bare) {
      return false;
    }
    let affixes = property_get(builds, word);
    let quoted_only = gloss_explain_root_quoted_only_is(
      word,
      root,
      affixes,
      standing,
    );
    return quoted_only;
  }
  let r = await gloss_explains_repair_decided_generic(fn, entry_wanted_is);
  return r;
}
