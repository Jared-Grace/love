import { property_equals } from "./property_equals.mjs";
import { commits_ai_js_numstat } from "./commits_ai_js_numstat.mjs";
import { less_than } from "./less_than.mjs";
import { commits_shape_name } from "./commits_shape_name.mjs";
import { not } from "./not.mjs";
import { integer_from_base_try } from "./integer_from_base_try.mjs";
import { list_size } from "./list_size.mjs";
import { list_add } from "./list_add.mjs";
import { property_exists } from "./property_exists.mjs";
import { property_get } from "./property_get.mjs";
import { property_set } from "./property_set.mjs";
export async function commits_ai_js_shapes(count_given) {
  "How the hand-made edits to this repo's code actually look, one bucket per shape";
  "The commit message is the measurement. A commit named after a command was made by that command; a commit named `ai` says nothing named could do it, so somebody wrote it out by hand. Counting the second kind says how much of the editing the named transforms actually cover, and the shape of those commits says which transform is missing - chosen from what people kept doing rather than from a list written months ago";
  "Only the code is looked at. Prose, data and sermon text are hand-written by their nature and no transform was ever going to make them, so counting them would inflate the gap with work that is not missing anything";
  let count = integer_from_base_try(count_given, 10);
  let commits = await commits_ai_js_numstat(count);
  ("Bucketed by what a transform would have to be able to do: how many files it reached, and how much it put in and took out of them");
  let buckets = {};
  let hand = 0;
  for (let commit of commits) {
    let named = property_equals(commit, "subject", "ai");
    if (not(named)) {
      continue;
    }
    let none = property_equals(commit, "files", 0);
    if (none) {
      continue;
    }
    hand = hand + 1;
    let key = commits_shape_name(commit);
    let seen = property_exists(buckets, key);
    if (not(seen)) {
      property_set(buckets, key, {
        count: 0,
        samples: [],
      });
    }
    let bucket = property_get(buckets, key);
    bucket.count = bucket.count + 1;
    ("A few names are kept alongside each count, because a count says how often a shape happens and only the change itself says what the missing command would have to do");
    let a = list_size(bucket.samples);
    let few = less_than(a, 6);
    if (few) {
      let item = property_get(commit, "commit");
      list_add(bucket.samples, item);
    }
  }
  let r = {
    window: count,
    hand_edited_code_commits: hand,
    shapes: buckets,
  };
  return r;
}
