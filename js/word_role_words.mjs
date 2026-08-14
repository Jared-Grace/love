import { object_property_names } from "./object_property_names.mjs";
import { text_split_space } from "./text_split_space.mjs";
import { word_role_groups } from "./word_role_groups.mjs";
import { word_root } from "./word_root.mjs";
export function word_role_words() {
  "Every word that does a job, paired with the job it does.";
  "Turned inside out from the readable grouping, the same way the irregular roots are, because every reader of this arrives holding a word and wanting its job.";
  "The words are keyed by their ROOT rather than as they are spelled, so a lookup here can be done on a root without rooting it twice and without the caller having to know which spelling the group happened to list.";
  let groups = word_role_groups();
  let roles = {};
  function group_take(role) {
    let words = text_split_space(groups[role]);
    function word_take(word) {
      let root = word_root(word);
      roles[root] = role;
    }
    words.forEach(word_take);
  }
  object_property_names(groups).forEach(group_take);
  return roles;
}
