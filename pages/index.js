import { useState, useEffect } from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Search from '../components/Search';
import Icon from '../components/Icon';
import IconNotFound from '../components/IconNotFound';

import IconFamilies from '../generated/glyphmapIndex.json';

export default function IndexPage() {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    handleSubmit('');
  }, []);

  const handleSubmit = text => {
    let matches = [];
    Object.keys(IconFamilies)
      .sort()
      .forEach(family => {
        const icons = IconFamilies[family];
        const names = Object.keys(icons);
        const results = names.filter(name => name.indexOf(text) >= 0);
        if (results.length) {
          matches = [...matches, { family, names: results }];
        }
      });

    setMatches(matches);
  };

  const renderMatch = match => {
    const { family, names } = match;
    return (
      <>
        <header className="flex flex-wrap items-baseline" key={family}>
          <h2 className="flex-none text-lg leading-6 font-medium text-gray-900 mr-3">
            {family}
          </h2>
          <p className="hidden sm:block flex-auto text-gray-400 text-sm leading-5 font-medium">
            {names?.length} icons
          </p>
          <p className="hidden sm:block flex-none w-full text-sm leading-5 mt-3">
            lorem ipsum dolor sit amet, consectetur adip
          </p>
        </header>

        <ul
          className="grid gap-8 text-center text-xs leading-4"
          style={{
            gridTemplateColumns: 'repeat(auto-fill, minmax(132px, 1fr))',
          }}
        >
          {names.map((name, index) => renderIcon(family, name, index))}
        </ul>
      </>
    );
  };

  const renderIcon = (family, name, index) => {
    return (
      <li className="relative flex flex-col-reverse" key={`${name}-${index}`}>
        <h3 id={name}>{name}</h3>
        <div className="relative mb-3 h-24">
          <button
            type="button"
            id={`${name}-md-btn`}
            aria-label={name}
            aria-haspopup="true"
            aria-controls="academic-cap-md"
            className="absolute inset-0 w-full flex items-center justify-center rounded-lg border border-gray-200 cursor-auto"
          >
            <Icon
              family={family}
              name={name}
              className="transform transition-transform duration-500 ease-in-out text-4xl"
            />
          </button>
        </div>
      </li>
    );
  };

  return (
    <div>
      <Header />
      <main className="bg-white">
        <Search onSubmit={handleSubmit} />

        <div className="px-4 sm:px-6 lg:px-16">
          <div
            className="relative grid items-start gap-x-8 sm:gap-x-12 lg:gap-x-16 gap-y-4 sm:gap-y-8 max-w-container mx-auto pt-6 sm:pt-8 pb-12"
            style={{ gridTemplateRows: 'auto auto' }}
          >
            <section className="contents">
              {matches.map(renderMatch)}
              {matches.length === 0 && <IconNotFound />}
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
