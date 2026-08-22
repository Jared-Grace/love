import { bible_gathered_gaps_named } from "./bible_gathered_gaps_named.mjs";
import { baseline_names_gate_walked_generic } from "./baseline_names_gate_walked_generic.mjs";
import { fn_name } from "./fn_name.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { bible_gathered_gaps_baseline_path } from "./bible_gathered_gaps_baseline_path.mjs";
export async function bible_gathered_gaps_gate_run() {
  arguments_assert(arguments, 0);
  ("Gate: gathering a book leaves no verse behind without saying so.");
  ("★ THIS IS THE ONE FAILURE NOTHING ELSE CAN REPORT, WHICH IS THE WHOLE REASON IT EXISTS. Gathering too little looks exactly like gathering. Every other mistake in a gathered event shows up as something wrong on screen; a chapter nobody pointed at simply never appears, and no error is ever raised about a scene that was not built. So the corpus has to be asked what it left out, because it will never volunteer it.");
  ("★ IT IS MEASURED AGAINST WHAT THE CORPUS ALREADY LEAVES OUT AND NEVER AGAINST ZERO, BECAUSE THE EXISTING HOLES ARE DELIBERATE. Every one of them is a line of descent - the line of Cain, the sons of Israel counted into Egypt, GEN10 and GEN36 entire - left out by the filter that keeps only what HAPPENS, WITH AGENTS. Zeroing the gate would demand those be gathered and so would overturn a judgement by way of a test, which is not what a test is for. The record only shrinks: a hole it does not hold fails, and a hole it holds that has since been gathered fails too, because an entry left behind lets the same omission back in.");
  ("★ THE RECORD IS ALSO THE LIST THE SCENE BRIEF ASKED FOR AND COULD NOT GET. That brief says the absences should be carried as data beside the events rather than named only in prose at the foot of each span, so that a builder can be offered them instead of never learning they exist. This file is that data, and it is derived rather than transcribed, so it cannot fall out of step with what was actually gathered.");
  ("The number handed back is how many chapters the walk reached, not how many were wrong. A count of faults would sit at whatever the baseline holds and would read the same whether the walk covered the whole corpus or died after one book.");
  ("Two holes remain invisible to this and are worth knowing about. A gap at the END of a chapter needs that chapter's verse count, which lives in the Bible text on a device and not in this repo; a gap at the end of a BOOK needs the book's chapter count the same way. So a green result here means no hole was FOUND, never that no verse was missed.");
  let told = await bible_gathered_gaps_named();
  let path = bible_gathered_gaps_baseline_path();
  let name_write = fn_name("bible_gathered_gaps_baseline_write");
  let r = await baseline_names_gate_walked_generic(
    told.walked,
    told.names,
    path,
    "the gathered corpus has holes it did not have before - gather these verses, or if they are being left out on purpose say why in the span's prose and record them",
    name_write,
  );
  return r;
}
