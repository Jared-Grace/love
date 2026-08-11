import { null_is } from "./null_is.mjs";
import { qa_commit_named } from "./qa_commit_named.mjs";
import { qa_commit_named_path } from "./qa_commit_named_path.mjs";
import { file_overwrite_json } from "./file_overwrite_json.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { property_get } from "./property_get.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { list_add } from "./list_add.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
export async function qa_commit_named_gate_forget(gate_name) {
  "$plain gate_name";
  "Forgets every remembered judgement in which one named gate came back red, so that those commits are judged again by a gate that has since been mended.";
  "A judgement is remembered under the commit it was made about, and a commit is frozen, so the record was meant to stand forever. That holds for what a gate FOUND. It does not hold when the gate itself was broken: what is written down then is not a finding about that commit at all, it is the gate failing to look, and it will say the same thing about every commit it is ever asked.";
  "That is the worst shape a record can take, because it reads as a full verdict. The commit is refused, and it is never judged again, because it already looks judged. One such gate stopped every app shipping from every commit in the record until it was noticed.";
  "One gate is the argument rather than a rule kept somewhere about which gates to disbelieve. A broken gate is mended, and after the mending there is nothing left to keep a rule about - so a standing rule would only sit there forgiving the one saying that gate makes, which is exactly the saying that has to be believed again once it is real.";
  "The whole entry goes rather than the one gate's part of it. The gates of one judging ran together at one moment, and an entry with one gate cut out of it looks judged while no longer being a judgement of anything.";
  "Being unsure is the safe answer, which is what makes this safe to run: a commit this forgets reads as never judged, and never judged already means the deployment waits. It can cost time and it cannot let anything out.";
  let remembered = await qa_commit_named();
  let forgotten = [];
  let kept = {};
  for (let commit of object_property_names(remembered)) {
    let entry = property_get(remembered, commit);
    ("An entry with no list of red gates at all is left where it is. It is a broken record and it may well need forgetting, but not for this reason - the check above this one is the one that answers for it, and reaching past a missing list to guess would make this command answer a question that is not its own.");
    let failed = property_get_or_null(entry, "failed");
    let listless = null_is(failed);
    if (listless) {
      kept[commit] = entry;
      continue;
    }
    let blamed = list_includes(failed, gate_name);
    if (blamed) {
      list_add(forgotten, commit);
      continue;
    }
    kept[commit] = entry;
  }
  let none = list_empty_is(forgotten);
  if (none) {
    let unchanged = {
      gate_name,
      forgotten: [],
      kept: object_property_names(remembered).length,
      remaining: [],
    };
    return unchanged;
  }
  let path = qa_commit_named_path();
  await file_overwrite_json(path, kept);
  ("Asked again off the record just written, so what comes back is what the next deployment will read rather than what this meant to leave. An empty remaining is the proof");
  let after = await qa_commit_named();
  let remaining = [];
  for (let commit of object_property_names(after)) {
    let entry2 = property_get(after, commit);
    let failed2 = property_get_or_null(entry2, "failed");
    let listless2 = null_is(failed2);
    if (listless2) {
      continue;
    }
    let blamed2 = list_includes(failed2, gate_name);
    if (blamed2) {
      list_add(remaining, commit);
    }
  }
  let r = {
    gate_name,
    forgotten,
    kept: object_property_names(after).length,
    remaining,
  };
  return r;
}
