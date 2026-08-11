import { global_function_property_set } from "./global_function_property_set.mjs";
import { folder_current_absolute } from "./folder_current_absolute.mjs";
import { folder_memory } from "./folder_memory.mjs";
import { text_starts_with } from "./text_starts_with.mjs";
export function function_paths_frozen_enable() {
  "Say, once, that the folders this process reads cannot change under it - so where a function's file lives may be worked out once per name instead of once per asking.";
  "Whoever calls this is making a promise, and the promise is that no file will be created, moved or removed anywhere this process looks, for as long as it runs. The gate run inside the frozen copy is what can make it honestly: the copy is taken whole, the neighbouring repos are frozen beside it, nothing living is left pointed at, and that is checked rather than claimed.";
  "The promise is looked at here rather than taken on the caller's word, and the two ways of being wrong are not the same size. A frozen reader that is refused simply does the slow thing it did before. A living reader that is believed gets answers about a folder that has moved on - a name whose file arrived a moment ago reads as having none - and nothing says so. So the cheap failure is chosen every time the promise cannot be seen to be true.";
  "What it looks at is whether the process is standing in memory rather than on a disk. Only the frozen copy is ever there; it is made in memory precisely because it is thrown away and remade on every asking. A process running out of the folder people are editing is on a disk, always, so the two cases cannot be confused.";
  let here = folder_current_absolute();
  let memory = folder_memory();
  let frozen = text_starts_with(here, memory);
  if (frozen) {
    global_function_property_set(function_paths_frozen_enable, "frozen", true);
  }
  let r = {
    frozen,
    here,
  };
  return r;
}
