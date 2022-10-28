import React from "react"
import useAuth from "../hooks/useAuth"
import { useRouter } from "next/router"
import Dashboard from "../components/Dashboard"
import Head from "next/head"
import Script from "next/script"
import { ethers } from "ethers"
import Moralis from "moralis"
import { EvmChain } from "@moralisweb3/evm-utils"
// import { abi } from "./abi"
// import Bitovia from "../../contracts/Bitovia"
// import { contractAddress, abi } from "../constants"
// require("dotenv").config()
// import { ethers } from './api/ethers-5.2.esm.min'
// import { ethers } from "./ethers-5.2.esm.min"
// import { contractAddress } from "../constants"
// import { ethers } from "ethers"
// import { ethers } from 'https://cdn.ethers.io/lib/ethers-5.6.esm.min.js'
const dashboard = () => {
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
    // https://bsc-dataseed.binance.org/

    // const provider = new ethers.providers.Web3Provider()
    const key = "0dbcfd7004b8415d4bb1f716161c44b58e07cc957c0724ab625415c5e3b88a48"
    // const hexPrivateKey = new Buffer.from(key, "hex")
    // const signer = new ethers.Wallet(hexPrivateKey, provider)
    // const provider = new ethers.providers.JsonRpcProvider("https://bsc-dataseed.binance.org/")
    const provider = new ethers.providers.JsonRpcProvider("https://bsc-dataseed.binance.org/")
    // const signers = provider.getSigner()
    const tokenAddress = "0x1a1fC1Da5F603cAfe6fb000933ab3E289061fb29"
    // const wallet = new ethers.Wallet(key, provider)
    const signers = provider.getSigner()

    async function balanceOf() {
        if (typeof window.ethereum != "undefined") {
            console.log(provider)

            const chain = EvmChain.BSC
            // 0x1a1fC1Da5F603cAfe6fb000933ab3E289061fb29
            const address = "0xc49c45546bc48f4fee8bd4c4093a08eb96c86773"

            await Moralis.start({
                apiKey: "wbI5oqzeRgWLehcxiJZB3NuTUTqJux1t0aObDams1OP1WAiiZSs4dRE5lbgQ2yo2",
                // ...and any other configuration
            })

            const response = await Moralis.EvmApi.token.getWalletTokenBalances({
                address,
                chain,
            })
            console.log(response.data[2])
            const balance = ethers.utils.formatUnits(response.data[2].balance, 18)

            document.querySelector(".balance").innerText = `${balance}`
            // console.log(provider.getBlockNumber())
        } else {
            document.write("Install the Metamask")
        }
    }

    async function send() {}

    return (
        <>
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
            {/* <Script
        src="https://cdn.ethers.io/lib/ethers-5.6.umd.min.js"
        type="text/javascript"
      ></Script> */}
            <div className="containerDashboard">
                {/* {console.log(ethers)} */}
                <Dashboard />
                <button className="btn btn-success" onClick={balanceOf}>
                    Balance
                </button>
                <p className="balance"></p>
                {/* <input type="text" id="amount" /> */}
                {/* <input type="text" id="receiver" placeholder="Enter the address" /> */}
                <button className="btn btn-primary" onClick={send}>
                    Send
                </button>
            </div>
        </>
    )
}

export default dashboard
