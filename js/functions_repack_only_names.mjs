import { arguments_assert } from "./arguments_assert.mjs";
import { functions_repack_only_all } from "./functions_repack_only_all.mjs";
import { property_get } from "./property_get.mjs";
export async function functions_repack_only_names() {
  "The names of every function whose whole product is a record it took apart and put back together.";
  "The sweep next door hands back what it walked as well as what it found, which is what a person reading the report wants and not what either of the two callers wants. Both were asking it and then taking the same one word off the answer.";
  arguments_assert(arguments, 0);
  let swept = await functions_repack_only_all();
  let names = property_get(swept, "names");
  return names;
}
