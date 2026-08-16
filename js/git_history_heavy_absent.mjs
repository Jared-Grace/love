import { arguments_assert } from "./arguments_assert.mjs";
import { git_history_heavy_absent_walked } from "./git_history_heavy_absent_walked.mjs";
import { property_get } from "./property_get.mjs";
export async function git_history_heavy_absent() {
  "The paths this repo's history is still carrying that the present no longer has, big enough to be worth someone's attention, named alone without their weights.";
  "The names alone because this is what a ratchet compares, and a ratchet compares things that either match or do not. A weight moves on its own as the packing changes, so a list carrying weights would differ from the last one without anything having happened.";
  "The reading itself is next door, which also hands back how many paths were looked at. A caller wanting only the offenders is the ordinary case and should not have to take the count apart itself; a gate needs the count, because finding none and reaching none read the same otherwise.";
  arguments_assert(arguments, 0);
  let walked = await git_history_heavy_absent_walked();
  let paths = property_get(walked, "paths");
  return paths;
}
