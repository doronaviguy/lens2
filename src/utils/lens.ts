
//import { polygon } from './abis.ts';
import { ChainConfigs } from '@orbs-network/twap'
import { takerAddress, getWeb3 } from './store';
import { get } from 'svelte/store';
import axios from 'axios';
// import abiDecoder from "../utils/abiDecoder.js";
//@ts-ignore

  var global = global || window;


export async function takerBiddableOrders() {
    const web3 = getWeb3();
    
    //@ts-ignore
    const contract = new web3.eth.Contract(ChainConfigs.poly.lensAbi, ChainConfigs.poly.lensAddress);
    const length = Number( await contract.methods.length().call());
    let allOrders = [];
    let orders = await contract.methods.takerBiddableOrders(get(takerAddress), length -1 , 1000).call();
    return orders;
}




interface ParsedTransaction {
  from: string;
  to: string;
  value: string;
  input: any; // this should match the type of your contract function input
}




export async function takerTranascations() {
    const web3 = getWeb3();
    const contractAddress = get(takerAddress);
    const contract = new web3.eth.Contract(ChainConfigs.poly.takerAbi, contractAddress);
    const response = await axios.get(`https://api.polygonscan.com/api?module=account&action=txlist&address=${contractAddress}&startblock=0&endblock=99999999&sort=asc&apikey=CVB9NCEBSA77P6WI4EUDFB3W57I5141JA2`);

    const transactions = response.data.result;

    abiDecoder.addABI([{"inputs":[{"internalType":"contract TWAP","name":"_twap","type":"address"},{"internalType":"address[]","name":"_owners","type":"address[]"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[{"internalType":"uint64","name":"id","type":"uint64"},{"internalType":"address","name":"exchange","type":"address"},{"internalType":"uint256","name":"dstFee","type":"uint256"},{"internalType":"uint32","name":"slippagePercent","type":"uint32"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"bid","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint64","name":"id","type":"uint64"},{"internalType":"address","name":"feeExchange","type":"address"},{"internalType":"uint256","name":"feeMinAmountOut","type":"uint256"},{"internalType":"bytes","name":"feeData","type":"bytes"}],"name":"fill","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"owners","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"}],"name":"rescue","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"twap","outputs":[{"internalType":"contract TWAP","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"stateMutability":"payable","type":"receive"}])

    return await Promise.all(transactions.map(async (transaction: any) => {
        // debugger;
        try { 
            //let data = decodeMethod(transaction.input)
            //let data = web3.eth.abi.decodeParameters(['uint64', 'address', 'uint256', 'bytes'], transaction.input);

            let data = web3.eth.abi.decodeParameters(['uint64', 'address', 'uint256', 'uint32', 'bytes'], '0xf58e65b8000000000000000000000000000000000000000000000000000000000000009000000000000000000000000026d0ec4be402bce03aaa8aaf0cf67e9428ba54ef0000000000000000000000000000000000000000000000000000e363e93ff98000000000000000000000000000000000000000000000000000000000000000fa00000000000000000000000000000000000000000000000000000000000000a000000000000000000000000000000000000000000000000000000000000004c0000000000000000000000000000000000000000000000000002182bd4cb1010d0000000000000000000000000000000000000000000000000000000000000040000000000000000000000000000000000000000000000000000000000000044454e3f31b00000000000000000000000000000000000000000000000000000000000000200000000000000000000000003b56a704c01d650147ade2b8cee594066b3f94210000000000000000000000007ceb23fd6bc0add59e62ac25578270cff1b9f61900000000000000000000000000000000000000000000001a54a3d4f6437fc5c00000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000002182bd4cb1010d00000000000000000000000000000000000000000000000000000000000001e00000000000000000000000000000000000000000000000000000000000000220000000000000000000000000000000000000000000000000000000000000036000000000000000000000000000000000000000000000000000000000000003c00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000040000000000000000000000000000000000000000000000000000000000000000400000000000000000000000000000000000000000000000000000000006478eddad00073c92d88439fa20d94d0626b865d000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001000000000000000000000000f3938337f7294fef84e9b2c6d548a93f956cc281000000000000000000000000000000000000000000000000000000000000010491a32b690000000000000000000000003b56a704c01d650147ade2b8cee594066b3f942100000000000000000000000000000000000000000000001a54a3d4f6437fc5c00000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000a00000000000000000000000000000000000000000000000000000000000000002000000000000000000004de5b46a13fd188976f8c3cd439ebfbf155ba443efd9000000000000000000004de4853ee4b2a13f8a742d64c8f088be7ba2131f670d0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010400000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000');
            console.log({data})

            return {
                from: transaction.from,
                to: transaction.to,
                value: transaction.value,
                input: transaction.data,
                type: 'fill',
                data : {
                    id: data[0],
                    feeExchange: data[1],
                    feeMinAmountOut: data[2],
                    feeData: data[3]
                }
            };

        } catch (e) {
            try {

                let data = web3.eth.abi.decodeParameters(['uint64', 'address', 'uint256', 'uint32', 'bytes'], transaction.input.replace('0x', ''));
                return {
                    from: transaction.from,
                    to: transaction.to,
                    value: transaction.value,
                    input: transaction.data,
                    type: 'bid',
                    data : {
                        id: data[0],
                        exchange: data[1],
                        dstFee: data[2],
                        slipage: data[3]
                    }
                };
            } catch (e) {
                return {
                    from: transaction.from,
                    to: transaction.to,
                    value: transaction.value,
                    input: transaction.data,
                    type: 'unknown',
                    data : {}
                };
            }
        }
    }));
}



