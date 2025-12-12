import { sandbox_6_inner } from "../../../love/public/src/sandbox_6_inner.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function sandbox_6() {
  marker("1");
  await sandbox_6_inner();
  let v = 1;
  return v;
}
