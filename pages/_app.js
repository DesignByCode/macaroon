import '../styles/style.sass'
import NavBar from '../components/NavBar'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NavBar />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
