import Link from 'next/link';

export default function Home() {
  return (
    <>
      <ul>
        <li>
          <Link href='/auto-complete'>Auto Complete</Link>
        </li>
        <li>
          <Link href='/nested-table'>Table (nested example)</Link>
        </li>
        <li>
          <Link href='/dropdowns'>Dropdowns</Link>
        </li>
        <li>
          <Link href='/tab-content'>Tab Content</Link>
        </li>
      </ul>
    </>
  );
}
