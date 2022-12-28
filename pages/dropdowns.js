import { useEffect, useState } from 'react';
import {
  MxDropdownMenu,
  MxMenuItem,
  MxSelect,
} from '@moxiworks/mds-alpha/react';

import '@moxiworks/mds-alpha/dist/styles/mds-core.css';

export default function Dropdown() {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }

  return (
    <main className='mds'>
      <section className='w-320 my-56 mx-auto'>
        <h2 className='my-24'>Dropdown</h2>

        <MxDropdownMenu label='Favorite Animal' value=''>
          <MxMenuItem subtitle='Felis catus'>Cat</MxMenuItem>
          <MxMenuItem subtitle='Canis familiaris'>Dog</MxMenuItem>
          <MxMenuItem subtitle='Odobenus rosmarus'>Walrus</MxMenuItem>
        </MxDropdownMenu>

        <h2 className='my-24'>Select</h2>

        <MxSelect label='Favorite Number' value=''>
          <option>One</option>
          <option>Two</option>
          <option>Three</option>
        </MxSelect>
      </section>
    </main>
  );
}
