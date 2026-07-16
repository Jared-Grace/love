import { html_loading_state } from "./html_loading_state.mjs";
export async function html_loading_suppressed(lambda) {
  "run lambda without showing the loading overlay (e.g. a background poll)";
  let state = html_loading_state();
  let previous = state.suppressed;
  state.suppressed = true;
  let result = null;
  try {
    result = await lambda();
  } finally {
    state.suppressed = previous;
  }
  return result;
}
