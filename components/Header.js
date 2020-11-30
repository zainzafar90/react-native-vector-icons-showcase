import Logo from './Logo';

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-blue-700 to-indigo-800 to-grape px-4 sm:px-6 lg:px-16">
      <div className="max-w-container mx-auto">
        <div className="py-6 flex items-center text-sm leading-5 header-divider">
          <Logo />
          <h2 className="font-display text-white text-3xl leading-9 font-semibold sm:text-4xl sm:leading-10 ml-2">
            React Native Vector Icons Showcase
          </h2>
          <div className="flex space-x-10 ml-auto">
            <a
              href="https://twitter.com/intent/tweet?text=Check%20out%20Heroicons%20by%20%40steveschoger%20and%20the%20%40tailwindcss%20team%20%F0%9F%98%8D&amp;url=https%3A%2F%2Fheroicons.com"
              className="flex items-center space-x-2 text-white hover:text-blue-200 transition-colors duration-150 font-semibold"
            >
              <svg
                width="20"
                height="20"
                fill="currentColor"
                className="text-white opacity-40"
              >
                <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84"></path>
              </svg>
              <p>
                Share
                <span className="sr-only sm:not-sr-only"> on Twitter</span>
              </p>
            </a>
            <a
              href="https://github.com/zainzafar90/nord8-react-native/issues"
              className="hidden md:block group text-blue-200"
            >
              Icon's missing?
              <strong className="font-semibold text-white group-hover:text-blue-200 transition-colors duration-150 ml-1">
                File an issue here →
              </strong>
            </a>
          </div>
        </div>
        <div className="sm:pt-4 pb-10 sm:pb-14 flex flex-wrap items-center">
          <div className="w-full flex-none text-center xl:w-auto xl:flex-auto xl:text-left mt-10">
            <h1 className="font-display text-white text-3xl leading-9 font-semibold sm:text-4xl sm:leading-10">
              Improved UX of
              <span className="text-indigo-300">
                <a
                  href="https://oblador.github.io/react-native-vector-icons/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {' '}
                  @oblador icons directory
                </a>
              </span>
            </h1>
            <dl className="flex flex-wrap justify-center xl:justify-start whitespace-no-wrap text-blue-100 font-medium mt-3 leading-5">
              <div className="flex items-center mx-3 sm:mx-4 xl:ml-0 xl:mr-8 mt-3">
                <dt className="mr-2">
                  <span className="sr-only">Number of icons</span>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="text-blue-400"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </dt>
                <dd>~20K Icons</dd>
              </div>
              <div className="flex items-center mx-3 sm:mr-8 mt-3">
                <dt className="mr-2">
                  <span className="sr-only">Font Families</span>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="text-blue-400"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"
                    />
                  </svg>
                </dt>
                <dd>15</dd>
              </div>
              <div className="flex items-center mx-3 sm:mx-4 xl:ml-0 xl:mr-8 mt-3">
                <dt className="mr-2">
                  <span className="sr-only">License</span>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="text-blue-400"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 2a1 1 0 011 1v1.323l3.954 1.582 1.599-.8a1 1 0 01.894 1.79l-1.233.616 1.738 5.42a1 1 0 01-.285 1.05A3.989 3.989 0 0115 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.715-5.349L11 6.477V16h2a1 1 0 110 2H7a1 1 0 110-2h2V6.477L6.237 7.582l1.715 5.349a1 1 0 01-.285 1.05A3.989 3.989 0 015 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.738-5.42-1.233-.617a1 1 0 01.894-1.788l1.599.799L9 4.323V3a1 1 0 011-1zm-5 8.274l-.818 2.552c.25.112.526.174.818.174.292 0 .569-.062.818-.174L5 10.274zm10 0l-.818 2.552c.25.112.526.174.818.174.292 0 .569-.062.818-.174L15 10.274z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </dt>
                <dd>MIT Licensed</dd>
              </div>
              <div className="flex items-center mx-3 sm:mx-4 xl:mx-0 mt-3">
                <dt className="mr-2">
                  <span className="sr-only">Version</span>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="text-blue-400"
                  >
                    <path
                      fillRule="evenodd"
                      d="M17.707 9.293a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-7-7A.997.997 0 012 10V5a3 3 0 013-3h5c.256 0 .512.098.707.293l7 7zM5 6a1 1 0 100-2 1 1 0 000 2z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </dt>
                <dd>Version 1.0.0</dd>
              </div>
            </dl>
          </div>
          <div className="w-full sm:w-auto flex-none flex flex-col-reverse sm:flex-row sm:items-start space-y-3 space-y-reverse sm:space-y-0 sm:space-x-4 mt-10 mx-auto xl:mx-0">
            <div>
              <a
                href="https://github.com/tailwindlabs/heroicons/archive/v0.4.1.zip"
                className="group flex"
              >
                <div className="w-full sm:w-auto inline-flex items-center justify-center text-indigo-900 group-hover:text-indigo-500 font-medium leading-none bg-white rounded-lg shadow-sm group-hover:shadow-lg py-3 px-5 border border-transparent transform group-hover:-translate-y-0.5 transition-all duration-150">
                  <svg
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="text-indigo-400 mr-3"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z"
                    ></path>
                  </svg>
                  Download all
                </div>
              </a>
            </div>
            <a
              href="https://github.com/zainzafar90/react-native-vector-icons-showcase"
              className="group flex"
            >
              <div className="w-full sm:w-auto inline-flex items-center justify-center text-white font-medium bg-white bg-opacity-20 group-hover:bg-opacity-30 rounded-lg shadow-sm group-hover:shadow-lg py-3 px-5 border border-white border-opacity-10 transform group-hover:-translate-y-0.5 transition-all duration-150">
                <svg
                  width="24"
                  height="24"
                  fill="currentColor"
                  className="text-white mr-3 text-opacity-50"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 2C6.477 2 2 6.463 2 11.97c0 4.404 2.865 8.14 6.839 9.458.5.092.682-.216.682-.48 0-.236-.008-.864-.013-1.695-2.782.602-3.369-1.337-3.369-1.337-.454-1.151-1.11-1.458-1.11-1.458-.908-.618.069-.606.069-.606 1.003.07 1.531 1.027 1.531 1.027.892 1.524 2.341 1.084 2.91.828.092-.643.35-1.083.636-1.332-2.22-.251-4.555-1.107-4.555-4.927 0-1.088.39-1.979 1.029-2.675-.103-.252-.446-1.266.098-2.638 0 0 .84-.268 2.75 1.022A9.606 9.606 0 0112 6.82c.85.004 1.705.114 2.504.336 1.909-1.29 2.747-1.022 2.747-1.022.546 1.372.202 2.386.1 2.638.64.696 1.028 1.587 1.028 2.675 0 3.83-2.339 4.673-4.566 4.92.359.307.678.915.678 1.846 0 1.332-.012 2.407-.012 2.734 0 .267.18.577.688.48C19.137 20.107 22 16.373 22 11.969 22 6.463 17.522 2 12 2z"
                  ></path>
                </svg>
                View on GitHub
              </div>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
