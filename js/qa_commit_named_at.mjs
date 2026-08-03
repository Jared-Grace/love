import { qa_gate_said_advice_remove } from "./qa_gate_said_advice_remove.mjs";
import { qa_commit_named } from "./qa_commit_named.mjs";
import { qa_commit_named_path } from "./qa_commit_named_path.mjs";
import { qa_commit_at_generic } from "./qa_commit_at_generic.mjs";
import { qa_gate_failed_sections } from "./qa_gate_failed_sections.mjs";
import { functions_names_in_text } from "./functions_names_in_text.mjs";
import { functions_names } from "./functions_names.mjs";
import { property_get } from "./property_get.mjs";
export async function qa_commit_named_at(commit) {
  "Judges the commit you name against a frozen copy of it, and keeps which gates were red together with the functions each of them named";
  "The names are what makes the answer usable by more than one asker. A red gate on its own says only that something in the repo is wrong; the functions it named say WHAT is wrong, and any later question about whether that reaches a particular thing is then a matter of looking rather than of running the gates again.";
  "A gate that was red and named no function is kept as having named none, and every later reader must treat that as unproven rather than as harmless - a count thrown without names cannot be shown to miss anything.";
  "The remembering itself lives in what this calls, because its neighbour wanted exactly the same remembering and differed only in what it kept. What is left here is which record to look in, and how a run of gates is turned into the names it spoke";
  let known_named = await qa_commit_named();
  let path = qa_commit_named_path();
  async function judge(told) {
    let green = property_get(told, "green");
    let failed = property_get(told, "failed");
    let printed = property_get(told, "printed");
    let sections = qa_gate_failed_sections(printed);
    let known = await functions_names();
    let named = {};
    for (let section of sections) {
      let gate = property_get(section, "name");
      let said = property_get(section, "said");
      ("A gate's advice about how to put the matter right is not an accusation, and it is written in ordinary English - which names functions here, because this repo has atoms called not, and, or and each. Reading it as an accusation held every app out of a deployment for words a gate used while being helpful");
      let accused = qa_gate_said_advice_remove(said);
      let names = functions_names_in_text(accused, known);
      named[gate] = names;
    }
    let judged = {
      green,
      failed,
      named,
    };
    return judged;
  }
  let memo = await qa_commit_at_generic(commit, known_named, path, judge);
  let r = {
    commit,
    remembered: property_get(memo, "remembered"),
    judged: property_get(memo, "kept"),
  };
  return r;
}
