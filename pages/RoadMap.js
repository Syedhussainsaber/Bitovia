import React from 'react'
import Head from 'next/head'
import Navbar from '../components/Navbar'
import Script from 'next/script'
import Footer from '../components/Footer'
const RoadMap = () => {
  return (
    <div>
      <div className="containerRoadMap">
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
        <h1 className="pageHead">Roadmap</h1>
        <div className="row justify-content-center">
          <div className="col-10 justify-content-center">
            <img src="/roadmap.png" alt="Roadmap" style={{ width: '80%' }} />
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-12 justify-content-center p-1">
            <h4
              className="text-center display-4 fw-normal my-3"
              style={{ color: '#fdbe02' }}
            >
              Phase 1 :
            </h4>
            <p className="text-center fs-4 lh-base">
              Bitovia Concept <br />
              Team Onboarding <br />
              Deploying Of The Contract <br />
              Initial Liquidity Locked For 5 Year <br />
              Start Trading In PancakeSwap <br />
              Website Launch
            </p>
          </div>

          <div className="col-12 justify-content-center p-1">
            <h4
              className="text-center display-4 fw-normal my-3"
              style={{ color: '#fdbe02' }}
            >
              Phase 2 :
            </h4>
            <p className="text-center fs-4 lh-base">
              Staking Plan Implement <br />
              Social Media Launch <br />
              BSC Scan Update
              <br />
              Marketing Campaigns <br />
            </p>
          </div>

          <div className="col-12 justify-content-center p-1">
            <h4
              className="text-center display-4 fw-normal my-3"
              style={{ color: '#fdbe02' }}
            >
              Phase 3 :
            </h4>
            <p className="text-center fs-4 lh-base">
              CoinMarketCap Listing
              <br />
              CoinGecko Listing
              <br />
              Influence Marketing Compaigns
              <br />
              Minor Exchange Listing
              <br />
              Start A Program For MLM Community.
            </p>
          </div>

          <div className="col-12 justify-content-center p-1">
            <h4
              className="text-center display-4 fw-normal my-3"
              style={{ color: '#fdbe02' }}
            >
              Phase 4 :
            </h4>
            <p className="text-center fs-4 lh-base">
              NFTs
              <br />
              Bitovia Blockchain Concept
              <br />
              Bitovia Decentralised Wallet
              <br />
            </p>
          </div>

          <div className="col-12 justify-content-center p-1">
            <h4
              className="text-center display-4 fw-normal my-3"
              style={{ color: '#fdbe02' }}
            >
              Phase 5 :
            </h4>
            <p className="text-center fs-4 lh-base">
              NFTs MarketPlace
              <br />
              Exchange Listing
              <br />
            </p>
          </div>

          <div className="col-12 justify-content-center p-1">
            <h4
              className="text-center display-4 fw-normal my-3"
              style={{ color: '#fdbe02' }}
            >
              Phase 6 :
            </h4>
            <p className="text-center fs-4 lh-base">
              Make A Entry In Meta World
              <br />
              MetaGaming Launch
              <br />
              More To Come...
              <br />
            </p>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default RoadMap
