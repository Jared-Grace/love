import { path_join } from "./path_join.mjs";
import path from "path";
import { fileURLToPath } from "url";
import { function_name_to_base } from "./function_name_to_base.mjs";
import { function_name_unalias } from "./function_name_unalias.mjs";
export async function function_import(f_name) {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  f_name = await function_name_unalias(f_name);
  let joined = function_name_to_base(f_name);
  const f_path = path_join([__dirname, joined]);
  const imported = await import(`file://${f_path}`);
  const imported_fn = imported[f_name];
  if (typeof imported_fn !== "function") {
    throw new Error(
      `❌ The module "${f_name}" does not export a default function.`,
    );
  }
  return imported_fn;
}
