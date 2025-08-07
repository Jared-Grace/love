import path from "path";
import { fileURLToPath } from "url";
import { function_name_to_base } from "./function_name_to_base.mjs";
import { function_name_unalias } from "./function_name_unalias.mjs";

export async function function_import(funcName) {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  funcName = await function_name_unalias(funcName);
  let joined = function_name_to_base(funcName);
  const f_path = path.join(...[__dirname, joined]);
  const imported = await import(`file://${f_path}`);

  const imported_fn = imported[funcName];

  if (typeof imported_fn !== "function") {
    throw new Error(
      `❌ The module "${funcName}" does not export a default function.`,
    );
  }

  return imported_fn;
}
