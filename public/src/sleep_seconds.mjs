import { sleep } from "../../../love/public/src/sleep.mjs";
export async function sleep_seconds(seconds) {
  await sleep(seconds * 1000);
}
