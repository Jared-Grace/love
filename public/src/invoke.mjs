import { marker } from "../../../love/public/src/marker.mjs";
export function invoke(lambda) {
  marker("1");
  lambda();
}
