export function text_dispatcher_command_names(text) {
  "Every function a piece of writing tells a reader to run, read out of the command it spells out - the word standing after the dispatcher, each one named once. Read-only, pure.";
  "Writing is the one place a function name is not a reference. Code spells a name it means as a name, and a rename follows it everywhere; prose has only bytes, so a docstring saying run this and then giving a word keeps saying it long after the word stops naming anything. That is the same hole the marked pointer fills for memory notes, met here in the repo's own writing, and it needs no marker because the command itself is the claim.";
  "Only a word directly after the dispatcher is collected. A line that ends at the dispatcher and continues by joining a name onto it is already holding that name as a reference, which is the shape a rename does follow, so there is nothing here to check and nothing is collected.";
  "De-duplicated, and an empty list when the writing spells no command, so a piece of prose that tells nobody to run anything reads the same as one that does not mention the dispatcher at all rather than as a read that failed.";
  arguments_assert(arguments, 1);
  let matches = text.match(/node scripts\/ai\.mjs ([a-z0-9_]+)/g);
  if (equal(matches, null)) {
    let none = [];
    return none;
  }
  function inside_get(m) {
    let prefix = 20;
    let inside = m.slice(prefix);
    return inside;
  }
  let unique = list_map_unique(matches, inside_get);
  return unique;
}
