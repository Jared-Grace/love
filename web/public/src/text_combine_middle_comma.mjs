import { text_combine_multiple } from "../../../love/public/src/text_combine_multiple.mjs";
export function text_combine_middle_comma(name_new, args_comma) {
  let combined2 = text_combine_multiple([name_new, ",", args_comma]);
  return combined2;
}
