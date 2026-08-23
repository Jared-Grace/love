import { list_map_unordered_async } from "./list_map_unordered_async.mjs";
import { folder_public } from "./folder_public.mjs";
import { folder_public_join } from "./folder_public_join.mjs";
import { app_shared_name_dev_text } from "./app_shared_name_dev_text.mjs";
import { folder_read_files } from "./folder_read_files.mjs";
import { list_filter_ends_with } from "./list_filter_ends_with.mjs";
import { html_extension } from "./html_extension.mjs";
import { path_join } from "./path_join.mjs";
import { list_map } from "./list_map.mjs";
import { list_squash } from "./list_squash.mjs";
import { list_add } from "./list_add.mjs";
import { each_async } from "./each_async.mjs";
import { file_read } from "./file_read.mjs";
import { html_code } from "./html_code.mjs";
import { html_code_is } from "./html_code_is.mjs";
import { html_code_parse } from "./html_code_parse.mjs";
import { html_regenerate_frozen_is } from "./html_regenerate_frozen_is.mjs";
import { property_get } from "./property_get.mjs";
import { null_is } from "./null_is.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
export async function html_regenerate_stable_check() {
  "Every page here that regenerating would change into something regenerating would change again - the pages where writing the page out is not the end of it.";
  "What is asked of each one is that reading a page back gives what building it was given: parse, build, parse again, and the second answer is the first. A page with that property settles after one pass, which is what makes running the whole set safe to do at any time. A page without it drifts a little further every pass, and the drift is invisible in the moment because each single pass looks like a page.";
  "This is asked rather than assumed because the answer went wrong once and nothing said so. Measured 2026-08-23: every page failed it. Reading a page back handed the wrapped body over as though the app had written it, so building it wrapped it again - one pass turned 47 lines into 80, the next turned those into 113 - and it handed the title over as though it were the app's name, so six apps looked up their description under a sentence, found nothing, and lost every social tag they had.";
  "A page whose body comes back as nothing is not counted against. That is a page saying it was not written this way, and refusing it is the wanted answer rather than a fault to report.";
  "How many pages were looked at is handed back beside the ones that failed, because a list of failures that is empty reads the same whether every page passed or no page was read. Every way this stops early - a folder renamed, a page shape no longer recognised, a refusal that grew to cover everything - empties the failures without touching them, so the count is what tells the two apart.";
  let dev = app_shared_name_dev_text();
  let folder_dev = folder_public_join(dev);
  let p = folder_public();
  let folders = [p, folder_dev];
  async function lambda(folder) {
    let files = await folder_read_files(folder);
    let sufix = html_extension();
    let names = list_filter_ends_with(files, sufix);
    function lambda2(name) {
      let joined = path_join([folder, name]);
      return joined;
    }
    let paths = list_map(names, lambda2);
    return paths;
  }
  let mapped = await list_map_unordered_async(folders, lambda);
  let paths = list_squash(mapped);
  let offenders = [];
  let settled = [];
  async function lambda3(file_path) {
    let frozen = html_regenerate_frozen_is(file_path);
    if (frozen) {
      return;
    }
    let contents = await file_read(file_path);
    let generated = html_code_is(contents);
    if (not(generated)) {
      return;
    }
    let parts = html_code_parse(contents);
    let body = property_get(parts, "body");
    let refused = null_is(body);
    if (refused) {
      return;
    }
    let name = property_get(parts, "name");
    let code = html_code(name, body);
    let parts_again = html_code_parse(code);
    let name_again = property_get(parts_again, "name");
    let body_again = property_get(parts_again, "body");
    let name_same = equal(name_again, name);
    let body_same = equal(body_again, body);
    if (name_same) {
      if (body_same) {
        list_add(settled, file_path);
        return;
      }
    }
    let offender = {
      file_path,
      name,
      name_again,
      body_same,
    };
    list_add(offenders, offender);
  }
  await each_async(paths, lambda3);
  let report = {
    settled,
    offenders,
  };
  return report;
}
