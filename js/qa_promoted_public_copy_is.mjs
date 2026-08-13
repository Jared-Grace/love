import { arguments_assert } from "./arguments_assert.mjs";
import { equal } from "./equal.mjs";
import { file_name_html } from "./file_name_html.mjs";
import { file_name_js } from "./file_name_js.mjs";
import { firebase_prod_app_disk_file_names } from "./firebase_prod_app_disk_file_names.mjs";
import { firebase_prod_asset_disk_read } from "./firebase_prod_asset_disk_read.mjs";
import { firebase_prod_hashes } from "./firebase_prod_hashes.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_size } from "./list_size.mjs";
import { not } from "./not.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { property_get } from "./property_get.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { text_hash } from "./text_hash.mjs";
import { text_occurrences_count } from "./text_occurrences_count.mjs";
import { text_replace } from "./text_replace.mjs";
export async function qa_promoted_public_copy_is(app_name) {
  "$plain app_name";
  "Whether the pieces waiting to be sent under one name are a kept copy of an app that is already being served - which is an account of where they came from, and the only one a kept copy can give.";
  "A kept copy is the one thing waiting in that folder that was never built out of a commit. It is a copy of what people were being sent, taken so the next build can replace the app without the page already out there going off the internet, and asking which commit it came out of has no answer - so the check that asks every other app that question refused it forever, and refused whatever was waiting beside it too.";
  "What it can show instead is stronger than a note, because a note is written by hand and this is read off the pieces. The script is a copy, so it is the served script to the letter; the page is the served page with one run of text changed, the run that sends for the script, pointed at the kept script instead. Anything else waiting there fails both.";
  "Nothing is taken on trust and nothing can be claimed. There is no way to write this account down, so there is no way to write down a false one - a set of pieces either is what is already public or it is not, and pieces that are already public cannot put anything new on the internet.";
  "Which app it was kept from is worked out from the script rather than read out of the name. The label is anybody's word and the name it makes is only a hint, while a copied script is the served script exactly, so the pieces say for themselves what they are a copy of.";
  "Nothing here goes near a wire. What is being served was reduced to a handful of short words the last time anybody looked, and the copy is reduced the same way, so this costs two files read while a sending is held up waiting for it.";
  arguments_assert(arguments, 1);
  let page_name = file_name_html(app_name);
  let source_name = file_name_js(app_name);
  let present = await firebase_prod_app_disk_file_names(app_name);
  ("a kept copy is a page and its own script and nothing else - the keeping refuses an app built in more than one piece, because the extra pieces are named inside the script where nothing out here can point them at the copy");
  let left = list_size(present);
  let two = equal(left, 2);
  if (not(two)) {
    return false;
  }
  let both = list_includes(present, page_name);
  if (not(both)) {
    return false;
  }
  let with_source = list_includes(present, source_name);
  if (not(with_source)) {
    return false;
  }
  let page_text = await firebase_prod_asset_disk_read(page_name);
  let source_text = await firebase_prod_asset_disk_read(source_name);
  ("the page has to send for its own script exactly once. A page still sending for the live script is the failure the keeping exists to prevent, and one sending for it twice is not a shape the keeping makes");
  let left2 = text_occurrences_count(page_text, source_name);
  let sends = equal(left2, 1);
  if (not(sends)) {
    return false;
  }
  let source_hash = text_hash(source_text);
  let served = await firebase_prod_hashes();
  let owner_names = object_property_names(served);
  for (let owner_name of owner_names) {
    let noted = property_get(served, owner_name);
    let owner_source = file_name_js(owner_name);
    let served_source = property_get_or_null(noted, owner_source);
    let copied = equal(served_source, source_hash);
    if (copied) {
      ("pointed back at the app it was kept from, the page has to come out as the very page that is being served - which is what says the copy is that page and not a later build of it wearing an old name");
      let pointed_back = text_replace(page_text, source_name, owner_source);
      let owner_page = file_name_html(owner_name);
      let served_page = property_get_or_null(noted, owner_page);
      let left3 = text_hash(pointed_back);
      let same = equal(left3, served_page);
      if (same) {
        return true;
      }
    }
  }
  return false;
}
