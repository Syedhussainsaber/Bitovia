import React from "react"
import useAuth from "../hooks/useAuth"
import { useRouter } from "next/router"
import Dashboard from "../components/Dashboard"
import Head from "next/head"
import Script from "next/script"
import { ethers } from "ethers"
import Moralis from "moralis"
import { EvmChain } from "@moralisweb3/evm-utils"

import {
    contractAddressReferral,
    contractAddressStaking,
    contractAddressReward,
    abiReward,
    abiReferral,
    abiStaking,
} from "../constants"
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
    const key = process.env.PRIVATE_KEY

    // const hexPrivateKey = new Buffer.from(key, "hex")
    // const signer = new ethers.Wallet(hexPrivateKey, provider)
    // const provider = new ethers.providers.JsonRpcProvider("https://bsc-dataseed.binance.org/")
    // async function Staking(ethAmount) {

    async function stakeFun() {
        if (typeof window.ethereum !== "undefined") {
            const provider = new ethers.providers.Web3Provider(window.ethereum)
            const signers = provider.getSigner()
            const staking = await new ethers.Contract(contractAddressStaking, abiStaking, signers)
            const plan_expired = await staking.planExpired()
            const interestRate = await staking.interestRate()
            console.log(plan_expired.toNumber())
            console.log(interestRate)
            const owner = await staking.owner()
            console.log(owner)
            console.log(staking)
            const stakedAmount = document.getElementById("stakingAmount").value

            // const signers = provider.getSigner()
            const TOKEN_ADDRESS = "0x1a1fC1Da5F603cAfe6fb000933ab3E289061fb29"

            const tokenAbi = [
                "function approve(address spender, uint256 amount) public override returns (bool)",
            ]
            const rewardToken = await new ethers.Contract(TOKEN_ADDRESS, tokenAbi, signers)
            const balance = await provider.getBalance(TOKEN_ADDRESS)
            console.log(ethers.utils.formatUnits(balance, 18))

            const response = await rewardToken.approve(
                contractAddressStaking,
                ethers.utils.parseUnits(stakedAmount)
            )
            console.log(response)

            // const abiToken = [
            //     "function approve(address spender, uint256 amount) public returns (bool)",
            // ]
            // const TOKEN_ADDRESS = "0x1a1fC1Da5F603cAfe6fb000933ab3E289061fb29"
            // const tokenContract = await new ethers.Contract(TOKEN_ADDRESS, abiStaking, signers)

            // const approveToken = await tokenContract.approve(
            //     contractAddressStaking,
            //     1000000000000000000
            // )
            // console.log(approveToken)

            const stakeTokens = await staking.stakeToken(ethers.utils.parseEther(stakedAmount))
            const transactionRecipt = await stakeTokens.wait(1)
            document.querySelector(".stakeAmount").innerText = stakedAmount
            console.log(transactionRecipt)

            // const wallet = new ethers.Wallet(key, provider)
        }
    }

    async function claimFun() {
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        const signers = provider.getSigner()
        const staking = await new ethers.Contract(contractAddressStaking, abiStaking, signers)

        const claimToken = await staking.claimReward()
        const transactionRecipt = await claimToken.wait(1)
        console.log(transactionRecipt)
        stakedAmount = stakedAmount - 0.0016 * stakedAmount
    }

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
                {/* <p className="text-white mx-3 mt-2 text-align-right">
                    {loading ? "loading" : user.email}
                </p> */}
                <h2
                    className="text-white text-center"
                    style={{ marginTop: "20px", fontSize: "2.2em" }}
                >
                    Stake And Earn
                </h2>
                <div className="stakeContainer">
                    <p className="stakePlan"> 3 months Plan</p>
                    <img
                        src="/Bitovia.png"
                        alt="Bitovia"
                        style={{ width: "52px", margin: "15px" }}
                    />
                    <p className="stakeAmount"> {"0 BTV"}</p>
                    <div className="stakeBtns">
                        <div className="stakeFeature">
                            <input
                                type="text"
                                placeholder="0 BTV"
                                name="stakeAmount"
                                id="stakingAmount"
                            />

                            <button className="btn btn-warning claimBtn" onClick={claimFun}>
                                Claim
                            </button>
                        </div>
                        <button className="btn btn-primary stakeBtn" onClick={stakeFun}>
                            Stake
                        </button>
                    </div>
                </div>
                <p style={{ fontSize: "1.3em" }} className="text-center">
                    Your Airdrop Reward : 1000000BTV
                </p>
            </div>
        </>
    )
}

export default dashboard
