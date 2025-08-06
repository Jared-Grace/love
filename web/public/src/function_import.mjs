import path from "path";
import { fileURLToPath } from "url";
import { function_name_to_base } from "./function_name_to_base.mjs";
import { function_name_unalias } from "./function_name_unalias.mjs";

export async function function_run(funcName, args) {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    funcName=await function_name_unalias(funcName)
    let joined =  function_name_to_base(funcName);
    const f_path = path.join(...[__dirname, joined]);
    const imported = await import(`file://${f_path}`);

    const fn = imported[funcName];

    if (typeof fn !== "function") {
      throw new Error(
        `❌ The module "${funcName}" does not export a default function.`,
      );
    }

    // Await the result of the function with the remaining args
    const result = await fn(...args);
return result
}
