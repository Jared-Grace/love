import { each_async } from "../../../love/public/src/each_async.mjs";
import { functions_asts } from "../../../love/public/src/functions_asts.mjs";
export async function functions_asts_each(lambda) {
  let asts = await functions_asts();
  await each_async(asts, lambda);
}
