import { not } from "../../../love/public/src/not.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function retry_until_success(lambda) {
  marker("1");
  let success = false;
  while (not(success)) {
    let r = await lambda();
  }
}
