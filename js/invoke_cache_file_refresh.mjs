import { invoke_cache_file_remove_if_exists } from "./invoke_cache_file_remove_if_exists.mjs";
import { invoke_cache_file } from "./invoke_cache_file.mjs";
export async function invoke_cache_file_refresh(fn, args) {
  "Throws away what one call's answer was remembered as and works it out again.";
  "AN ANSWER ALREADY GONE IS THIS SUCCEEDING, NOT FAILING. What a refresh promises is that the next reader gets a freshly worked-out answer, and nothing remembered at all delivers that promise exactly. Removing on its own insists the entry be there, which is right when a caller names one thing to forget and would otherwise forget nothing - but here the entry is thrown away in order to rebuild it, so its absence is the state being aimed at.";
  "That difference is why it mattered. A rebuild that fails leaves the remembered answer already gone, so asking for the refresh again met the insistence and refused - and the way out was to know that the plain builder next door does the second half on its own. A repair nobody can find is one the failure has to be diagnosed for, every time.";
  await invoke_cache_file_remove_if_exists(fn, args);
  let r = await invoke_cache_file(fn, args);
  return r;
}
