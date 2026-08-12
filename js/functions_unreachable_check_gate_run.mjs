import { list_map_property } from "./list_map_property.mjs";
import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
import { fn_name } from "./fn_name.mjs";
import { functions_unreachable_check_sites } from "./functions_unreachable_check_sites.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export async function functions_unreachable_check_gate_run() {
  "Gate: nothing asks whether the find-one helper found nothing, because it throws instead of handing nothing back";
  "A check that can never be true is worse than no check at all - it reads as care taken, and the sentence inside it is the one the caller most needed and will never see";
  "The fix is never to delete the sentence: hand it to the finding instead, through the twin that carries the caller's own words";
  "The functions at fault are thrown as a record rather than printed and then named again inside a sentence, because whoever reads a failure next reads it for names and cannot tell a name being accused from a name being named as the cure. The cure and the checker each site asks are advice, and the checker is the plainest innocent of all - it is doing exactly what it says it does.";
  let sites = await functions_unreachable_check_sites();
  let names = list_map_property(sites, "f_name");
  let f_name = fn_name("list_matching_single");
  let advice = text_combine_multiple([
    "these checks can never be true - hand the sentence to ",
    f_name,
    " instead",
  ]);
  let hint = {
    advice,
    sites,
  };
  list_empty_is_assert_json(names, {
    hint,
  });
  let v = {
    sites: 0,
  };
  return v;
}
