import { function_run } from '../public/src/function_run.mjs';
import { log_keep } from '../public/src/log_keep.mjs';
Error.stackTraceLimit = Infinity;
(async () => {
  const [, , funcName, ...args] = process.argv;
 let result=await function_run(funcName, args)
  log_keep('r.mjs result:', result)
})();