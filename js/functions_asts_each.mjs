import { each_async } from "./each_async.mjs";
import { functions_asts } from "./functions_asts.mjs";
export async function functions_asts_each(lambda$ast) {
  let asts = await functions_asts();
  await each_async(asts, lambda$ast);
}
