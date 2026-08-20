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
  "Being sound is asked for, and so is being written down, because the sending asks the record rather than asking here. A judging is left out of the record on purpose when the gate shares did not all come back or when a neighbouring repo moved while they ran, and either way what comes back still says whether every gate was green - so pieces can be put where the sending reads from on a verdict the sending itself will never find, and then stand there refusing every sending, this app's and every other app's alike, until somebody spends the quarter of an hour again by hand. That happened, on the deployment this line was written for.";
  "Refused here rather than warned about, because the harm is done by the putting and not by the sending. Nothing has been written where the sending reads from at this point, so refusing costs the run that was going to fail anyway; letting it through costs every app waiting to go out, for as long as nobody notices.";
  let judged = await qa_app_commit_gate_run_at(search, commit);
  let deployable = property_get(judged, "deployable");
  true_is_assert_json(deployable, judged);
  let filed = property_get(judged, "filed");
  true_is_assert_json(filed, judged);
  let hashes = await qa_app_commit_promote(search, commit);
  let r = {
    app: property_get(judged, "app"),
    commit,
    hashes,
  };
  return r;
}
