import { useRouter } from 'next/router';
import Link from 'next/link';

export default function Layout({ children }) {
  const router = useRouter();

  return (
    <div className='mds'>
      <section className='w-1/2 my-56 mx-auto'>
        {router.pathname !== '/' ? (
          <div>
            <Link href='/' style={{ textDecoration: 'none' }}>
              &larr; Back
            </Link>
          </div>
        ) : (
          <h2 className='my-24'>React Component Examples</h2>
        )}

        <main>{children}</main>
      </section>
    </div>
  );
}
