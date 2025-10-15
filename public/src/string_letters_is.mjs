import { marker } from "../../../love/public/src/marker.mjs";
export function string_letters_is(str) {
  marker("1");
  let v = /^[A-Za-z]+$/;
  return v.test(str);
}
