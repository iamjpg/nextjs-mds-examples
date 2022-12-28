import Link from 'next/link';

export default function Home() {
  return (
    <div className='mds'>
      <section className='w-320 my-56 mx-auto'>
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
      </section>
    </div>
  );
}
