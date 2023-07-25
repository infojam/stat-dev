<script>
	import ProjectHeader from '../../../components/project_header.svelte';

    import {
		Accordion,
		AccordionItem,
		ComboBox,
		TextArea,
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
	<ProjectHeader />
	<br /><br />
</div>

<div class="bootstrap-wrapper grayband">
	<div class="container-fluid">

		<div class="row">
			<div class="col-md-3"><Tile light style="box-shadow: 0px 2px 2px #E3E3E3;" > <h6>Evaluations</h6></Tile>
               
            </div>
            <div class="col-md-9"><Tile light style="box-shadow: 0px 2px 2px #E3E3E3;" ><h6>Most recent evaluation</h6>
            
                <Tabs autoWidth  style="display: flex;align-items:right;justify-content:right;padding-top:1rem;">
                    <Tab label="Scores" />
                    <Tab label="Attachments" />
                    <Tab label="Notes" />
                    <svelte:fragment slot="content">
                      <TabContent>
                        <br>
                        <div class="row">
                        <div class="col-md-2">
                        <dl>
                            <dt style="font-size:0.7rem;color:gray;">Panel Member</dt>
                            <dd style="padding-bottom: 1rem;">Kane Linnett</dd>
                            <dt style="font-size:0.7rem;color:gray;">Grade</dt>
                            <dd style="padding-bottom: 1rem;">Grade 3</dd>
                          <dt style="font-size:0.7rem;color:gray;">Score</dt>
                            <dd style="padding-bottom: 1rem;">345</dd>
                          <dt style="font-size:0.7rem;color:gray;">Panel Date</dt>
                            <dd style="padding-bottom: 1rem;">01/05/2023</dd>

                      </dl>
</div>  
<div class="col-md-10">



<table>
    <thead>
        <th></th>
        <th class="score_head">
            <TooltipDefinition
  tooltipText="Supervision & Management"
>
  S&M
</TooltipDefinition>
        </th>
        <th class="score_head">
            DIS
        </th>
        <th class="score_head">
            C&I
        </th>
        <th class="score_head">
            C&R
        </th>
        <th class="score_head">
            DIP
        </th>
        <th class="score_head">
            CON
        </th>
        <th class="score_head">
            RES
        </th>
        <th class="score_head">
            WDS
        </th>
        <th class="score_head">
            PDS
        </th>
        <th class="score_head">
            WCS
        </th>
        <th class="score_head">
            WCX
        </th>
        <th class="score_head">
            K&S
        </th>
        <th class="score_head">
           TOT
        </th>
        <th class="score_head">
            GRA
         </th>
    </thead>

    <tbody>
        <tr>
            <td style="padding-right: 10px;">M Lewi...</td>
            <td> <Tag size="sm" type="green">4</Tag></td>
            <td> <Tag size="sm" type="green">4</Tag></td>
            <td> <Tag size="sm" type="green">4</Tag></td>
            <td> <Tag size="sm" type="green">4</Tag></td>
            <td> <Tag size="sm" type="green">4</Tag></td>
            <td> <Tag size="sm" type="green">4</Tag></td>
            <td> <Tag size="sm" type="green">4</Tag></td>
            <td> <Tag size="sm" type="green">4</Tag></td>
            <td> <Tag size="sm" type="green">4</Tag></td>
            <td> <Tag size="sm" type="green">4</Tag></td>
            <td> <Tag size="sm" type="green">4</Tag></td>
            <td> <Tag size="sm" type="green">4</Tag></td>
        </tr>

        <tr>
            <td style="padding-right: 10px;">A Vete</td>
            <td> <Tag size="sm" type="green">4</Tag></td>
            <td> <Tag size="sm" type="green">4</Tag></td>
            <td> <Tag size="sm" type="green">4</Tag></td>
            <td> <Tag size="sm" type="green">4</Tag></td>
            <td> <Tag size="sm" type="green">4</Tag></td>
            <td> <Tag size="sm" type="green">4</Tag></td>
            <td> <Tag size="sm" type="green">4</Tag></td>
            <td> <Tag size="sm" type="green">4</Tag></td>
            <td> <Tag size="sm" type="green">4</Tag></td>
            <td> <Tag size="sm" type="green">4</Tag></td>
            <td> <Tag size="sm" type="green">4</Tag></td>
            <td> <Tag size="sm" type="green">4</Tag></td>
        </tr>
        <tr>
            <td style="padding-right: 10px;">J Fred...</td>
            <td> <Tag size="sm" type="green">4</Tag></td>
            <td> <Tag size="sm" type="green">4</Tag></td>
            <td> <Tag size="sm" type="green">4</Tag></td>
            <td> <Tag size="sm" type="green">4</Tag></td>
            <td> <Tag size="sm" type="green">4</Tag></td>
            <td> <Tag size="sm" type="green">4</Tag></td>
            <td> <Tag size="sm" type="green">4</Tag></td>
            <td> <Tag size="sm" type="green">4</Tag></td>
            <td> <Tag size="sm" type="green">4</Tag></td>
            <td> <Tag size="sm" type="green">4</Tag></td>
            <td> <Tag size="sm" type="green">4</Tag></td>
            <td> <Tag size="sm" type="green">4</Tag></td>
        </tr>

        <tr>
            <td style="padding-right: 10px;">K Linn...</td>
            <td> <Tag size="sm" type="green">4</Tag></td>
            <td> <Tag size="sm" type="green">4</Tag></td>
            <td> <Tag size="sm" type="green">4</Tag></td>
            <td> <Tag size="sm" type="green">4</Tag></td>
            <td> <Tag size="sm" type="green">4</Tag></td>
            <td> <Tag size="sm" type="green">4</Tag></td>
            <td> <Tag size="sm" type="green">4</Tag></td>
            <td> <Tag size="sm" type="green">4</Tag></td>
            <td> <Tag size="sm" type="green">4</Tag></td>
            <td> <Tag size="sm" type="green">4</Tag></td>
            <td> <Tag size="sm" type="green">4</Tag></td>
            <td> <Tag size="sm" type="green">4</Tag></td>
        </tr>
    </tbody>
</table>


</div></div>





                      </TabContent>
                      <TabContent>boom</TabContent>
                      <TabContent>Content 3</TabContent>
                    </svelte:fragment>
                  </Tabs></Tile> 
                
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

    .score_head{
        padding:6px;
    }
</style>
