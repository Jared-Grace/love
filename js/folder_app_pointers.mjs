import { property_text_includes } from "./property_text_includes.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { folder_read_files } from "./folder_read_files.mjs";
import { path_join } from "./path_join.mjs";
import { file_read } from "./file_read.mjs";
import { property_set } from "./property_set.mjs";
import { app_shared_name_prefixed } from "./app_shared_name_prefixed.mjs";
import { text_quote_double } from "./text_quote_double.mjs";
import { file_name_app_is } from "./file_name_app_is.mjs";
export async function folder_app_pointers(folder, app_names) {
  "$plain folder";
  "$plain app_names";
  "For each app of a list, which pieces sitting in one folder name it - counting only the pieces that belong to some other app.";
  "A piece of an app naming its own app says nothing. Every page carries its own name, so counting those would answer that every app is pointed at, always, and it would answer that on the day nothing pointed at anything.";
  "The name is looked for in quotation marks rather than loose, and that one choice is what makes the reading safe among names that start alike. There are four such pairs in this folder, g and g_bless among them, and a bare search for the shorter one finds every mention of the longer. Quoted, it cannot: the mark after the name ends it, so the shorter name in quotation marks is absent from the longer one spelled the same way.";
  "That is a bet on how the built pieces spell a name, and it is a bet worth saying out loud, because the day a build starts writing single quotation marks instead this finds nothing anywhere. Which is why the count of what was found travels out with the finding - a reading of nothing everywhere is the shape that failure takes, and it is only telling apart from a clean folder by the count.";
  "The folder is asked for rather than reached for, so a standing check can hand it one made up for the asking.";
  arguments_assert(arguments, 2);
  let file_names = await folder_read_files(folder);
  let texts = {};
  for (let file_name of file_names) {
    let file_path = path_join([folder, file_name]);
    let text = await file_read(file_path);
    property_set(texts, file_name, text);
  }
  let pointers = {};
  for (let app_name of app_names) {
    let a_name = app_shared_name_prefixed(app_name);
    let quoted = text_quote_double(a_name);
    let naming = [];
    for (let file_name of file_names) {
      let own = file_name_app_is(file_name, app_name);
      if (own) {
        continue;
      }
      let names = property_text_includes(texts, file_name, quoted);
      if (names) {
        naming.push(file_name);
      }
    }
    property_set(pointers, app_name, naming);
  }
  return pointers;
}
