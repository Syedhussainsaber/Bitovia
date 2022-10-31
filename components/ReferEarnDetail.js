import React from "react"
import Head from "next/head"
import Link from "next/link"
import Script from "next/script"
import { ethers } from "ethers"
import { contractAddressReferral, abiReferral } from "../constants"

const ReferEarnDetail = () => {
    let referInformation
    async function referInfo() {
        if (typeof window.ethereum != "undefined") {
            const provider = new ethers.providers.Web3Provider(window.ethereum)

            const signers = provider.getSigner()
            // const staking = await new ethers.Contract(contractAddressStaking, abiStaking, signers)
            // const stakingAmount = ethers.utils.parseEther("1")

            const referral = await new ethers.Contract(
                contractAddressReferral,
                abiReferral,
                signers
            )

            // referInformation = await referral.referInfo[ethereum.selectedAddress]
            // const ref_add = document.getElementById("referreeInput").value
            // await referral.setStakingAmount(stakingAmount)
            // console.log(referInformation)

            // const response = await referral.referee(ref_add)
            // console.log(referral)
            // console.log(response)
        }
    }
    // referInfo()
    return (
        <div>
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
            <div className="mx-2">
                <table class="table table-dark table-hover">
                    <thead>
                        <tr>
                            <th scope="col">S.No</th>
                            <th scope="col">Levels</th>
                            <th scope="col-span-2">Total Referrals</th>
                            <th scope="col">Rewards</th>
                            {/* <th scope="col"></th> */}
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Level-1</td>
                            {/* <td>{referInformation.level_1}</td> */}
                            <td>{0}</td>
                            <td>0</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Level-2</td>
                            {/* <td>{referInformation.level_2}</td> */}
                            <td>{0}</td>
                            <td>0</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Level-3</td>
                            {/* <td>{referInformation.level_3}</td> */}
                            <td>{0}</td>
                            <td>0</td>
                        </tr>
                        <tr>
                            <th scope="row">4</th>
                            <td>Level-4</td>
                            {/* <td>{referInformation.level_4}</td> */}
                            <td>{0}</td>
                            <td>0</td>
                        </tr>
                        <tr>
                            <th scope="row">5</th>
                            <td>Level-5</td>
                            {/* <td>{referInformation.level_5}</td> */}
                            <td>{0}</td>
                            <td>0</td>
                        </tr>
                        <tr>
                            <th scope="row">6</th>
                            <td>And So On...</td>
                            {/* <td>{referInformation.level_6}</td> */}
                            <td>{0}</td>
                            <td>0</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ReferEarnDetail
