import { log } from "../../../love/public/src/log.mjs";
import { not } from "../../../love/public/src/not.mjs";
import { or } from "../../../p_np/public/src/or.mjs";
import { sat_contradiction_2 } from "../../../love/public/src/sat_contradiction_2.mjs";
export function grace_sat() {
  let clauses = sat_contradiction_2();
  const get_soup = not(true);
  log(grace_sat.name, {
    get_soup,
  });
  const get_salad = false;
  let anded = or(get_soup, get_salad);
  return anded;
}
