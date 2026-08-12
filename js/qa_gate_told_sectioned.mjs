export function qa_gate_told_sectioned(told) {
  "$plain told";
  arguments_assert(arguments, 1);
  ("What the frozen copy said, with each complaining gate's own words read out of it and carried alongside.");
  ("The reading is done here, where the copy was asked, rather than further down. An answer that came out of the record already has its sections and never had any printed text to read them from, so a reader further down would have to know which of the two it was holding - and the whole point of the two shapes agreeing is that nothing downstream needs to know.");
  let printed = property_get(told, "printed");
  let sections = qa_gate_failed_sections(printed);
  property_set(told, "sections", sections);
  return told;
}
