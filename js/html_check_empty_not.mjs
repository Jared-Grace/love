import { string_empty_not_is } from "../../../love/public/src/string_empty_not_is.mjs";
export function html_check_empty_not() {
  let v = {
    text: "Must be non-empty",
    check: string_empty_not_is,
  };
  return v;
}
