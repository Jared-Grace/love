export function generify2_probe_tmp(word) {
  "A throwaway for proving the one-step generify, with prose that must be left alone.";
  let quoted = text_combine("\"", word);
  let closed = text_combine(quoted, "\"");
  return closed;
}
