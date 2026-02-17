import { text_combine_3 } from "../../../love/public/src/text_combine_3.mjs";
export function text_between_space(index, item) {
  const combine = " ";
  let r = text_combine_3(index, combine, item);
  return r;
}
