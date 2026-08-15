export function hook_memory_root_path() {
  "Where the generated file naming the memory folder is kept, for the hook that decides writes into it.";
  "Beside the hook that imports it rather than among the repo's own functions, because what a hook may import is what sits next to it: reaching into the repo's functions would chain onto files the transforms rewrite all day, and a half-written file in that chain stops the hook loading at all.";
  let p = ".claude/hooks/memory_root.mjs";
  return p;
}
