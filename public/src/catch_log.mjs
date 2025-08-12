import {log} from './log.mjs';
export function catch_log(lambda) {
  try {
    lambda();
  } catch (e) {
    log(e);
  }
}
