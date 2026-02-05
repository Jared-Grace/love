import { marker } from "../../../love/public/src/marker.mjs";
export function integer_to_try(input) {
  marker("1");
  let i = parseInt(input, 10);
  if (Number.isNaN(i)) {
    let v = null;
    return v;
  }
  return i;
}
