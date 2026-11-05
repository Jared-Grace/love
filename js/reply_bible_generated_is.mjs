import { function_read } from "./function_read.mjs";
import { fn_name } from "./fn_name.mjs";
export async function reply_bible_generated_is(f_name) {
  "Whether the verse generator wrote this existing function, which is what lets it write that function again. Each one it writes says so in its own body.";
  let source = await function_read(f_name);
  let is = source.includes(fn_name("reply_bible_verse_function_new"));
  return is;
}
