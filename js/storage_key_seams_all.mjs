import { arguments_assert } from "./arguments_assert.mjs";
import { storage_key_seams_durable } from "./storage_key_seams_durable.mjs";
import { storage_key_composers } from "./storage_key_composers.mjs";
import { list_concat } from "./list_concat.mjs";
import { repo_love_name } from "./repo_love_name.mjs";
import { repo_functions_names_code_includes } from "./repo_functions_names_code_includes.mjs";
import { function_ast } from "./function_ast.mjs";
import { list_add } from "./list_add.mjs";
import { property_get } from "./property_get.mjs";
import { list_includes } from "./list_includes.mjs";
import { js_storage_key_word_forwarded_is } from "./js_storage_key_word_forwarded_is.mjs";
export async function storage_key_seams_all() {
  "Every call a key word can be written at - the ones that join the word to an owner, the ones that store it, and the front doors that take a word and hand it straight on. Read-only.";
  "A front door writes no word of its own, so a reading that stops at the storing never sees the name. Reading the calls to the door as well is what reaches it, and which functions are doors is a question about the code rather than a list somebody keeps: a door is one that hands the storing a word held in a variable, because a variable is exactly what cannot be read here and can be read at whoever filled it.";
  "As many steps out as there are doors. This used to go round once, and said so, and said that the day a door stood behind another door was the day to widen it. That day came: reading a setting with the context in hand goes through the plain reader, which is itself a door onto the one that joins the name to the word, so the reader with the context was a door behind a door and was reached by nobody. Every key written through it was invisible, and the reading that watches for a lost setting announced that a word still plainly spelled had gone.";
  "★ THE JOINING CALLS THEMSELVES ARE HERE NOW, AND THAT IS THE SAME LESSON ARRIVING FROM THE OTHER END (2026-09-04). The doors were reached by walking OUT from the storing towards whoever supplies the word. That walk starts at the calls that store, so it can only ever find a word on the near side of a store - and a function that joins a word to an owner and hands the finished key BACK, for somebody else to store later, is on the far side of every one of them. There is exactly one place a key is joined, so the calls to it are, by construction, every place a word is written into a key; leaving them out meant the reading could miss a word that is spelled plainly and stored plainly, merely because the joining and the storing happened in two different functions. The word every device is named by went unread that way, and the gate watching for a lost setting said it had gone.";
  "They are asked for by name rather than listed, so this cannot drift from the reading that checks every place a key is composed has been classified - both ask the same question of the same one list.";
  "Going round until nothing new is found is the whole of the widening, and it cannot run away: a round only ever adds, and there are finitely many functions to add.";
  "The trees are read once and kept, because the rounds ask the same files the same question against a longer list, and reading them again each time would multiply the cost of the walk by the depth of the deepest door.";
  "A candidate that only reaches a door through a name this reading never sees is still missed - the files looked at are the ones spelling the storing word, so a door two names away from that spelling is out of reach. Widening that is a different reading, and nothing needs it today.";
  arguments_assert(arguments, 0);
  let durable = storage_key_seams_durable();
  let composers = storage_key_composers();
  let base = list_concat(durable, composers);
  let repo_name = repo_love_name();
  let seam = "storage_local_";
  let candidates = await repo_functions_names_code_includes(repo_name, seam);
  let held = [];
  for (let candidate of candidates) {
    let tree = await function_ast(candidate);
    let pair = {
      candidate,
      tree,
    };
    list_add(held, pair);
  }
  let doors = [];
  let growing = true;
  while (growing) {
    growing = false;
    let reached = list_concat(base, doors);
    for (let pair of held) {
      let candidate = property_get(pair, "candidate");
      let already = list_includes(reached, candidate);
      if (already) {
        continue;
      }
      let tree = property_get(pair, "tree");
      let forwards = js_storage_key_word_forwarded_is(tree, reached);
      if (forwards) {
        list_add(doors, candidate);
        growing = true;
      }
    }
  }
  let seams = list_concat(base, doors);
  return seams;
}
