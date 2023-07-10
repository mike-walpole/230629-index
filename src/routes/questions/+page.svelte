<script>
	import { blur } from 'svelte/transition';
	let q2 = '';
	let q1 = '';
</script>

<div class="bg-[#1D1C1C] font-soehne text-white pt-10">
	<div class="w-11/12 md:w-1/3 mx-auto">
		<img class="w-32 mt-10" src="/digitalindexbluepineapple.webp" alt="logo" />
		<form class="">
			<div class="mt-10 mx-2">
				<p class="text-slate-500">Question 1</p>
				<h2 class="text-xl font-bold">
					My company prioritizes digital excellence in its strategic documents or discussions and
					communicates frequently about it
				</h2>
				<p class="italic text-slate-500 mb-5">
					(Frequency: 1 Never 2 Rarely 3 Occasionally 4 Frequently 5 All the time)
				</p>
				<div class="flex flex-row">
					<input type="radio" id="q11" name="q1" value="1" bind:group={q1} />
					<label for="q11">1</label>
					<input type="radio" id="q12" name="q1" value="2" bind:group={q1} />
					<label for="q12">2</label>
					<input type="radio" id="q13" name="q1" value="3" bind:group={q1} />
					<label for="q13">3</label>
					<input type="radio" id="q14" name="q1" value="4" bind:group={q1} />
					<label for="q14">4</label>
					<input type="radio" id="q15" name="q1" value="5" bind:group={q1} />
					<label for="q15">5</label>
				</div>
			</div>
			<div transition:blur class="mt-10 mx-2">
				<p class="text-slate-500">Question 2</p>
				<h2 class="text-xl font-bold">
					I have a clear understanding of what digital excellence is and entails
				</h2>
				<p class="italic text-slate-500 mb-5">
					(Agreement: 1 Strongly Disagree 2 Disagree 3 Undecided 4 Agree 5 Strongly Agree)
				</p>
				<div class="flex flex-row">
					<input type="radio" id="q21" name="q2" value="1" bind:group={q2} />
					<label for="q21">1</label>
					<input type="radio" id="q22" name="q2" value="2" bind:group={q2} />
					<label for="q22">2</label>
					<input type="radio" id="q23" name="q2" value="3" bind:group={q2} />
					<label for="q23">3</label>
					<input type="radio" id="q24" name="q2" value="4" bind:group={q2} />
					<label for="q24">4</label>
					<input type="radio" id="q25" name="q2" value="5" bind:group={q2} />
					<label for="q25">5</label>
				</div>
			</div>

			<a href="#comps">
				<button
					class="border border-white my-20 mx-2 font-bold w-full h-12 text-white"
					type="submit">Show me how I compare to others</button
				>
			</a>
		</form>
	</div>
</div>
<div>
	<div class="h-[23px] mt-[1px] bg-[#1D1C1C]" />
	<div class="h-[22px] mt-[2px] bg-[#1D1C1C]" />
	<div class="h-[21px] mt-[3px] bg-[#1D1C1C]" />
	<div class="h-[20px] mt-[4px] bg-[#1D1C1C]" />
	<div class="h-[19px] mt-[5px] bg-[#1D1C1C]" />
	<div class="h-[18px] mt-[6px] bg-[#1D1C1C]" />
	<div class="h-[17px] mt-[7px] bg-[#1D1C1C]" />
	<div class="h-[16px] mt-[8px] bg-[#1D1C1C]" />
	<div class="h-[15px] mt-[9px] bg-[#1D1C1C]" />
	<div class="h-[14px] mt-[10px] bg-[#1D1C1C]" />
	<div class="h-[13px] mt-[11px] bg-[#1D1C1C]" />
	<div class="h-[12px] mt-[12px] bg-[#1D1C1C]" />
	<div class="h-[11px] mt-[13px] bg-[#1D1C1C]" />
	<div class="h-[10px] mt-[14px] bg-[#1D1C1C]" />
	<div class="h-[9px] mt-[15px] bg-[#1D1C1C]" />
	<div class="h-[8px] mt-[16px] bg-[#1D1C1C]" />
	<div class="h-[7px] mt-[17px] bg-[#1D1C1C]" />
	<div class="h-[6px] mt-[18px] bg-[#1D1C1C]" />
	<div class="h-[5px] mt-[19px] bg-[#1D1C1C]" />
	<div class="h-[4px] mt-[20px] bg-[#1D1C1C]" />
	<div class="h-[3px] mt-[21px] bg-[#1D1C1C]" />
	<div class="h-[2px] mt-[22px] bg-[#1D1C1C]" />
	<div class="h-[1px] mt-[23px] bg-[#1D1C1C]" />
	<div class="h-[0px] mt-[24px] bg-[#1D1C1C]" />
</div>

<style>
	input[type='radio'] {
		display: none;
	}
	input[type='radio'] + label {
		border: 2px solid white;

		cursor: pointer;
		display: block;
		height: 62px;
		min-width: 19%;
		text-align: center;
		line-height: 62px;
		margin-right: 0.5em;
		border-radius: 5px;
	}
	input[type='radio']:checked + label {
		border: 2px solid white;
		background-color: white;
		color: black;
	}
	input[type='number'] {
		width: 90px;
		border: 0px solid black;
		border-bottom: solid black;
		text-align: center;
	}
	input[type='email'] {
		width: 100%;
		border: 0px solid black;
		border-bottom: solid black;
		text-align: center;
	}
</style>
