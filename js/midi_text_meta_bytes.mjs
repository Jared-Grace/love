import { less_than } from "./less_than.mjs";
export function midi_text_meta_bytes(kind, text) {
  "writes one midi text meta event of the given kind such as a track name";
  "only the plain ascii of the text is written because a midi text length counts bytes and letters outside ascii would need more than one each";
  let letters = [];
  for (let index = 0; less_than(index, text.length); index++) {
    let code = text.charCodeAt(index);
    letters.push(less_than(code, 128) ? code : 63);
  }
  let r = [255, kind, letters.length].concat(letters);
  return r;
}
