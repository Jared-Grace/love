import { webpack_watch } from '../js/webpack_watch.mjs';
Error.stackTraceLimit = Infinity;
(async () => {
  await webpack_watch();
})();
