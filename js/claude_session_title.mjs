import { open } from "fs/promises";
// A short window label the human will recognise, taken from the first thing they
// actually typed in that session.
//
// Reads a fixed head rather than the file: the first user prompt sits in the
// first few lines, while transcripts here reach 60MB. The label is reduced to
// letters, digits, dashes so it can be passed to tmux without any quoting.
const HEAD_BYTES = 65536;
const TITLE_SIZE = 20;
const TITLE_MISSING = "session";
export async function claude_session_title(session_path) {
  let handle = await open(session_path, "r");
  let buffer = Buffer.alloc(HEAD_BYTES);
  let read = await handle.read(buffer, 0, HEAD_BYTES, 0);
  await handle.close();
  let head = buffer.toString("utf8", 0, read.bytesRead);
  let lines = head.split("\n");
  for (let line of lines) {
    let entry = null;
    try {
      entry = JSON.parse(line);
    } catch (partial) {
      // The last line of a fixed-size head is normally cut in half.
      partial;
      continue;
    }
    if (entry.type !== "user") continue;
    if (entry.isMeta) continue;
    let content = entry.message && entry.message.content;
    if (typeof content !== "string") continue;
    // A prompt opening with "<" is harness-injected, not something they typed.
    if (content.startsWith("<")) continue;
    let dashed = content.replace(/[^a-zA-Z0-9]+/g, "-").replace(/^-+/, "");
    let title = dashed.slice(0, TITLE_SIZE).replace(/-+$/, "").toLowerCase();
    if (title) return title;
  }
  return TITLE_MISSING;
}
