import { printQuote } from "./print-quote";
import { getQuote } from "../services/api/quotes";
export function displayQuote() {
  getQuote(printQuote);
}
