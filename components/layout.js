export default function Layout({ children }) {
  return (
    <div className='mds'>
      <section className='w-320 my-56 mx-auto'>
        <div>Back</div>
        <main>{children}</main>
      </section>
    </div>
  );
}
