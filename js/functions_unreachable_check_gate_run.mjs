import { fn_name } from "./fn_name.mjs";
import { functions_unreachable_check_sites } from "./functions_unreachable_check_sites.mjs";
import { property_get } from "./property_get.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { list_size } from "./list_size.mjs";
import { list_map } from "./list_map.mjs";
import { list_join } from "./list_join.mjs";
import { each } from "./each.mjs";
import { log_console } from "./log_console.mjs";
import { greater_than } from "./greater_than.mjs";
import { error } from "./error.mjs";
export async function functions_unreachable_check_gate_run() {
  "Gate: nothing asks whether the find-one helper found nothing, because it throws instead of handing nothing back";
  "A check that can never be true is worse than no check at all - it reads as care taken, and the sentence inside it is the one the caller most needed and will never see";
  "The fix is never to delete the sentence: hand it to the finding instead, through the twin that carries the caller's own words";
  let sites = await functions_unreachable_check_sites();
  function lambda(site) {
    let f_name = property_get(site, "f_name");
    let bound = property_get(site, "bound");
    let checker = property_get(site, "checker");
    let message = text_combine_multiple([
      "UNREACHABLE CHECK  ",
      f_name,
      "  asks ",
      checker,
      " about ",
      bound,
    ]);
    log_console(message);
  }
  each(sites, lambda);
  let count = list_size(sites);
  let any = greater_than(count, 0);
  if (any) {
    function lambda_name(site) {
      let f_name = property_get(site, "f_name");
      return f_name;
    }
    let names = list_map(sites, lambda_name);
    let joined = list_join(names, " ");
    let combined = text_combine_multiple([
      "unreachable check gate: ",
      count,
      " checks can never be true - hand the sentence to ",
      fn_name("list_matching_single"),
      " instead: ",
      joined,
    ]);
    error(combined);
  }
  let v = {
    sites: 0,
  };
  return v;
}
