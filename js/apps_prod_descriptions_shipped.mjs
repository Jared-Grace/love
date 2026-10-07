import { arguments_assert } from "./arguments_assert.mjs";
import { folder_repo_love_public } from "./folder_repo_love_public.mjs";
import { folder_read_htmls } from "./folder_read_htmls.mjs";
import { apps_names } from "./apps_names.mjs";
import { path_name } from "./path_name.mjs";
import { list_includes } from "./list_includes.mjs";
import { not } from "./not.mjs";
import { path_join } from "./path_join.mjs";
import { file_read } from "./file_read.mjs";
import { apps_prod_description_shipped_text } from "./apps_prod_description_shipped_text.mjs";
import { property_set } from "./property_set.mjs";
export async function apps_prod_descriptions_shipped() {
  "For every app with a page in the folder that was last sent out, the sentence a shared link to it shows today - the empty text where the page carries no such tag at all.";
  "THE EMPTY TEXT AND A MISSING NAME SAY TWO DIFFERENT THINGS, and keeping them apart is the whole value of this. An app named here with nothing beside it has a page that was built before a sentence was written for it, and building it again is the cure. An app not named here at all has no page in that folder, and no amount of building reaches it. Collapsed into one answer, the second would wear the first's cure and nobody would find out.";
  "ONLY PAGES NAMED AFTER A KNOWN APP ARE READ. The folder also holds pages that are not apps, and a page like that has no sentence written for it anywhere, so every one of them would arrive as a disagreement and bury the real ones. Whether something is standing there that is not an app is a real question and already has its own answer elsewhere; it is not this one.";
  "It reads the folder kept in the repository rather than asking the internet what it is serving. That folder is what was last copied out, so it is the same thing a stranger meets, and reading it costs no network and works inside a frozen copy. What is actually being served, as against what was last copied, is a third question with its own reading.";
  "The listing hands back bare file names rather than whole ways to them, so the folder is put back on the front before anything is opened. Left off, every name reads as a file beside wherever the asking happened to be standing, and the first one stops the whole walk.";
  arguments_assert(arguments, 0);
  let folder = folder_repo_love_public();
  let htmls = await folder_read_htmls(folder);
  let app_names = await apps_names();
  let shipped = {};
  for (let html of htmls) {
    let page_name = path_name(html);
    let known = list_includes(app_names, page_name);
    if (not(known)) {
      continue;
    }
    let html_path = path_join([folder, html]);
    let page_text = await file_read(html_path);
    let sentence = apps_prod_description_shipped_text(page_text);
    property_set(shipped, page_name, sentence);
  }
  return shipped;
}
