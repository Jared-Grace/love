import { js_unreachable_statement_codes } from "./js_unreachable_statement_codes.mjs";
import { functions_ast_offenders_generic } from "./functions_ast_offenders_generic.mjs";
export async function functions_unreachable_statements() {
  "Audit: every function in this repo holding work written under a line that always leaves, beside the code of the work that never runs.";
  "This is the sibling of the check that can never be true, and the two are worth telling apart. That one finds a question asked of something that cannot give that answer; this one finds work that is never asked at all. Both read as care taken and neither is.";
  "The code is handed over rather than a count, because what to do about one of these is decided by reading it. An old way of doing the job wants deleting, a guard wants moving above the return, and a note left deliberately wants leaving alone - and nothing about the number of lines says which.";
  let offenders = await functions_ast_offenders_generic(
    js_unreachable_statement_codes,
    "statements",
  );
  return offenders;
}
