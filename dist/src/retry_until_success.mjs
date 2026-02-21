import { equal } from "../../../love/public/src/equal.mjs";
export async function retry_until_success(lambda) {
  let i = 0;
  let r = null;
  while (true) {
    try {
      r = await lambda();
      break;
    } catch (e) {}
    i++;
    if (equal(i, 30)) {
      break;
    }
  }
  return r;
}
