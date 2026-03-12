export function git_call_message(f_name, args) {
  let r = [f_name].concat(args).join(" ");
  return r;
}
