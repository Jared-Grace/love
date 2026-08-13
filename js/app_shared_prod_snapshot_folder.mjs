import { assert_message } from "./assert_message.mjs";
import { file_copy_overwrite } from "./file_copy_overwrite.mjs";
import { file_exists_not } from "./file_exists_not.mjs";
import { file_name_html } from "./file_name_html.mjs";
import { file_name_js } from "./file_name_js.mjs";
import { file_read } from "./file_read.mjs";
import { file_text_replace_once } from "./file_text_replace_once.mjs";
import { js_bundle_chunk_ids } from "./js_bundle_chunk_ids.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { list_join_underscore } from "./list_join_underscore.mjs";
import { path_join } from "./path_join.mjs";
export async function app_shared_prod_snapshot_folder(folder, app_name, label) {
  "$plain folder";
  "$plain app_name";
  "$plain label";
  "Keeps the copy of an app sitting in one folder under a name of its own, so the next build can take its place without the one already out there going off the internet.";
  "The pages are copied rather than built again. Two builds of the same source do not come out the same here - an app settles some of what it shows at the moment it is built - so a page built again is a different page wearing the same name, and the whole point of keeping this one is that it is the very thing somebody was sent.";
  "The kept page is pointed at the kept script, because a page copied unchanged still sends for the script under the live name, and the next build writes over that one. Left unpointed the kept page quietly becomes the new app under an old name, which is the failure this exists to prevent and the one nobody would see.";
  "A name already in use is refused rather than written over. What sits there is an earlier keeping, and an earlier keeping is the one thing here that cannot be made again.";
  "An app built in more than one piece is refused too. The extra pieces are named inside the script itself, and those names cannot be pointed anywhere from out here, so a kept page would send for pieces the next build replaces and would show whatever the app has become.";
  "Which folder to keep from is received rather than worked out, so this can be asked of a folder made up for the asking. What it does is copy files and write to one of them, and a question whose whole answer is what a folder now holds can only be checked by someone who chose the folder - which is what a standing check needs and what reaching for the live one forbids.";
  "The names it wrote come back, because what a folder now holds because of this is the thing whoever asked is about to tell somebody else.";
  let name_kept = list_join_underscore([app_name, label]);
  let page_kept = file_name_html(name_kept);
  let path_page_kept = path_join([folder, page_kept]);
  let free = await file_exists_not(path_page_kept);
  assert_message(
    free,
    "There is already a kept copy under that name, and writing over it would lose the one thing here that cannot be made again. Would you like to keep this one under a different label?",
  );
  let source_name = file_name_js(app_name);
  let path_source = path_join([folder, source_name]);
  let text = await file_read(path_source);
  let ids = js_bundle_chunk_ids(text);
  let whole = list_empty_is(ids);
  assert_message(
    whole,
    "This app is built in more than one piece, and the extra pieces are named inside the script itself, so a kept copy would still send for the pieces the next build replaces. Would you like to keep this one by hand, or snapshot an app that is built whole?",
  );
  let page = file_name_html(app_name);
  let path_page = path_join([folder, page]);
  await file_copy_overwrite(path_page, path_page_kept);
  let source_kept = file_name_js(name_kept);
  let path_source_kept = path_join([folder, source_kept]);
  await file_copy_overwrite(path_source, path_source_kept);
  await file_text_replace_once(path_page_kept, source_name, source_kept);
  let kept = [page_kept, source_kept];
  return kept;
}
