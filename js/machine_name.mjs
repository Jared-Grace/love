import { hostname } from "os";
export function machine_name() {
  "The name this machine answers to, as the machine itself reports it.";
  "Asked of the machine rather than written down anywhere, because a name written down is a name that is right on exactly one computer and quietly wrong on every other. Anything built from this follows the machine it is run on.";
  let v = hostname();
  return v;
}
