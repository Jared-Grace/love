export function text_bytes_size(s) {
  "How many bytes the text takes up once written down, which is not how many characters it has: an arrow, a star or a dash costs several.";
  "Anything comparing text against a file-size limit has to ask this one. Counting characters answers a different question and answers it optimistically, so a file can sit under a limit by that count and over it in the only place the limit is applied.";
  let size = Buffer.byteLength(s, "utf8");
  return size;
}
