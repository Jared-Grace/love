import { arguments_assert } from "./arguments_assert.mjs";
export async function server_static_resolved(
  express,
  lambda$meta,
  meta,
  static_options,
) {
  "One folder made servable: the way to it is worked out from where the asking file sits, and the handler that serves out of it is handed back.";
  "MOUNTING IS DELIBERATELY LEFT TO THE CALLER. The order folders are mounted in decides which one answers when two hold a file of the same name, so it is behaviour rather than wiring, and the two places that build these four handlers mount them in different orders on purpose. A helper that mounted as well would have to pick one of those orders and would silently change the other.";
  "The web server itself is handed in rather than reached for here, because one of the two callers loads it only once it is about to be used - a plain import is followed before the file that holds it runs, and that caller exists to be loaded without one.";
  arguments_assert(arguments, 4);
  let folder = await lambda$meta(meta);
  let served = express.static(folder, static_options);
  return served;
}
