import { not } from "../../../love/public/src/not.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export function retry_until_success() {
  marker("1");
  let success = false;
  while (not(success)) {}
}
