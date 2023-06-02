import { c as create_ssr_component, e as each, a as escape, n as null_to_empty, v as validate_component, m as missing_component } from "../../chunks/index2.js";
import { O as Order, P as Page } from "../../chunks/_page.js";
import "@orbs-network/twap";
const tabs_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".box.svelte-1vgtwus.svelte-1vgtwus{margin-bottom:10px;padding:40px;border:1px solid #dee2e6;border-radius:0 0 .5rem .5rem;border-top:0}ul.svelte-1vgtwus.svelte-1vgtwus{display:flex;flex-wrap:wrap;padding-left:0;margin-bottom:0;list-style:none;border-bottom:1px solid #dee2e6}li.svelte-1vgtwus.svelte-1vgtwus{margin-bottom:-1px}span.svelte-1vgtwus.svelte-1vgtwus{border:1px solid transparent;border-top-left-radius:0.25rem;border-top-right-radius:0.25rem;display:block;padding:0.5rem 1rem;cursor:pointer}span.svelte-1vgtwus.svelte-1vgtwus:hover{border-color:#e9ecef #e9ecef #dee2e6}li.active.svelte-1vgtwus>span.svelte-1vgtwus{color:#495057;background-color:#fff;border-color:#dee2e6 #dee2e6 #fff}",
  map: null
};
const Tabs = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { items = [] } = $$props;
  let { activeTabValue = 1 } = $$props;
  if ($$props.items === void 0 && $$bindings.items && items !== void 0)
    $$bindings.items(items);
  if ($$props.activeTabValue === void 0 && $$bindings.activeTabValue && activeTabValue !== void 0)
    $$bindings.activeTabValue(activeTabValue);
  $$result.css.add(css$1);
  return `<ul class="svelte-1vgtwus">${each(items, (item) => {
    return `<li class="${escape(null_to_empty(activeTabValue === item.value ? "active" : ""), true) + " svelte-1vgtwus"}"><span class="svelte-1vgtwus">${escape(item.label)}</span>
      </li>`;
  })}</ul>
  ${each(items, (item) => {
    return `${activeTabValue == item.value ? `<div class="box svelte-1vgtwus">${validate_component(item.component || missing_component, "svelte:component").$$render($$result, {}, {}, {})}
      </div>` : ``}`;
  })}`;
});
const taker_svelte_svelte_type_style_lang = "";
const css = {
  code: ".table.svelte-f5r5le{display:flex;flex-direction:column;gap:10px}.row.svelte-f5r5le{display:flex;flex-direction:row;justify-content:space-between;width:100%;border-bottom:1px solid #ddd}.cell.svelte-f5r5le{flex:1;text-align:center}",
  map: null
};
const Taker = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const ssr = false;
  let { ordersLenth = 0 } = $$props;
  let { lensOrders = [] } = $$props;
  if ($$props.ssr === void 0 && $$bindings.ssr && ssr !== void 0)
    $$bindings.ssr(ssr);
  if ($$props.ordersLenth === void 0 && $$bindings.ordersLenth && ordersLenth !== void 0)
    $$bindings.ordersLenth(ordersLenth);
  if ($$props.lensOrders === void 0 && $$bindings.lensOrders && lensOrders !== void 0)
    $$bindings.lensOrders(lensOrders);
  $$result.css.add(css);
  return `<h1>Bids /Fills ${escape(ordersLenth)}</h1>

<div class="table svelte-f5r5le"><div class="row svelte-f5r5le"><div class="cell svelte-f5r5le"><strong>ID</strong></div>
        <div class="cell svelte-f5r5le"><strong>Maker</strong></div>
        <div class="cell svelte-f5r5le"><strong>Timestamp</strong></div>
        
        <div class="cell svelte-f5r5le"><strong>Amount In</strong></div>
        <div class="cell svelte-f5r5le"><strong>Min Amount Out</strong></div>
        
        <div class="cell svelte-f5r5le"><strong>Bid Ratio</strong></div>
        <div class="cell svelte-f5r5le"><strong>Filled</strong></div></div>

    ${each(lensOrders, (order) => {
    return `${validate_component(Order, "Order").$$render($$result, { order }, {}, {})}`;
  })}</div>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let items = [
    {
      label: "Content",
      value: 1,
      component: Page
    },
    {
      label: "Taker",
      value: 2,
      component: Taker
    }
  ];
  return `<div>layout</div>


${validate_component(Tabs, "Tabs").$$render($$result, { items }, {}, {})}`;
});
export {
  Layout as default
};
