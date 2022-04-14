import BlogLayout from "../components/BlogLayout";
import MainLayout from "../components/MainLayout";
import "../styles/globals.css";
import { ThemeProvider } from "next-themes";

function App({ Component, pageProps }) {
  if (Component.getLayout) {
    return (
      <>
        <BlogLayout>
          <Component {...pageProps} />
        </BlogLayout>
      </>
    );
  } else {
    return (
      <>
        <ThemeProvider attribute="class" enableSystem={false}>
          <MainLayout>
            <Component {...pageProps} />
          </MainLayout>
        </ThemeProvider>
      </>
    );
  }
}

export default App;
