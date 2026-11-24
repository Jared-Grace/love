import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { app_learn_eng_pages_language_table_derived } from "./app_learn_eng_pages_language_table_derived.mjs";
import { function_constant_json_write } from "./function_constant_json_write.mjs";
import { fn_name } from "./fn_name.mjs";
export async function app_learn_eng_pages_language_table_write() {
  "Write the shared table of language pages from learn_eng's own stores, so shared code can know learn_eng's pages without importing learn_eng.";
  "★ SHARED CODE MAY NOT IMPORT AN APP. The deploy readings and the page's own language check all ask one shared table, and a shared function importing an app_learn_eng_ name hands that app to every app downstream. So the table is written out as plain data here, by the app that owns the stores, and shared code reads the data.";
  "★ THE STORES STAY THE ONE SOURCE. Nothing is listed by hand: the table is derived from the stores every time this runs, and the stores gate fails when what is written has fallen behind what the stores say - so run this after changing a store's title, description or language.";
  let value = app_learn_eng_pages_language_table_derived();
  let prose = [
    text_combine_multiple([
      "Each app's language pages as plain data: the language code, the page title and the page description. Generated - do not edit; run ",
      fn_name("app_learn_eng_pages_language_table_write"),
      ".",
    ]),
  ];
  let path = await function_constant_json_write(
    fn_name("apps_pages_language_table"),
    prose,
    value,
  );
  return path;
}
