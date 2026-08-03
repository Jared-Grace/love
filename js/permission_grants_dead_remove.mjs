import { permission_grant_names } from "./permission_grant_names.mjs";
import { permission_grant_names_write } from "./permission_grant_names_write.mjs";
import { permission_settings_allow_write_from } from "./permission_settings_allow_write_from.mjs";
import { functions_names } from "./functions_names.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_add } from "./list_add.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { property_get } from "./property_get.mjs";
export async function permission_grants_dead_remove() {
  "takes back every standing approval whose function no longer exists, and finds that set itself rather than being handed it";
  "do NOT grant - it edits the file that decides what runs unasked and has to be seen every time";
  "a peer deleting a granted function leaves its rule behind naming a word nothing answers to, which anyone is then free to claim by writing a function under that name. the repo-wide gate reads it as a dead name and goes red, so one peer's deletion stops every other Claude until somebody diagnoses it by hand. that happened today: a commit removed one gate function and the next run of the gate failed on its rule.";
  "the single form takes one name, and running it down a list is the missing command this is. it cannot be that loop in a process either - the granted names are read from a module that is loaded once, so a second removal would write back the list the first one had already shrunk, putting the first name back. one pass, one write.";
  "this can only ever remove an approval, never write one, which is what makes it safe to run unasked. a name it takes back by mistake - a peer's rename caught between the delete and the write - costs one approval given again, and the reverse mistake cannot be paid back at all.";
  let names = permission_grant_names();
  let live = await functions_names();
  let kept = [];
  let dead = [];
  for (let name of names) {
    let alive = list_includes(live, name);
    if (alive) {
      list_add(kept, name);
      continue;
    }
    list_add(dead, name);
  }
  let none = list_empty_is(dead);
  if (none) {
    let clean = {
      dead: [],
      names: names.length,
    };
    return clean;
  }
  let allow = await permission_grant_names_settings_write(kept);
  let report = {
    dead,
    names: kept.length,
    allow,
  };
  return report;
}
