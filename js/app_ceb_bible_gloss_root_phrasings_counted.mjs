import { arguments_assert } from "./arguments_assert.mjs";
import { app_ceb_bible_gloss_generate } from "./app_ceb_bible_gloss_generate.mjs";
import { gloss_chapters_stored } from "./gloss_chapters_stored.mjs";
import { gloss_entry_explain_key } from "./gloss_entry_explain_key.mjs";
import { gloss_chapter_entries_collect_generic } from "./gloss_chapter_entries_collect_generic.mjs";
import { add } from "./add.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { gloss_explain_roots_claimed } from "./gloss_explain_roots_claimed.mjs";
import { list_size } from "./list_size.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
import { text_includes } from "./text_includes.mjs";
import { gloss_explain_roots_named } from "./gloss_explain_roots_named.mjs";
import { less_than } from "./less_than.mjs";
import { list_get } from "./list_get.mjs";
import { list_add } from "./list_add.mjs";
import { each } from "./each.mjs";
import { each_async } from "./each_async.mjs";
export async function app_ceb_bible_gloss_root_phrasings_counted() {
  "How many explanations in the Cebuano gloss store name the word's root in the one wording the strict root reader looks for, how many name one in a wording it cannot see, and how many name none at all.";
  "★ EVERY READING OF THIS STORE TREATED AN EMPTY ANSWER FROM THE STRICT ROOT READER AS THE STORE NAMING NO ROOT, AND THAT IS NOT WHAT AN EMPTY ANSWER MEANS. That reader matches the word root followed by a quoted word, and the store has no one way of saying it. Built on 'buhat', to do names the same root; so does 'Gibuhat' is 'buhat', to do; so does means was done, from 'buhat'. All three come back empty, because the word root is not in the sentence. The strict reader's own prose says a caller is meant to fall back on an empty answer; the readings built on it did not fall back, so they counted a difference of phrasing as a difference of content.";
  "This is what makes the count worth having rather than the wording being a matter of taste. A reading beside this one reported 8919 entries where the store names a root for a word elsewhere and no root here, and recommended filling them in from the store's own answers. Some of those pairs are the same claim written twice, and this is how many.";
  "How the further wordings were found is worth keeping, because it is the reason the last bucket cannot be trusted as a count. Each was found by reading what the ones before it still called bare, and each round of that found exactly one more. Nothing here says a fifth is not waiting in the same place.";
  "So the last bucket is an upper bound on how many name no root, never a count of them. A sample of it and of the loose bucket is handed back, because a reader can settle in a glance what no count can say.";
  "Nothing is asked of the site and nothing is written.";
  arguments_assert(arguments, 0);
  let fn = app_ceb_bible_gloss_generate;
  let chapter_codes = await gloss_chapters_stored(fn);
  let explain_key = gloss_entry_explain_key();
  let entries_seen = 0;
  let explained = 0;
  let worded_root = 0;
  let built_on = 0;
  let further_named = 0;
  let neither = 0;
  let further_shown = [];
  let neither_shown = [];
  function entries_pass(entries) {
    return entries;
  }
  async function chapter_read(chapter_code) {
    let entries = await gloss_chapter_entries_collect_generic(
      chapter_code,
      fn,
      entries_pass,
    );
    function entry_read(entry) {
      entries_seen = add(entries_seen, 1);
      let explain = property_get_or_null(entry, explain_key);
      let none = null_is(explain);
      if (none) {
        return;
      }
      explained = add(explained, 1);
      let claimed = gloss_explain_roots_claimed(explain);
      let claimed_count = list_size(claimed);
      let claimed_empty = equal(claimed_count, 0);
      if (not(claimed_empty)) {
        worded_root = add(worded_root, 1);
        return;
      }
      let built = text_includes(explain, "built on");
      if (built) {
        built_on = add(built_on, 1);
        return;
      }
      let named = gloss_explain_roots_named(explain);
      let named_count = list_size(named);
      let named_empty = equal(named_count, 0);
      if (not(named_empty)) {
        further_named = add(further_named, 1);
        let a = list_size(further_shown);
        let further_room = less_than(a, 20);
        if (further_room) {
          let root = list_get(named, 0);
          list_add(further_shown, {
            root: root,
            explain: explain,
          });
        }
        return;
      }
      neither = add(neither, 1);
      let a2 = list_size(neither_shown);
      let room = less_than(a2, 20);
      if (room) {
        list_add(neither_shown, explain);
      }
    }
    each(entries, entry_read);
  }
  await each_async(chapter_codes, chapter_read);
  let r = {
    entries_seen: entries_seen,
    explained: explained,
    worded_root: worded_root,
    built_on: built_on,
    further_named: further_named,
    neither: neither,
    further_shown: further_shown,
    neither_shown: neither_shown,
  };
  return r;
}
