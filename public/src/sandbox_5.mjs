import { s5_inner } from "./s5_inner.mjs";
import { marker } from "./marker.mjs";
export async function sandbox_5() {
  marker("1");
  await s5_inner();
}
