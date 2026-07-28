export function claude_md_size_ceiling() {
  "The most the instructions file may weigh, in bytes.";
  "A ratchet rather than a target: the number comes down as weight moves out of the file and never goes up. Raising it to fit a new paragraph is the one edit that defeats the whole point, because the thing being rationed is not disk but the opening of every session.";
  "The instructions load whole, for every Claude, before any work starts, and about ten of them run at once - so a paragraph added here is paid for again on every session forever, while the same paragraph in a linked note is paid for only by whoever needs it. That asymmetry is the reason a file three times the size of the memory index had no ceiling while the index had a hard one, and went unnoticed for exactly as long as nothing measured it.";
  "The way down is the shape the memory index already uses: a short line that says what a thing is and points at where it is explained, with the explanation living in a file that is opened when it is wanted. Shortening prose is the smaller half of the work; moving it is the larger.";
  let bytes = 78000;
  return bytes;
}
