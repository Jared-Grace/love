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
import { less_than } from "./less_than.mjs";
import { list_add } from "./list_add.mjs";
import { each } from "./each.mjs";
import { each_async } from "./each_async.mjs";
export async function app_ceb_bible_gloss_root_phrasings_counted() {
  "How many explanations in the Cebuano gloss store name the word's root in the wording the root reader looks for, how many name one in a different wording it cannot see, and how many name none at all.";
  "★ EVERY READING OF THIS STORE SO FAR HAS TREATED AN EMPTY ANSWER FROM THE ROOT READER AS THE STORE NAMING NO ROOT, AND THAT IS NOT WHAT AN EMPTY ANSWER MEANS. The reader matches the word root followed by a quoted word. An explanation writing it is built on 'buhat', to do, with 'gi-' in front names exactly the same root and the same affix and comes back empty, because the word root is not in the sentence. The reader's own prose says a caller is meant to fall back to a weaker test when it comes back empty; the readings built on it did not fall back, so they counted a difference of phrasing as a difference of content.";
  "This is what makes the count worth having rather than the wording being a matter of taste. A reading beside this one reported 8919 entries where the store names a root for a word elsewhere and no root here, and recommended filling them in from the store's own answers. Reading the sentences showed the pairs are the same claim twice - its root is 'buhat' against it is built on 'buhat' - so there was nothing to fill and the recommendation was wrong.";
  "Only the two wordings the corpus actually uses are counted, and an explanation naming a root some third way falls into the last bucket with the ones naming none. That bucket is therefore an upper bound on how many name no root and not a count of them.";
  "Nothing is asked of the site and nothing is written.";
  arguments_assert(arguments, 0);
  let fn = app_ceb_bible_gloss_generate;
  let chapter_codes = await gloss_chapters_stored(fn);
  let explain_key = gloss_entry_explain_key();
  let entries_seen = 0;
  let explained = 0;
  let worded_root = 0;
  let built_on = 0;
  let neither = 0;
  let shown = [];
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
      let count = list_size(claimed);
      let empty = equal(count, 0);
      if (not(empty)) {
        worded_root = add(worded_root, 1);
        return;
      }
      let built = text_includes(explain, "built on");
      if (built) {
        built_on = add(built_on, 1);
        return;
      }
      neither = add(neither, 1);
      let a = list_size(shown);
      let room = less_than(a, 20);
      if (room) {
        list_add(shown, explain);
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
    neither: neither,
    shown: shown,
  };
  return r;
}
