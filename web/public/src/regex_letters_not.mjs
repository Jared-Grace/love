import { marker } from "../../../love/public/src/marker.mjs";
export function regex_letters_not() {
  marker("1");
  let v = /[^a-zA-Z]/g;
  return v;
}
