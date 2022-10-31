export const contractAddressReferral = "0x4aC00764D5ADAbeA972d44C15CF04C2657092cAc"
export const contractAddressStaking = "0xd6863Bb74826A5145146d9B4a9151f0f9f4d5A7E"
export const contractAddressAirdrop = "0x72Bb000747b388D9bb559BE04b7175162CbD84b4"
export const contractAddressReward = "0xfE9FD7570d54E93998d523D547c8b35483529f62"
export const abiReferral = [
    {
        inputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        name: "refer_info",
        outputs: [
            {
                internalType: "uint256",
                name: "level_1",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "level_2",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "level_3",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "level_4",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "level_5",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "ref_add",
                type: "address",
            },
        ],
        name: "referee",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        name: "user_info",
        outputs: [
            {
                internalType: "bool",
                name: "referred",
                type: "bool",
            },
            {
                internalType: "address",
                name: "referred_by",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        name: "user_reward_earnings",
        outputs: [
            {
                internalType: "uint256",
                name: "level1_reward",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "level2_reward",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "level3_reward",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "level4_reward",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "level5_reward",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
]

export const abiStaking = [
    {
        inputs: [
            {
                internalType: "contract Token",
                name: "_tokenAddress",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "_planDuration",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "_planExpired",
                type: "uint256",
            },
            {
                internalType: "uint8",
                name: "_interestRate",
                type: "uint8",
            },
        ],
        stateMutability: "nonpayable",
        type: "constructor",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "from",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
        ],
        name: "Claimed",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "previousOwner",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "newOwner",
                type: "address",
            },
        ],
        name: "OwnershipTransferred",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "address",
                name: "account",
                type: "address",
            },
        ],
        name: "Paused",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "from",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
        ],
        name: "Staked",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "address",
                name: "account",
                type: "address",
            },
        ],
        name: "Unpaused",
        type: "event",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        name: "addressStaked",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "claimReward",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "getTokenExpiry",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "interestRate",
        outputs: [
            {
                internalType: "uint8",
                name: "",
                type: "uint8",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "owner",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "pause",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "paused",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "planDuration",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "planExpired",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "renounceOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        name: "stakeInfos",
        outputs: [
            {
                internalType: "uint256",
                name: "startTS",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "endTS",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "claimed",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "stakeAmount",
                type: "uint256",
            },
        ],
        name: "stakeToken",
        outputs: [],
        stateMutability: "payable",
        type: "function",
    },
    {
        inputs: [],
        name: "totalStakers",
        outputs: [
            {
                internalType: "uint8",
                name: "",
                type: "uint8",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "newOwner",
                type: "address",
            },
        ],
        name: "transferOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "to",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
        ],
        name: "transferToken",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "unpause",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
]

export const abiAirdrop = [
    {
        inputs: [
            {
                internalType: "contract Token",
                name: "tokenAddress",
                type: "address",
            },
        ],
        stateMutability: "nonpayable",
        type: "constructor",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "to",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
        ],
        name: "transferToken",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
]

export const abiReward = [
    {
        inputs: [
            {
                internalType: "contract Token",
                name: "tokenAddress",
                type: "address",
            },
        ],
        stateMutability: "nonpayable",
        type: "constructor",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_spender",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "_amount",
                type: "uint256",
            },
        ],
        name: "approveToken",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "to",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
        ],
        name: "transferToken",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
]
