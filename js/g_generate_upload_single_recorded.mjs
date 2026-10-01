import { arguments_assert } from "./arguments_assert.mjs";
import { g_generate_upload_single } from "./g_generate_upload_single.mjs";
import { g_generate_upload_hash_write } from "./g_generate_upload_hash_write.mjs";
export async function g_generate_upload_single_recorded(fn, path_get, file) {
  "Send one file of a store up, and write down what it held as it went.";
  "THE TWO HALVES ARE JOINED HERE SO THAT NOTHING CAN SEND WITHOUT RECORDING. Both ways of sending a store up walk the store's files and hand each one over for sending; if each of them wrote the record itself, the next way of sending somebody adds would quietly not, and a file with no record reads exactly like a file nobody has touched. One place that does both is the whole of the guarantee.";
  "The order matters and is the reason this is a function rather than two lines: the record is written only once the send has come back, so a send that throws leaves nothing written and the file stays accounted for as unsent.";
  arguments_assert(arguments, 3);
  await g_generate_upload_single(path_get, file);
  await g_generate_upload_hash_write(fn, file);
}
