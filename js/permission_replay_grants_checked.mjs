import { permission_replay_rows } from "./permission_replay_rows.mjs";
import { permission_rows_grant_checked } from "./permission_rows_grant_checked.mjs";
import { property_get } from "./property_get.mjs";
import { property_set } from "./property_set.mjs";
export async function permission_replay_grants_checked(days, count) {
  "the whole of the daily question in one command: which of the commands actually run in the last days would still stop the human today, and which of those can be granted safely — writing the rule for every one that can";
  "the ranking is replayed from the transcripts under the rules as they stand, so a shape already covered by a grant made since never reaches the safety check at all. that is what keeps the answer a list of what is left rather than a list of what was already done.";
  "a candidate no rule can name — a chain, or a program rather than a dispatcher call — is left in the ranking and never handed to the check, because a rule written for the first word of a chain approves everything after it. those stay visible in the candidates so the friction they cost is not lost, only unanswered by a grant.";
  let replay = await permission_replay_rows(days, count);
  let candidates = property_get(replay, "candidates");
  let grouped = await permission_rows_grant_checked(candidates, "run_name");
  property_set(replay, "grouped", grouped);
  return replay;
}
