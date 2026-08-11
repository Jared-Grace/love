export function function_paths_frozen_enable() {
  "Say, once, that the folders this process reads cannot change under it - so where a function's file lives may be worked out once per name instead of once per asking.";
  "Whoever calls this is making a promise the code cannot check for itself, which is why it is asked for out loud rather than guessed at. The promise is that no file will be created, moved or removed anywhere this process looks, for as long as it runs.";
  "The gate run inside the frozen copy is what can make that promise honestly. The copy is taken whole, in memory, and the neighbouring repos are frozen beside it; nothing living is left pointed at, and that is checked rather than claimed. Nobody can write to it while it is being read.";
  "The living folder is the opposite case and must never turn this on. Several of us edit it at once, so a name that had no file a moment ago has one now, and an answer kept from earlier would be a wrong answer rather than a stale one.";
  let object = global_function_initialize_object(function_paths_frozen_enable);
  property_set(object, "frozen", true);
}
