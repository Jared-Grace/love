import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { property_get } from "./property_get.mjs";
import { app_shared_description_baseline_path } from "./app_shared_description_baseline_path.mjs";
import { app_shared_description_missing } from "./app_shared_description_missing.mjs";
import { baseline_names_gate_generic } from "./baseline_names_gate_generic.mjs";
import { fn_name } from "./fn_name.mjs";
export async function app_shared_description_gate_run() {
  "QA gate: no app newly arrives with nothing to say about itself in its page head. Read-only.";
  "Measured against what the repo already carries rather than against nothing, because most of what lives here is a tool nobody ever pastes a link to, and demanding a sentence from every one of them would be asking for writing that nobody reads. What binds is the change: an app that had a sentence and lost it, or an app that is new and has none.";
  "The record only shrinks. An app cleared out of it and left written down would quietly let the silence back in under cover of being already known, so the list going stale fails too.";
  "The picture is a separate matter and is not asked for here. A page with a sentence and no picture still shows a card, only a plainer one; a page naming a picture it cannot show is broken, and that is what the sibling gate refuses.";
  "How many apps were opened travels out with the verdict. No new silence is what this says on a good day, and it is also what it would say if the list of apps arrived empty, so the count is the only part of the answer telling the two apart.";
  let swept = await app_shared_description_missing();
  let walked = property_get(swept, "walked");
  let missing = property_get(swept, "names");
  let path = app_shared_description_baseline_path();
  let hint = text_combine_multiple([
    "these apps say nothing about themselves, so anywhere their address is pasted it arrives bare - write a sentence in ",
    fn_name("app_shared_description"),
    ", or record the silence on purpose",
  ]);
  let name_write = fn_name("app_shared_description_baseline_write");
  let told = await baseline_names_gate_generic(missing, path, hint, name_write);
  let added = property_get(told, "added");
  let stale = property_get(told, "stale");
  let r = {
    walked,
    added,
    stale,
  };
  return r;
}
