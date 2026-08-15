import { arguments_assert } from "./arguments_assert.mjs";
import { functions_auto_pending_changed_repair } from "./functions_auto_pending_changed_repair.mjs";
import { git_folder_files_changed_since } from "./git_folder_files_changed_since.mjs";
import { git_folder_love } from "./git_folder_love.mjs";
import { ai_finish_commit } from "./ai_finish_commit.mjs";
import { catch_null_async } from "./catch_null_async.mjs";
import { text_empty_not_is } from "./text_empty_not_is.mjs";
import { qa_gate_run } from "./qa_gate_run.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { property_get } from "./property_get.mjs";
import { null_is } from "./null_is.mjs";
import { not } from "./not.mjs";
export async function ai_finish_baseline_command_args(
  baseline,
  f_name,
  args_comma,
) {
  "The end of a piece of work, asked for once: settle the files being edited, say what landed underneath you, commit, and put the whole-repo question. Name the commit you started from, or give nothing for that; name the command that made the change, or give nothing and it is filed as hand-made.";
  "These four are already what everybody does after every task, in this order, every time. Asked separately they are four turns of a conversation, and a turn does not cost what it prints - it costs sending everything said so far all over again. Measured on the two files that load into every session before any work starts: thirty seven thousand characters of instructions and twenty three thousand of notes, riding along on each one. So three of the four turns here were being paid for repeatedly to arrange steps that never vary.";
  "Committing comes before the whole-repo question rather than after it, and that is the one place where doing this by hand had it backwards. The question is put to a frozen copy standing on the commit the folder is at, never on the folder itself - so asked before committing it answers about the previous commit, and a clean answer means the work in flight was not looked at. It says so itself, where it freezes. Run in this order the answer is about the code that was just written.";
  "So a red answer arrives after the commit rather than instead of it, and that is the right way round here too. Everybody commits to the one branch in small steps, nothing has left this machine, and the repair is another small commit - whereas holding the work back until it is clean is how a half-hour of it ends up in a neighbour's sweep under a name that says nothing.";
  "What landed underneath you is read before the commit and only reported, never judged. Whether a neighbour's change breaks yours is a question about what you read to make your decision, and nothing here knows that - so it hands over the files and stops. It is read before rather than after so that it is about the span you actually worked in.";
  "The pass that settles files being edited is the one thing that does stop everything. A file it could not settle is one it found half written, and committing it would put a broken file under somebody's name and then ask the whole repo about it.";
  "A red answer is caught rather than thrown, because everything worth reading about it has already been printed by the time it throws. Thrown, that detail arrives buried under a stack; caught, it stands above a plain verdict.";
  arguments_assert(arguments, 3);
  let repair = await functions_auto_pending_changed_repair();
  let repaired = property_get(repair, "repaired");
  let remaining = property_get(repair, "remaining");
  let settled = list_empty_is(remaining);
  if (not(settled)) {
    let unsettled = {
      ok: false,
      stopped_at: functions_auto_pending_changed_repair.name,
      repaired,
      remaining,
      peers: null,
      committed: null,
      gate: null,
    };
    return unsettled;
  }
  let peers = null;
  let noted = text_empty_not_is(baseline);
  if (noted) {
    let folder = await git_folder_love();
    peers = await git_folder_files_changed_since(folder, baseline);
  }
  let committed = await ai_finish_commit(f_name, args_comma);
  async function gate() {
    let asked = await qa_gate_run();
    return asked;
  }
  let told = await catch_null_async(gate);
  let red = null_is(told);
  let r = {
    ok: not(red),
    stopped_at: red ? qa_gate_run.name : "",
    repaired,
    remaining,
    peers,
    committed,
    gate: told,
  };
  return r;
}
