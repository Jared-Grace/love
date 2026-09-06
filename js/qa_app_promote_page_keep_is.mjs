import { arguments_assert } from "./arguments_assert.mjs";
import { file_name_html } from "./file_name_html.mjs";
import { path_join } from "./path_join.mjs";
import { file_exists } from "./file_exists.mjs";
import { not } from "./not.mjs";
import { properties_get } from "./properties_get.mjs";
import { equal } from "./equal.mjs";
import { property_get } from "./property_get.mjs";
import { file_hash } from "./file_hash.mjs";
export async function qa_app_promote_page_keep_is(app_name, hashes, folder) {
  "$plain app_name";
  "$plain hashes";
  "$plain folder";
  "Whether a freshly built app came out carrying no new code at all, so the page already waiting should be left standing exactly as it is rather than replaced by one saying the same thing under a newer stamp";
  "★ THE SCRIPTS ARE THE TRUTH AND THE PAGE IS DECORATION. A page names its script and never contains it, so a change to the code cannot show in the page and a change to the page need not mean anything changed. The one part of a page that moves on its own is the stamp written onto the script it sends for, and that stamp is taken from the clock. So a build that changed nothing still writes a page that differs, and every question asked afterwards about whether this app changed is answered by the clock rather than by the app.";
  "★ WHAT THAT COSTS IS PAID SOMEWHERE ELSE ENTIRELY. An app whose page differs from the one being served counts as waiting to go out, and the whole site goes out in one act - so an app nobody touched holds up every app somebody did. Measured the day this was written: five of the eight apps waiting were this and nothing else, byte for byte identical code under a newer stamp, and between them they held back three apps carrying real work.";
  "★ ONLY THE OTHER PIECES ARE COMPARED, NEVER THE PAGE. Comparing the page would answer the question with the stamp again, which is the fault rather than the test for it. Every piece that is not the page is code, carries no clock, and was shown to come out byte-identical when built twice from different commits - so those pieces answer for whether anything really changed, and the page is then told to follow them instead of leading.";
  "★ THE PAGE HAS TO STILL BE THERE TO BE KEPT. Every other piece matching says nothing about the page, and a folder whose scripts are all present with its page missing would be told to keep a page that is not there - taking the app off the internet on the next sending, with every link anybody was given going dead. So its standing is asked outright, and a missing one is a reason to write rather than a reason to keep.";
  "★ A PIECE THIS BUILD NO LONGER MAKES IS NOT LOOKED FOR. What is compared is what was just built, so a script that has stopped being made cannot make this answer false by its absence. It is cleared away afterwards by the sweep that removes what an app no longer sends for, and a page that never named it does not stop being right when it goes.";
  arguments_assert(arguments, 3);
  let page_name = file_name_html(app_name);
  let page_path = path_join([folder, page_name]);
  let page_standing = await file_exists(page_path);
  if (not(page_standing)) {
    return false;
  }
  let file_names = properties_get(hashes);
  for (let file_name of file_names) {
    let this_page = equal(file_name, page_name);
    if (this_page) {
      continue;
    }
    let built_hash = property_get(hashes, file_name);
    let piece_path = path_join([folder, file_name]);
    let piece_standing = await file_exists(piece_path);
    if (not(piece_standing)) {
      return false;
    }
    let waiting_hash = await file_hash(piece_path);
    let matched = equal(waiting_hash, built_hash);
    if (not(matched)) {
      return false;
    }
  }
  return true;
}
