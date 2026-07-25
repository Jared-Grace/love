import { memory_links_unresolved } from "./memory_links_unresolved.mjs";
import { memory_note_stems } from "./memory_note_stems.mjs";
import { memory_type_prefixes } from "./memory_type_prefixes.mjs";
import { text_starts_with } from "./text_starts_with.mjs";
import { text_prefix_without } from "./text_prefix_without.mjs";
import { text_combine } from "./text_combine.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_add } from "./list_add.mjs";
export async function memory_dangling_links() {
  "Report only PREFIX-TYPO dangling links: an unresolved double-bracket name whose rest matches an EXISTING note under a DIFFERENT kind prefix - a project link where the reference note is the real one. Each result carries the suggested existing target. Read-only; third of the memory-integrity trio.";
  "This is the narrow high-signal half of the unresolved set. The wider half - a link naming a note nobody has written - is judged next door, because the instructions allow writing one on purpose and this check has no way to tell that apart from a slip.";
  "The unresolved set is read once, next door, and shared. Where the two checks disagreed about what unresolved meant, a link could be a fault to one and invisible to the other.";
  let unresolved = await memory_links_unresolved();
  let stems = await memory_note_stems();
  let prefixes = memory_type_prefixes();
  let results = [];
  for (let link of unresolved) {
    for (let prefix of prefixes) {
      let has_prefix = text_starts_with(link, prefix);
      if (has_prefix) {
        let rest = text_prefix_without(link, prefix);
        for (let other of prefixes) {
          let candidate = text_combine(other, rest);
          let exists = list_includes(stems, candidate);
          if (exists) {
            list_add(results, {
              link,
              suggestion: candidate,
            });
          }
        }
      }
    }
  }
  return results;
}
