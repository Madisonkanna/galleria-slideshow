import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Dosis:wght@300;400&family=Festive&family=Libre+Baskerville:wght@400;700&family=Outfit:wght@300;400;500&family=Permanent+Marker&family=Red+Hat+Display:wght@500;700;900&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
