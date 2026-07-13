import { assert_message } from "./assert_message.mjs";
import { file_exists } from "./file_exists.mjs";
export async function file_exists_assert(path) {
  let exists = await file_exists(path);
  assert_message(
    exists,
    "This file was expected to exist. Would you like to check the path?",
  );
}
