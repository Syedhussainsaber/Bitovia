import React from "react"
import Dashboard from "../components/Dashboard"
import ReferEarnDetail from "../components/ReferEarnDetail"

import {
    contractAddressReferral,
    abiReferral,
    abiStaking,
    contractAddressStaking,
} from "../constants"
import Head from "next/head"
import Script from "next/script"
import { ethers } from "ethers"

const referAndEarn = () => {
    async function referee() {
        if (typeof window.ethereum != "undefined") {
            const provider = new ethers.providers.Web3Provider(window.ethereum)

            const signers = provider.getSigner()
            const staking = await new ethers.Contract(contractAddressStaking, abiStaking, signers)
            const stakingAmount = ethers.utils.parseEther("1")

            const referral = await new ethers.Contract(
                contractAddressReferral,
                abiReferral,
                signers
            )
            const ref_add = document.getElementById("referreeInput").value
            // await referral.setStakingAmount(stakingAmount)

            const response = await referral.referee(ref_add)
            console.log(referral)
            console.log(response)

        }
    }

    return (
        // background-image: linear-gradient(135deg, #c33764 10%, #1d2671 100%);
        <div className="containtainerReferAndEarn">
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
            <Dashboard />

            <h2 className="text-white text-center" style={{ marginTop: "20px", fontSize: "2.2em" }}>
                Refer And Earn
            </h2>

            <div className="referContainer">
                <input
                    type="text"
                    placeholder="paste the your referree wallet address"
                    id="referreeInput"
                />
                <button className="btn btn-success referBtn" onClick={referee}>
                    Referred Wallet Address
                </button>
            </div>
            {/* <button className="btn btn-dark" onClick={balance}>
                Contract Balance
            </button> */}
            {/* <ReferEarnDetail /> */}
            <h3 className="my-4 text-center">Your Referrals</h3>

            <ReferEarnDetail />
        </div>
    )
}

export default referAndEarn
