import Link from "next/link";
export default function NotFound() { return <section className="not-found"><span>Oops!</span><h1>We couldn't find the page<br/>you were looking for.</h1><Link className="button button-dark" href="/">Go back</Link></section>; }
