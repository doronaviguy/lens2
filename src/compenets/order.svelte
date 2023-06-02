<script lang="ts">
    import { onMount } from "svelte";
    import { getTokenDetails } from "../utils/erc20";
    import BN from "bignumber.js";

    export let order: any;
    let srcToken = { name: "" , decimals: 0, symbol: ""};
    let targetToken = { name: "" , decimals: 0, symbol: ""};

 console.log('order', order);
    

    onMount(async () => {
        srcToken = await getTokenDetails(order.ask.srcToken);
        targetToken = await getTokenDetails(order.ask.dstToken);
    });

    function toDecimal(amount: string, decimals=18) {
        return Number(new BN(amount).div(new BN(10).pow(decimals)).toFixed(3)).toLocaleString();
    }

    function getBidRatio() {
        const srcAmount = new BN(order.ask.srcAmount);
        const srcBidAmount = new BN(order.ask.srcBidAmount);
        return srcAmount.div(srcBidAmount).toFixed(3);
    }

    function dateFormat(date: number) {
        return new Date(date * 1000).toISOString();
    }
</script>

<style>
    .table {
        display: flex;
        flex-direction: column;
        gap: 10px;  /* adjust as needed */
    }
    .row {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 100%;
        border-bottom: 1px solid #ddd;  /* add a border for visual clarity */
    }
    .cell {
        flex: 1;
        text-align: center;
    }

    .title {
        cursor: pointer;
    }
</style>

<div class="row">
    <div class="cell" >{order.id}</div>
     <div class="cell" >{order.maker.substring(0, 10)}...</div>
     <div title={dateFormat(order.time)} class="cell title" >{dateFormat(order.time).substring(0, 10)} </div> 
    <div title={srcToken.name} class="cell" >{toDecimal(order.ask.srcAmount, srcToken.decimals)} { srcToken.symbol}</div>
    <div class="cell" title={targetToken.name} >{toDecimal(order.ask.dstMinAmount, targetToken.decimals)} {targetToken.symbol}</div>
    <div title={srcToken.name} class="cell" >{getBidRatio()}</div>
    <div class="cell" >{order.srcFilledAmount}</div>
</div>