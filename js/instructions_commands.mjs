import { fn_name } from "./fn_name.mjs";
import { instructions_backtick_texts } from "./instructions_backtick_texts.mjs";
import { list_concat } from "./list_concat.mjs";
import { text_includes_not_multiple } from "./text_includes_not_multiple.mjs";
import { instructions_fenced_lines } from "./instructions_fenced_lines.mjs";
import { text_starts_with } from "./text_starts_with.mjs";
import { or } from "./or.mjs";
import { text_split } from "./text_split.mjs";
import { text_trim } from "./text_trim.mjs";
import { text_regex_match } from "./text_regex_match.mjs";
import { equal_not } from "./equal_not.mjs";
import { text_replace_multiple_to } from "./text_replace_multiple_to.mjs";
import { list_add } from "./list_add.mjs";
import { list_unique } from "./list_unique.mjs";
import { not } from "./not.mjs";
export async function instructions_commands() {
  "Every command line the instructions show, made runnable: the comment cut off the end and each placeholder filled with a plain word.";
  "The instructions tell a Claude to type these, so what matters is whether the guard accepts the SHAPE - and a shape cannot be asked about while it still spells its holes as angle brackets, because the tokenizer reads a bracket as punctuation rather than as the word that will stand there.";
  "One stand-in word for every hole, because the question is about the shape and not about the argument. The word has to be a live function's name rather than a made-up one, because the first hole in almost every template here is the function itself and the guard decides on that word - it reads the aliases, the arity and the grants before it decides anything about the line. A short nonsense word looked tamest and was the worst possible choice: `x` is a live alias key, so every template spelling its function as a hole came back refused for pointing at an alias, which said nothing whatever about the template.";
  "So the stand-in is a real zero-argument reader, written as a reference so a rename carries it. Zero arguments is the part that matters: the guard refuses a call that supplies fewer arguments than the function declares, and a stand-in that did so would fail every template it was put into for a reason belonging to itself.";
  "Which lines count as commands is decided by how they open rather than by which file they sit in - the instructions also fence a diagram and a piece of JSON, and neither is something anyone is being told to run. The dispatchers all live under scripts, which is what tells a command apart from the raw `node -e` the instructions name in order to forbid it: naming a thing in order to say never to type it is the opposite of showing a shape to type, and a line that was never under scripts was never one of this repo's commands to begin with.";
  "Both halves of the page are read, the fenced blocks and the inline backticks, because being load-bearing has nothing to do with how a line is set. The line that says how to commit and the one that names the repair for a stale grant are both inline, and both are typed far more often than anything in a fence.";
  "What the inline half brings with it is prose fragments wearing a command's first word - a path trailed off with an ellipsis, a permission rule quoted as a rule. They are told apart AFTER the holes are filled rather than before, and that ordering is the whole trick: an ellipsis inside a hole is part of the hole and disappears with it, so `[arg ...]` survives as a shape, while an ellipsis still standing in the open afterwards means the line was never whole to begin with.";
  let fenced = await instructions_fenced_lines();
  let backticked = await instructions_backtick_texts();
  let shown = list_concat(fenced, backticked);
  let commands = [];
  for (let line of shown) {
    let node_call = text_starts_with(line, "node scripts/");
    let unshare_call = text_starts_with(line, "unshare ");
    let runnable = or(node_call, unshare_call);
    if (not(runnable)) {
      continue;
    }
    let parts = text_split(line, "#");
    let said = text_trim(parts[0]);
    let holes = text_regex_match(said, /<[^>]*>|\[[^\]]*\]/g);
    let filled = said;
    if (equal_not(holes, null)) {
      let stand_in = fn_name("commands_only_level");
      filled = text_replace_multiple_to(said, holes, stand_in);
    }
    let marks = ["…", "...", ":*"];
    let whole = text_includes_not_multiple(filled, marks);
    if (not(whole)) {
      continue;
    }
    list_add(commands, filled);
  }
  let unique = list_unique(commands);
  return unique;
}
