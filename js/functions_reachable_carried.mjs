import { arguments_assert } from "./arguments_assert.mjs";
import { functions_reachable_generic } from "./functions_reachable_generic.mjs";
import { function_imports } from "./function_imports.mjs";
export async function functions_reachable_carried(f_names) {
  "Everything a bundle built from these entry points would hold.";
  "★ CARRIED IS NOT THE SAME QUESTION AS RUN, AND THE DIFFERENCE IS THE WHOLE POINT. The other walk turns aside wherever somebody asked which environment they were in, because that is where a page stops travelling - and it is right about what runs. It says nothing about weight: a bundler follows a plain import whether the branch is ever walked or not, so everything under the turning is shipped in order never to execute.";
  "Measured, that gap was three hundred and thirty-seven thousand bytes across six pages - the fetching, the unzipping and the chapter-by-chapter disk reading of a bible, carried by pages that could not have run a line of it. Every gate was green throughout, because every gate was asking the other question.";
  "It turns aside at nothing on purpose, so what it returns is a superset of what runs. A name here is therefore never by itself a fault; it is a fault only where the thing named cannot run in a browser at all.";
  arguments_assert(arguments, 1);
  let reachable = await functions_reachable_generic(f_names, function_imports);
  return reachable;
}
