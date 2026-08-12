import { fn_name } from "./fn_name.mjs";
import { functions_duplicates_baseline_path } from "./functions_duplicates_baseline_path.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { baseline_names_gate_generic } from "./baseline_names_gate_generic.mjs";
import { functions_duplicates_names } from "./functions_duplicates_names.mjs";
export async function functions_duplicates_gate_run() {
  "QA gate for one idea arriving twice. Small units written by many hands at once produce this on their own - two people reach for the same small job, neither can see that the other already wrote it, and it lands under two names. Nothing else in the repo can notice, because each half looks perfectly reasonable alone.";
  "Measured against the baseline file rather than against zero, so the rule binds what is written today instead of waiting on a judgment about every pair already here. A name the baseline does not list fails, and a name it lists that no longer has a twin fails too, so the list can only shrink.";
  "A group is a question, not an instruction. The same steps can be two ideas on purpose - cutting a piece out of a list and cutting a piece out of some words are written alike and must stay apart - so when this goes red the answer is sometimes to collapse the pair and sometimes to make the two genuinely differ. What it must never be is a wider baseline.";
  let offenders = await functions_duplicates_names();
  let path = functions_duplicates_baseline_path();
  ("The hint used to carry two of the three answers, and the missing one was the answer this repo actually built. It opened by stating the finding as a fact - that these do work another name already does - and then offered collapsing first, so a reader with a deliberate pair in front of them was being told to merge it. Real case, the day this changed: two lookups for what a person on the map carries, each handing ITSELF over as the drawer it reads from, so two names meant two drawers; collapsing them would have put the crosses and the pictures in one drawer and dragged the wrong one every time somebody walked. The mark was already here, already gated for staleness, and unmentioned at the one moment anybody needs it. A hint is read in a stack trace by somebody who has not opened this file, so what the prose above knows and the hint does not say is knowledge the repo does not have.");
  let f_name = fn_name("function_replace");
  let f_name2 = fn_name("functions_parallel_mark");
  let hint = text_combine_multiple([
    "these functions share a shape, which is a question and not an instruction - sometimes one idea written twice, sometimes two ideas that are written alike. three answers. collapse the pair onto one name with ",
    f_name,
    "; or make them genuinely differ; or, when they are alike ON PURPOSE and collapsing them would be a bug, mark the whole group with ",
    f_name2,
    " - which takes every name in the group at once, because one function alone cannot say a pair was meant. read the bodies before choosing: a shape whose meaning comes from WHO is asking is a correct pair, not a spare copy. what it must never be is a wider baseline",
  ]);
  let name_write = fn_name("functions_duplicates_baseline_write");
  let result = await baseline_names_gate_generic(
    offenders,
    path,
    hint,
    name_write,
  );
  return result;
}
