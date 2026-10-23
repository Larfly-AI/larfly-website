import { faqs } from "@/lib/content";

function FAQ() { return <section className="fh-faq" id="faq"><h2>Perguntas frequentes</h2><div className="fh-faq-list">{faqs.slice(0, 6).map(([question, answer]) => <details key={question}><summary>{question}<span>⌄</span></summary><p>{answer}</p></details>)}</div></section>; }

export { FAQ };
