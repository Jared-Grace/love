import { arguments_assert } from "./arguments_assert.mjs";
import { property_text_split_space } from "./property_text_split_space.mjs";
import { fn_name } from "./fn_name.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_add } from "./list_add.mjs";
import { property_get } from "./property_get.mjs";
import { process_parent_id_or_null } from "./process_parent_id_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { or } from "./or.mjs";
export function qa_gate_runs_in_flight_row(running, shards, runs) {
  arguments_assert(arguments, 3);
  for (let row of running) {
    let words = property_text_split_space(row, "line");
    let shard_name = fn_name("qa_gate_tree_shard_run");
    let shard_is = list_includes(words, shard_name);
    if (shard_is) {
      list_add(shards, row);
      let pid = property_get(row, "pid");
      let parent = process_parent_id_or_null(pid);
      if (null_is(parent)) {
        continue;
      }
      let parent_known = list_includes(runs, parent);
      if (parent_known) {
        continue;
      }
      list_add(runs, parent);
      continue;
    }
    let gates_name = fn_name("qa_gate_run");
    let gates_is = list_includes(words, gates_name);
    let judging_name = fn_name("qa_commit_named_at");
    let judging_is = list_includes(words, judging_name);
    let counts = or(gates_is, judging_is);
    if (counts) {
      let pid = property_get(row, "pid");
      let known = list_includes(runs, pid);
      if (known) {
        continue;
      }
      list_add(runs, pid);
    }
  }
}
