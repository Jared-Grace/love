import { functions_facts_all } from "./functions_facts_all.mjs";
import { functions_facts_merge_all } from "./functions_facts_merge_all.mjs";
import { functions_facts_cache_path } from "./functions_facts_cache_path.mjs";
import { functions_paths } from "./functions_paths.mjs";
import { file_stamps_by_path } from "./file_stamps_by_path.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { machine_load_average } from "./machine_load_average.mjs";
import { performance_now } from "./performance_now.mjs";
import { properties_size } from "./properties_size.mjs";
import { property_get } from "./property_get.mjs";
import { timings_ranked } from "./timings_ranked.mjs";
import { list_add } from "./list_add.mjs";
import { subtract } from "./subtract.mjs";
import { round } from "./round.mjs";
export async function data_index_timings() {
  "Where the time goes when the index everything is looked up in gets built.";
  "Every command run here builds that index before it can answer anything, so whatever this costs is the floor under all of them. It was worth a name of its own because the answer decides what is worth changing next, and guessing at it was wrong twice: the reading and parsing of every file turned out to be already fixed, and the part that looked small was the one being paid over and over.";
  "The whole freshness pass is measured first, cold, because that is the number a command actually pays. The pieces underneath it are measured after and say so in their names - each one has just been done, so what they show is what asking a second time costs. That second number is not a flaw in the measuring; it is the saving the kept index makes, written down.";
  "The load average is carried along because several of us share this machine and a number measured under load reads exactly like slow work.";
  let load = machine_load_average();
  let timings = [];
  function note(name, from) {
    let left = performance_now();
    let n = subtract(left, from);
    let milliseconds = round(n);
    let timing = {
      name,
      milliseconds,
    };
    list_add(timings, timing);
  }
  let freshness_from = performance_now();
  let asked = await functions_facts_all();
  note(functions_facts_all.name, freshness_from);
  let facts = property_get(asked, "facts");
  let data = {};
  let fold_from = performance_now();
  functions_facts_merge_all(facts, data);
  note(functions_facts_merge_all.name, fold_from);
  let paths_from = performance_now();
  let f_paths = await functions_paths();
  note("functions_paths_again", paths_from);
  let cache_from = performance_now();
  let cache_path = functions_facts_cache_path();
  await file_read_json(cache_path);
  note("functions_facts_cache_read_again", cache_from);
  let stamps_from = performance_now();
  await file_stamps_by_path(f_paths);
  note("file_stamps_by_path_again", stamps_from);
  let r = {
    load,
    files: f_paths.length,
    names: properties_size(data),
    timings: timings_ranked(timings),
  };
  return r;
}
