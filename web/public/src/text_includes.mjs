import { text_is_assert_json } from "../../../love/public/src/text_is_assert_json.mjs";
export function text_includes(input, part) {
  const o = {
    input,
    part,
  };
  text_is_assert_json(input, o);
  text_is_assert_json(part, o);
  let i = input.includes(part);
  return i;
}
