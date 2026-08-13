export async function instructions_fenced_lines() {
  "Every line the instructions show inside a fenced block, across all the files they are written in.";
  "A fence is where the instructions stop describing and start showing. What is inside one is meant to be copied out and typed, so it is the half of the instructions a check can actually run - and the only half where being wrong costs the reader an attempt rather than a misunderstanding.";
  "The files are read as one joined text rather than one at a time, which is safe because every one of them closes each fence it opens. A file that did not would leak its last block into the next file's prose, and that is a defect in the file rather than something for this to work around.";
  let text = await instructions_text();
  let lines = text_split_newline(text);
  let inside = false;
  let shown = [];
  for (let line of lines) {
    let trimmed = text_trim(line);
    let fence = text_starts_with(trimmed, "```");
    if (fence) {
      inside = not(inside);
      continue;
    }
    if (inside) {
      list_add(shown, trimmed);
    }
  }
  return shown;
}
