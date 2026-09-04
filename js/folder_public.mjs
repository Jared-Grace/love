export function folder_public() {
  "The folder every page is served out of, said once here so that nothing else spells it.";
  "IT SITS UNDER web/ AND IS NOT A ROOT FOLDER ANY MORE, moved there on 2026-09-03 so that the three stages a page can be at - working, checked, and live - stand beside each other rather than two of them hiding inside the third. What is served is still only this one of them.";
  "Saying it once is what made that move a single edit here rather than a hunt. It is also what decides which files a folder rename is allowed to sweep: the list of places a rename must never write into asks this for the name of the built output, so this answering the old name while the folder sat at the new one would have handed every built bundle to the sweep.";
  let p = "web/public";
  return p;
}
