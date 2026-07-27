import { function_identifier_replace_lambda } from "./function_identifier_replace_lambda.mjs";
import { function_transform } from "./function_transform.mjs";
export async function function_identifier_replace(
  f_name,
  identifier_name,
  replacement,
) {
  "Replace every use of one identifier inside the function you name. The twin without the suffix edits whichever function the shared current-marker happens to hold, which is a different function for each of the people working at once, so a rename meant for one file can land in another's with nothing to show it went astray. Naming the target says out loud what was going to be assumed.";
  let lambda = function_identifier_replace_lambda(identifier_name, replacement);
  let r = await function_transform(f_name, lambda);
  return r;
}
