import { qa_gate_kept_remembered } from "./qa_gate_kept_remembered.mjs";
import { qa_gate_told_kept } from "./qa_gate_told_kept.mjs";
import { qa_gate_told_sectioned } from "./qa_gate_told_sectioned.mjs";
import { qa_commit_beside_heads } from "./qa_commit_beside_heads.mjs";
import { qa_gate_frozen_ensure } from "./qa_gate_frozen_ensure.mjs";
import { qa_gate_told_filed } from "./qa_gate_told_filed.mjs";
import { qa_gate_history_blind_print } from "./qa_gate_history_blind_print.mjs";
import { date_milliseconds_since } from "./date_milliseconds_since.mjs";
import { qa_gate_parts_print } from "./qa_gate_parts_print.mjs";
import { date_now_milliseconds } from "./date_now_milliseconds.mjs";
import { list_concat_property } from "./list_concat_property.mjs";
import { list_size_greater_than } from "./list_size_greater_than.mjs";
import { list_join_comma } from "./list_join_comma.mjs";
import { qa_gates_here_failed } from "./qa_gates_here_failed.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
import { qa_gate_in_flight_print } from "./qa_gate_in_flight_print.mjs";
import { invoke_multiple_unordered_async } from "./invoke_multiple_unordered_async.mjs";
import { functions_names } from "./functions_names.mjs";
import { list_get } from "./list_get.mjs";
import { qa_gate_blame_print } from "./qa_gate_blame_print.mjs";
import { qa_snapshot_gate_told } from "./qa_snapshot_gate_told.mjs";
import { property_get } from "./property_get.mjs";
import { qa_gates_machine } from "./qa_gates_machine.mjs";
import { qa_gates_told } from "./qa_gates_told.mjs";
import { greater_than } from "./greater_than.mjs";
import { qa_gates_read } from "./qa_gates_read.mjs";
export async function qa_gate_run_unlocked() {
  "The whole-repo run itself, taken as though this machine were its own";
  "It is the thing under the lock rather than the thing to call. Waiting for a turn and asking the questions are two ideas, and separating them keeps the questions readable - everything below is about gates, and nothing below has to mention that anybody else exists";
  "Asking for this by name skips the waiting, and there is one honest use for that: a machine with nobody else on it, where the wait would only be a wait. Any other use puts two full runs on the processors at once, which is the thing the lock was measured to prevent";
  "It asks about the working folder as it stands, work nobody has committed included, which is what makes it the thing to run before committing - and when there is no such work, about the commit the folder already equals, which is the same code under a name anybody can ask for again";
  "A clean answer here is meant to mean the code is sound - so every question the files alone can answer is put to a frozen copy of the folder rather than to the folder itself. Asked of the living folder, neither answer could be checked: a complaint might be nothing but a neighbour saving a file, and a clean answer might be about a file broken a moment after it was read. Asked of a copy nobody can touch, both answers can be had again and come out the same";
  "The three questions about this machine and about where the folder sits are asked here, where the answer is, and their names are added to whatever the copy complained about so one complaint covers both halves";
  "The three questions about this machine are put while the copy is being asked its own, because neither waits on the other and the slowest of the three took as long as a third of the whole run while nothing else was happening. What each half prints still arrives whole and after the other, since the asking here holds back everything it would print until it is finished";
  "How long each part of the run took is printed at the end, because the whole number on its own sends whoever wants it faster to the wrong place. Measured once: the gates themselves were four and a half minutes of a nineteen minute run, and the other three quarters went on what happens after them - so every reading of the gates, and every plan to make one of them faster, was aimed at a quarter of the cost. The parts are timed rather than reasoned about because the reasoning was wrong twice on the same afternoon";
  "Where the neighbours stand is asked before anything is frozen, because it is half of the name this run's answer would be filed under and the freezing is itself part of the window they could move in.";
  let began = date_now_milliseconds();
  let beside = await qa_commit_beside_heads();
  let before = property_get(beside, "heads");
  ("Which way the folder is frozen is a question about the folder rather than a setting, and it lives one name along. When nobody has work in flight the copy stands on a commit, which is what makes this run's answer the same kind of thing as a judgement of that commit; otherwise it is the working folder as it stands, and belongs to no commit at all");
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
  let printed = property_get(told, "printed");
  console.log(printed);
  ("What was found is written into the shared record of judged commits, when the copy stood on one. This run already does everything a judging does and until now threw the answer away, leaving the next person to ask about the same commit to pay a quarter of an hour for the same questions.");
  ("An answer that came out of the record is not written back into it. It is already there, under this very commit, and re-filing it would spend a reading and a writing to leave the file exactly as it was.");
  let filing = remembered ? null : commit;
  await qa_gate_told_filed(filing, told, before);
  let at_blame = date_now_milliseconds();
  ("Who last touched the things the copy complained about is asked out here rather than in there. A copy of the working folder is made without the history on purpose, so the question has no answer inside it - and the answer it gives instead is an empty one, which reads exactly like nobody being at fault. Asking out here is right for the other kind of copy too, since the history a worktree can reach is this repo's own and the question is about the living folder either way");
  ("One kind of red is diagnosed here rather than left to whoever reads the list, and it is the only one where asking again makes things look better instead of clearer: a gate whose question is about the history goes red in a copy made without any, and goes quiet when asked out here, which reads as a tear in the copy. Read that way it comes back on every run forever.");
  ("Everything a gate printed is looked at, not only the sentence it threw. A gate that finds eight faults prints the eight and throws a count, so the sentence on its own names nobody and the answer comes back empty - which reads as nobody being at fault, the very thing this is here to stop");
  let sections = property_get(told, "sections");
  let any = list_size_greater_than(sections, 0);
  if (any) {
    let known = await functions_names();
    let flying = [];
    for (let section of sections) {
      let name = property_get(section, "name");
      let said = property_get(section, "said");
      console.log("\n=== who last touched what " + name + " named ===");
      let some = await qa_gate_blame_print(said, known);
      list_add_multiple(flying, some);
      qa_gate_history_blind_print(name, said);
    }
    qa_gate_in_flight_print(flying);
  }
  let blamed_ms = date_milliseconds_since(at_blame);
  let failed_copy = property_get(told, "failed");
  let failed = list_concat_property(failed_copy, here, "failed");
  if (greater_than(failed.length, 0)) {
    ("Every red is asked once more out here, in the folder as it stands, because the copy was taken while several of us were writing to it and a file caught half-copied answers the same way however many times it is asked in there. What that ask finds is printed and nothing else: the verdict below stays exactly what the frozen copy said, since a gate quiet out here may only be quiet because somebody is mid-edit, and a clean answer from this gate is supposed to mean the code is sound");
    let joined = list_join_comma(failed);
    console.log(
      "\n=== asking the red gates again, here in the living folder ===",
    );
    let at_again = date_now_milliseconds();
    await qa_gates_here_failed(joined);
    let again_ms = date_milliseconds_since(at_again);
    qa_gate_parts_print(asked_ms, blamed_ms, again_ms);
    throw new Error("qa gate: " + failed.join(", ") + " failed");
  }
  qa_gate_parts_print(asked_ms, blamed_ms, 0);
  console.log("\nall gates passed");
  ("How long each gate took is deliberately NOT returned here, and the reason is worth writing down because the obvious fix is wrong. The half asked of this machine has its timings in hand, but the half asked of the copy is several separate processes whose only channel back is the text they printed - so returning what is available would hand back three gates' numbers in a shape that reads like all of them. A number that looks complete and is not is worse than no number. Making it whole means giving the shares a way to answer in something other than printed text; until then the whole-run timings live in the printed block, and one gate at a time is asked for by name instead");
  let gates = qa_gates_read();
  let r = {
    gates: gates.length,
    failed: 0,
    frozen: folder,
  };
  return r;
}
