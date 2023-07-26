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
	import { sections } from './yfl_data';
	import { Tag } from 'carbon-components-svelte';
	import ArrowRight from 'carbon-icons-svelte/lib/ArrowRight.svelte';
	import AlignBoxBottomCenter from "carbon-icons-svelte/lib/AlignBoxBottomCenter.svelte";
	import Edit from "carbon-icons-svelte/lib/Edit.svelte";
	import ProjectHeader from '../../../components/project_header.svelte';
	import { fade } from 'svelte/transition';
	import { Breadcrumb, BreadcrumbItem } from 'carbon-components-svelte';
	let currentScore = 0;
	let grade = 'No Grade';

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
	function openNext(current_index) {
		//Close all items
		for (let index = 0; index < sections.length; index++) {
			const element = (sections[index].open = false);
		}
		//Open next items
		sections[current_index + 1].open = true;
	}
</script>

<div>
	<p style="font-size: 32px;">
		<!-- <span style="font-weight: 300;">(4572)</span> -->
		<span style="font-weight: 300;">Richard</span>
		<span>Church</span>
	
	</p>
	
	<Breadcrumb noTrailingSlash>
		<BreadcrumbItem>Acomb</BreadcrumbItem>
		<BreadcrumbItem>4th May, Thu AM</BreadcrumbItem>
	</Breadcrumb>
	<br /><br />
</div>
<div class="bootstrap-wrapper grayband">
	<div class="container-fluid">
		<div class="row">
			<div class="col-md-3">
				<Tile light style="box-shadow: 0px 2px 2px #E3E3E3;">
					<h6>Session Details</h6>

					<br />
					<br />

					<dl>
						<dt style="font-size:0.7rem;color:gray;">Tutor</dt>
						<dd style="padding-bottom: 1rem;">Kane Linnett</dd>
						<dt style="font-size:0.7rem;color:gray;">Location</dt>
						<dd style="padding-bottom: 1rem;">Acomb Library</dd>
						<dt style="font-size:0.7rem;color:gray;">Date</dt>
						<dd style="padding-bottom: 1rem;">06/04/22</dd>
						<dt style="font-size:0.7rem;color:gray;">Session</dt>
						<dd style="padding-bottom: 1rem;">Tues AM</dd>
					</dl>
					<div style="display: flex;align-items:right;justify-content:right;padding-top:1rem;">
						<Button on:click={() => persisit()}>Save</Button>
					</div>
				</Tile>
				<br />
				<Tile light style="box-shadow: 0px 2px 2px #E3E3E3;">
					<h6 style="padding-bottom:10px ;">Additional Documentation</h6>
					<ul>
						<li><Link>Link to useful info</Link></li>
					</ul>
				</Tile>
			</div>
			<div class="col-md-9">
				<Tile light style="box-shadow: 0px 2px 2px #E3E3E3;">
					<h6>Leaners</h6>
					<br />
					<br />
					<div class="row">
						<div class="col-md-12">
							<Accordion>
								{#each sections as section, i}
									<AccordionItem open={section.open}>
										<svelte:fragment slot="title">
											<span style="display: flex;justify-content: space-between;">
												{#if section.section_value === ''}
													<span>
														<Tag size="sm" type="cool-gray" style="margin-right: 1rem;"
															>{section.section_value}</Tag
														>{section.title} 
													</span>
												{:else}
													<span
														><Tag size="sm" type="green" style="margin-right: 1rem;"
															>{section.section_value}</Tag
														>{section.title}</span
													>
												{/if}
											</span>
										</svelte:fragment>
										<div class="row">
											<div class="col-md-4">
												<Tile><!--<AlignBoxBottomCenter />-->

													<div>
														<div class="note-title">Acomb Tue AM</div>
														<div class="note-tile sub">20/04/22</div>
														<div class="note">Good progress through the Formatting Text section of the workbook. To start the Tools section next session.s</div>
														<div style="display: flex;align-items:right;justify-content:right;padding-top:1rem;">
															<!-- <Button on:click={() => persisit()}>Save</Button> -->
															<Edit />
														</div>
													</div>
												</Tile>
											</div>

											<div class="col-md-4">
												<Tile><AlignBoxBottomCenter /><br></Tile>
											</div>

											<div class="col-md-4">
												<Tile><AlignBoxBottomCenter /><br></Tile>
											</div><div style="display: flex;align-items:right;justify-content:right;padding-top:1rem;"><div>ddz</div></div>
										</div>
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

<style>
	.grayband {
		margin-left: -2rem;
		margin-right: -2rem;
		padding: 1rem;
		background-color: #f4f4f4;
	}
.note{
	font-size: 0.875rem;
}

	.note-title{
		font-weight: 500;
		padding-bottom: 8px;
	}

	.sub{
		font-style: italic;
		padding-bottom: 8px;
	}
</style>
