<script lang="ts">
    import '../app.css';
    import { onMount } from 'svelte';
    import { takerBiddableOrders } from '../utils/lens';
    import Order from '../compenets/order.svelte';
    import NetworkSelect from '../compenets/network-select.svelte';

    export let ordersLenth = 0;
    export let lensOrders: any[] = [];

    onMount(async () => {        
         const orders = await takerBiddableOrders();
         ordersLenth = orders.length;
         lensOrders = orders;
    });
</script>


  
  <style lang="postcss">
    :global(html) {
      background-color: theme(colors.gray.100);
    }
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



<h1 class="text-xl4 p-5">Lens Total Orders: {ordersLenth}</h1>
<NetworkSelect />

<div class="table p-1">
    <div class="row">
        <div class="cell text-sm font-medium text-gray-900"><strong>ID</strong></div>
        <div class="cell text-sm font-medium text-gray-900"><strong>Maker</strong></div>
        <div class="cell text-sm font-medium text-gray-900"><strong>Timestamp</strong></div>
        <!-- <div class="cell text-sm font-medium text-gray-900"><strong>deadline</strong></div> -->
        <div class="cell text-sm font-medium text-gray-900"><strong>Amount In</strong></div>
        <div class="cell text-sm font-medium text-gray-900"><strong>Min Amount Out</strong></div>
        
        <div class="cell text-sm font-medium text-gray-900"><strong>Bid Ratio</strong></div>
        <div class="cell text-sm font-medium text-gray-900"><strong>Filled</strong></div>

    </div>

    {#each lensOrders as order}
        <Order {order} />
    {/each}
</div>
