import { function_run } from '../js/function_run.mjs';
import { log_keep } from '../js/log_keep.mjs';
Error.stackTraceLimit = Infinity;
(async () => {
  const [, , funcName, ...args] = process.argv;
 let result=await function_run(funcName, args)
  log_keep('r.mjs result:', result)
})();