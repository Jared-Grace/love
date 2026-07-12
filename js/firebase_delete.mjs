import { firebase_bucket_file_get } from "./firebase_bucket_file_get.mjs";
import { retry_standard } from "./retry_standard.mjs";
import { log_keep } from "./log_keep.mjs";
import { text_combine } from "./text_combine.mjs";
export async function firebase_delete(destination) {
  let file = null;
  ({ file, destination } = await firebase_bucket_file_get(destination));
  await retry_standard(lambda);
  log_keep(firebase_delete.name, text_combine("Deleted data at ", destination));
  async function lambda() {
    await file.delete();
  }
}
