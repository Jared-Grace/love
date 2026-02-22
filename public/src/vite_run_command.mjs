import { noop } from "../../../love/public/src/noop.mjs";
import { vite_run_build_generic } from "../../../love/public/src/vite_run_build_generic.mjs";
export async function vite_run_command() {
  let c = await vite_run_build_generic(noop, "", "");
  return c;
}
