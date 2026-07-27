import { generify2_probe_tmp } from "./generify2_probe_tmp.mjs";
export function generify2_caller_tmp() {
  "A throwaway caller, here to prove the call site keeps its old behaviour.";
  let quoted = generify2_probe_tmp("hello", '"');
  return quoted;
}
