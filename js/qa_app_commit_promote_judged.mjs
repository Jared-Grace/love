import { arguments_assert } from "./arguments_assert.mjs";
import { catch_null_async } from "./catch_null_async.mjs";
import { load_average_recent } from "./load_average_recent.mjs";
import { function_call_timed_add } from "./function_call_timed_add.mjs";
import { qa_app_commit_gate_run_at } from "./qa_app_commit_gate_run_at.mjs";
import { property_get } from "./property_get.mjs";
import { true_is_assert_json } from "./true_is_assert_json.mjs";
import { qa_app_commit_promote } from "./qa_app_commit_promote.mjs";
import { properties_get } from "./properties_get.mjs";
import { folder_web_latest_absolute } from "./folder_web_latest_absolute.mjs";
import { qa_stage_pieces_assert } from "./qa_stage_pieces_assert.mjs";
import { qa_app_stage_public_boot_assert } from "./qa_app_stage_public_boot_assert.mjs";
import { qa_promoted } from "./qa_promoted.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { not } from "./not.mjs";
import { json_equal } from "./json_equal.mjs";
import { app_shared_name_latest_text } from "./app_shared_name_latest_text.mjs";
import { qa_app_e2e_happy_run } from "./qa_app_e2e_happy_run.mjs";
import { qa_stage_pieces_changed } from "./qa_stage_pieces_changed.mjs";
import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
import { folder_public_root_noting_set } from "./folder_public_root_noting_set.mjs";
import { html_public_from_latest } from "./html_public_from_latest.mjs";
import { firebase_deploy_locked_generic } from "./firebase_deploy_locked_generic.mjs";
import { folder_public_root_noting_clear } from "./folder_public_root_noting_clear.mjs";
import { qa_app_sending_during } from "./qa_app_sending_during.mjs";
import { qa_promoted_app_write } from "./qa_promoted_app_write.mjs";
import { qa_promote_steps_log_add_try } from "./qa_promote_steps_log_add_try.mjs";
export async function qa_app_commit_promote_judged(search, commit) {
  "$plain search";
  "$plain commit";
  "Builds one app out of the one commit you name, walks what it built, and puts those very pieces where the sending reads from - and only if that commit was found sound for that app";
  "The asking happens BEFORE anything is put where the sending reads from, which is the other way round from the older path. There, a refused sending had already overwritten what was waiting to go, so being told no still changed what would go out next time somebody said yes";
  "This stops short of sending on purpose. Sending puts out the whole folder in one act, so several apps prepared one after another and sent once is the same sending as one app prepared and sent - and it costs one upload rather than one each. Keeping the two apart is what makes that possible; joining them again would make a run of five apps pay for five";
  "Being sound is asked for, and so is being written down, because the sending asks the record rather than asking here. A judging is left out of the record on purpose when the gate shares did not all come back or when a neighbouring repo moved while they ran, and either way what comes back still says whether every gate was green - so pieces can be put where the sending reads from on a verdict the sending itself will never find, and then stand there refusing every sending, this app's and every other app's alike, until somebody spends the quarter of an hour again by hand. That happened, on the deployment this line was written for.";
  "Refused here rather than warned about, because the harm is done by the putting and not by the sending. Nothing has been written where the sending reads from at this point, so refusing costs the run that was going to fail anyway; letting it through costs every app waiting to go out, for as long as nobody notices.";
  "THE ORDER IS BUILD, THEN READ THE PIECES, THEN WALK, THEN MOVE UP, and each step is why the next one means anything. The build lands in the folder a build waits in, which is served under its own name on this machine, so the walk opens the very pieces that are about to go rather than a copy of the same code somebody happened to have on their disk. Until 2026-09-03 the build went straight to the folder people are served from and the walk opened the working folder instead, which proved that what somebody was editing played and then sent something else.";
  "Reading the pieces comes between the build and the walk, and it is here rather than among the gates because a gate is judged in a copy of what a commit tracks and a build is tracked by nothing. Two checks used to ask these questions of the folder people work in; from the day that folder moved out of the served one they threw on a folder that was not there, and had measured nothing since. It is asked before the walk rather than after because the walk takes about half an hour, and a bundle short of a name fails it in a way that reads as a broken lesson rather than as a broken build.";
  "Moving up is done by the one function every way of putting an app in front of people goes through, rather than by copying here. That function writes down what it moved, and that note is what a later sending reads to refuse a folder holding anything else - so a second way in that copied for itself would be a second way to leave the note describing the build before.";
  "Which commit these pieces came out of is written down last, after they are actually in place, so a run that fell over partway through leaves no note claiming a build that did not finish.";
  "★ IT ALSO SAYS WHETHER THIS APP CAME OUT CARRYING ANYTHING NEW. What is on disk now is held against what was written down the last time this app went out, and when the two say the same thing the answer carries a word saying so. Nobody asked that before, which is how a run could prepare eight apps and report eight successes when five of them were the same code under a newer stamp - the run looked exactly as productive either way, so the waste had nothing to show it by. It is asked before the note is written rather than after, because writing it is what destroys the thing being compared against.";
  "★ IT IS NOT A REASON TO STOP. Being told an app changed nothing is worth having on its own, and stopping short here on the strength of it would be a much larger claim: the pieces are already standing in the folder the sending reads from, so refusing at this point would leave them there unaccounted for rather than leaving nothing behind.";
  "★ IT IS A REASON NOT TO WALK THEM AGAIN. The note is written after a walk has passed or been excused by this same test, so pieces matching it byte for byte are pieces already walked. The walk follows the length of the course - measured 2026-11-05 at about a press a second, and thousands of presses at 302 lessons, so over two hours - and it was paid in full by every sending of pieces it had already passed. Pieces that differ in any byte are walked as before, including a page differing only by its stamp, because a false difference costs a walk and a false match would cost the check. What this cannot see is a change outside the pieces: a walk made stricter does not walk old pieces again until they change.";
  "★ EVERY SLOW STEP IS TIMED AND THE TIMES ARE KEPT, WHETHER THE RUN SUCCEEDS OR NOT. This takes the better part of an hour and until these were kept nothing could say which step that hour went to. Taking the load and writing the note can only ever cost the note, so neither changes what this does or what it throws.";
  arguments_assert(arguments, 2);
  let steps = [];
  let ok = false;
  let load_before = await catch_null_async(load_average_recent);
  try {
    let judged = await function_call_timed_add(
      steps,
      qa_app_commit_gate_run_at,
      [search, commit],
    );
    let deployable = property_get(judged, "deployable");
    true_is_assert_json(deployable, judged);
    let filed = property_get(judged, "filed");
    true_is_assert_json(filed, judged);
    let app_name = property_get(judged, "app");
    let hashes = await function_call_timed_add(steps, qa_app_commit_promote, [
      search,
      commit,
    ]);
    let file_names = properties_get(hashes);
    let waiting = folder_web_latest_absolute();
    await function_call_timed_add(steps, qa_stage_pieces_assert, [
      waiting,
      file_names,
    ]);
    ("Before anything is put where the sending reads from, the app is walked the whole way through as somebody who gets every question right. Every gate there is reads code without ever opening a page, so a page that opens and cannot be used passes all of them: the replacing game drew every symbol as one no rule could touch, and so could not be played at all, for nine days with nothing red. An app with no walk of its own goes straight past.");
    ("Before the walk, the page is opened once as the public opens it, at the top of the site. A page decides what it shows by the address it was opened at, and the walk opens it under latest, so the walk cannot see the page people get. 2026-11-06: code passed a six-hour walk and then threw for every learner. This takes seconds, so it comes before the walk rather than after, and it runs even when the pieces are unchanged, since a walk passed under latest says nothing about this.");
    await function_call_timed_add(steps, qa_app_stage_public_boot_assert, [
      app_name,
    ]);
    let promoted = await qa_promoted();
    let note = property_get_or_null(promoted, app_name);
    let unwritten = null_is(note);
    let sent = {};
    if (not(unwritten)) {
      sent = property_get(note, "hashes");
    }
    let unchanged = json_equal(sent, hashes);
    async function walk_then_move_up() {
      if (not(unchanged)) {
        let stage_name = app_shared_name_latest_text();
        await function_call_timed_add(steps, qa_app_e2e_happy_run, [
          app_name,
          stage_name,
        ]);
      }
      ("★ THE FILES ARE READ AGAIN BEFORE THEY MOVE UP. The note made after this would describe the build held in memory, so files replaced during the walk would move up, stand in the folder every send reads from, and refuse every app's send. Refused here, the folder people are served from has not been touched. That happened twice on 2026-11-05, once after five hours.");
      let changed = await qa_stage_pieces_changed(hashes);
      list_empty_is_assert_json(changed, {
        hint: "these files were replaced after this send built them, so what was walked is not what would go out. Nothing was moved up. Find what built this app meanwhile, then send again",
        app_name,
        commit,
      });
      folder_public_root_noting_set(app_name);
      async function lambda() {
        let copied = await html_public_from_latest(search);
        return copied;
      }
      await function_call_timed_add(steps, firebase_deploy_locked_generic, [
        lambda,
        qa_app_commit_promote_judged.name,
      ]);
      folder_public_root_noting_clear();
    }
    await qa_app_sending_during(app_name, walk_then_move_up);
    await function_call_timed_add(steps, qa_promoted_app_write, [
      app_name,
      commit,
      hashes,
    ]);
    let r = {
      app: app_name,
      commit,
      hashes,
      unchanged,
    };
    ok = true;
    return r;
  } finally {
    await qa_promote_steps_log_add_try(search, commit, ok, steps, load_before);
  }
}
