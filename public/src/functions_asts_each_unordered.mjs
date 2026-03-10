import { each_unordered_async } from "../../../love/public/src/each_unordered_async.mjs";
import { functions_asts } from "../../../love/public/src/functions_asts.mjs";
export async function functions_asts_each_unordered(lambda) {
  let asts = await functions_asts();
  await each_unordered_async(asts, lambda);
}
