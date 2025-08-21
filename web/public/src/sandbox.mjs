import { marker } from "./marker.mjs";
export async function sandbox() {
  marker("1");
  if (0) {
    function test() {}
  }
}
