import path from "path";
import { fileURLToPath } from "url";
import { git_acp } from "./git_acp.mjs";
import { function_name_to_base } from "./function_name_to_base.mjs";

export async function function_run(funcName, args) {
  // runFunction.js

  await run(funcName, args);
  await git_acp([funcName].concat(args).join(" "));

  async function run(funcName, args) {
    if (!funcName) {
      console.error("❌ Please provide a function name as the first argument.");
      process.exit(1);
    }

    try {
      // Import the function module from ./public/
      const __filename = fileURLToPath(import.meta.url);
      const __dirname = path.dirname(__filename);
      let joined = function_name_to_base(funcName);
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

      console.log("✅ Result:", result);
    } catch (err) {
      console.error("❌ Error:", err.message);
      process.exit(1);
    }
  }
}
