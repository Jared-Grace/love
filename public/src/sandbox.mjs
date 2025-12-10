import { marker } from "../../../love/public/src/marker.mjs";
export async function sandbox() {
  marker("1");
  let v = {
    test: 456,
  };
  return v;
}
