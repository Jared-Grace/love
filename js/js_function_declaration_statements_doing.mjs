import { js_function_declaration_to_block_body } from "./js_function_declaration_to_block_body.mjs";
import { list_filter } from "./list_filter.mjs";
import { js_statement_prose_not_is } from "./js_statement_prose_not_is.mjs";
export function js_function_declaration_statements_doing(declaration) {
  "The statements in a function that do something, with the prose written for a reader left out.";
  "★ ALL THREE SHAPES OF PROSE ARE LEFT OUT, NOT ONLY THE FIRST. This asked the string-only question until 2026-09-09, so a paragraph written as a bracket and commas - which is how a paragraph carrying a function name is written here - counted as work. Everything standing on this reading then saw that paragraph as part of what the function does.";
  "What that cost, measured: a shared one-line function whose prose named another function was compared against ten copies of its own body written inside other functions, and matched none of them, because the paragraph was in its shape and in none of theirs. The reading that finds copies of a shared function reported no copies at all, and reported it without any sign that anything was wrong.";
  "The complete question is asked in one place beside this one, so a fourth shape of prose arrives here with no edit.";
  let statements = js_function_declaration_to_block_body(declaration);
  let doing = list_filter(statements, js_statement_prose_not_is);
  return doing;
}
