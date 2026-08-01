export async function storage_local_key_owner_sites() {
  "Every word the source writes where the owner of a browser storage key goes, each one with the function that wrote it. Read-only.";
  "One sweep answers two questions, and they are the same question read from opposite ends. A word that answers to a function is a name reaching a disk, and the answer wanted is the word. A word that answers to nothing is a variable, so the name reaching the disk was decided by whoever called, and the answer wanted is the function holding it - somewhere to go and ask. Sweeping twice would parse every tree twice to sort one list two ways.";
  "Only the files that mention the storing at all are opened. The question could be asked of every function in the repo and would answer the same, at the cost of parsing two thousand trees to find a dozen words.";
  "Which calls to read includes the front doors that take a key word and hand it on, so a name written at a door is reached where it is actually written.";
  arguments_assert(arguments, 0);
  let repo_name = repo_love_name();
  let seam = "storage_local_";
  let candidates = await repo_functions_names_code_includes(repo_name, seam);
  let seams = await storage_key_seams_all();
  let sites = [];
  for (let f_name of candidates) {
    let ast = await function_ast(f_name);
    let names = js_storage_local_key_f_names(ast, seams);
    for (let owner of names) {
      let site = {
        f_name,
        owner,
      };
      list_add(sites, site);
    }
  }
  return sites;
}
