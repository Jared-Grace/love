export function dispatcher_commands_python_path() {
  "where the generated python mirror of the fn-named dispatcher commands lives — beside the hook that imports it, so python finds it on the first search path";
  let r = ".claude/hooks/dispatcher_commands.py";
  return r;
}
