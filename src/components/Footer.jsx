import Head from 'next/head';

export default function Footer() {
  return (
    <>
      <Head>
        <title>Devlop.me</title>
        <meta name="description" content="Devlop.me Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="bg-black text-white font-sans min-h-screen py-16 px-4">
        <div className="max-w-screen-xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-green-500">
            DEVLOP.ME
          </h1>
          <p className="text-3xl mt-4">As you can</p>
        </div>

        <div className="mt-16 flex justify-between max-w-screen-xl mx-auto text-lg">
          {/* Contact Section */}
          <div className="space-y-4">
            <p className="font-semibold">Say hello</p>
            <p>
              <a href="mailto:hello@devlop.me" className="text-blue-400">
                HELLO@DEVLOP.ME
              </a>
            </p>
            <p>
              <a href="mailto:mahabubul@me.com" className="text-blue-400">
                MAHBUBUL@ME.COM
              </a>
            </p>
            <p className="font-semibold">Call</p>
            <p className="text-blue-400">+784549 4981 00</p>
            <p className="text-blue-400">+8845 0100 211</p>
          </div>

          {/* Menu Section */}
          <div className="space-y-4">
            <p className="font-semibold">Menu</p>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-blue-400">
                  HOME
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-400">
                  ABOUT
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-400">
                  PORTFOLIO
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-400">
                  BLOG
                </a>
              </li>
            </ul>
          </div>

          {/* Social Section */}
          <div className="space-y-4">
            <p className="font-semibold">Social</p>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-blue-400">
                  TWITTER
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-400">
                  INSTAGRAM
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-400">
                  FACEBOOK
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-400">
                  BEHANCE
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-400">
                  DRIBBBLE
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 text-center text-sm">
          <p>© devlop.me 2022</p>
          <p>
            <a href="#" className="text-blue-400">
              PRIVACY
            </a>{' '}
            -{' '}
            <a href="#" className="text-blue-400">
              TERMS
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
