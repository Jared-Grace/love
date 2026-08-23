export function html_error_records_text_limit() {
  ("how many characters of one error's text are kept - what runs past this is cut off");
  ("A stack from a bundled page can run to tens of thousands of characters, and the part that says what went wrong is at the top of it. Cutting from the end keeps that part and drops the frames furthest from the fault, which is the right way round.");
  ("With this and the count together, one device's whole report has a size that can be worked out in advance rather than one that depends on what went wrong.");
  let characters = 2000;
  return characters;
}
