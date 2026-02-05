import { log_keep } from "../../../love/public/src/log_keep.mjs";
export async function sleep_forever() {
  await new Promise(function lambda5() {
    log_keep(sleep_forever.name);
  });
}
