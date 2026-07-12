import { list_cartesian_functions } from "./list_cartesian_functions.mjs";
import { range_1 } from "./range_1.mjs";
import { negative } from "./negative.mjs";
import { identity } from "./identity.mjs";
export function sat_contradiction_n(variables) {
  let fns = [identity, negative];
  let list = range_1(variables);
  let clauses = list_cartesian_functions(list, fns);
  return clauses;
}
