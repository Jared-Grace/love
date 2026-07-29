import { catch_null_async } from "./catch_null_async.mjs";
export async function catch_ignore_async(lambda) {
  let r = await catch_null_async(lambda);
}
