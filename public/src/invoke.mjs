import { log } from "../../../love/public/src/log.mjs";
export function invoke(lambda) {
  let r = lambda();
  log(invoke.name, {
    lambda,
  });
  return r;
}
