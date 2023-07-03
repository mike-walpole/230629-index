<script>
	import Select from 'svelte-select';
	let box;
	let submitted = false;
	let items = [{ label: '1-5' }, { label: '5-20' }, { label: '20-50' }, { label: '50+' }];

	let titles = [
		{ label: 'Junior Lecturer (without PhD)' },
		{ label: 'Junior Lecturer (with PhD)' },
		{ label: 'PhD candidate (with teaching obligations)' },
		{ label: 'Post-Doc (with teaching obligations)' },
		{ label: 'Assistant Professor' },
		{ label: 'Associate Professor' },
		{ label: 'Full Professor' },
		{ label: 'Other' }
	];

	let types = [
		{ label: 'Publicly funded University' },
		{ label: 'Privately funded University' },
		{ label: 'Liberal Arts College' },
		{ label: 'University of Applied Sciences' },
		{ label: 'Other' }
	];
	let consent = false;
	let institution = '';
	let selected = '';
	let position = '';
	let q1c = '';
	let q2 = '';
	let q3 = '';
	let q4a = '';
	let q4b = '';
	let q4c = '';
	let q4d = '';
	let q4e = '';
	let q4f = '';
	let q4g = '';
	let q5 = '';
	let q6a = '';
	let q6b = '';
	let q6c = '';
	let q6d = '';
	let q6e = '';
	let q6f = '';
	let q6g = '';
	let q6h = '';
	let q7a = '';
	let q7b = '';
	let q7c = '';
	let q7d = '';
	let q7e = '';
	let q7f = '';
	let q7g = '';
	let q7h = '';
	let q7i = '';
	let q7j = '';
	let q7k = '';
	let q9 = '';
	let q10 = '';
	let q11 = '';
	let q12 = '';
	let q13a = '';
	let q13b = '';
	let q13c = '';
	let q13d = '';
	let q13e = '';
	let q13f = '';
	let q13g = '';
	let q13h = '';
	let q13i = '';
	let q13j = '';
	let q13k = '';

	let email = '';

	let created = new Date();

	async function handleSubmit() {
		submitted = !submitted;

		const data = {
			selected,
			q1c,
			q2,
			q3,
			q4a,
			q4b,
			q4c,
			q4d,
			q4e,
			q4f,
			q4g,
			q5,
			q6a,
			q6b,
			q6c,
			q6d,
			q6e,
			q6f,
			q6g,
			q6h,
			q7a,
			q7b,
			q7c,
			q7d,
			q7e,
			q7f,
			q7g,
			q7h,
			q7i,
			q7j,
			q7k,
			q9,
			q10,
			q11,
			q12,
			q13a,
			q13b,
			q13c,
			q13d,
			q13e,
			q13f,
			q13g,
			q13h,
			q13i,
			q13j,
			q13k,
			consent,

			email,
			created,
			institution,
			position
		};

		fetch('https://sheet.best/api/sheets/8a267e1c-3bae-4693-b18a-f9ed9e29c7e4/tabs/Rawb', {
			method: 'POST',
			mode: 'cors',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(data)
		})
			.then((r) => r.json())
			.then((data) => {
				// The response comes here
				console.log(data);
			})
			.catch((error) => {
				// Errors are reported there
				console.log(error);
			});
	}
</script>

<div id="top" class="bg-[#1D1C1C] flex w-screen justify-center">
	<div class="w-full text-white font-soehne md:max-w-2xl">
		<img class="mx-10 my-10 w-32 mr-5" src="/digitalindexbluepineapple.avif" alt="logo" />
		<form class="w-full" on:submit|preventDefault={handleSubmit}>
			<div class="mt-10 mx-5 md:ml-10">
				<p class="text-slate-500">Question 1</p>
				<h2 class="text-xl font-bold mb-5">My company has this many employees</h2>
				<Select class="text-black" id="countries" {items} bind:value={selected} />
			</div>

			<div class="mt-10 mx-2 mr-10 md:ml-10">
				<p class="text-slate-500">Question 2</p>
				<h2 class="text-xl font-bold">
					My company prioritizes digital excellence in its strategic documents or discussions and
					communicates frequently about it
				</h2>
				<p class="italic text-slate-500 mb-5">
					(Frequency: 1 Never 2 Rarely 3 Occasionally 4 Frequently 5 All the time)
				</p>
				<div class="flex flex-row">
					<input type="radio" id="q11" name="q2" value="1" bind:group={q2} />
					<label for="q11">1</label>
					<input type="radio" id="q12" name="q2" value="2" bind:group={q2} />
					<label for="q12">2</label>
					<input type="radio" id="q13" name="q2" value="3" bind:group={q2} />
					<label for="q13">3</label>
					<input type="radio" id="q14" name="q2" value="4" bind:group={q2} />
					<label for="q14">4</label>
					<input type="radio" id="q15" name="q2" value="5" bind:group={q2} />
					<label for="q15">5</label>
				</div>
			</div>

			<div class="mt-10 mx-2 md:ml-10">
				<p class="text-slate-500">Question 3</p>
				<h2 class="text-xl font-bold">
					I have a clear understanding of what digital excellence is and entails
				</h2>
				<p class="italic text-slate-500 mb-5">
					(Agreement: 1 Strongly Disagree 2 Disagree 3 Undecided 4 Agree 5 Strongly Agree)
				</p>
				<div class="flex flex-row">
					<input type="radio" id="q31" name="q3" value="1" bind:group={q3} />
					<label for="q31">1</label>
					<input type="radio" id="q32" name="q3" value="2" bind:group={q3} />
					<label for="q32">2</label>
					<input type="radio" id="q33" name="q3" value="3" bind:group={q3} />
					<label for="q33">3</label>
					<input type="radio" id="q34" name="q3" value="4" bind:group={q3} />
					<label for="q34">4</label>
					<input type="radio" id="q35" name="q3" value="5" bind:group={q3} />
					<label for="q35">5</label>
				</div>
			</div>

			<a href="#comps">
				<button
					class="border border-white my-20 font-bold mx-5 md:ml-10 w-full h-12 text-white"
					type="submit">Show me how I compare to others</button
				>
			</a>
		</form>
		aaa
	</div>

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
	aaa
</div>

<svg
	xmlns="http://www.w3.org/2000/svg"
	width="24"
	height="24"
	viewBox="0 0 24 24"
	fill="none"
	stroke="currentColor"
	stroke-width="2"
	stroke-linecap="round"
	stroke-linejoin="round"
	class="lucide lucide-arrow-up-right"><path d="M7 7h10v10" /><path d="M7 17 17 7" /></svg
>

<style>
	input[type='radio'] {
		display: none;
	}
	input[type='radio'] + label {
		border: 2px solid white;

		cursor: pointer;
		display: block;
		height: 62px;
		min-width: 80px;
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
