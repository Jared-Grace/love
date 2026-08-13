import { arguments_assert } from "./arguments_assert.mjs";
import { equal } from "./equal.mjs";
import { file_name_html } from "./file_name_html.mjs";
import { file_name_js } from "./file_name_js.mjs";
import { file_read } from "./file_read.mjs";
import { folder_app_file_names } from "./folder_app_file_names.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_size } from "./list_size.mjs";
import { not } from "./not.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { path_join } from "./path_join.mjs";
import { property_get } from "./property_get.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { text_hash } from "./text_hash.mjs";
import { text_occurrences_count } from "./text_occurrences_count.mjs";
import { text_replace } from "./text_replace.mjs";
export async function qa_promoted_public_copy_folder_is(
  folder,
  app_name,
  served,
) {
  "$plain folder";
  "$plain app_name";
  "$plain served";
  "Whether the pieces sitting in one folder under one name are a copy of something already being served - the same script, and the same page with the one run of text that sends for the script pointed at the copy instead.";
  "Which folder and what is being served are both received rather than reached for, so this can be asked of a folder made up for the asking. A question whose whole answer is what a folder holds can only be checked by somebody who chose the folder, and one that always reaches for the live one can never be asked twice by a standing check.";
  "A kept copy of an app is the shape this exists for. It is the one thing waiting to be sent that was never built out of a commit - it is what was public, copied, so the next build can replace the app without the page people were sent going off the internet - so asking which commit it came out of has no answer, and holding it to that question refuses it forever.";
  "What it can show instead is stronger than a note, because a note is written by hand and this is read off the pieces. There is no way to write this account down, so there is no way to write down a false one: a set of pieces either is already public or it is not, and pieces that are already public cannot put anything new on the internet.";
  "Which app it is a copy of is worked out from the script rather than read out of the name. The label somebody chose is anybody's word and the name it makes is only a hint, while a copied script is the served script to the letter, so the pieces say for themselves what they are a copy of.";
  "Nothing here goes near a wire. What is being served was reduced to a handful of short words the last time anybody looked, and the copy is reduced the same way, so this costs two files read while a sending is held up waiting for it.";
  arguments_assert(arguments, 3);
  let page_name = file_name_html(app_name);
  let source_name = file_name_js(app_name);
  let present = await folder_app_file_names(folder, app_name);
  ("a copy is a page and its own script and nothing else - the keeping refuses an app built in more than one piece, because the extra pieces are named inside the script where nothing out here can point them at the copy");
  let two = equal(list_size(present), 2);
  if (not(two)) {
    return false;
  }
  let with_page = list_includes(present, page_name);
  if (not(with_page)) {
    return false;
  }
  let with_source = list_includes(present, source_name);
  if (not(with_source)) {
    return false;
  }
  let page_text = await file_read(path_join([folder, page_name]));
  let source_text = await file_read(path_join([folder, source_name]));
  ("the page has to send for its own script exactly once. A page still sending for the live script is the failure the keeping exists to prevent, and one sending for it twice is not a shape the keeping makes");
  let sends = equal(text_occurrences_count(page_text, source_name), 1);
  if (not(sends)) {
    return false;
  }
  let source_hash = text_hash(source_text);
  let owner_names = object_property_names(served);
  for (let owner_name of owner_names) {
    let noted = property_get(served, owner_name);
    let owner_source = file_name_js(owner_name);
    let served_source = property_get_or_null(noted, owner_source);
    let copied = equal(served_source, source_hash);
    if (copied) {
      ("pointed back at what it was copied from, the page has to come out as the very page being served - which is what says these pieces are that page and not a later build of it wearing an old name");
      let pointed_back = text_replace(page_text, source_name, owner_source);
      let owner_page = file_name_html(owner_name);
      let served_page = property_get_or_null(noted, owner_page);
      let same = equal(text_hash(pointed_back), served_page);
      if (same) {
        return true;
      }
    }
  }
  return false;
}
