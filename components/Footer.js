export default function Footer() {
  return (
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
  );
}
