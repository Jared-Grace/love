import { arguments_assert } from "./arguments_assert.mjs";
import { qa_app_commit_gate_run_at } from "./qa_app_commit_gate_run_at.mjs";
import { property_get } from "./property_get.mjs";
import { true_is_assert_json } from "./true_is_assert_json.mjs";
import { qa_app_commit_promote } from "./qa_app_commit_promote.mjs";
import { app_shared_name_latest_text } from "./app_shared_name_latest_text.mjs";
import { qa_app_e2e_happy_run } from "./qa_app_e2e_happy_run.mjs";
import { folder_public_root_noting_set } from "./folder_public_root_noting_set.mjs";
import { html_public_from_latest } from "./html_public_from_latest.mjs";
import { firebase_deploy_locked_generic } from "./firebase_deploy_locked_generic.mjs";
import { folder_public_root_noting_clear } from "./folder_public_root_noting_clear.mjs";
import { qa_promoted_app_write } from "./qa_promoted_app_write.mjs";
export async function qa_app_commit_promote_judged(search, commit) {
  "$plain search";
  "$plain commit";
  "Builds one app out of the one commit you name, walks what it built, and puts those very pieces where the sending reads from - and only if that commit was found sound for that app";
  "The asking happens BEFORE anything is put where the sending reads from, which is the other way round from the older path. There, a refused sending had already overwritten what was waiting to go, so being told no still changed what would go out next time somebody said yes";
  "This stops short of sending on purpose. Sending puts out the whole folder in one act, so several apps prepared one after another and sent once is the same sending as one app prepared and sent - and it costs one upload rather than one each. Keeping the two apart is what makes that possible; joining them again would make a run of five apps pay for five";
  "Being sound is asked for, and so is being written down, because the sending asks the record rather than asking here. A judging is left out of the record on purpose when the gate shares did not all come back or when a neighbouring repo moved while they ran, and either way what comes back still says whether every gate was green - so pieces can be put where the sending reads from on a verdict the sending itself will never find, and then stand there refusing every sending, this app's and every other app's alike, until somebody spends the quarter of an hour again by hand. That happened, on the deployment this line was written for.";
  "Refused here rather than warned about, because the harm is done by the putting and not by the sending. Nothing has been written where the sending reads from at this point, so refusing costs the run that was going to fail anyway; letting it through costs every app waiting to go out, for as long as nobody notices.";
  "THE ORDER IS BUILD, THEN WALK, THEN MOVE UP, and each step is why the next one means anything. The build lands in the folder a build waits in, which is served under its own name on this machine, so the walk opens the very pieces that are about to go rather than a copy of the same code somebody happened to have on their disk. Until 2026-09-03 the build went straight to the folder people are served from and the walk opened the working folder instead, which proved that what somebody was editing played and then sent something else.";
  "Moving up is done by the one function every way of putting an app in front of people goes through, rather than by copying here. That function writes down what it moved, and that note is what a later sending reads to refuse a folder holding anything else - so a second way in that copied for itself would be a second way to leave the note describing the build before.";
  "Which commit these pieces came out of is written down last, after they are actually in place, so a run that fell over partway through leaves no note claiming a build that did not finish.";
  arguments_assert(arguments, 2);
  let judged = await qa_app_commit_gate_run_at(search, commit);
  let deployable = property_get(judged, "deployable");
  true_is_assert_json(deployable, judged);
  let filed = property_get(judged, "filed");
  true_is_assert_json(filed, judged);
  let app_name = property_get(judged, "app");
  let hashes = await qa_app_commit_promote(search, commit);
  ("Before anything is put where the sending reads from, the app is walked the whole way through as somebody who gets every question right. Every gate there is reads code without ever opening a page, so a page that opens and cannot be used passes all of them: the replacing game drew every symbol as one no rule could touch, and so could not be played at all, for nine days with nothing red. An app with no walk of its own goes straight past.");
  let stage_name = app_shared_name_latest_text();
  await qa_app_e2e_happy_run(app_name, stage_name);
  folder_public_root_noting_set(app_name);
  async function lambda() {
    let copied = await html_public_from_latest(search);
    return copied;
  }
  await firebase_deploy_locked_generic(
    lambda,
    qa_app_commit_promote_judged.name,
  );
  folder_public_root_noting_clear();
  await qa_promoted_app_write(app_name, commit, hashes);
  let r = {
    app: app_name,
    commit,
    hashes,
  };
  return r;
}
