import { MxTabContent, MxTabs } from '@moxiworks/mds-alpha/react';
import { useCallback, useEffect, useState } from 'react';

const CoversheetTabs = () => {
  const TAB_LIST = [
    { label: 'listing' },
    { label: 'closing' },
    { label: 'property' },
    { label: 'commission' },
    { label: 'summary' },
  ];

  const TAB_LIST_TWO = [{ label: 'foo' }, { label: 'bar' }];

  const [activeTab, setActiveTab] = useState(0);
  const [activeTabTwo, setActiveTabTwo] = useState(0);
  const [hasMounted, setHasMounted] = useState(false);

  const toggleCoversheetTab = useCallback((e) => {
    setActiveTab(e.detail);
  }, []);

  const toggleCoversheetTabTwo = useCallback((e) => {
    setActiveTabTwo(e.detail);
  }, []);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }

  return (
    <>
      <h2 className='my-24'>Tabs & Tab Content</h2>
      <div className='py-16'>
        <MxTabs
          className='w-full'
          fill
          tabs={TAB_LIST}
          value={activeTab}
          onMxChange={toggleCoversheetTab}
        />
        {TAB_LIST.map((tab, i) => (
          <MxTabContent key={i} index={i} value={activeTab}>
            <p>{tab.label}</p>
          </MxTabContent>
        ))}
      </div>

      <div className='py-16'>
        <MxTabs
          className='w-full'
          fill
          tabs={TAB_LIST_TWO}
          value={activeTabTwo}
          onMxChange={toggleCoversheetTabTwo}
        />
        {TAB_LIST_TWO.map((tab, i) => (
          <MxTabContent key={i} index={i} value={activeTabTwo}>
            <p>{tab.label}</p>
          </MxTabContent>
        ))}
      </div>
    </>
  );
};

export default CoversheetTabs;
