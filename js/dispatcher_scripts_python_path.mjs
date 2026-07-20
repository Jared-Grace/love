export function dispatcher_scripts_python_path() {
  "where the generated python mirror of dispatcher_scripts lives — beside the hook that imports it, so python finds it on sys.path[0]";
  return ".claude/hooks/dispatcher_scripts.py";
}
