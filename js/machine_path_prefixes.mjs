export function machine_path_prefixes() {
  "The openings a path takes when it belongs to one machine rather than to this repo - somebody's own folder, or a drive that was plugged in.";
  "These are kinds of place, not one machine's answer, which is why they are written here rather than asked of the machine. Asking would give this machine's own home folder and nothing else, and then a path naming somebody else's home would pass unnoticed - which is the very thing that stops the work moving to another machine.";
  "Four openings and no more. A path somewhere else on a machine is not caught, and that is a limit worth knowing rather than a hole to widen on a guess: everything that has actually been written down here in the whole history of the repo began with one of these.";
  let prefixes = ["/home/", "/media/", "/mnt/", "/Users/"];
  return prefixes;
}
