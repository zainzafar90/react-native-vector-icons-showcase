import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
          <link
            rel="stylesheet"
            href="https://cdn.rawgit.com/mfd/09b70eb47474836f25a21660282ce0fd/raw/e06a670afcb2b861ed2ac4a1ef752d062ef6b46b/Gilroy.css"
          />
        </Head>

        <body className="bg-gray-50 font-sans antialiased text-gray-500">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
