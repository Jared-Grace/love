import { marker } from "../../../love/public/src/marker.mjs";
export async function retry_until_success(lambda) {
  marker("1");
  let r = null;
  while (true) {
    try {
      r = await lambda();
      break;
    } catch (e) {}
  }
  return r;
}
