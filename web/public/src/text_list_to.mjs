import { undefined } from "../../../love/public/src/undefined.mjs";
export function text_list_to(str) {
  let segmenter = new Intl.Segmenter(undefined, {
    granularity: "grapheme",
  });
  function lambda(s) {
    let v = s.segment;
    return v;
  }
  let v2 = segmenter.segment(str);
  let list = Array.from(v2, lambda);
  return list;
}
