
<script>
    import Tabs from '../compenets/tabs.svelte';
    import Page from './+page.svelte';
    import Taker from '../compenets/taker.svelte';


    let items = [
    { label: "Content",
		 value: 1,
		 component: Page
		},
    { label: "Taker",
		 value: 2,
		 component: Taker
		}
  ];
</script>

<div>layout</div>


<Tabs {items} />

