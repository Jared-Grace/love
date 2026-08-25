export function js_statement_swap_called_named_or_null(node_before, node_after) {
  "$plain node_before";
  "$plain node_after";
  "The name for one standing expression swapped for another, said as the wording having moved where both lines are paragraphs and as the called name where both lines are calls - or nothing, where what stands there is neither.";
  "A PARAGRAPH EDITED IS NOT A CALL EDITED, AND IT IS WHAT MOST OF THE RESIDUE TURNED OUT TO BE. Three of the four edits still landing under the bare name after the kinds above were told apart were somebody rewording an explanation and touching nothing else. This repo keeps its reasoning in its prose, so that is a real and frequent edit, and filing it under a name that says only that some statement changed hides the one kind of change a later reader most wants to find. All three shapes a paragraph gets written in answer to one reading, so a paragraph rewritten from one shape into another is still named as the wording having moved.";
  "A CALL REACHED THROUGH A DOT IS STILL A CALL. The fourth of the four was window.addEventListener becoming a function of this repo, which is the shape of the wrapping this repo does constantly - and the plain callee reading answers nothing for it, because it exists to tell callers whether a name is one of ours. So the dotted reading is asked here instead.";
  arguments_assert(arguments, 2);
  let prose = js_statement_prose_is(node_before);
  let prose_after = js_statement_prose_is(node_after);
  let both_prose = prose && prose_after;
  if (both_prose) {
    let r6 = "the prose written differently";
    return r6;
  }
  let expression = property_get(node_before, "expression");
  let expression_after = property_get(node_after, "expression");
  let callee = js_call_callee_name_dotted_try(expression);
  let callee_after = js_call_callee_name_dotted_try(expression_after);
  let unknown = null_is(callee);
  if (unknown) {
    return null;
  }
  let same_callee = equal(callee, callee_after);
  if (not(same_callee)) {
    let r3 = "one call swapped for another";
    return r3;
  }
  let said_call = text_combine_multiple([callee, " called differently"]);
  return said_call;
}
