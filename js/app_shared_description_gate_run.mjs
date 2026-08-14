import { app_shared_description_baseline_path } from "./app_shared_description_baseline_path.mjs";
import { app_shared_description_missing } from "./app_shared_description_missing.mjs";
import { baseline_names_gate_generic } from "./baseline_names_gate_generic.mjs";
import { fn_name } from "./fn_name.mjs";
export async function app_shared_description_gate_run() {
  "QA gate: no app newly arrives with nothing to say about itself in its page head. Read-only.";
  "Measured against what the repo already carries rather than against nothing, because most of what lives here is a tool nobody ever pastes a link to, and demanding a sentence from every one of them would be asking for writing that nobody reads. What binds is the change: an app that had a sentence and lost it, or an app that is new and has none.";
  "The record only shrinks. An app cleared out of it and left written down would quietly let the silence back in under cover of being already known, so the list going stale fails too.";
  "The picture is a separate matter and is not asked for here. A page with a sentence and no picture still shows a card, only a plainer one; a page naming a picture it cannot show is broken, and that is what the sibling gate refuses.";
  let missing = await app_shared_description_missing();
  let path = app_shared_description_baseline_path();
  let hint =
    "these apps say nothing about themselves, so anywhere their address is pasted it arrives bare - write a sentence in app_shared_description, or record the silence on purpose";
  let name_write = fn_name("app_shared_description_baseline_write");
  let r = await baseline_names_gate_generic(missing, path, hint, name_write);
  return r;
}
