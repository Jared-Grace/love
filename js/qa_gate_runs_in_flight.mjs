import { fn_name } from "./fn_name.mjs";
import { processes_dispatcher_report } from "./processes_dispatcher_report.mjs";
import { machine_load_average } from "./machine_load_average.mjs";
import { cpu_count } from "./cpu_count.mjs";
import { text_split_space } from "./text_split_space.mjs";
import { list_includes } from "./list_includes.mjs";
import { property_get } from "./property_get.mjs";
import { list_add } from "./list_add.mjs";
import { list_size } from "./list_size.mjs";
import { greater_than } from "./greater_than.mjs";
export async function qa_gate_runs_in_flight() {
  "How many whole-repo gate runs are going at this moment - counting the runs themselves and the shards they spread across the processors - beside how many processors there are to spread over";
  "The gate freezes a copy of the folder and asks its gates in several processes at once so that one run finishes quickly. Several of us run it at the same time and none of them can see the others so the sharing that makes one run fast is exactly what makes four runs slow - and each run then takes long enough that the next one starts before it ends";
  "Measured on 2026-08-02 - four runs going at once with their shards each holding most of a processor put a load of thirty-seven on fourteen processors and carried one run past ten minutes. What a run costs on a quiet machine was not measured then so nothing here says how much of that was the crowding";
  "A run is found by whole word rather than by the letters appearing somewhere in the line, which is what keeps this from counting itself - its own name holds the gate's name inside it";
  let running = await processes_dispatcher_report();
  let runs = [];
  let shards = [];
  for (let row of running) {
    let line = property_get(row, "line");
    let words = text_split_space(line);
    let item = fn_name("qa_gate_tree_shard_run");
    let shard_is = list_includes(words, item);
    if (shard_is) {
      list_add(shards, row);
      continue;
    }
    let item2 = fn_name("qa_gate_run");
    let run_is = list_includes(words, item2);
    if (run_is) {
      list_add(runs, row);
    }
  }
  let cores = await cpu_count();
  let load = machine_load_average();
  let runs_size = list_size(runs);
  let crowded = greater_than(load, cores);
  let r = {
    runs: runs_size,
    shards: list_size(shards),
    cores,
    load,
    crowded,
  };
  return r;
}
