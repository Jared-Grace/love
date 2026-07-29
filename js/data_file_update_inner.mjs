import { data_facts_of_parsed } from "./data_facts_of_parsed.mjs";
import { data_facts_merge } from "./data_facts_merge.mjs";
export function data_file_update_inner(parsed, data) {
  "What one parsed file contributes to the index. Reading the file's own facts and folding them in are two separate acts now, because only the first depends on the file and only the first is worth keeping between runs.";
  let facts = data_facts_of_parsed(parsed);
  data_facts_merge(facts, data);
}
