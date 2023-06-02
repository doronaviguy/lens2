import { c as create_ssr_component, a as escape, d as add_attribute, v as validate_component, e as each } from "./index2.js";
import "@orbs-network/twap";
import { w as writable } from "./index.js";
import Web3 from "web3";
import BN from "bignumber.js";
const app = "";
const env = { "VITE_NETWORK_ID": "", "VITE_POLYGON_RPC_URL": "http://3.144.24.117:8545", "VITE_POLYGON_TAKER": "0x72c9dd0ce0d40c36261c52Df9e5edFD2d534C5fd", "VITE_SOME_KEY": "123", "VITE_POLYGON_SCAN_API_KEY": "CVB9NCEBSA77P6WI4EUDFB3W57I5141JA2", "BASE_URL": "/sveltekit-github-pages/", "MODE": "production", "DEV": false, "PROD": true, "SSR": true };
const rpcUrl = writable(env.VITE_POLYGON_RPC_URL);
let web3 = writable({});
let web3Instance;
rpcUrl.subscribe((value) => {
  web3Instance = new Web3(value);
  web3.set(web3Instance);
});
const order_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".row.svelte-1xumfv{display:flex;flex-direction:row;justify-content:space-between;width:100%;border-bottom:1px solid #ddd}.cell.svelte-1xumfv{flex:1;text-align:center}.title.svelte-1xumfv{cursor:pointer}",
  map: null
};
function dateFormat(date) {
  return new Date(date * 1e3).toISOString();
}
const Order = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { order } = $$props;
  let srcToken = { name: "", decimals: 0, symbol: "" };
  let targetToken = { name: "", decimals: 0, symbol: "" };
  console.log("order", order);
  function toDecimal(amount, decimals = 18) {
    return Number(new BN(amount).div(new BN(10).pow(decimals)).toFixed(3)).toLocaleString();
  }
  function getBidRatio() {
    const srcAmount = new BN(order.ask.srcAmount);
    const srcBidAmount = new BN(order.ask.srcBidAmount);
    return srcAmount.div(srcBidAmount).toFixed(3);
  }
  if ($$props.order === void 0 && $$bindings.order && order !== void 0)
    $$bindings.order(order);
  $$result.css.add(css$1);
  return `<div class="row svelte-1xumfv"><div class="cell svelte-1xumfv">${escape(order.id)}</div>
     <div class="cell svelte-1xumfv">${escape(order.maker.substring(0, 10))}...</div>
     <div${add_attribute("title", dateFormat(order.time), 0)} class="cell title svelte-1xumfv">${escape(dateFormat(order.time).substring(0, 10))}</div> 
    <div${add_attribute("title", srcToken.name, 0)} class="cell svelte-1xumfv">${escape(toDecimal(order.ask.srcAmount, srcToken.decimals))} ${escape(srcToken.symbol)}</div>
    <div class="cell svelte-1xumfv"${add_attribute("title", targetToken.name, 0)}>${escape(toDecimal(order.ask.dstMinAmount, targetToken.decimals))} ${escape(targetToken.symbol)}</div>
    <div${add_attribute("title", srcToken.name, 0)} class="cell svelte-1xumfv">${escape(getBidRatio())}</div>
    <div class="cell svelte-1xumfv">${escape(order.srcFilledAmount)}</div></div>`;
});
const Network_select = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="p-5 b-2"><span class="text-xl p-5">Network </span>
    <select><option selected value="quickswap">quickswap</option><option value="spooky">spooky</option></select></div>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "html{background-color:#f3f4f6}.table.svelte-lnuh9q{display:flex;flex-direction:column;gap:10px}.row.svelte-lnuh9q{display:flex;flex-direction:row;justify-content:space-between;width:100%;border-bottom:1px solid #ddd}.cell.svelte-lnuh9q{flex:1;text-align:center}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { ordersLenth = 0 } = $$props;
  let { lensOrders = [] } = $$props;
  if ($$props.ordersLenth === void 0 && $$bindings.ordersLenth && ordersLenth !== void 0)
    $$bindings.ordersLenth(ordersLenth);
  if ($$props.lensOrders === void 0 && $$bindings.lensOrders && lensOrders !== void 0)
    $$bindings.lensOrders(lensOrders);
  $$result.css.add(css);
  return `<h1 class="text-xl4 p-5">Lens Total Orders: ${escape(ordersLenth)}</h1>
${validate_component(Network_select, "NetworkSelect").$$render($$result, {}, {}, {})}

<div class="table p-1 svelte-lnuh9q"><div class="row svelte-lnuh9q"><div class="cell text-sm font-medium text-gray-900 svelte-lnuh9q"><strong>ID</strong></div>
        <div class="cell text-sm font-medium text-gray-900 svelte-lnuh9q"><strong>Maker</strong></div>
        <div class="cell text-sm font-medium text-gray-900 svelte-lnuh9q"><strong>Timestamp</strong></div>
        
        <div class="cell text-sm font-medium text-gray-900 svelte-lnuh9q"><strong>Amount In</strong></div>
        <div class="cell text-sm font-medium text-gray-900 svelte-lnuh9q"><strong>Min Amount Out</strong></div>
        
        <div class="cell text-sm font-medium text-gray-900 svelte-lnuh9q"><strong>Bid Ratio</strong></div>
        <div class="cell text-sm font-medium text-gray-900 svelte-lnuh9q"><strong>Filled</strong></div></div>

    ${each(lensOrders, (order) => {
    return `${validate_component(Order, "Order").$$render($$result, { order }, {}, {})}`;
  })}</div>`;
});
export {
  Order as O,
  Page as P
};
