import Link from "next/link";

export default function Home() {
  return (
    <>
      <ul>
        <li className="my-10">
          <Link href="/auto-complete">Auto Complete</Link>
        </li>
        <li className="my-10">
          <Link href="/nested-table">Table (nested example)</Link>
        </li>
        <li className="my-10">
          <Link href="/dropdowns">Dropdowns</Link>
        </li>
        <li className="my-10">
          <Link href="/tab-content">Tab Content</Link>
        </li>
        <li className="my-10">
          <Link href="/kendo-grid">Kendo Table Grid</Link>
        </li>
        <li className="my-10">
          <Link href="/mds-modal">Mds Modal</Link>
        </li>
      </ul>
    </>
  );
}
