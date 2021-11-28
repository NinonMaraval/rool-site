import '../styles/globals.scss';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <style jsx global>{`
        @font-face {
          font-family: 'Barlow-Bold';
          src: url('/fonts/Barlow-Bold.ttf') format('truetype');
        }
        @font-face {
          font-family: 'Barlow-ExtraBold';
          src: url('/fonts/Barlow-ExtraBold.ttf') format('truetype');
        }
        @font-face {
          font-family: 'Barlow-Medium';
          src: url('/fonts/Barlow-Medium.ttf') format('truetype');
        }
        @font-face {
          font-family: 'Barlow-Regular';
          src: url('/fonts/Barlow-Regular.ttf') format('truetype');
        }
        @font-face {
          font-family: 'Roboto-Medium';
          src: url('/fonts/Roboto-Medium.ttf') format('truetype');
        }
        @font-face {
          font-family: 'Barlow-Light';
          src: url('/fonts/Barlow-Light.ttf') format('truetype');
        }
        @font-face {
          font-family: 'Barlow-Italic';
          src: url('/fonts/Barlow-Italic.ttf') format ('truetype');
        }
      `}</style>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
