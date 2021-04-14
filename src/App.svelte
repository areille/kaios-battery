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

	function chargingText(): string {
		const time = $battery.chargingTime;
		return time == Infinity ? "" : ` (${pretty(time)} until full)`;
	}
	function dischargingText(): string {
		const time = $battery.dischargingTime;
		return time == Infinity ? "" : ` (${pretty(time)} remaining)`;
	}
</script>

<main>
	{#if $battery == undefined}
		<p>...</p>
	{:else}
		<h1>Level: {$battery.level * 100}%</h1>
		{#if $battery.charging}
			<p>Charging{chargingText()}</p>
		{:else}
			<p>Discharging{dischargingText()}</p>
		{/if}
		<p>{$battery.temperature}°C</p>
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
