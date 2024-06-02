import React, { useRef, useEffect, MutableRefObject, useState } from 'react';
import { Column } from '@core/components';
import { SectionPaper } from '../features/landing/SectionPaper';
import { WelcomeSection } from '../features/landing/welcomeSection/WelcomeSection';

function scrollToSection(
  refs: React.MutableRefObject<{ [key: string]: HTMLDivElement | null; }>,
  section: string
) {
  refs.current[section]?.scrollIntoView({ behavior: 'smooth' });
}

function scrollToTop() {
  window.scroll({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });
}

export const sections = ['information', 'stat', 'team', 'contact'];


export const LandingPage = () => {

  const [discover, setDiscover] = useState(true);
  const [section, setSection] = useState(sections[0]);

  const topRef = useRef(null as unknown) as MutableRefObject<HTMLDivElement>;
  const refs = useRef({} as { [key: string]: HTMLDivElement | null; });

  useEffect(() => {
    if (discover) {
      sections.includes(section) ? scrollToSection(refs, section) : scrollToTop();
    }
  }, [discover, section]);

  return (
    <>
      <div ref={topRef} />
      <WelcomeSection position={discover ? 'relative' : 'absolute'} />
      {discover &&
        <>
          {sections.map((section) => (
            <Column key={section} width='100%' horizontal='center'>
              <div ref={element => (refs.current[section] = element)} />
              <SectionPaper sectionName={section} />
            </Column>
          ))}
        </>}
    </>
  );
};