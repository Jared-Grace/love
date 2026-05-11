import { clipboard_copy } from "../../../love/public/src/clipboard_copy.mjs";
import { clipboard_paste } from "../../../love/public/src/clipboard_paste.mjs";
export async function clipboard_transform(fn) {
  let paste = await clipboard_paste();
  let text = await fn(paste);
  await clipboard_copy(text);
}
