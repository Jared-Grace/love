import { noop } from "../../../love/public/src/noop.mjs";
import { app_code_lesson_identifiers_underscores_generic } from "../../../love/public/src/app_code_lesson_identifiers_underscores_generic.mjs";
export function app_code_lesson_identifiers_underscores_2() {
  const separator_valid = "$";
  let separator_valid_name = "dollar sign";
  const separator_invalid = ".";
  let separator_invalid_name = "period";
  let r = app_code_lesson_identifiers_underscores_generic(
    separator_invalid_name,
    separator_invalid,
    separator_valid_name,
    separator_valid,
    noop,
  );
  return r;
}
