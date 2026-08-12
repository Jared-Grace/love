import { function_functionize_generic } from "./function_functionize_generic.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { fn_name } from "./fn_name.mjs";
export async function function_functionize(
  f_name,
  name_from,
  name_to,
  f_name_new,
) {
  arguments_assert(arguments, 4);
  ("Pull the run of work from the first line mentioning one name through the first line mentioning another out of the named function, into a function of its own under a name you give it.");
  ("The one command for paying down the size record. Everything under it already existed - the span extractor, the selector that finds a line by a word written in it, the runner that selects one node per word - and putting them together took five positional arguments in an order nobody remembers, two of which were function names spelled as text. A debt of 130 entries is not paid by a command that has to be looked up every time.");
  ("The two ends are named by a name written somewhere in them. Line numbers would be the obvious address and they are the wrong one: they move under a peer's edit between reading the function and running the command, and they move again after the first cut.");
  ("A name rather than a call, because the line a span starts on is usually an accumulator being opened - a list or an object with nothing in it, and so no call in it either. The name may be written at any depth inside the line, which is also the only way to address a loop, whose own line begins with a word the language chose rather than one this repo did.");
  ("A name rather than any word at all, and the difference is worth spelling out because every function here carries as much prose as code. Only the names are searched, so a word read off a sentence in the body is refused however plainly it stands there - and it reads as a spelling mistake when it is nothing of the kind. Measured: two attempts in a row were spent addressing a span by words picked out of the paragraphs above it.");
  ("All of the cutting is held one name down, and the only thing said here is which reader finds the two ends. That is the single word this and its twin ever disagreed about, and while both wrote the work out in full a fix made in one of them was silently missing from the other.");
  let select_fn_name = fn_name("js_statement_find_name_body");
  let output = await function_functionize_generic(
    f_name,
    name_from,
    name_to,
    f_name_new,
    select_fn_name,
  );
  return output;
}
