<script lang="ts">
    import { onMount } from 'svelte';
    import '../app.css';
    
    import { network, rpcUrl, chainId, takerAddress } from '../utils/store';
    
    const env = import.meta.env;
    
    onMount(async () => {
        selectChange({target: {value: 'quickswap'}});
    });

    function selectChange(e: any) {
        

        const value = e.target.value;

        if(value === 'quickswap') {
            network.set('polygon');
            chainId.set(137);
            rpcUrl.set(env.VITE_POLYGON_RPC_URL);
            takerAddress.set(env.VITE_POLYGON_TAKER || "0x72c9dd0ce0d40c36261c52Df9e5edFD2d534C5fd");
        } else {
            network.set('fantom');
            chainId.set(250);
            rpcUrl.set('https://rpc.ftm.tools/');
            takerAddress.set('');
        }

    }
</script>

<div class="p-5 b-2">

    <span class="text-xl p-5">Network </span>
    <select on:change={selectChange}>
        <option selected value="quickswap">quickswap</option>
        <option value="spooky">spooky</option>
    </select>
</div>