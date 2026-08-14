import { invoke_cache_file } from "./invoke_cache_file.mjs";
import { invoke_cache_global } from "./invoke_cache_global.mjs";
export async function invoke_cache_file_global(fn, args) {
  "What a function answers, kept on this disk so it survives the run, and kept in this run so it is read off the disk once however many times it is asked for.";
  "The two layers answer different costs and neither one covers the other. The disk layer saves doing the work again, and the run layer saves reading the answer again - and a big answer read back inside a loop is the case where the second cost is the whole cost, because the work was already skipped and what is left is the reading. A ten megabyte answer asked about a thousand times is ten gigabytes of reading to learn nothing new.";
  "The run layer sits on the outside, so a first asking still goes to disk and still does the work when the disk is empty. Nothing here changes what is answered - only how often the same answer is fetched.";
  async function from_file() {
    let value = await invoke_cache_file(fn, args);
    return value;
  }
  let r = await invoke_cache_global(from_file, [fn.name, args]);
  return r;
}
