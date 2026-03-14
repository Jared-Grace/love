import { log } from "../../../love/public/src/log.mjs";
export function catch_call(lambda$e, lambda) {
  let i = function inner() {
    let result = null;
    try {
      log(catch_call.name, {
        a: "a",
      });
      result = lambda(...arguments);
    } catch (e) {
      log(catch_call.name, {
        e,
      });
      lambda$e(e);
    }
    return result;
  };
  return i;
}
