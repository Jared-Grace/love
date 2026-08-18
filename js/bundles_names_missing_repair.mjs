import { arguments_assert } from "./arguments_assert.mjs";
import { ai_git_noted } from "./ai_git_noted.mjs";
import { bundles_names_missing } from "./bundles_names_missing.mjs";
import { property_get } from "./property_get.mjs";
import { file_extension_js } from "./file_extension_js.mjs";
import { text_remove_end } from "./text_remove_end.mjs";
import { text_split_last } from "./text_split_last.mjs";
import { list_add_unique } from "./list_add_unique.mjs";
import { function_call_commit } from "./function_call_commit.mjs";
import { webpack_build_dev } from "./webpack_build_dev.mjs";
export async function bundles_names_missing_repair() {
  "Builds again every app whose built file under the dev folder is short of a name this repo defines, and asks a second time whether anything is still short.";
  "It finds its own set rather than being handed one. What is short changes every time somebody adds a function an app already calls, so a list written into the call would be a list of what was broken when it was typed, and the gate names the truth in a quarter of a second. Asking again afterwards is what turns this from a hopeful run into a repair: the answer says whether the building actually carried the names back.";
  "A built file is named for its app, and a lazily loaded piece is named for its app after a number, so the app is whatever stands after the last dot once the ending is taken off. Both shapes then give the same word, which is what lets a page and its own chunk ask for one build between them rather than two.";
  "Each build commits itself under its own name and its own app, because a build writes a large file and with many hands in this folder a sweep that lands first would file it under a bare word. Whatever was already noted is committed before the first build for the same reason - it would otherwise be swept into that build's commit and filed under an app that never wrote it.";
  arguments_assert(arguments, 0);
  await ai_git_noted();
  let before = await bundles_names_missing();
  let offenders = property_get(before, "offenders");
  let apps = [];
  let extension = file_extension_js();
  for (let offender of offenders) {
    let name = property_get(offender, "name");
    let stem = text_remove_end(name, extension.length);
    let a_name = text_split_last(stem, ".");
    list_add_unique(apps, a_name);
  }
  for (let a_name of apps) {
    await function_call_commit(webpack_build_dev, [a_name]);
  }
  let after = await bundles_names_missing();
  let r = {
    apps,
    before,
    after,
  };
  return r;
}
