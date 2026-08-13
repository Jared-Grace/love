export async function instructions_backtick_texts() {
  "Every text the instructions set between single backticks, across all the files they are written in.";
  "The fenced half of the instructions is the half that announces itself as something to type. This is the other half, and it carries commands too - the line that says how to commit, the one that names the repair for a stale grant, the one a note gives for promoting a scratch file. Those are as load-bearing as anything in a fence and were going unread purely because of how they are set on the page.";
  "A fence delimiter is a run of backticks with nothing between, so a pattern that requires at least one character that is not a backtick cannot match one. That is what keeps this to the inline half without having to know where the fences are, and it is why the two readers can be asked separately and their answers joined.";
  let text = await instructions_text();
  let spans = text_regex_match(text, /`[^`\n]+`/g);
  if (equal(spans, null)) {
    return [];
  }
  let said = [];
  for (let span of spans) {
    let parts = text_split(span, "`");
    list_add(said, parts[1]);
  }
  return said;
}
