import { catch_ignore_async } from "../../../love/public/src/catch_ignore_async.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function retry_until_success(lambda) {
  marker("1");
  let r = null;
  while (true) {
    async function lambda3() {}
    await catch_ignore_async(lambda3);
    try {
      r = await lambda();
      break;
    } catch (e) {}
  }
  return r;
}
