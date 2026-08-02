import { functions_page_serialized_report } from "./functions_page_serialized_report.mjs";
import { js_auto_transforms_dry } from "./js_auto_transforms_dry.mjs";
import { property_get } from "./property_get.mjs";
import { file_js_parse } from "./file_js_parse.mjs";
import { js_auto_generic } from "./js_auto_generic.mjs";
import { js_page_serialized_import_uses } from "./js_page_serialized_import_uses.mjs";
import { catch_null_async } from "./catch_null_async.mjs";
import { list_add } from "./list_add.mjs";
import { add_1 } from "./add_1.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { each_async } from "./each_async.mjs";
import { equal } from "./equal.mjs";
export async function functions_page_auto_borrowing() {
  "Every file that hands work to a browser and would come back broken if the";
  "normalize pass were run over it - asked by actually running the pass, on a copy";
  "in memory, and then asking what the result borrows.";
  "The reading beside this one asks the same question of the file as it stands. It";
  "finds damage that has already landed. This asks whether the damage is about to";
  "land the next time anybody canonicalizes, which is the only version of the";
  "question a person can act on before a browser test goes wrong.";
  "It runs the pass rather than reading a list of which steps are safe, and that is";
  "the whole point. The gap that produced this was exactly such a list drifting:";
  "the built-in rewrite asked whether the file talks to a page and left it alone,";
  "the operator rewrite never asked, and nothing anywhere compared the two. A step";
  "added tomorrow is covered here without anybody remembering to add it.";
  "The file-creating step is swapped out, the same swap the check that asks whether";
  "a function can be normalized already makes - an earlier reading that ran the";
  "real list littered the repo with files it had to go and delete.";
  "A file the pass cannot get through is counted rather than reported. That is a";
  "different complaint with its own gate, and it is ordinary while everybody shares";
  "the one folder. It is counted rather than passed over in silence because every";
  "file failing that way would empty this answer, and an empty answer here reads";
  "exactly like a repo with nothing wrong.";
  let exposed = await functions_page_serialized_report();
  let transforms = js_auto_transforms_dry();
  let offenders = [];
  let checked = 0;
  let skipped = [];
  async function lambda(record) {
    let f_path = property_get(record, "f_path");
    let name = property_get(record, "name");
    async function attempt() {
      let parsed = await file_js_parse(f_path);
      let ast = property_get(parsed, "ast");
      await js_auto_generic(ast, transforms);
      let uses = js_page_serialized_import_uses(ast);
      return uses;
    }
    let borrowed = await catch_null_async(attempt);
    if (equal(borrowed, null)) {
      list_add(skipped, name);
      return;
    }
    checked = add_1(checked);
    if (list_empty_is(borrowed)) {
      return;
    }
    let one = {
      name,
      f_path,
      borrowed,
    };
    list_add(offenders, one);
  }
  await each_async(exposed, lambda);
  let r = {
    checked,
    skipped,
    offenders,
  };
  return r;
}
