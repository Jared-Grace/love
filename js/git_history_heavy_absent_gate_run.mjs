import { git_history_heavy_absent_walked } from "./git_history_heavy_absent_walked.mjs";
import { property_get } from "./property_get.mjs";
import { git_history_heavy_absent_baseline_path } from "./git_history_heavy_absent_baseline_path.mjs";
import { baseline_names_gate_walked_advice_generic } from "./baseline_names_gate_walked_advice_generic.mjs";
import { git_history_heavy_absent_added_hint } from "./git_history_heavy_absent_added_hint.mjs";
import { fn_name } from "./fn_name.mjs";
export async function git_history_heavy_absent_gate_run() {
  "QA gate: a large file committed and then deleted must not settle quietly into this repo's past.";
  "Deleting a file takes it out of the present and leaves it in every copy of the repo for ever. That is how a scripture translation nobody had the right to publish came to be handed out by two public sites for a year - it was added, deleted, and nothing anywhere noticed either. Nothing about the working tree shows it, so it is asked of the history directly.";
  "Measured against the baseline rather than against nought, because the repo already carried some of these when this was written and taking them out is a judgment about what each one was. What it holds is the thing worth holding - today's change is not allowed to add one more.";
  "Going red is not bad news. It means a large file was noticed while it is one commit old, which is the only moment taking it out is cheap.";
  "how many paths were looked at travels out with the verdict, because a history that has stopped being read comes back with no offenders, which is the same word this gate says when there are none";
  "★ WHAT IT SAYS ABOUT A NEW OFFENDER IS WORKED OUT RATHER THAN WRITTEN HERE, SO THAT EACH NAME ARRIVES WITH THE DAY IT WAS LAST IN THE REPO. THE SENTENCE ABOVE - TAKE IT OUT WHILE THAT IS STILL ONE SMALL CHANGE - IS ABOUT A FILE ONE COMMIT OLD, SO A BARE NAME READS AS SOMETHING SOMEBODY HAS JUST COMMITTED. THE OFFENDER THAT ACTUALLY ARRIVED WAS A YEAR OLD AND HAD ONLY CROSSED THE WEIGHT THRESHOLD BECAUSE A REPACK MOVED ITS WEIGHT, AND THE READING THAT ESTABLISHED THAT TOOK HALF AN HOUR BY HAND.";
  let reading = await git_history_heavy_absent_walked();
  let walked = property_get(reading, "walked");
  let offenders = property_get(reading, "paths");
  let path = git_history_heavy_absent_baseline_path();
  let r = await baseline_names_gate_walked_advice_generic(
    walked,
    offenders,
    path,
    git_history_heavy_absent_added_hint,
    fn_name("git_history_heavy_absent_baseline_write"),
  );
  return r;
}
