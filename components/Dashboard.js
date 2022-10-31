import React, { useState } from "react"
import Web3Modal from "web3modal"
import WalletConnectProvider from "@walletconnect/web3-provider"
import Link from "next/link"
import useAuth from "../hooks/useAuth"
import { useRouter } from "next/router"
import { ethers } from "ethers"

const providerOptions = {
    walletconnect: {
        package: WalletConnectProvider,
        options: {
            rpc: {
                5: "https://goerli.infura.io/v3/",
            },
            chainId: 5,
        },
    },
}

const Dashboard = () => {
    const [web3Provider, setWeb3Provider] = useState(null)
    async function connectWallet() {
        try {
            if (typeof window !== "undefined") {
                console.log("Hi")
                let web3Modal = new Web3Modal({
                    catcheProvider: false,
                    providerOptions,
                })
                const web3ModalInstance = await web3Modal.connect()
                const web3ModalProvider = new ethers.providers.Web3Provider(web3ModalInstance)
                console.log(web3ModalProvider)
                console.log(web3ModalProvider.connection.url)
                setWeb3Provider(web3ModalProvider)
            } else {
                console.log("Wallet Not Found")
            }
        } catch (error) {
            console.log(error)
        }
    }
    const router = useRouter()
    const { user, loading } = useAuth()

    function logoutFun() {
        // user = null
        // document.cookie = null
        // user.email = null
        // localStorage.clear()
        // console.log(document.cookie)
        router.push("/")
        // window.location.href = '/'
        // router.back()
    }
    return (
        <>
            <nav
                className="navbar navbar-expand-lg navbar-dark"
                style={{ backgroundColor: "black", zIndex: 1 }}
            >
                <div className="container-fluid">
                    <Link href="/dashboard">
                        <a className="navbar-brand">Dashboard</a>
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link href="/dashboard">
                                    <a className="nav-link text-white">Staking</a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/referAndEarn">
                                    <a className="nav-link text-white">Refer And Earn</a>
                                </Link>
                            </li>
                        </ul>
                        {loading ? "loading" : console.log(user)}
                        {/* <p>{user.email}</p> */}

                        {/* <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              /> */}

                        <button className="btn btn-warning mx-3" onClick={connectWallet}>
                            {" "}
                            {web3Provider ? `Connected!` : "Connect"}
                        </button>
                        <p className="mt-2 mx-4">
                            {web3Provider
                                ? `Account Address : ${ethereum.selectedAddress}`
                                : "Connect to the wallet"}
                        </p>

                        {/* <span className="pr-2 mr-3">{user.email}</span> */}
                        <button
                            className="btn btn-outline-danger"
                            type="submit"
                            onClick={logoutFun}
                        >
                            Logout
                        </button>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Dashboard
