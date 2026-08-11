import { property_get } from "./property_get.mjs";
import { qa_app_commit_gate_run_at } from "./qa_app_commit_gate_run_at.mjs";
import { qa_app_commit_promote } from "./qa_app_commit_promote.mjs";
import { true_is_assert_json } from "./true_is_assert_json.mjs";
export async function qa_app_commit_promote_judged(search, commit) {
  "$plain search";
  "$plain commit";
  "Builds one app out of the one commit you name and puts those pieces where the sending reads from, and only if that commit was found sound for that app";
  "The asking happens BEFORE anything is put where the sending reads from, which is the other way round from the older path. There, a refused sending had already overwritten what was waiting to go, so being told no still changed what would go out next time somebody said yes";
  "This stops short of sending on purpose. Sending puts out the whole folder in one act, so several apps prepared one after another and sent once is the same sending as one app prepared and sent - and it costs one upload rather than one each. Keeping the two apart is what makes that possible; joining them again would make a run of five apps pay for five";
  let judged = await qa_app_commit_gate_run_at(search, commit);
  let deployable = property_get(judged, "deployable");
  true_is_assert_json(deployable, judged);
  let hashes = await qa_app_commit_promote(search, commit);
  let r = {
    app: property_get(judged, "app"),
    commit,
    hashes,
  };
  return r;
}
