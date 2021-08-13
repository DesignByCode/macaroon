import '../styles/style.sass'
import NavBar from '../components/NavBar'
import { MDXProvider } from '@mdx-js/react'
import MDXComponents from '../components/MDXComponents'

function MyApp({ Component, pageProps }) {
  const Layout = Component.Layout || (({ children }) => <>{children}</>)

  return (
    <MDXProvider components={MDXComponents}>
      <Layout>
        <NavBar />
        <Component {...pageProps} />
      </Layout>
    </MDXProvider>
  )
}

export default MyApp
