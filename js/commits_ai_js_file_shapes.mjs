import { git_message_hand_made } from "./git_message_hand_made.mjs";
import { list_size_less_than_value } from "./list_size_less_than_value.mjs";
import { property_equals } from "./property_equals.mjs";
import { commits_scratch_path_is } from "./commits_scratch_path_is.mjs";
import { commits_ai_js_numstat } from "./commits_ai_js_numstat.mjs";
import { commits_shape_name } from "./commits_shape_name.mjs";
import { not } from "./not.mjs";
import { list_add } from "./list_add.mjs";
import { property_exists } from "./property_exists.mjs";
import { property_get } from "./property_get.mjs";
import { property_set } from "./property_set.mjs";
export async function commits_ai_js_file_shapes(count_given) {
  "The same reading as its neighbour, counted one changed file at a time instead";
  "of one commit at a time.";
  "Counting whole commits measures the wrong thing here, and measurably so. A";
  "commit sweeps the entire working directory, so a single one named `ai` can";
  "carry two people's unrelated work, and its totals then describe an edit nobody";
  "made — which arrives as the largest bucket of all and says a transform is";
  "missing for a shape that was never a shape. Counting files cannot make that";
  "mistake: two unrelated files swept together are two observations, which is";
  "what they are.";
  "A file is also the right unit on its own terms, because a transform is aimed";
  "at one.";
  let commits = await commits_ai_js_numstat(count_given);
  let buckets = {};
  let edits = 0;
  let scratch = 0;
  for (let commit of commits) {
    let named = property_equals(commit, "subject", git_message_hand_made());
    if (not(named)) {
      continue;
    }
    let rows = property_get(commit, "rows");
    for (let row of rows) {
      let path = property_get(row, "path");
      let scratch_is = commits_scratch_path_is(path);
      if (scratch_is) {
        scratch = scratch + 1;
        continue;
      }
      let added = property_get(row, "added");
      let removed = property_get(row, "removed");
      edits = edits + 1;
      ("Handed to the same namer the neighbour uses, as a record of one file, so");
      ("the two readings can never come to disagree about what a shape is called.");
      let single = {
        files: 1,
        added,
        removed,
      };
      let key = commits_shape_name(single);
      let seen = property_exists(buckets, key);
      if (not(seen)) {
        property_set(buckets, key, {
          count: 0,
          samples: [],
        });
      }
      let bucket = property_get(buckets, key);
      bucket.count = bucket.count + 1;
      let few = list_size_less_than_value(bucket.samples, 6);
      if (few) {
        list_add(bucket.samples, path);
      }
    }
  }
  let r = {
    window: count_given,
    hand_edited_file_changes: edits,
    scratch_file_changes_set_aside: scratch,
    shapes: buckets,
  };
  return r;
}
