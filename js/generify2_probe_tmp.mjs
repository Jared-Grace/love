import { text_combine } from "./text_combine.mjs";
export function generify2_probe_tmp(word, quote) {
  "A throwaway for proving the one-step generify, with prose that must be left alone.";
  let quoted = text_combine(quote, word);
  let closed = text_combine(quoted, quote);
  return closed;
}
