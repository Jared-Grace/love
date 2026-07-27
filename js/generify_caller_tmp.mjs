import { generify_probe_tmp } from "./generify_probe_tmp.mjs";
export function generify_caller_tmp() {
  "A throwaway caller, here to prove the call sites are rewritten too.";
  let joined = generify_probe_tmp("left", "right");
  return joined;
}
