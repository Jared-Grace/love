export function text_utf8_hex(text) {
  "$plain text";
  "Any text written out as the plain letters and digits a-f, two of them for each byte the text takes up when it is written the way the web writes text.";
  "IT IS A NAME A FILE CAN WEAR ANYWHERE, because it holds nothing but letters and digits, so no folder, no address and no store has to spell a Greek or Hebrew letter to keep the file.";
  "Nothing is lost, so the word can always be read back out of its own name.";
  let bytes = new TextEncoder().encode(text);
  let parts = [];
  for (let b of bytes) {
    let v = b.toString(16).padStart(2, "0");
    parts.push(v);
  }
  let result = parts.join("");
  return result;
}
