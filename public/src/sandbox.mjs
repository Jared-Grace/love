import { invoke_cache_clear } from "../../../love/public/src/invoke_cache_clear.mjs";
import { file_read } from "./file_read.mjs";
export async function sandbox() {
  invoke_cache_clear(file_read, "test.mjs");
}
