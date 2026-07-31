import { memory_index_path } from "./memory_index_path.mjs";
import { file_read } from "./file_read.mjs";
export async function memory_index_text() {
  "the whole memory index as it stands on disk";
  "five functions opened with these same lines - two gates over its budget, the report that names its longest entries, the compressor that shortens them, and the hook reader - and they had already drifted: some split the text with the repo's own splitter and the rest wrote the newline out by hand.";
  let path = memory_index_path();
  let text = await file_read(path);
  return text;
}
