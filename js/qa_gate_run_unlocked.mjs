import { qa_gate_machine_red_print } from "./qa_gate_machine_red_print.mjs";
import { qa_gate_run_timings_write } from "./qa_gate_run_timings_write.mjs";
import { qa_gate_printed_print } from "./qa_gate_printed_print.mjs";
import { qa_gate_failed_assert } from "./qa_gate_failed_assert.mjs";
import { qa_gate_sections_blame_print } from "./qa_gate_sections_blame_print.mjs";
import { qa_gate_kept_remembered } from "./qa_gate_kept_remembered.mjs";
import { qa_gate_told_kept } from "./qa_gate_told_kept.mjs";
import { qa_gate_told_sectioned } from "./qa_gate_told_sectioned.mjs";
import { qa_commit_beside_heads } from "./qa_commit_beside_heads.mjs";
import { qa_gate_frozen_ensure } from "./qa_gate_frozen_ensure.mjs";
import { qa_gate_told_filed } from "./qa_gate_told_filed.mjs";
import { date_milliseconds_since } from "./date_milliseconds_since.mjs";
import { qa_gate_parts_print } from "./qa_gate_parts_print.mjs";
import { date_now_milliseconds } from "./date_now_milliseconds.mjs";
import { invoke_multiple_unordered_async } from "./invoke_multiple_unordered_async.mjs";
import { list_get } from "./list_get.mjs";
import { qa_snapshot_gate_told } from "./qa_snapshot_gate_told.mjs";
import { property_get } from "./property_get.mjs";
import { qa_gates_machine } from "./qa_gates_machine.mjs";
import { qa_gates_told } from "./qa_gates_told.mjs";
import { qa_gates_read } from "./qa_gates_read.mjs";
export async function qa_gate_run_unlocked() {
  "The whole-repo run itself, taken as though this machine were its own";
  "It is the thing under the lock rather than the thing to call. Waiting for a turn and asking the questions are two ideas, and separating them keeps the questions readable - everything below is about gates, and nothing below has to mention that anybody else exists";
  "Asking for this by name skips the waiting, and there is one honest use for that: a machine with nobody else on it, where the wait would only be a wait. Any other use puts two full runs on the processors at once, which is the thing the lock was measured to prevent";
  "It asks about the commit the folder is at, and never about work nobody has committed. So its answer is about code under a name anybody can ask for again, which is what lets it be written down and handed to the next person who asks about the same name - and it is why the thing to do before running this is to commit";
  "A clean answer here is meant to mean the code is sound - so every question the files alone can answer is put to a frozen copy of the folder rather than to the folder itself. Asked of the living folder, neither answer could be checked: a complaint might be nothing but a neighbour saving a file, and a clean answer might be about a file broken a moment after it was read. Asked of a copy nobody can touch, both answers can be had again and come out the same";
  "The three questions about this machine and about where the folder sits are asked here, where the answer is, and their names are added to whatever the copy complained about so one complaint covers both halves";
  "The three questions about this machine are put while the copy is being asked its own, because neither waits on the other and the slowest of the three took as long as a third of the whole run while nothing else was happening. What each half prints still arrives whole and after the other, since the asking here holds back everything it would print until it is finished";
  "How long each part of the run took is printed at the end, because the whole number on its own sends whoever wants it faster to the wrong place. Measured once: the gates themselves were four and a half minutes of a nineteen minute run, and the other three quarters went on what happens after them - so every reading of the gates, and every plan to make one of them faster, was aimed at a quarter of the cost. The parts are timed rather than reasoned about because the reasoning was wrong twice on the same afternoon";
  "Where the neighbours stand is asked before anything is frozen, because it is half of the name this run's answer would be filed under and the freezing is itself part of the window they could move in.";
  let began = date_now_milliseconds();
  let beside = await qa_commit_beside_heads();
  let before = property_get(beside, "heads");
  ("How the folder is frozen lives one name along. The copy stands on a commit, which is what makes this run's answer the same kind of thing as a judgement of that commit, and so a thing worth writing down");
  let frozen = await qa_gate_frozen_ensure();
  let folder = property_get(frozen, "folder");
  let commit = property_get(frozen, "commit");
  let machine = qa_gates_machine();
  ("An answer somebody else already paid for is this run's answer, now that the copy standing on a commit is the same kind of artifact a judging asks. So the record is looked in before the copy is asked, and what comes back is shaped exactly as though it had been - everything below this cannot tell which it is holding, which is the only way a saved run is safe to make.");
  let remembered = await qa_gate_kept_remembered(commit, before);
  async function copy_asked() {
    if (remembered) {
      let known_already = qa_gate_told_kept(remembered);
      return known_already;
    }
    let told_fresh = await qa_snapshot_gate_told(folder);
    let asked = qa_gate_told_sectioned(told_fresh);
    return asked;
  }
  async function machine_asked() {
    let asked = await qa_gates_told(machine);
    return asked;
  }
  let halves = await invoke_multiple_unordered_async([
    copy_asked,
    machine_asked,
  ]);
  let asked_ms = date_milliseconds_since(began);
  let told = list_get(halves, 0);
  let here = list_get(halves, 1);
  qa_gate_printed_print(told, here);
  ("How long each gate took is written down here rather than printed or returned. It is written before anything can throw, because a run that went red is the one whose times somebody came looking for.");
  await qa_gate_run_timings_write(told, here);
  ("What was found is written into the shared record of judged commits. This run already does everything a judging does and once threw the answer away, leaving the next person to ask about the same commit to pay a quarter of an hour for the same questions.");
  ("An answer that came out of the record is not written back into it. It is already there, under this very commit, and re-filing it would spend a reading and a writing to leave the file exactly as it was.");
  let filing = remembered ? null : commit;
  await qa_gate_told_filed(filing, told, before);
  let at_blame = date_now_milliseconds();
  ("Who last touched what the gates complained about is asked out here rather than inside the frozen copy, and why that matters is written where the asking now lives. It is timed from here because the time belongs to this run.");
  await qa_gate_sections_blame_print(told);
  ("Which of the reds belong to this machine rather than to the commit is said straight after the blaming, because it is the answer to the question the blaming leaves open: a gate named in the thrown sentence with no section above it looks like one nobody is at fault for, when really it was never asked of the copy at all.");
  qa_gate_machine_red_print(here);
  let blamed_ms = date_milliseconds_since(at_blame);
  qa_gate_failed_assert(told, here, asked_ms, blamed_ms);
  qa_gate_parts_print(asked_ms, blamed_ms);
  console.log("\nall gates passed");
  ("How long each gate took is still deliberately NOT returned here, and the reason has changed. It used to be that it could not be: the half asked of this machine had its timings in hand, the half asked of the copy is several separate processes whose only channel back is the text they printed, and returning the half in hand would have handed back three gates' numbers in a shape that reads like all of them - a number that looks complete and is not being worse than no number. That is answered now. Each share prints one marked line per gate, the way it already printed one per complaining gate, and both halves are read back into one list.");
  ("What is left is a question of size rather than of truth. A hundred gates is not a verdict, and a run whose answer is a hundred rows is one nobody can read at a glance - so the list is written down and the verdict comes back. Whoever wants the rows asks for them by name.");
  ("A green run no longer prints that block at all. It ran to hundreds of lines that nobody read, and every reader trimmed it away by hand afterwards - a trim written beside the command rather than inside any name, so nothing could reuse it and nothing recorded that it was wanted. What is left on a green run is the two lines that are the answer.");
  let gates = qa_gates_read();
  let r = {
    gates: gates.length,
    failed: 0,
    frozen: folder,
  };
  return r;
}
