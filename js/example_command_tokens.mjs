export function example_command_tokens(command) {
  let re = /"([^"]*)"|(\S+)/g;
  let out = [];
  let m = re.exec(command);
  while (m) {
    out.push(m[1] === undefined ? m[2] : m[1]);
    m = re.exec(command);
  }
  return out;
}
