<script>
	import ProjectHeader from '../../../../components/project_header.svelte';
  import Launch from 'carbon-icons-svelte/lib/Launch.svelte';
    import {
		Accordion,
    Tooltip,
		AccordionItem,
		ComboBox,
		TextArea,
    DataTable,
		Tile,
        Tab,
        Tabs,
        TooltipDefinition,
        Tag,
        TabContent,
		Button,
		Link,
		Select,
		SelectItem
	} from 'carbon-components-svelte';
</script>

<div>
	<p style="font-size: 32px;">
        <span style="font-weight: 300;">HRJE Dashboard</span>
    </p>
	<br /><br />
</div>

<div class="bootstrap-wrapper grayband">
	<div class="container-fluid">

        <Tabs type="container">
            <Tab label="Evaluations" />
            <Tab label="Previous Evaluations" />
            <Tab label="Recently Created" />
            <svelte:fragment slot="content">
              <TabContent>
                
                <DataTable
                headers={[
                    { key: "id", value: "Job Ref" },
                    { key: "title", value: "Title" },
                    { key: "paneldate", value: "Panel Date" },
                    { key: "status", value: "Status" },
                  ]}
                            rows={[
                                {
                                  id: "123",
                                  title: "Tree Officer",
                                  paneldate: "01/10/2023",
                                  status: "Active",
                                },
                                {
                                  id: "345",
                                  title: "Tree Officer",
                                  paneldate: "01/10/2023",
                                  status: "Active",
                                },
                                {
                                  id: "678",
                                  title: "Tree Officer",
                                  paneldate: "01/10/2023",
                                  status: "Active",
                                },
                ]}
              >
                <svelte:fragment slot="cell-header" let:header>
                    {header.value}
                </svelte:fragment>
                <svelte:fragment slot="cell" let:row let:cell>
                  {#if cell.key === "id"}
                    <Link
                      icon={Launch}
                      href="/hrje/job/123">{cell.value}</Link
                    >
                  {:else}
                    {cell.value}
                  {/if}
                </svelte:fragment>
              </DataTable>
            
            
            </TabContent>
              <TabContent>No Previous Evaluations</TabContent>
              <TabContent>No Evaluations created in the past 14 days</TabContent>
            </svelte:fragment>
          </Tabs>

    </div>
</div>

<style>
	.grayband {
		margin-left: -2rem;
		margin-right: -2rem;
		padding: 1rem;
		background-color: #f4f4f4;
	}

    .score_head{
        padding:6px;
    }
</style>
