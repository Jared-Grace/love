import { g_profiles } from "./g_profiles.mjs";
import { list_filter } from "./list_filter.mjs";
import { g_profile_leader_valid_is } from "./g_profile_leader_valid_is.mjs";
export function g_profiles_leader() {
  "The deck a plant's elder is dealt from - everybody in the whole deck who could be handed the room.";
  "It is the same deck filtered, never a deck of its own, so a leader is one of the people the game already writes rather than a separate kind of person.";
  let all = g_profiles();
  let valid = list_filter(all, g_profile_leader_valid_is);
  return valid;
}
