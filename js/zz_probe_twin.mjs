import { text_slice } from "./text_slice.mjs";
export function zz_probe_twin(words, howmany) {
  let front = text_slice(words, 0, howmany);
  return front;
}
