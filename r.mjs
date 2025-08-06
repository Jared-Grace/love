
import {function_run} from './public/src/function_run.mjs'
(async () => {
  const [, , funcName, ...args] = process.argv;
  await function_run(funcName, args)
})();