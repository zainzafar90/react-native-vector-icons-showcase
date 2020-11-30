import Header from "../components/Header";
import Footer from "../components/Footer";
import Search from "../components/Search";

export default function IndexPage() {
  return (
    <div>
      <Header />
      <main className="bg-white">
        <Search />
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
      <Footer />
    </div>
  );
}
