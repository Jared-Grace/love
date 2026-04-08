import { js_statement_first } from "../../../love/public/src/js_statement_first.mjs";
import { function_node_select } from "../../../love/public/src/function_node_select.mjs";
import { app_bible_verses } from "../../../love/public/src/app_bible_verses.mjs";
import { function_open } from "../../../love/public/src/function_open.mjs";
export async function sandbox() {
  await function_open(app_bible_verses.name);
  let r = await function_node_select(js_statement_first.name);
}
