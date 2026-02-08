import { undefined } from "../../../love/public/src/undefined.mjs";
export function text_list_to(str) {
  const segmenter = new Intl.Segmenter(undefined, {
    granularity: "grapheme",
  });
  function lambda(s) {
    let v = s.segment;
    return v;
  }
  let v2 = segmenter.segment(str);
  const list = Array.from(v2, lambda);
  return list;
}
