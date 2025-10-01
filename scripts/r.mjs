import { function_run } from '../public/src/function_run.mjs';
Error.stackTraceLimit = Infinity;
(async () => {
  const [, , funcName, ...args] = process.argv;
  await function_run(funcName, args)
})();