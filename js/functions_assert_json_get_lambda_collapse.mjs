import { ai_git_noted } from "./ai_git_noted.mjs";
import { functions_assert_json_get_lambda_sites } from "./functions_assert_json_get_lambda_sites.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { list_size } from "./list_size.mjs";
import { function_call_commit } from "./function_call_commit.mjs";
import { function_assert_json_get_lambda_collapse } from "./function_assert_json_get_lambda_collapse.mjs";
export async function functions_assert_json_get_lambda_collapse() {
  "unwraps every hand-written lazy payload in the repo onto the eager check, finds its own set, and asks again afterwards to show none is left";
  "The set is found rather than given, because a list written into the caller stops";
  "being true the moment somebody writes the wrapper out again - and writing it out";
  "again by copying the function beside it is exactly how there came to be twelve.";
  "Each function is committed as it lands, messaged with its own name, so the log reads";
  "as one named command per function rather than one sweep nobody can replay. Whatever";
  "was already noted is committed first, so no step files a peer's work under its name.";
  "Asking again at the end is the proof. A sweep answering with a list of what it meant";
  "to do is not evidence it did any of it.";
  await ai_git_noted();
  let before = await functions_assert_json_get_lambda_sites();
  let f_names = list_map_property(before, "f_name");
  console.log("functions writing out a wrapper  " + list_size(f_names));
  for (let f_name of f_names) {
    let args = [f_name];
    await function_call_commit(function_assert_json_get_lambda_collapse, args);
  }
  let after = await functions_assert_json_get_lambda_sites();
  let remaining = list_map_property(after, "f_name");
  console.log("functions writing one out now  " + list_size(remaining));
  let told = {
    moved: list_size(f_names),
    remaining,
  };
  return told;
}
