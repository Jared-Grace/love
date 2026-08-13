export async function instructions_commands() {
  "Every command line the instructions show, made runnable: the comment cut off the end and each placeholder filled with a plain word.";
  "The instructions tell a Claude to type these, so what matters is whether the guard accepts the SHAPE - and a shape cannot be asked about while it still spells its holes as angle brackets, because the tokenizer reads a bracket as punctuation rather than as the word that will stand there.";
  "One stand-in word for every hole, because the question is about the shape and not about the argument. A word made of letters is the tamest thing that can stand in a command line, so if the shape is refused with this in it, the shape is refused.";
  "Which lines count as commands is decided by the first word rather than by which file they sit in - the instructions also fence a diagram and a piece of JSON, and neither is something anyone is being told to run.";
  let shown = await instructions_fenced_lines();
  let commands = [];
  for (let line of shown) {
    let node_call = text_starts_with(line, "node ");
    let sandbox = text_starts_with(line, "unshare ");
    let runnable = or(node_call, sandbox);
    if (not(runnable)) {
      continue;
    }
    let parts = text_split(line, "#");
    let said = text_trim(parts[0]);
    let holes = text_regex_match(said, /<[^>]*>|\[[^\]]*\]/g);
    let filled = said;
    if (equal_not(holes, null)) {
      filled = text_replace_multiple_to(said, holes, "x");
    }
    list_add(commands, filled);
  }
  let unique = list_unique(commands);
  return unique;
}
