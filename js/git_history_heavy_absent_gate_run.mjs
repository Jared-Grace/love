import { git_history_heavy_absent } from "./git_history_heavy_absent.mjs";
import { git_history_heavy_absent_baseline_path } from "./git_history_heavy_absent_baseline_path.mjs";
import { fn_name } from "./fn_name.mjs";
import { baseline_names_gate_generic } from "./baseline_names_gate_generic.mjs";
export async function git_history_heavy_absent_gate_run() {
  "QA gate: a large file committed and then deleted must not settle quietly into this repo's past.";
  "Deleting a file takes it out of the present and leaves it in every copy of the repo for ever. That is how a scripture translation nobody had the right to publish came to be handed out by two public sites for a year - it was added, deleted, and nothing anywhere noticed either. Nothing about the working tree shows it, so it is asked of the history directly.";
  "Measured against the baseline rather than against nought, because the repo already carried some of these when this was written and taking them out is a judgment about what each one was. What it holds is the thing worth holding - today's change is not allowed to add one more.";
  "Going red is not bad news. It means a large file was noticed while it is one commit old, which is the only moment taking it out is cheap.";
  let offenders = await git_history_heavy_absent();
  let path = git_history_heavy_absent_baseline_path();
  let name_write = fn_name("git_history_heavy_absent_baseline_write");
  let r = await baseline_names_gate_generic(
    offenders,
    path,
    "each of these is a large file this repo's history is carrying that the present no longer has, so it travels in every copy and nothing shows it - take it out of the history while that is still one small change",
    name_write,
  );
  return r;
}
