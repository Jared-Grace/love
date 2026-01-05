import { catch_ignore_async } from "../../../love/public/src/catch_ignore_async.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function retry_until_success(lambda) {
  marker("1");
  let r = null;
  while (true) {
    await catch_ignore_async(async function lambda3() {});
    try {
      r = await lambda();
      break;
    } catch (e) {}
  }
  return r;
}
