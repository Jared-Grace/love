export function permission_grant_names() {
  "probe: what does the normalize pass do to a list of spelled names";
  let names = [
    fn_name("function_rename"),
    fn_name("function_auto"),
    fn_name("guard_check"),
  ];
  return names;
}
