import { equal } from "../../../love/public/src/equal.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function retry_until_success(lambda) {
  marker("1");
  let i = 0;
  let r = null;
  while (true) {
    try {
      r = await lambda();
      break;
    } catch (e) {}
    i++;
    if (equal(i, 30)) {
      break;
    }
  }
  return r;
}
