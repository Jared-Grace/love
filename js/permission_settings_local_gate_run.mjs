import { fn_name } from "./fn_name.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { permission_settings_local_unwatched } from "./permission_settings_local_unwatched.mjs";
import { permission_settings_local_baseline_path } from "./permission_settings_local_baseline_path.mjs";
import { baseline_names_gate_generic } from "./baseline_names_gate_generic.mjs";
export async function permission_settings_local_gate_run() {
  "QA gate: the per-machine settings file grants nothing new that the shared, generated, gated list has never been told about";
  ("The guard reads both files, so a rule written in the local one is a standing approval exactly as real as a granted rule - and every check the repo has reads the shared file alone. ",
    fn_name("permission_settings_allow_assert"),
    " says outright that it does not read this one. So the whole apparatus of a generated list, a refusal check that runs before a rule can be written, and a ratchet over the grants that fail it, governs one of the two files the decision is actually made from.");
  ("Forty-four rules were sitting here when this was written, twenty-one of them naming a dispatcher function, three naming the promote and deploy commands, and one of those a function whose arguments the safety check says can become a command line. None of them were wrong to want; all of them were invisible.");
  ("Measured against what was already here rather than against zero, because these were written by a human on purpose and stopping the work to empty the file would be the wrong trade. What must not happen is a forty-fifth arriving unseen.");
  ("The record is seeded once and only shrinks after that, so there is no such thing as blessing a rule that has just appeared. The command that writes it refuses to grow, on purpose: a rule recorded the moment it turns up is a rule nobody ever looked at, which is the thing this gate exists to stop. That leaves two ways out of a failure and the sentence below says both, because saying three when one of them is refused sends whoever is stopped to a command that will only stop them again.");
  ("Which of the two is open depends on what the rule names. A rule naming a dispatcher function has somewhere to go: the shared list is generated from function names, so naming it there moves the approval under everything that watches. A rule naming anything else - a domain to fetch, a path to read, a command of its own - has no place in that list at all, because nothing in there can spell it. For those the only honest answer is out of the local file, and whether an approval a person granted should be taken away again is theirs to say and not this gate's.");
  ("Throws so the dispatcher seam exits nonzero");
  let unwatched = await permission_settings_local_unwatched();
  let path = permission_settings_local_baseline_path();
  let f_name = fn_name("permission_grant_add");
  let f_name2 = fn_name("permission_settings_local_baseline_write");
  let hint = text_combine_multiple([
    "these per-machine allow rules are not in the record, so a standing approval was written where nothing watches it. If the rule names a dispatcher function, hand that name to ",
    f_name,
    " and it moves to the watched list. If it names anything else - a domain, a path, a command - that list has no room for it and the only way out is to take it out of the local file. Recording it is not a third way: ",
    f_name2,
    " refuses to grow, so it can shrink this record but never take a new rule into it",
  ]);
  let name_write = fn_name("permission_settings_local_baseline_write");
  let r = await baseline_names_gate_generic(unwatched, path, hint, name_write);
  return r;
}
