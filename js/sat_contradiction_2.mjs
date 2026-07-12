import { sat_contradiction_n } from "./sat_contradiction_n.mjs";
export function sat_contradiction_2() {
  let variables = 2;
  let clauses = sat_contradiction_n(variables);
  return clauses;
}
