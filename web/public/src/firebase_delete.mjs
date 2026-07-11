import { firebase_bucket_file_get } from "../../../love/public/src/firebase_bucket_file_get.mjs";
import { retry_standard } from "../../../love/public/src/retry_standard.mjs";
import { log_keep } from "../../../love/public/src/log_keep.mjs";
import { text_combine } from "../../../love/public/src/text_combine.mjs";
export async function firebase_delete(destination) {
  let file = null;
  ({ file, destination } = await firebase_bucket_file_get(destination));
  await retry_standard(lambda);
  log_keep(firebase_delete.name, text_combine('Deleted data at ', destination));
  async function lambda() {
    await file.delete();
  }
}
