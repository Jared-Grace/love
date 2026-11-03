import { reply_typo_costs } from "./reply_typo_costs.mjs";
import { reply_typo_sounds } from "./reply_typo_sounds.mjs";
import { reply_keys_nearby } from "./reply_keys_nearby.mjs";
import { global_function_cache } from "./global_function_cache.mjs";
export function reply_typo_tables() {
  "What each mistake costs, which spellings sound alike and which keys touch: the three fixed tables reading one word against a message needs, built once and kept for the rest of the process.";
  "★ THEY ARE KEPT BECAUSE ONE MESSAGE ASKS FOR THEM THOUSANDS OF TIMES. A list of two thousand names is one reading per name at every place a name might start, and each reading used to build all three again. Measured 2026-11-03 over 2165 names, rebuilding them took 10 of the 16 milliseconds the readings took.";
  "All three are built from nothing but what is written in their own functions, so a kept one cannot go out of date while the process runs. Whoever asks only reads them; the same three are handed to everybody, so changing one would change it for every reading after.";
  function tables_build() {
    let tables = {
      costs: reply_typo_costs(),
      sounds: reply_typo_sounds(),
      nearby: reply_keys_nearby(),
    };
    return tables;
  }
  let kept = global_function_cache(reply_typo_tables, "", tables_build);
  return kept;
}
