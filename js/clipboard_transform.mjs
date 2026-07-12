import { clipboard_copy } from "./clipboard_copy.mjs";
import { clipboard_paste } from "./clipboard_paste.mjs";
export async function clipboard_transform(fn) {
  let paste = await clipboard_paste();
  let text = await fn(paste);
  await clipboard_copy(text);
}
