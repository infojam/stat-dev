<script>
	// @ts-nocheck

	import {
		Accordion,
		AccordionItem,
		ComboBox,
		TextArea,
		Tile,
		Button,
		Link,
		Select,
		SelectItem
	} from 'carbon-components-svelte';
	import { sections } from './data.js';
	import { Tag } from 'carbon-components-svelte';
	import ArrowRight from 'carbon-icons-svelte/lib/ArrowRight.svelte';
	import ProjectHeader from '../../components/project_header.svelte';
	import { fade } from 'svelte/transition';

	let currentScore = 0;
	let  grade = "No Grade";
function getGrade(points){
if(points >= "182" && points <= "217")
{
	grade = "Scale 1a";
}
else if(points >= "218" && points <= "257")
{
	grade = "Scale 1b";
}
else if(points >= "258" && points <= "298")
{
	grade = "Scale 1c";
}
else if(points >= "299" && points <= "338")
{
	grade = "Scale 2";
}
else if(points >= "339" && points <= "379")
{
	grade = "Scale 3";
}
else if(points >= "380" && points <= "419")
{
	grade = "Scale 4";
}
else if(points >= "420" && points <= "461")
{
	grade = "Scale 5";
}
else if(points >= "462" && points <= "496")
{
	grade = "Scale 6";
}
else if(points >= "497" && points <= "533")
{
	grade = "SO1";
}
else if(points >= "534" && points <= "558")
{
	grade = "SO2";
}
else if(points >= "559" && points <= "585")
{
	grade = "PO1";
}
else if(points >= "586" && points <= "610")
{
	grade = "PO2";
}
else if(points >= "611" && points <= "637")
{
	grade = "PO3";
}
else if(points >= "638" && points <= "662")
{
	grade = "PO4";
}
else if(points >= "663" && points <= "689")
{
	grade = "PO5";
}
else if(points >= "690" && points <= "714")
{
	grade = "PO6";
}
else if(points >= "715" && points <= "799")
{
	grade = "PO7";
}
else if(points >= "800" && points <= "948")
{
	grade = "PO8";
}
else
{
	grade = "No Grade";
}
}


	function changeScore() {
		currentScore = 0;
		for (let index = 0; index < sections.length; index++) {
			const section = sections[index];

			for (let q = 0; q < section.questions.length; q++) {
				const question = section.questions[q];

				for (let o = 0; o < question.options.length; o++) {
					const option = question.options[o];
					if (option.selected == true) {
						currentScore = currentScore + option.score;
					}
				}
			}
		}
		getGrade(currentScore);
	}

	async function doPost(n) {
		//n.loading = false;

		var raw = '{"data":' + JSON.stringify(n) + '}';

		var requestOptions = {
			method: 'POST',
			//headers: myHeaders,
			body: raw
			//redirect: 'follow'
		};

		console.log(raw);

		fetch(
			'https://statcrud.azurewebsites.net/api/persist_project?code=YbHTFcCIKti1L_VOcrAuz3-NHt5nmDeu0oD3426-JwBoAzFuMjxvKQ==',
			requestOptions
		)
			.then((response) => response.text())
			.then(function (result) {
				console.log(result);
			})
			.catch((error) => console.log('error', error));
	}

	async function persisit() {
		console.log('SAVE', sections);
		doPost(sections);

		// async function addNote() {
		// 	new_note.id = uuidv4();
		// 	var n = structuredClone(new_note);
		// 	$data.push(n);
		// 	await doPost(n);
		// 	$data = $data;
		// 	new_note.detail = '';
		// 	open = false;
		// }
	}
	//TODO this seems messy
	// @ts-ignore
	function scoreChange(e, q_id, o) {
		if (e != 0) {
			for (let index = 0; index < sections.length; index++) {
				sections[index].open = false;
				if (sections[index].id == q_id) {
					//TODO - e-1 will cause confusion, need to lookup by id.
					var v = sections[index].questions[0].options[e - 1];
					for (let i = 0; i < sections[index].questions[0].options.length; i++) {
						sections[index].questions[0].options[i].selected = false;
					}
					sections[index].questions[0].options[e - 1].selected = true;
					sections[index].detail_text = v.description;
					sections[index].section_value = v.text;
					sections[index].open = true;
					// @ts-ignore
					changeScore(v.score);
				}
			}
		} else {
			for (let index = 0; index < sections.length; index++) {
				sections[index].open = false;
				if (sections[index].id == q_id) {
					for (let i = 0; i < sections[index].questions[0].options.length; i++) {
						sections[index].questions[0].options[i].selected = false;
					}
					sections[index].open = true;
				}
				changeScore();
			}
		}
	}
	// @ts-ignore
	function openNext(current_index) {
		//Close all items
		for (let index = 0; index < sections.length; index++) {
			const element = (sections[index].open = false);
		}
		//Open next items
		sections[current_index + 1].open = true;
	}
</script>


<style>
.grayband{
		margin-left: -2rem;
		margin-right: -2rem;
		padding: 1rem;
		background-color: #f4f4f4;
}
</style>




<div><ProjectHeader/>
	<br><br>
	</div>
<div class="bootstrap-wrapper grayband">
	<div class="container-fluid">
		<div class="row">
			<div class="col-md-3"><Tile light style="box-shadow: 0px 2px 2px #E3E3E3;">
				<h6>Evaluation</h6>

				<br>
				<br>
				
				<dl>
					  <dt style="font-size:0.7rem;color:gray;">Panel Member</dt>
					  <dd style="padding-bottom: 1rem;">Kane Linnett</dd>
					  <dt style="font-size:0.7rem;color:gray;">Grade</dt>
					  <dd style="padding-bottom: 1rem;">{grade}</dd>
					<dt style="font-size:0.7rem;color:gray;">Score</dt>
					  <dd style="padding-bottom: 1rem;">{currentScore}</dd>
					<dt style="font-size:0.7rem;color:gray;">Panel Date</dt>
					  <dd style="padding-bottom: 1rem;">01/05/2023</dd>
					<!-- <dt>Status</dt>
					  <dd style="padding-bottom: 1rem;"><strong>INCOMPLETE</strong></dd> -->
					<dt>Status</dt>
					<dd>
	<Select light  on:change={(e) => console.log("value", e.detail)}>
	  <SelectItem value="New Evaluation" />
	  <SelectItem value="In Progress" />
	  <SelectItem value="Pencil Score" />
	  <SelectItem value="Awaiting Authorisation" />
	  <SelectItem value="Provisional" />
	  <SelectItem value="Unable to Score" />
	  <SelectItem value="Manager Approved" />
	  <SelectItem value="Manager Rejected" />
	</Select>
	</dd>
				</dl>
				<div style="display: flex;align-items:right;justify-content:right;padding-top:1rem;">
				<Button on:click={() => persisit()}>Save</Button>
			</div>
				</Tile>
				<br>
				<Tile light style="box-shadow: 0px 2px 2px #E3E3E3;">
				<h6 style="padding-bottom:10px ;">Additional Documentation</h6>
				<ul>
				<li><Link>2020 GLPC Schema</Link></li>
				</ul>
	
				
				</Tile>
	
				</div>
			<div class="col-md-9" >
				<Tile light style="box-shadow: 0px 2px 2px #E3E3E3;">
					<h6>Factors</h6>
					<br>
					<br>
					<div class="row" >
						<div class="col-md-12">
				<Accordion>
				{#each sections as section, i}
					<AccordionItem open={section.open}> 
						<svelte:fragment slot="title">
							<span style="display: flex;justify-content: space-between;">
								{#if section.section_value === ''}
									<span>
										<Tag size="sm" type="cool-gray" style="margin-right: 1rem;">{section.section_value}</Tag>{section.title}
									</span>
								{:else}
									<span
										><Tag size="sm" type="green" style="margin-right: 1rem;">{section.section_value}</Tag
										>{section.title}</span
									>
								{/if}
							</span>
						</svelte:fragment>
			
						{#each section.questions as q}
						<div class="row">	
							<div class="col-md-12">
									<Select labelText="Score" on:change={(e) => scoreChange(e.target.value, section.id, e)}>
										<SelectItem value="0" text="0" />
										{#each q.options as option}
											<SelectItem value={option.value} text={option.text} />
										{/each}
									</Select>
									<br />
									<TextArea labelText="Description" value={section.detail_text} readonly/>
									<div style="display: flex;align-items:right;justify-content:right;padding-top:1rem;">
										<Button icon={ArrowRight} on:click={() => openNext(i)}>Next</Button>
									</div>
								</div>
							</div>  
						{/each}
					</AccordionItem>
				{/each}
			</Accordion>
		</div>
	</div>
		</Tile>
		</div>
		</div>
	</div>
</div>


