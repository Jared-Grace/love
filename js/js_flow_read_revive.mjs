export function js_flow_read_revive(plain) {
  "A flow read back from the plain data written for it, with its two maps made maps again.";
  let read = {
    ...plain,
    index: new Map(plain.index),
    aliases: new Map(plain.aliases),
  };
  return read;
}
