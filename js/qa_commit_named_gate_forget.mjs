import { null_is } from "./null_is.mjs";
import { qa_commit_named_forget } from "./qa_commit_named_forget.mjs";
import { object_merge } from "./object_merge.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { list_includes } from "./list_includes.mjs";
export async function qa_commit_named_gate_forget(gate_name) {
  "$plain gate_name";
  "Forgets every remembered judgement in which one named gate came back red, so that those commits are judged again by a gate that has since been mended.";
  "A judgement is remembered under the commit it was made about, and a commit is frozen, so the record was meant to stand forever. That holds for what a gate FOUND. It does not hold when the gate itself was broken: what is written down then is not a finding about that commit at all, it is the gate failing to look, and it will say the same thing about every commit it is ever asked.";
  "That is the worst shape a record can take, because it reads as a full verdict. The commit is refused, and it is never judged again, because it already looks judged. One such gate stopped every app shipping from every commit in the record until it was noticed.";
  "One gate is the argument rather than a rule kept somewhere about which gates to disbelieve. A broken gate is mended, and after the mending there is nothing left to keep a rule about - so a standing rule would only sit there forgiving the one saying that gate makes, which is exactly the saying that has to be believed again once it is real.";
  function blamed_lambda(entry) {
    "An entry with no list of red gates at all is answered no. It is a broken record and it may well need forgetting, but not for this reason - there is another question that answers for it, and reaching past a missing list to guess would make this one answer a question that is not its own.";
    let failed = property_get_or_null(entry, "failed");
    let listless = null_is(failed);
    if (listless) {
      return false;
    }
    let blamed = list_includes(failed, gate_name);
    return blamed;
  }
  let done = await qa_commit_named_forget(blamed_lambda);
  ("The gate is given back beside the count so that what was asked stands next to what it cost, which is the whole of what a reader needs to believe the number.");
  let named = {
    gate_name,
  };
  let r = object_merge(named, done);
  return r;
}
