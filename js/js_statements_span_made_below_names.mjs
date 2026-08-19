import { function_duplicate_kind_parallel } from "./function_duplicate_kind_parallel.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { js_statements_declared_names_direct } from "./js_statements_declared_names_direct.mjs";
import { js_statements_referenced_names } from "./js_statements_referenced_names.mjs";
import { list_intersection } from "./list_intersection.mjs";
export function js_statements_span_made_below_names(span, tail) {
  function_duplicate_kind_parallel();
  ("The names a run of lines reads that only the lines below it bring into being.");
  ("In a body read straight down there is only one way that can be true, and it is a function made inside the run and called later: the run writes the name down, nothing reads it yet, and by the time anything does the line below has run and the name holds a value. The read is written inside the run and happens outside it.");
  ("Once the run is cut out, that stops being true in the one way that matters. The name becomes something the new function is handed, and it is handed over at the call site - which is where the run used to be, above the line that makes it. So a read that was patiently waiting becomes a read taken at once, from a name nothing has filled.");
  ("Measured: a screen's whole body was cut into eight in a row. A name holding the thing being edited was read only inside a listener, and was made near the end. Cut, it came out as something the first piece is handed and the last piece produces, and the pieces could then be put in no order at all. The file loads, every caller compiles, and the only thing that noticed was the reading that asks which names nothing binds.");
  ("The mirror of the refusal on writing back into a name born above the run. That one is about a write reaching backwards; this is about a read reaching forwards. Both are the run refusing to be a run.");
  arguments_assert(arguments, 2);
  let declared = js_statements_declared_names_direct(tail);
  let referenced = js_statements_referenced_names(span);
  let late = list_intersection(declared, referenced);
  return late;
}
