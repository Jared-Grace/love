import { equal } from "./equal.mjs";
export async function watching_ensure() {
  if (equal(watching, null)) {
    let watching = watching_start();
  }
  let r = await watching;
  return r;
}
