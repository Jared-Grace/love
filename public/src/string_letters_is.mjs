import { marker } from "../../../love/public/src/marker.mjs";
export function string_letters_is(str) {
  marker("1");
  let r = /^[A-Za-z]+$/;
  let li = r.test(str);
  return li;
}
