import { qa_commit_named } from "./qa_commit_named.mjs";
import { qa_commit_named_path } from "./qa_commit_named_path.mjs";
import { qa_snapshot_ensure } from "./qa_snapshot_ensure.mjs";
import { qa_snapshot_gate_told } from "./qa_snapshot_gate_told.mjs";
import { qa_gate_failed_sections } from "./qa_gate_failed_sections.mjs";
import { functions_names_in_text } from "./functions_names_in_text.mjs";
import { functions_names } from "./functions_names.mjs";
import { property_get } from "./property_get.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { file_overwrite_json } from "./file_overwrite_json.mjs";
export async function qa_commit_named_at(commit) {
  "Judges the commit you name against a frozen copy of it, and keeps which gates were red together with the functions each of them named";
  "The names are what makes the answer usable by more than one asker. A red gate on its own says only that something in the repo is wrong; the functions it named say WHAT is wrong, and any later question about whether that reaches a particular thing is then a matter of looking rather than of running the gates again.";
  "Naming the commit is what makes the keeping worth anything: with this many of us committing, the newest commit changes several times while one run finishes, so an answer asked about whatever is newest is almost always an answer nobody has yet.";
  "A gate that was red and named no function is kept as having named none, and every later reader must treat that as unproven rather than as harmless - a count thrown without names cannot be shown to miss anything.";
  let known_named = await qa_commit_named();
  let remembered = property_get_or_null(known_named, commit);
  if (remembered) {
    let r = {
      commit,
      remembered: true,
      judged: remembered,
    };
    return r;
  }
  let folder = await qa_snapshot_ensure(commit);
  let told = await qa_snapshot_gate_told(folder);
  let green = property_get(told, "green");
  let failed = property_get(told, "failed");
  let printed = property_get(told, "printed");
  let sections = qa_gate_failed_sections(printed);
  let known = await functions_names();
  let named = {};
  for (let section of sections) {
    let gate = property_get(section, "name");
    let said = property_get(section, "said");
    let names = functions_names_in_text(said, known);
    named[gate] = names;
  }
  let judged = {
    green,
    failed,
    named,
  };
  known_named[commit] = judged;
  let path = qa_commit_named_path();
  await file_overwrite_json(path, known_named);
  let r2 = {
    commit,
    remembered: false,
    judged,
  };
  return r2;
}
