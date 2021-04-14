<script lang="ts">
	import { battery } from "./store";

	function pretty(seconds: number): string {
		if (seconds == Infinity) {
			return "∞";
		}
		if (seconds <= 60) {
			return `${seconds}s`;
		} else {
			let h = Math.floor(seconds / 3600);
			let m = Math.floor((seconds % 3600) / 60);

			let hStr = h > 0 ? h + "h" : "";
			let mStr = m > 0 ? m + (h > 0 ? "" : "min") : "";

			return hStr + mStr;
		}
	}
</script>

<main>
	{#if $battery == undefined}
		<p>...</p>
	{:else}
		<h1>Level: {$battery.level * 100}%</h1>
		{#if $battery.charging}
			<p>Charging ({pretty($battery.chargingTime)} until full)</p>
		{:else}
			<p>Discharging ({pretty($battery.dischargingTime)} remaining)</p>
		{/if}
		<p>Battery health : {$battery.health}</p>
	{/if}
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		margin: 0 auto;
	}
</style>
