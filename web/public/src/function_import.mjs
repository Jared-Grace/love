import { log } from "../../../love/public/src/log.mjs";
import { path_join } from "../../../love/public/src/path_join.mjs";
import { fileURLToPath } from "url";
import { function_name_to_base } from "../../../love/public/src/function_name_to_base.mjs";
import { function_name_unalias } from "../../../love/public/src/function_name_unalias.mjs";
import { function_name_to_path_search } from "../../../love/public/src/function_name_to_path_search.mjs";
export async function function_import(f_name) {
  const path = await import("path");
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  let { unaliased } = await function_name_unalias(f_name);
  let { f_path: f } = await function_name_to_path_search(unaliased);
  let joined = function_name_to_base(unaliased);
  log({
    f,
    __dirname,
  });
  const f_path = path_join([__dirname, joined]);
  const imported = await import(`file://${f_path}`);
  const imported_fn = imported[unaliased];
  if (typeof imported_fn !== "function") {
    throw new Error(
      `❌ The module "${unaliased}" does not export a default function.`,
    );
  }
  return imported_fn;
  previous();
}
