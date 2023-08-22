<script>
	import { blur } from 'svelte/transition';
	let q2 = '';
	let q1 = '';
	let q3 = '';
	let q4 = '';
	let q5 = '';
	let q6 = '';
	let q7 = '';
	let q8 = '';
	let q9 = '';
	let q10 = '';
	let q11 = '';
	let q12 = '';
	let q13 = '';
	let q14 = '';
	let q15 = '';
	let q16 = '';
	let q17 = '';
	let q18 = '';
	let q19 = '';
	let q20 = '';
	let ops = q2 + q5 + q7 + q10 + q11 + q12 + q13 + q15 + q17 + q18;
	let vision = q1 + q3 + q4 + q6 + q8 + q9 + q14 + q16 + q19 + q20;
</script>

<div class="bg-[#1D1C1C] font-soehne text-white pt-10">
	<div class="w-11/12 md:w-1/3 mx-auto">
		<img class="w-32 mt-10" src="/digitalindexbluepineapple.webp" alt="logo" />
		<form class="">
			<div class="mt-10 mx-2">
				<p class="text-slate-500">Question 1</p>
				<h2 class="text-xl font-bold">Our organization has a clear digital vision and strategy</h2>
				<p class="italic text-slate-500 mb-5">
					(1 Strongly Disagree 2 Disagree 3 Neutral 4 Agree 5 Strongly Agree)
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
			<div class="mt-10 mx-2">
				<p class="text-slate-500">Question 2</p>
				<h2 class="text-xl font-bold">
					Our organization invests regularly in digital training for employees
				</h2>
				<p class="italic text-slate-500 mb-5">
					(1 Strongly Disagree 2 Disagree 3 Neutral 4 Agree 5 Strongly Agree)
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

			<div class="mt-10 mx-2">
				<p class="text-slate-500">Question 3</p>
				<h2 class="text-xl font-bold">
					We use advanced technologies (e.g., AI, IoT, blockchain) to enhance our business
					operations.
				</h2>
				<p class="italic text-slate-500 mb-5">
					(1 Strongly Disagree 2 Disagree 3 Neutral 4 Agree 5 Strongly Agree)
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

			<div class="mt-10 mx-2">
				<p class="text-slate-500">Question 4</p>
				<h2 class="text-xl font-bold">
					Digital considerations are integrated into our product/service development process.
				</h2>
				<p class="italic text-slate-500 mb-5">
					(1 Strongly Disagree 2 Disagree 3 Neutral 4 Agree 5 Strongly Agree)
				</p>
				<div class="flex flex-row">
					<input type="radio" id="q41" name="q4" value="1" bind:group={q4} />
					<label for="q41">1</label>
					<input type="radio" id="q42" name="q4" value="2" bind:group={q4} />
					<label for="q42">2</label>
					<input type="radio" id="q43" name="q4" value="3" bind:group={q4} />
					<label for="q43">3</label>
					<input type="radio" id="q44" name="q4" value="4" bind:group={q4} />
					<label for="q44">4</label>
					<input type="radio" id="q45" name="q4" value="5" bind:group={q4} />
					<label for="q45">5</label>
				</div>
			</div>

			<div class="mt-10 mx-2">
				<p class="text-slate-500">Question 5</p>
				<h2 class="text-xl font-bold">
					Our organization is agile and can adapt to technological changes promptly.
				</h2>
				<p class="italic text-slate-500 mb-5">
					(1 Strongly Disagree 2 Disagree 3 Neutral 4 Agree 5 Strongly Agree)
				</p>
				<div class="flex flex-row">
					<input type="radio" id="q51" name="q5" value="1" bind:group={q5} />
					<label for="q51">1</label>
					<input type="radio" id="q52" name="q5" value="2" bind:group={q5} />
					<label for="q52">2</label>
					<input type="radio" id="q53" name="q5" value="3" bind:group={q5} />
					<label for="q53">3</label>
					<input type="radio" id="q54" name="q5" value="4" bind:group={q5} />
					<label for="q54">4</label>
					<input type="radio" id="q55" name="q5" value="5" bind:group={q5} />
					<label for="q55">5</label>
				</div>
			</div>

			<div class="mt-10 mx-2">
				<p class="text-slate-500">Question 6</p>
				<h2 class="text-xl font-bold">
					We regularly evaluate and update our IT security measures.
				</h2>
				<p class="italic text-slate-500 mb-5">
					(1 Strongly Disagree 2 Disagree 3 Neutral 4 Agree 5 Strongly Agree)
				</p>
				<div class="flex flex-row">
					<input type="radio" id="q61" name="q6" value="1" bind:group={q6} />
					<label for="q61">1</label>
					<input type="radio" id="q62" name="q6" value="2" bind:group={q6} />
					<label for="q62">2</label>
					<input type="radio" id="q63" name="q6" value="3" bind:group={q6} />
					<label for="q63">3</label>
					<input type="radio" id="q64" name="q6" value="4" bind:group={q6} />
					<label for="q64">4</label>
					<input type="radio" id="q65" name="q6" value="5" bind:group={q6} />
					<label for="q65">5</label>
				</div>
			</div>

			<div class="mt-10 mx-2">
				<p class="text-slate-500">Question 7</p>
				<h2 class="text-xl font-bold">
					Digital channels are a primary method for our customer interactions.
				</h2>
				<p class="italic text-slate-500 mb-5">
					(1 Strongly Disagree 2 Disagree 3 Neutral 4 Agree 5 Strongly Agree)
				</p>
				<div class="flex flex-row">
					<input type="radio" id="q71" name="q7" value="1" bind:group={q7} />
					<label for="q71">1</label>
					<input type="radio" id="q72" name="q7" value="2" bind:group={q7} />
					<label for="q72">2</label>
					<input type="radio" id="q73" name="q7" value="3" bind:group={q7} />
					<label for="q73">3</label>
					<input type="radio" id="q74" name="q7" value="4" bind:group={q7} />
					<label for="q74">4</label>
					<input type="radio" id="q75" name="q7" value="5" bind:group={q7} />
					<label for="q75">5</label>
				</div>
			</div>

			<div class="mt-10 mx-2">
				<p class="text-slate-500">Question 8</p>
				<h2 class="text-xl font-bold">
					Our leadership understands and champions digital transformation.
				</h2>
				<p class="italic text-slate-500 mb-5">
					(1 Strongly Disagree 2 Disagree 3 Neutral 4 Agree 5 Strongly Agree)
				</p>
				<div class="flex flex-row">
					<input type="radio" id="q81" name="q8" value="1" bind:group={q8} />
					<label for="q81">1</label>
					<input type="radio" id="q82" name="q8" value="2" bind:group={q8} />
					<label for="q82">2</label>
					<input type="radio" id="q83" name="q8" value="3" bind:group={q8} />
					<label for="q83">3</label>
					<input type="radio" id="q84" name="q8" value="4" bind:group={q8} />
					<label for="q84">4</label>
					<input type="radio" id="q85" name="q8" value="5" bind:group={q8} />
					<label for="q85">5</label>
				</div>
			</div>

			<div class="mt-10 mx-2">
				<p class="text-slate-500">Question 9</p>
				<h2 class="text-xl font-bold">
					Our organization's culture supports and encourages digital innovation.
				</h2>
				<p class="italic text-slate-500 mb-5">
					(1 Strongly Disagree 2 Disagree 3 Neutral 4 Agree 5 Strongly Agree)
				</p>
				<div class="flex flex-row">
					<input type="radio" id="q91" name="q9" value="1" bind:group={q9} />
					<label for="q91">1</label>
					<input type="radio" id="q92" name="q9" value="2" bind:group={q9} />
					<label for="q92">2</label>
					<input type="radio" id="q93" name="q9" value="3" bind:group={q9} />
					<label for="q93">3</label>
					<input type="radio" id="q94" name="q9" value="4" bind:group={q9} />
					<label for="q94">4</label>
					<input type="radio" id="q95" name="q9" value="5" bind:group={q9} />
					<label for="q95">5</label>
				</div>
			</div>

			<div class="mt-10 mx-2">
				<p class="text-slate-500">Question 10</p>
				<h2 class="text-xl font-bold">
					We have a dedicated team or department focusing on digital transformation.
				</h2>
				<p class="italic text-slate-500 mb-5">
					(1 Strongly Disagree 2 Disagree 3 Neutral 4 Agree 5 Strongly Agree)
				</p>
				<div class="flex flex-row">
					<input type="radio" id="q101" name="q10" value="1" bind:group={q10} />
					<label for="q101">1</label>
					<input type="radio" id="q102" name="q10" value="2" bind:group={q10} />
					<label for="q102">2</label>
					<input type="radio" id="q103" name="q10" value="3" bind:group={q10} />
					<label for="q103">3</label>
					<input type="radio" id="q104" name="q10" value="4" bind:group={q10} />
					<label for="q104">4</label>
					<input type="radio" id="q105" name="q10" value="5" bind:group={q10} />
					<label for="q105">5</label>
				</div>
			</div>

			<div class="mt-10 mx-2">
				<p class="text-slate-500">Question 11</p>
				<h2 class="text-xl font-bold">
					Our organization regularly uses data analytics to inform decision-making.
				</h2>
				<p class="italic text-slate-500 mb-5">
					(1 Strongly Disagree 2 Disagree 3 Neutral 4 Agree 5 Strongly Agree)
				</p>
				<div class="flex flex-row">
					<input type="radio" id="q111" name="q11" value="1" bind:group={q11} />
					<label for="q111">1</label>
					<input type="radio" id="q112" name="q11" value="2" bind:group={q11} />
					<label for="q112">2</label>
					<input type="radio" id="q113" name="q11" value="3" bind:group={q11} />
					<label for="q113">3</label>
					<input type="radio" id="q114" name="q11" value="4" bind:group={q11} />
					<label for="q114">4</label>
					<input type="radio" id="q115" name="q11" value="5" bind:group={q11} />
					<label for="q115">5</label>
				</div>
			</div>

			<div class="mt-10 mx-2">
				<p class="text-slate-500">Question 12</p>
				<h2 class="text-xl font-bold">
					Digital metrics and KPIs are well-defined and tracked in our organization.
				</h2>
				<p class="italic text-slate-500 mb-5">
					(1 Strongly Disagree 2 Disagree 3 Neutral 4 Agree 5 Strongly Agree)
				</p>
				<div class="flex flex-row">
					<input type="radio" id="q111" name="q11" value="1" bind:group={q11} />
					<label for="q111">1</label>
					<input type="radio" id="q112" name="q11" value="2" bind:group={q11} />
					<label for="q112">2</label>
					<input type="radio" id="q113" name="q11" value="3" bind:group={q11} />
					<label for="q113">3</label>
					<input type="radio" id="q114" name="q11" value="4" bind:group={q11} />
					<label for="q114">4</label>
					<input type="radio" id="q115" name="q11" value="5" bind:group={q11} />
					<label for="q115">5</label>
				</div>
			</div>

			<div class="mt-10 mx-2">
				<p class="text-slate-500">Question 13</p>
				<h2 class="text-xl font-bold">
					Our organization has a seamless integration between physical and digital customer
					touchpoints.
				</h2>
				<p class="italic text-slate-500 mb-5">
					(1 Strongly Disagree 2 Disagree 3 Neutral 4 Agree 5 Strongly Agree)
				</p>
				<div class="flex flex-row">
					<input type="radio" id="q131" name="q13" value="1" bind:group={q13} />
					<label for="q131">1</label>
					<input type="radio" id="q132" name="q13" value="2" bind:group={q13} />
					<label for="q132">2</label>
					<input type="radio" id="q133" name="q13" value="3" bind:group={q13} />
					<label for="q133">3</label>
					<input type="radio" id="q134" name="q13" value="4" bind:group={q13} />
					<label for="q134">4</label>
					<input type="radio" id="q135" name="q13" value="5" bind:group={q13} />
					<label for="q135">5</label>
				</div>
			</div>

			<div class="mt-10 mx-2">
				<p class="text-slate-500">Question 14</p>
				<h2 class="text-xl font-bold">
					We constantly assess and invest in the latest digital tools to stay competitive.
				</h2>
				<p class="italic text-slate-500 mb-5">
					(1 Strongly Disagree 2 Disagree 3 Neutral 4 Agree 5 Strongly Agree)
				</p>
				<div class="flex flex-row">
					<input type="radio" id="q141" name="q14" value="1" bind:group={q14} />
					<label for="q141">1</label>
					<input type="radio" id="q142" name="q14" value="2" bind:group={q14} />
					<label for="q142">2</label>
					<input type="radio" id="q143" name="q14" value="3" bind:group={q14} />
					<label for="q143">3</label>
					<input type="radio" id="q144" name="q14" value="4" bind:group={q14} />
					<label for="q144">4</label>
					<input type="radio" id="q145" name="q14" value="5" bind:group={q14} />
					<label for="q145">5</label>
				</div>
			</div>

			<div class="mt-10 mx-2">
				<p class="text-slate-500">Question 15</p>
				<h2 class="text-xl font-bold">
					Our employees are empowered with the right digital tools to perform their roles
					effectively.
				</h2>
				<p class="italic text-slate-500 mb-5">
					(1 Strongly Disagree 2 Disagree 3 Neutral 4 Agree 5 Strongly Agree)
				</p>
				<div class="flex flex-row">
					<input type="radio" id="q151" name="q15" value="1" bind:group={q15} />
					<label for="q151">1</label>
					<input type="radio" id="q152" name="q15" value="2" bind:group={q15} />
					<label for="q152">2</label>
					<input type="radio" id="q153" name="q15" value="3" bind:group={q15} />
					<label for="q153">3</label>
					<input type="radio" id="q154" name="q15" value="4" bind:group={q15} />
					<label for="q154">4</label>
					<input type="radio" id="q155" name="q15" value="5" bind:group={q15} />
					<label for="q155">5</label>
				</div>
			</div>

			<div class="mt-10 mx-2">
				<p class="text-slate-500">Question 16</p>
				<h2 class="text-xl font-bold">
					We have an established process to handle digital disruption in our industry.
				</h2>
				<p class="italic text-slate-500 mb-5">
					(1 Strongly Disagree 2 Disagree 3 Neutral 4 Agree 5 Strongly Agree)
				</p>
				<div class="flex flex-row">
					<input type="radio" id="q161" name="q16" value="1" bind:group={q16} />
					<label for="q161">1</label>
					<input type="radio" id="q162" name="q16" value="2" bind:group={q16} />
					<label for="q162">2</label>
					<input type="radio" id="q163" name="q16" value="3" bind:group={q16} />
					<label for="q163">3</label>
					<input type="radio" id="q164" name="q16" value="4" bind:group={q16} />
					<label for="q164">4</label>
					<input type="radio" id="q165" name="q16" value="5" bind:group={q16} />
					<label for="q165">5</label>
				</div>
			</div>

			<div class="mt-10 mx-2">
				<p class="text-slate-500">Question 17</p>
				<h2 class="text-xl font-bold">
					Collaboration tools and platforms are widely adopted across our organization.
				</h2>
				<p class="italic text-slate-500 mb-5">
					(1 Strongly Disagree 2 Disagree 3 Neutral 4 Agree 5 Strongly Agree)
				</p>
				<div class="flex flex-row">
					<input type="radio" id="q171" name="q17" value="1" bind:group={q17} />
					<label for="q171">1</label>
					<input type="radio" id="q172" name="q17" value="2" bind:group={q17} />
					<label for="q172">2</label>
					<input type="radio" id="q173" name="q17" value="3" bind:group={q17} />
					<label for="q173">3</label>
					<input type="radio" id="q174" name="q17" value="4" bind:group={q17} />
					<label for="q174">4</label>
					<input type="radio" id="q175" name="q17" value="5" bind:group={q17} />
					<label for="q175">5</label>
				</div>
			</div>

			<div class="mt-10 mx-2">
				<p class="text-slate-500">Question 18</p>
				<h2 class="text-xl font-bold">
					Our IT infrastructure supports the rapid scaling of digital initiatives.
				</h2>
				<p class="italic text-slate-500 mb-5">
					(1 Strongly Disagree 2 Disagree 3 Neutral 4 Agree 5 Strongly Agree)
				</p>
				<div class="flex flex-row">
					<input type="radio" id="q181" name="q18" value="1" bind:group={q18} />
					<label for="q181">1</label>
					<input type="radio" id="q182" name="q18" value="2" bind:group={q18} />
					<label for="q182">2</label>
					<input type="radio" id="q183" name="q18" value="3" bind:group={q18} />
					<label for="q183">3</label>
					<input type="radio" id="q184" name="q18" value="4" bind:group={q18} />
					<label for="q184">4</label>
					<input type="radio" id="q185" name="q18" value="5" bind:group={q18} />
					<label for="q185">5</label>
				</div>
			</div>

			<div class="mt-10 mx-2">
				<p class="text-slate-500">Question 19</p>
				<h2 class="text-xl font-bold">
					Our organization has successfully integrated digital technologies into existing business
					models.
				</h2>
				<p class="italic text-slate-500 mb-5">
					(1 Strongly Disagree 2 Disagree 3 Neutral 4 Agree 5 Strongly Agree)
				</p>
				<div class="flex flex-row">
					<input type="radio" id="q191" name="q19" value="1" bind:group={q19} />
					<label for="q191">1</label>
					<input type="radio" id="q192" name="q19" value="2" bind:group={q19} />
					<label for="q192">2</label>
					<input type="radio" id="q193" name="q19" value="3" bind:group={q19} />
					<label for="q193">3</label>
					<input type="radio" id="q194" name="q19" value="4" bind:group={q19} />
					<label for="q194">4</label>
					<input type="radio" id="q195" name="q19" value="5" bind:group={q19} />
					<label for="q195">5</label>
				</div>
			</div>

			<div class="mt-10 mx-2">
				<p class="text-slate-500">Question 20</p>
				<h2 class="text-xl font-bold">
					We have a proactive approach to exploring emerging digital trends and technologies.
				</h2>
				<p class="italic text-slate-500 mb-5">
					(1 Strongly Disagree 2 Disagree 3 Neutral 4 Agree 5 Strongly Agree)
				</p>
				<div class="flex flex-row">
					<input type="radio" id="q201" name="q20" value="1" bind:group={q20} />
					<label for="q201">1</label>
					<input type="radio" id="q202" name="q20" value="2" bind:group={q20} />
					<label for="q202">2</label>
					<input type="radio" id="q203" name="q20" value="3" bind:group={q20} />
					<label for="q203">3</label>
					<input type="radio" id="q204" name="q20" value="4" bind:group={q20} />
					<label for="q204">4</label>
					<input type="radio" id="q205" name="q20" value="5" bind:group={q20} />
					<label for="q205">5</label>
				</div>
			</div>

			<div class="mt-10 text-xl">
				<label class="font-bold" for="email">Email:</label>

				<input
					type="email"
					id="email"
					pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]$"
					size="30"
					required
				/>
			</div>

			<div class="mt-10 text-xl">
				<label class="font-bold" for="email">Mobile:</label>

				<input type="tel" id="tel" pattern="^(?:(?:4|0\d|\+61\d)\d{9})$" size="30" required />
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
	input[type='tel'] {
		width: 100%;
		background-color: #1d1c1c;
		border: 0px solid black;
		border-bottom: solid white;
		text-align: LEFT;
	}
	input[type='email'] {
		width: 100%;
		background-color: #1d1c1c;
		border: 0px solid black;
		border-bottom: solid white;
		text-align: left;
	}
</style>
