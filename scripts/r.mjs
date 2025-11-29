import { function_run } from '../public/src/function_run.mjs';
import { log } from '../public/src/log.mjs';
Error.stackTraceLimit = Infinity;
(async () => {
  const [, , funcName, ...args] = process.argv;
 let result=await function_run(funcName, args)
  log(result)
})();