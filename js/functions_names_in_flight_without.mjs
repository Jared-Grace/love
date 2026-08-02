import { functions_names_untracked } from "./functions_names_untracked.mjs";
import { list_difference } from "./list_difference.mjs";
export async function functions_names_in_flight_without(f_names) {
  "$plain f_names";
  "The names given, less any the repo has not recorded yet.";
  "Everybody works in this one folder at once, and a thing that takes two edits to two files is half done for a few seconds every time somebody starts one. Without this, a sweep that notices the first edit before the second would be red for everyone during those seconds - and a check that goes red on other people's work in progress is a check somebody takes back out.";
  "Not being recorded yet is what stands for in progress here, rather than how new a file is or when it was last written. That is the one signal that is true exactly while the work is unfinished and false the moment it is committed, which is also the moment it becomes fair to complain about.";
  let in_flight = await functions_names_untracked();
  let settled = list_difference(f_names, in_flight);
  return settled;
}
