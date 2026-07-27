import { integer_from_base_try } from "./integer_from_base_try.mjs";
import { commits_ai_js_numstat } from "./commits_ai_js_numstat.mjs";
import { commit_edit_kind } from "./commit_edit_kind.mjs";
import { list_map_limited_async } from "./list_map_limited_async.mjs";
import { probes_at_once } from "./probes_at_once.mjs";
import { property_get } from "./property_get.mjs";
import { property_exists } from "./property_exists.mjs";
import { property_set } from "./property_set.mjs";
import { list_size } from "./list_size.mjs";
import { list_add } from "./list_add.mjs";
import { less_than } from "./less_than.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
export async function commits_hand_edit_kinds(count_given) {
  "What the hand-made single-file edits to code actually were, counted by kind";
  "Only the ones that reached a single file. A commit reaching many at once is nearly always the sweeping commit gathering up whatever several of us had in the folder at that moment, so it is a batch rather than an edit, and counting it as one edit says the gap is twice what it is";
  "The point of naming the kinds is subtraction. A reworded comment and a colour chosen are hand-made and always will be, and an import repaired is the canonicalizing pass's own work wearing a hand-made label - none of the three is a missing command. What is left after taking those out is the real gap, and the largest kind in it is the command worth writing next";
  let count = integer_from_base_try(count_given, 10);
  let commits = await commits_ai_js_numstat(count);
  let single = [];
  for (let commit of commits) {
    let subject = property_get(commit, "subject");
    let by_hand = equal(subject, "ai");
    if (not(by_hand)) {
      continue;
    }
    let files = property_get(commit, "files");
    let alone = equal(files, 1);
    if (not(alone)) {
      continue;
    }
    list_add(single, property_get(commit, "commit"));
  }
  let limit = probes_at_once();
  let kinds = await list_map_limited_async(single, commit_edit_kind, limit);
  let counted = {};
  let size = list_size(single);
  for (let index = 0; less_than(index, size); index++) {
    let kind = kinds[index];
    let seen = property_exists(counted, kind);
    if (not(seen)) {
      property_set(counted, kind, {
        count: 0,
        samples: [],
      });
    }
    let bucket = property_get(counted, kind);
    bucket.count = bucket.count + 1;
    let few = less_than(list_size(bucket.samples), 4);
    if (few) {
      list_add(bucket.samples, single[index]);
    }
  }
  let r = {
    window: count,
    single_file_hand_edits: size,
    kinds: counted,
  };
  return r;
}
