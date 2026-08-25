import { object_values } from "./object_values.mjs";
import { list_spread_take } from "./list_spread_take.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { git_message_hand_made } from "./git_message_hand_made.mjs";
import { property_equals } from "./property_equals.mjs";
import { integer_from_base_try } from "./integer_from_base_try.mjs";
import { commits_ai_js_numstat } from "./commits_ai_js_numstat.mjs";
import { list_map_limited_async } from "./list_map_limited_async.mjs";
import { probes_at_once } from "./probes_at_once.mjs";
import { property_get } from "./property_get.mjs";
import { property_exists } from "./property_exists.mjs";
import { property_set } from "./property_set.mjs";
import { list_size } from "./list_size.mjs";
import { list_add } from "./list_add.mjs";
import { less_than } from "./less_than.mjs";
import { not } from "./not.mjs";
export async function commits_hand_edit_kinds_generic(count_given, kind_named) {
  "What the hand-made single-file edits to code actually were, counted by kind, with the naming of one edit left to whoever asked.";
  "TWO READINGS ASK THIS SAME QUESTION AND DIFFER ONLY IN HOW THEY NAME ONE EDIT - one by counting the lines the diff printed, one by parsing the file on both sides and comparing the trees. Everything around that naming is the same walk, the same filter and the same buckets, and written twice the two drifted apart the first time either was improved.";
  "ONLY THE ONES THAT REACHED A SINGLE FILE. A commit reaching many at once is nearly always the sweeping commit gathering up whatever several of us had in the folder at that moment, so it is a batch rather than an edit, and counting it as one edit says the gap is twice what it is.";
  "EVERY MEMBER OF A BUCKET IS KEPT AND THE FEW SHOWN ARE SPREAD THROUGH IT. Four were kept before, and they were the four the walk met first - which, over a history walked newest first, meant the four newest. So every bucket was read through its last few days, and a bucket opened to see what it was made of answered about whoever had been working that week. Keeping the whole list costs a few hundred words and lets the sample be spread instead.";
  "THE POINT OF NAMING THE KINDS IS SUBTRACTION. A reworded comment and a colour chosen are hand-made and always will be, and an import repaired is the canonicalizing pass's own work wearing a hand-made label - none of the three is a missing command. What is left after taking those out is the real gap, and the largest kind in it is the command worth writing next.";
  arguments_assert(arguments, 2);
  let count = integer_from_base_try(count_given, 10);
  let commits = await commits_ai_js_numstat(count);
  let single = [];
  for (let commit of commits) {
    let property_value = git_message_hand_made();
    let by_hand = property_equals(commit, "subject", property_value);
    if (not(by_hand)) {
      continue;
    }
    let alone = property_equals(commit, "files", 1);
    if (not(alone)) {
      continue;
    }
    let item = property_get(commit, "commit");
    list_add(single, item);
  }
  let limit = probes_at_once();
  let kinds = await list_map_limited_async(single, kind_named, limit);
  let counted = {};
  let size = list_size(single);
  for (let index = 0; less_than(index, size); index++) {
    let kind = kinds[index];
    let seen = property_exists(counted, kind);
    if (not(seen)) {
      property_set(counted, kind, {
        count: 0,
        members: [],
        samples: [],
      });
    }
    let bucket = property_get(counted, kind);
    bucket.count = bucket.count + 1;
    list_add(bucket.members, single[index]);
  }
  let buckets = object_values(counted);
  for (let bucket of buckets) {
    bucket.samples = list_spread_take(bucket.members, 4);
  }
  let r = {
    window: count,
    single_file_hand_edits: size,
    kinds: counted,
  };
  return r;
}
