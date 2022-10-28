import React from 'react'
import Head from 'next/head'
import Navbar from '../components/Navbar'
import Script from 'next/script'
// import styles from '../styles/about.css'
import Footer from '../components/Footer'
const About = () => {
  //   ;
  return (
    <div className="containerAbout">
      <Head>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
          crossOrigin="anonymous"
        ></link>
      </Head>
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
        crossOrigin="anonymous"
      ></Script>
      <Navbar />
      <h1 className="pageHead">About Us</h1>

      <div className="row justify-content-center">
        <div className="col-8" style={{ marginTop: '10px' }}>
          <img src="/about.png" alt="about us" className="aboutImg" />
        </div>
      </div>

      <div class="row justify-content-center">
        <div class="col-12">
          <div className="aboutContent">
            <p className="aboutPara">
              BITOVIA is an ecosystem that opens new horizons for you.
              <br />
              BITOVIA is global platform dedicated to common men to make the
              rising crypto world handy & a utility platform.
            </p>
            <ul>
              <li>
                BITOVIA is a top edge technology infrastructure to deliver more
                than you can expect
              </li>
              <li>
                BITOVIA has projects related to Decentralised Exchange,
                Aggregated Decentralised Multi-coin Wallet. NFT Market place, a
                HUB for Content/Contributors/Creators & a Biggest Globally
                Utility Platform under it's umbrella.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default About
