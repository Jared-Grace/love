import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_name_search } from "./app_shared_name_search.mjs";
import { app_shared_frozen_assert } from "./app_shared_frozen_assert.mjs";
import { qa_app_commit_hashes } from "./qa_app_commit_hashes.mjs";
import { qa_build_folder } from "./qa_build_folder.mjs";
import { properties_get } from "./properties_get.mjs";
import { folder_web_latest_absolute } from "./folder_web_latest_absolute.mjs";
import { qa_app_promote_page_keep_is } from "./qa_app_promote_page_keep_is.mjs";
import { file_name_html } from "./file_name_html.mjs";
import { and } from "./and.mjs";
import { equal } from "./equal.mjs";
import { folder_web_latest_absolute_join } from "./folder_web_latest_absolute_join.mjs";
import { file_hash } from "./file_hash.mjs";
import { property_set } from "./property_set.mjs";
import { qa_snapshot_app_file_path } from "./qa_snapshot_app_file_path.mjs";
import { file_copy_overwrite } from "./file_copy_overwrite.mjs";
import { folder_app_stale_delete } from "./folder_app_stale_delete.mjs";
export async function qa_app_commit_promote(search, commit) {
  "$plain search";
  "$plain commit";
  "Builds one app out of one commit alone and puts those very pieces in the folder a build waits in until it has been walked, answering with a short word standing for each of them";
  "This is the step that makes the whole thing mean anything. Building an app out of a commit and looking at what came out proves nothing on its own if something else is built again on the way out - and something built again is a different thing even from the same commit, because an app is free to make part of itself up as it is built and one of them varies the steps of an animation every time. So the pieces that were looked at have to be the pieces that go";
  "What it replaces built from the folder everybody is working in, which meant the pieces that went out were only ever built around the same time as the commit that was found sound, never out of it";
  "IT STOPS AT THE WAITING FOLDER AND DOES NOT REACH THE FOLDER PEOPLE ARE SERVED FROM. It went straight there until 2026-09-03, which skipped the waiting folder entirely, and skipping it cost the one thing worth having: nothing ever opened a page of what was about to go out. Pieces sitting in the waiting folder are served under their own name on this machine, so a walk can be a walk of exactly what is going, and the step after this one is that walk. Going straight there also meant the folder people are served from had two ways in, and only one of them wrote the note saying what it holds.";
  "The pieces to move are taken from what was actually made rather than from a list of what an app usually has, so a page carrying no script of its own moves the one file it has and nothing goes looking for the one it never had";
  "An app that is not to be rebuilt is refused before anything is built rather than after, so being told no costs nothing. That refusal is the same one its predecessor made and is kept deliberately - a new way to put pieces where the sending reads from would otherwise be a way around it";
  "A piece the last build left behind and this one did not make is taken away rather than left beside the new ones, and afterwards rather than before, so a run that fell over partway through has taken nothing away that it did not replace";
  "★ A BUILD THAT CHANGED NOTHING LEAVES THE PAGE ALONE. A page carries a stamp read off the clock, so it comes out different every single build whether or not one line of the app moved, and everything downstream reads that difference as news. The other pieces carry no clock, so they are asked instead: when every one of them is already sitting in the waiting folder under the same short word, the page standing there is left exactly where it is and its stamp does not move. The stamp is still the clock and still advances - it just advances when something actually changed, which is what anybody reading it took it to mean all along.";
  "★ THE ANSWER THEN DESCRIBES THE DISK RATHER THAN THE BUILD. What comes back is written down as the note saying where these pieces came from, and it is compared against the folder afterwards to catch a piece that has moved since - so a word standing for a page that was deliberately not written would report a change nobody made, on every sending, for good. The kept page is read back off the disk and its real word put in place of the built one. The commit named beside it is still the new one, and honestly so: the code it describes is byte for byte the code that commit builds.";
  arguments_assert(arguments, 2);
  let app_name = await app_shared_name_search(search);
  app_shared_frozen_assert(app_name);
  let hashes = await qa_app_commit_hashes(search, commit);
  let folder = qa_build_folder();
  let file_names = properties_get(hashes);
  let to_folder = folder_web_latest_absolute();
  let page_keep = await qa_app_promote_page_keep_is(
    app_name,
    hashes,
    to_folder,
  );
  let page_name = file_name_html(app_name);
  for (let file_name of file_names) {
    let right = equal(file_name, page_name);
    let kept_page = and(page_keep, right);
    if (kept_page) {
      let page_path = folder_web_latest_absolute_join(file_name);
      let page_hash = await file_hash(page_path);
      property_set(hashes, file_name, page_hash);
      continue;
    }
    let made = qa_snapshot_app_file_path(folder, file_name);
    let waiting = folder_web_latest_absolute_join(file_name);
    await file_copy_overwrite(made, waiting);
  }
  await folder_app_stale_delete(to_folder, app_name, file_names);
  return hashes;
}
