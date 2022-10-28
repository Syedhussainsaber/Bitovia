import Head from 'next/head'
// import Image from 'next/image'
import Script from 'next/script'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
// import ReactPlayer from 'react-player'
// import { useState } from 'react'
// import React, { useEffect, useRef } from 'react'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Bitovia</title>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
          crossOrigin="anonymous"
        ></link>
        <meta name="description" content="A crypto investment website" />
        <link rel="icon" href="/BITOVIA.png" />
      </Head>

      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
        crossOrigin="anonymous"
      ></Script>

      <Navbar />

      {/* <h1>Bitovia</h1> */}
      {/* https://my.spline.design/bandingcopy-f7a69d7d528de43d379ed6b01d435eab/ */}
      {/* https://my.spline.design/bandingcopy-f7a69d7d528de43d379ed6b01d435eab/ */}
      {/* <iframe
        src="https://my.spline.design/bandingcopy-f7a69d7d528de43d379ed6b01d435eab/"
        iframeborder="0"
        width="100vw"
        height="100vh"
      ></iframe> */}

      <div className="home justify-content-center p-2">
        <div className="row">
          <div className="col-12">
            <video
              loop
              // controls
              // playsInline
              // playsInline
              // type="video/mp4"
              autoPlay
              style={{ width: '100%' }}
            >
              <source src="/bitoviaVideo.mp4" type="video/mp4 "></source>
            </video>
          </div>
        </div>
        <div className="content1 my-5">
          <h2 className="head1 text-center my-3 display-4 fw-bold">BITOVIA</h2>
          <p className="para1 text-center fs-4">
            The Blockchain Technology & Vector Concept.
          </p>
          <div className="row justify-content-center ">
            {/* <div className="row"></div> */}
            <div className="col-6">
              <img
                src="/tech.png"
                alt="technology"
                className="techImg my-2"
                style={{ width: '100%' }}
              />
            </div>
          </div>
        </div>

        <div className="content2">
          <h2 className="head1 text-center my-3 display-4 fw-bold">
            Is BITOVIA Decentralised Technology...?
          </h2>
          <p className="para1 text-center fs-4">
            BITOVIA Is Controlled By Blockchain Not By Any Human Intervention.
            It Is Total Decentralised In Nature.
          </p>
        </div>
        <div className="row justify-content-center">
          <div className="col-8">
            <img
              src="/advantage.png"
              alt="advantages"
              className="advantageImg"
              style={{ width: '100%' }}
            />
          </div>
        </div>
        <div className="row content3 p-2 justify-content-center">
          <div
            className="col-6 justify-content-center p-2"
            style={{ width: '100%' }}
          >
            <h3
              className="display-6 text-center my-3 lh-base"
              style={{ color: '#f2ff10' }}
            >
              Advantages Of The Decentralized Technology Are :
            </h3>
            <ul className="justify-content-center lh-base">
              <li className="lh-base fs-5">Open Source</li>
              <li className="lh-base fs-5">Decentralised</li>
              <li className="lh-base fs-5">Consensus</li>
              <li className="lh-base fs-5">Security</li>
              <li className="lh-base fs-5">Transparency</li>
              <li className="lh-base fs-5">Speed, Efficiency, & Reliability</li>
              <li className="lh-base fs-5">Community Involvement</li>
              <li className="lh-base fs-5">Say Good Bye To Third Party</li>
              <li className="lh-base fs-5">Become Censorship Free</li>
              <li className="lh-base fs-5">
                Don't Lose Your Sleep Over Security
              </li>
              <li className="lh-base fs-5">Get More Uptime</li>
              <li className="lh-base fs-5">Immune Your Network From Outages</li>
            </ul>
          </div>
        </div>
        <div className="content4">
          <div className="row">
            <div className="head1 text-center mt-3 display-3 fw-bold">
              <h2
                className="lh-base display-4 mt-3"
                style={{ marginBottom: '-0.8em' }}
              >
                Make Your Crypto Transactions Easier
              </h2>
              <div className="col-12 p-2 transaction my-3">
                <img
                  src="/transaction.png"
                  alt="transactions"
                  style={{ width: '90%', marginBottom: '-0.8em' }}
                />
              </div>
            </div>
          </div>
          <p className="para1 text-center fs-4 p-1">
            A Cryptocurrency Is A Digital Or Virtual Currency That Is Secured By
            Cryptography, Which Makes It Nearly Impossible To Counterfeit Or
            Double CO Spend. Many Cryptocurrencies Are Decentralized Networks
            Based On Blockchain Technology A Distributed Ledger Enforced By A
            Disparate Network Of Computer. A Defining Feature Of
            Cryptocurrencies Is That They Are Generally Not Issued By Any
            Central Authority, Rendering Them Theoritically Immune To Government
            Interference Or Manipulation.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  )
}
