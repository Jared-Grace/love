import { invoke_multiple_args } from "../../../love/public/src/invoke_multiple_args.mjs";
export function invoke_multiple_arg(on_keydowns, k) {
  invoke_multiple_args(on_keydowns, [k]);
}
