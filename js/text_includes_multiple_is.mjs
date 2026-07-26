import { text_includes } from "./text_includes.mjs";
export function text_includes_multiple_is(t, parts) {
  "Whether the text carries any one of these parts. Answering yes at the first one";
  "found is the whole point: the caller is asking whether to worry, not how much.";
  for (let part of parts) {
    let has = text_includes(t, part);
    if (has) {
      let yes = true;
      return yes;
    }
  }
  let no = false;
  return no;
}
