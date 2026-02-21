import { clipboard_copy } from "../../../love/public/src/clipboard_copy.mjs";
import { list_join_newline_2 } from "../../../love/public/src/list_join_newline_2.mjs";
export async function list_join_newline_2_copy(concated) {
  let joined = list_join_newline_2(concated);
  await clipboard_copy(joined);
  return joined;
}
