import { property_get } from "./property_get.mjs";
import { memory_index_hooks_compress_line } from "./memory_index_hooks_compress_line.mjs";
import { memory_index_lines } from "./memory_index_lines.mjs";
import { memory_index_path } from "./memory_index_path.mjs";
import { file_overwrite } from "./file_overwrite.mjs";
export async function memory_index_hooks_compress() {
  "Shortens every over-long index line to its own hook plus the bare links it was carrying, and answers which lines changed and by how much.";
  "What is dropped is the second hook a line writes about a note it merely links to. That note already carries the same sentence in its own header, so the index was holding a copy - and it is the copy that overflows the budget the index is read within.";
  "This is safe to run over the whole index only because of that. Where it is untrue, the name lives in the index and nowhere else - and the reader of index-only names answers exactly those, so ask it before and after: empty both times is the proof that the lines were compressed rather than robbed.";
  "A link is only a link when it is not quoted. A note explaining how links are written shows one as an example, and the first run of this read one of those as the real thing and cut the line off inside the quotation - so the line is read with its backtick spans blanked out, keeping every position where it was.";
  "Lines carrying no link are left alone. Their whole length is the hook for the note they point at, and shortening that is a judgment about what the note is for, which no rule here can make.";
  "A line whose first link is a word in its sentence is left alone too. Rebuilding drops whatever followed that link, which is right when what follows is a list and wrong when the sentence was going to carry on - and the question that tells them apart is whether the words before the link stop at a separator. Measured 2026-08-02: three lines came back broken from a run that did not ask, one of them reading BOUNDED by with its object taken out.";
  "A rebuilt line is only kept when it is genuinely shorter than the one it replaces. Shortening is the whole reason this runs, so a line that came back the same length or longer has nothing to offer and every chance of having lost something on the way.";
  "An answer of no lines is an ordinary answer. It says the index holds nothing this can shorten without taking something out of it, which is the state a well-kept index is in most of the time, and the remedy left over is the one this cannot make: moving a hub's children into the hub's own note.";
  let lines = await memory_index_lines();
  let r2 = memory_index_hooks_compress_line(lines);
  let shortened = property_get(r2, "shortened");
  let kept = property_get(r2, "kept");
  let rebuilt = kept.join("\n");
  let path = memory_index_path();
  await file_overwrite(path, rebuilt);
  let r = {
    lines: shortened.length,
    shortened,
  };
  return r;
}
