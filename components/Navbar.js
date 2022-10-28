import React, { useState } from 'react'
import Web3Modal from 'web3modal'
import WalletConnectProvider from '@walletconnect/web3-provider'
import Link from 'next/link'
import { ethers } from 'ethers'

const providerOptions = {
  walletconnect: {
    package: WalletConnectProvider,
    options: {
      rpc: {
        5: 'https://goerli.infura.io/v3/',
      },
      chainId: 5,
    },
  },
}
const Navbar = () => {
  const [web3Provider, setWeb3Provider] = useState(null)
  async function connectWallet() {
    try {
      if (typeof window !== 'undefined') {
        console.log('Hi')
        let web3Modal = new Web3Modal({
          catcheProvider: false,
          providerOptions,
        })
        const web3ModalInstance = await web3Modal.connect()
        const web3ModalProvider = new ethers.providers.Web3Provider(
          web3ModalInstance,
        )
        console.log(web3ModalProvider)
        console.log(web3ModalProvider.connection.url)
        setWeb3Provider(web3ModalProvider)
      } else {
        console.log('Wallet Not Found')
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      <nav
        className="navbar navbar-expand-lg text-light navbar-dark sticky-top"
        style={{ backgroundColor: 'black', zIndex: 1 }}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src="/BITOVIA.png" alt="Bitovia" className="brandImg" />
          </a>
          <button
            className="navbar-toggler bg-dark"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" type="button"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link href="/">
                  <a className="nav-link text-white menu" aria-current="page">
                    Home
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/About">
                  <a className="nav-link text-white menu">About Us</a>
                </Link>
              </li>
              <li className="nav-item text-light">
                <Link href="/RoadMap">
                  <a className="nav-link text-white menu">Roadmap</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/login">
                  <a className="nav-link text-white menu">Login Or Register</a>
                </Link>
              </li>
              {/* <li className="nav-item">
                <Link href="/login">
                  <a className="nav-link ">Register</a>
                </Link>
              </li> */}
            </ul>
            <button
              className="btn btn-warning nav-item mx-2 border-2 border-white rounded"
              onClick={connectWallet}
            >
              {web3Provider ? `Connected!` : 'Connect'}
            </button>
            <p className="mr-1 mt-3 mx-2">
              {web3Provider
                ? `Account Address : ${ethereum.selectedAddress}`
                : 'Connect to the wallet'}
            </p>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
