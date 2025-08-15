import { path_join } from "./path_join.mjs";
import { fileURLToPath } from "url";
import { function_name_to_base } from "./function_name_to_base.mjs";
import { function_name_unalias } from "./function_name_unalias.mjs";
export async function function_import(f_name) {
  const path = await import("path");
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  let {unaliased} = await function_name_unalias(f_name);
  let joined = function_name_to_base(unaliased);
  const f_path = path_join([__dirname, joined]);
  const imported = await import(`file://${f_path}`);
  const imported_fn = imported[unaliased];
  if (typeof imported_fn !== "function") {
    throw new Error(
      `❌ The module "${unaliased}" does not export a default function.`,
    );
  }
  return imported_fn;
}
