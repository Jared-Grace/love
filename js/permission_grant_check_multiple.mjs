import { text_split_comma } from "./text_split_comma.mjs";
import { permission_grant_names } from "./permission_grant_names.mjs";
import { list_intersect } from "./list_intersect.mjs";
import { list_without_multiple } from "./list_without_multiple.mjs";
import { permission_grant_refusals_names } from "./permission_grant_refusals_names.mjs";
import { property_get } from "./property_get.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { list_filter } from "./list_filter.mjs";
import { property_set } from "./property_set.mjs";
import { not } from "./not.mjs";
export async function permission_grant_check_multiple(names_comma) {
  "sorts a list of dispatcher functions into the three answers a batch of wanted grants actually has - the ones that already hold a rule, the ones that could be given one today, and the ones that must not be, with their reasons";
  "this is the question asked whenever somebody hands over a pile of commands that made them stop and approve something. It was answered three times in one session by dumping the granted names to a file, sorting two lists against each other on the command line and then asking about what was left, which is a loop of invocations wearing a shell pipeline, and it left nothing behind either time.";
  "the already-granted ones are separated out first because they are the cheap answer and the expensive check is a walk of the whole repo - and because a name that is already granted has nothing to decide about, so putting it through the refusal check would only invite re-litigating a grant the human gave";
  "nothing is written here. It says which grants could be asked for; asking for them is still a command a human approves by name, which is the whole reason the adder is not itself auto-approved.";
  let asked = text_split_comma(names_comma);
  let granted = permission_grant_names();
  let already = list_intersect(asked, granted);
  let missing = list_without_multiple(asked, granted);
  let refusals_by_name = await permission_grant_refusals_names(missing);
  function clean_is(f_name) {
    let refusals = property_get(refusals_by_name, f_name);
    let b = list_empty_is(refusals);
    return b;
  }
  function refused_is(f_name) {
    let b2 = clean_is(f_name);
    let b = not(b2);
    return b;
  }
  let clean = list_filter(missing, clean_is);
  let refused_names = list_filter(missing, refused_is);
  let refused = {};
  for (let f_name of refused_names) {
    let refusals = property_get(refusals_by_name, f_name);
    property_set(refused, f_name, refusals);
  }
  let sorted = {
    asked: asked.length,
    already,
    clean,
    refused,
  };
  return sorted;
}
