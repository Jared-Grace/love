import { log } from "../../../love/public/src/log.mjs";
export function catch_call(lambda$e, lambda) {
  let i = function inner() {
    log(catch_call.name, {
      a: "a",
    });
    let result = null;
    try {
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
