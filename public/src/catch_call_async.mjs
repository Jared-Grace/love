import { log } from "../../../love/public/src/log.mjs";
export function catch_call_async(lambda$e, lambda) {
  let i = async function inner() {
    let result = null;
    try {
      result = await lambda(...arguments);
    } catch (e) {
      log(catch_call_async.name, {
        e,
      });
      lambda$e(e);
    }
    return result;
  };
  return i;
}
