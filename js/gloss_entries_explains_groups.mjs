import { gloss_entry_explain_key } from "./gloss_entry_explain_key.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_group_by_property } from "./list_group_by_property.mjs";
import { property_get } from "./property_get.mjs";
import { property_list_map } from "./property_list_map.mjs";
import { gloss_entry_word_read } from "./gloss_entry_word_read.mjs";
import { list_map } from "./list_map.mjs";
export function gloss_entries_explains_groups(entries) {
  "Every explanation written in a list of gloss entries, each one carried beside all the words that were handed it, whether that is one word or forty.";
  "The reading next door drops a wording handed to a single word, which is right when the question is what to rewrite inside one chapter and wrong when the question is what the whole store keeps saying. A sentence handed to one word in each of two hundred chapters is invisible to that reading and is two hundred entries, so the filter belongs to the caller who wants it rather than to the gathering itself.";
  "An explanation nobody has written yet is dropped rather than gathered under the empty wording, which would otherwise read as the single largest repetition in every store and would be about nothing.";
  let key = gloss_entry_explain_key();
  function explain_written_is(entry) {
    let explain = property_get_or_null(entry, key);
    let written_found = null_not_is(explain);
    return written_found;
  }
  let written = list_filter(entries, explain_written_is);
  let grouped = list_group_by_property(written, key);
  function group_read(group) {
    let explain = property_get(group, "key");
    let words = property_list_map(group, "items", gloss_entry_word_read);
    let r = {
      explain,
      words,
    };
    return r;
  }
  let groups = list_map(grouped, group_read);
  return groups;
}
