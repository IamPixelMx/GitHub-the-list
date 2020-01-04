import Head from "next/head";

const Header = props => (
  <Head>
    <meta charSet="UTF-8" />
    <meta name="description" content="GitHub the List" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#8378f4" />
    <title>{props.title}</title>
    <link rel="manifest" href="/_next/static/manifest.json" />
    <link rel="icon" href="/static/favicon.ico" />
    <link rel="apple-touch-icon" href="/static/apple-touch-icon.png"></link>
    <link
      href="https://fonts.googleapis.com/css?family=Varela+Round&display=swap"
      rel="stylesheet"
    ></link>
  </Head>
);

export default Header;
