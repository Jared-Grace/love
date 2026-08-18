export async function function_lift_handback_candidates(f_name) {
  arguments_assert(arguments, 1);
  ("Every function written inside the named one whose body could be moved out to hand its writes back, with how many lines of work it holds and what it would have to be handed. Biggest first.");
  ("The third of the reports, and the one to read where the other two both come back nearly empty. They stop at a piece writing to a name it reached out for, which is most of what a walk of the long functions here runs into, and this is the list of exactly those.");
  ("Nothing is moved and nothing is written. The judgement is the same one the move itself asks, read from the same place, so a name standing on this list cannot be a name the move then turns down.");
  let read = await function_ast_nested_named(f_name);
  let ast = property_get(read, "ast");
  let nested = property_get(read, "nested");
  let readings = await function_lift_handback_nested_readings(ast, nested);
  let ranked = function_lift_candidate_rows(nested, readings);
  return ranked;
}
