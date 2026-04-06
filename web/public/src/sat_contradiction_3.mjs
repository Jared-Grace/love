import { list_cartesian_functions } from "../../../love/public/src/list_cartesian_functions.mjs";
import { range_1 } from "../../../love/public/src/range_1.mjs";
import { negative } from "../../../love/public/src/negative.mjs";
import { identity } from "../../../love/public/src/identity.mjs";
export function sat_contradiction_3() {
  let variables = 3;
  let fns = [identity, negative];
  let list = range_1(variables);
  let clauses = list_cartesian_functions(list, fns);
  return clauses;
}
