import { useEffect, useState, useRef } from 'react';
import { MxSearch, MxMenu, MxMenuItem } from '@moxiworks/mds/react';
import '@moxiworks/mds/dist/styles/mds-core.css';

export default function Home() {
  const searchEl = useRef(null);
  const menuEl = useRef(null);
  const [hasMounted, setHasMounted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [term, setTerm] = useState(null);
  const [suggestions] = useState([
    'Apple',
    'Banana',
    'Cherry',
    'Dragonfruit',
    'Kiwi',
    'Strawberry',
    'Tomato',
  ]);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }

  function handleOnInput() {
    setTerm(searchEl.current.value);

    // If the input has 3 or more characters, show the menu...
    if (searchEl.current.value.length > 2) {
      setMenuOpen(true);
    } else {
      setMenuOpen(false);
    }
  }

  return (
    <main className='mds'>
      <section className='w-2/3 my-56 mx-auto'>
        <h2>Auto Complete</h2>
        <p>
          This is not a complete auto-complete example but rather a way of
          showing how to open the menu after "n" amount of characters have been
          typed into the input. In this case, we show the menu when 3 or more
          characters are present.
        </p>
        <p>
          There is no filtering of suggestions in this example. Simply
          triggering the menu.
        </p>
        <div>
          <MxSearch
            ref={searchEl}
            placeholder='Fruit'
            value={term}
            onInput={handleOnInput}
          >
            <MxMenu ref={menuEl} anchorEl={searchEl.current} isOpen={menuOpen}>
              {suggestions.map((suggestion, i) => (
                <MxMenuItem key={i}>{suggestion}</MxMenuItem>
              ))}
            </MxMenu>
          </MxSearch>
        </div>
      </section>
    </main>
  );
}
