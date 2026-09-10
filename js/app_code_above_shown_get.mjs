import { storage_local_flag_get } from "./storage_local_flag_get.mjs";
export function app_code_above_shown_get() {
  "Whether this learner has asked to be shown the worked telling that stands above a lesson's examples, remembered on their own device between visits.";
  "NO is what an unanswered question means, and that is a curriculum decision rather than a default picked for tidiness. The lessons teach by being worked: a learner meets the examples and finds the pattern in them. The telling above is there for a learner who would rather have the pattern said out loud than find it, and it is a thing they ask for.";
  "It is one answer for the whole app rather than one per lesson, because it is not a fact about any lesson - it is how this person learns. A learner who wants things explained wants the next lesson explained too, and asking again on every lesson is the same question over and over.";
  let shown = storage_local_flag_get(app_code_above_shown_get, "above_shown");
  return shown;
}
