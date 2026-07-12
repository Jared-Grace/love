import { list_map_unique } from "./list_map_unique.mjs";
import { abs } from "./abs.mjs";
import { list_squash } from "./list_squash.mjs";
export function sat_clauses_to_variables(clauses) {
  let squashed = list_squash(clauses);
  let variables = list_map_unique(squashed, abs);
  return variables;
}
