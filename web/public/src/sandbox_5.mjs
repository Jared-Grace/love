import { log } from "../../../love/public/src/log.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function sandbox_5() {
  marker("1");
  log(1);
  log(4);
  let v = 5 + 9;
  return v;
}
