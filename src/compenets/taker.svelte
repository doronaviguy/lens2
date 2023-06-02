<script lang="ts">
    export const ssr = false;
    import { onMount } from 'svelte';
    import { takerTranascations } from '../utils/lens';
    import Order from './order.svelte';

    export let ordersLenth = 0;
    export let lensOrders: any[] = [];

    onMount(async () => {        
         const orders = await takerTranascations();
         ordersLenth = orders.length;
         lensOrders = orders;
    });
</script>

<style>
    body {
        font-family: system-ui;
    }

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
</style>



<h1>Bids /Fills {ordersLenth}</h1>

<div class="table">
    <div class="row">
        <div class="cell"><strong>ID</strong></div>
        <div class="cell"><strong>Maker</strong></div>
        <div class="cell"><strong>Timestamp</strong></div>
        <!-- <div class="cell"><strong>deadline</strong></div> -->
        <div class="cell"><strong>Amount In</strong></div>
        <div class="cell"><strong>Min Amount Out</strong></div>
        
        <div class="cell"><strong>Bid Ratio</strong></div>
        <div class="cell"><strong>Filled</strong></div>

    </div>

    {#each lensOrders as order}
        <Order {order} />
    {/each}
</div>
