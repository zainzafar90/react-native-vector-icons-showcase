export default function IndexPage() {
  return (
    <div>
      <header className="bg-gradient-to-r from-blue-700 to-indigo-800 to-grape px-4 sm:px-6 lg:px-16">
        <div className="max-w-container mx-auto divide-y divide-black divide-opacity-12">
          <div className="py-6 flex items-center text-sm leading-5">
            <svg width="40" height="40" viewBox="0 0 600 600">
              <path
                fill="none"
                stroke="#E91E63"
                strokeWidth="24"
                strokeMiterlimit="10"
                d="M371.987,227.641
		c47.628,47.628,85.039,98.708,106.914,143.552c26.358,54.033,30.096,99.722,11.103,118.714
		c-19.793,19.793-68.267,15.884-125.731-12.979c-43.445-21.821-92.031-59.119-137.242-104.331
		c-46.354-46.354-84.95-95.545-106.667-139.816c-27.48-56.023-30.057-103.743-10.643-123.157
		c18.838-18.839,63.248-16.056,116.694,9.757C271.574,141.193,323.895,179.548,371.987,227.641z"
              />
              <path
                fill="none"
                stroke="#fff"
                strokeWidth="24"
                strokeMiterlimit="10"
                d="M272.931,201.125
		c65.052-17.465,127.989-24.354,177.767-20.902c59.974,4.16,101.42,23.747,108.385,49.688
		c7.259,27.033-20.345,67.073-74.054,102.434c-40.608,26.733-97.189,50.188-158.941,66.769
		c-63.312,16.998-125.207,25.858-174.408,22.553c-62.26-4.181-104.884-25.789-112.004-52.306
		c-6.907-25.731,17.688-62.811,66.75-96.214C147.879,244.923,207.243,218.761,272.931,201.125z"
              />
              <path
                fill="none"
                stroke="#fff"
                strokeWidth="24"
                strokeMiterlimit="10"
                d="M200.469,273.707
		c17.357-65.081,42.82-123.05,70.671-164.45c33.556-49.882,71.225-76.008,97.178-69.086c27.045,7.212,47.949,51.123,51.76,115.315
		c2.883,48.533-5.055,109.266-21.531,171.046c-16.892,63.341-40.126,121.389-67.562,162.365
		c-34.716,51.852-74.723,77.988-101.252,70.913c-25.743-6.865-45.584-46.692-50.021-105.881
		C175.963,403.92,182.944,339.424,200.469,273.707z"
              />

              <path
                fill="#fff"
                d="M300,349.369c-1.019,0-1.881-0.353-2.586-1.058l-36.679-35.386c-0.392-0.313-0.931-0.822-1.617-1.528
		c-0.686-0.705-1.773-1.988-3.262-3.851c-1.489-1.86-2.822-3.771-3.997-5.73s-2.224-4.33-3.145-7.112
		c-0.92-2.782-1.381-5.486-1.381-8.111c0-8.621,2.488-15.361,7.465-20.221c4.977-4.859,11.854-7.289,20.631-7.289
		c2.43,0,4.909,0.421,7.436,1.264c2.527,0.843,4.879,1.979,7.054,3.41c2.174,1.43,4.046,2.772,5.613,4.026s3.057,2.586,4.467,3.997
		c1.411-1.411,2.899-2.743,4.467-3.997c1.568-1.254,3.438-2.596,5.614-4.026c2.175-1.431,4.525-2.567,7.054-3.41
		c2.527-0.842,5.006-1.264,7.435-1.264c8.778,0,15.655,2.43,20.632,7.289c4.978,4.859,7.466,11.6,7.466,20.221
		c0,8.66-4.487,17.477-13.461,26.451l-36.619,35.268C301.881,349.017,301.019,349.369,300,349.369z"
              />
            </svg>
            <h2 className="font-display text-white text-3xl leading-9 font-semibold sm:text-4xl sm:leading-10 ml-2">
              React Native Icons
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
                React Native Vector Icons Showcase
                <span className="sm:block text-indigo-300">
                  inspired from
                  <a href="https://oblador.github.io/react-native-vector-icons/">
                    {" "}
                    @oblador icons directory
                  </a>
                  .
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
                  <dd>15252 Icons</dd>
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
      <main className="bg-white">
        <form className="group sticky top-0 z-50 bg-white px-4 sm:px-6 lg:px-16 shadow">
          <div className="max-w-container mx-auto flex">
            <label
              htmlFor="search-input"
              className="flex-none pr-3 flex items-center"
            >
              <span className="sr-only">Search all 226 icons</span>
              <svg
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="text-gray-400 group-focus-within:text-gray-500 transition-colors duration-150"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </label>
            <input
              type="text"
              id="search-input"
              defaultValue=""
              placeholder="Search all 226 icons (Press “/” to focus)"
              className="flex-auto py-6 text-base leading-6 text-gray-500 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400"
            />
          </div>
        </form>
        <div className="px-4 sm:px-6 lg:px-16">
          <div
            className="relative grid grid-cols-2 items-start gap-x-8 sm:gap-x-12 lg:gap-x-16 gap-y-4 sm:gap-y-8 max-w-container mx-auto pt-6 sm:pt-8 pb-12"
            style={{ gridTemplateRows: "auto auto" }}
          >
            <section className="contents">
              <header className="col-start-1 row-start-1 flex flex-wrap items-baseline">
                <h2 className="flex-none text-lg leading-6 font-medium text-gray-900 mr-3">
                  Medium
                </h2>
                <p className="hidden sm:block flex-auto text-gray-400 text-sm leading-5 font-medium">
                  2px stroke weight, 24x24 bounding box
                </p>
                <p className="hidden sm:block flex-none w-full text-sm leading-5 mt-3">
                  For primary navigation and marketing sections, designed to be
                  rendered at 24x24.
                </p>
              </header>
              <ul
                className="grid gap-8 text-center text-xs leading-4 col-start-1 row-start-2"
                style={{
                  gridTemplateColumns: "repeat(auto-fill, minmax(132px, 1fr))",
                }}
              >
                <li className="relative flex flex-col-reverse">
                  <h3 id="academic-cap-name">academic-cap</h3>
                  <div className="relative mb-3 h-24">
                    <button
                      type="button"
                      id="academic-cap-md-btn"
                      aria-label="academic-cap"
                      aria-haspopup="true"
                      aria-controls="academic-cap-md"
                      className="absolute inset-0 w-full flex items-center justify-center rounded-lg border border-gray-200 cursor-auto"
                    >
                      <svg
                        width="24"
                        height="24"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="transform transition-transform duration-500 ease-in-out"
                      >
                        <path fill="#fff" d="M12 14l9-5-9-5-9 5 9 5z"></path>
                        <path
                          fill="#fff"
                          d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                        ></path>
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                        ></path>
                      </svg>
                    </button>
                  </div>
                </li>

                <li className="relative flex flex-col-reverse">
                  <h3 id="chat-name">chat</h3>
                  <div className="relative mb-3 h-24">
                    <button
                      type="button"
                      id="chat-sm-btn"
                      aria-label="chat"
                      aria-haspopup="true"
                      aria-controls="chat-sm"
                      className="absolute inset-0 w-full flex items-center justify-center rounded-lg border border-gray-200 cursor-auto"
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="transform transition-transform duration-500 ease-in-out"
                      >
                        <path
                          fillRule="evenodd"
                          d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </button>
                  </div>
                </li>
              </ul>
            </section>
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gray-200"></div>
          </div>
        </div>
      </main>
      <footer className="bg-gray-50 border-t border-gray-200 py-12 md:py-14 px-4 sm:px-6 lg:px-16 text-sm leading-5">
        <div className="max-w-container mx-auto text-center space-y-6 md:space-y-0 md:text-left md:flex">
          <div className="space-y-6 md:space-y-0 md:space-x-10 flex flex-col items-center md:flex-row">
            <div className="flex items-center space-x-2">
              <img src="/assets/img/favicon-heroicons.png" className="w-5" />
              <p>
                Design Inspired from
                <a
                  href="https://heroicons.com/"
                  className="font-medium text-gray-900 hover:text-gray-500 transition-colors duration-150 ml-1"
                >
                  heroicons
                </a>
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <div className="relative rounded-full overflow-hidden">
                <img
                  src="https://pbs.twimg.com/profile_images/1204719453080113153/n2L_Mbsb_200x200.jpg"
                  alt=""
                  className="bg-gray-200"
                  style={{ width: "30px", height: "30px" }}
                  loading="lazy"
                />
                <div className="absolute inset-0 rounded-full border border-black border-opacity-10"></div>
              </div>
              <p>
                Developed by
                <a
                  href="https://twitter.com/mzainzafar90"
                  className="font-medium text-gray-900 hover:text-gray-500 transition-colors duration-150"
                >
                  @mzainzafar90
                </a>
              </p>
            </div>
          </div>
          <a
            href="https://twitter.com/intent/tweet?text=Check%20out%20React%20Native%20Vector%20Icons%20Showcase%20by%20%40mzainzafar90%20%F0%9F%9A%80.%20https%3A%2F%2Fzainzafar.net"
            className="inline-flex items-center space-x-2 text-twitter-blue ml-auto font-medium"
          >
            <svg width="20" height="20" fill="currentColor">
              <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84"></path>
            </svg>
            <p>Share on Twitter</p>
          </a>
        </div>
      </footer>
    </div>
  );
}
