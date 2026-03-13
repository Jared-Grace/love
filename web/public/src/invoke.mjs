import { log } from "../../../love/public/src/log.mjs";
export function invoke(lambda) {
  let r = lambda();
  log("TODO", {
    lambda,
  });
  return r;
}
