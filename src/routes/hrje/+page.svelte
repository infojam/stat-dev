<script>
// @ts-nocheck

    import { Accordion, AccordionItem, ComboBox, TextArea,Tile,Button, Link,Select, SelectItem  } from 'carbon-components-svelte';
    import { sections } from './data.js'
    import { Tag } from "carbon-components-svelte";
    import ArrowRight from "carbon-icons-svelte/lib/ArrowRight.svelte";
    import { fade } from 'svelte/transition';
    let qq;
    let currentScore = 0;
    
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
    }
    
        async function doPost(n) {
            //n.loading = false;
    
            
            var raw = "{\"data\":"+JSON.stringify(n) +"}";
    
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
                .then(response => response.text())
                .then(function(result) {console.log(result)})
                .catch(error => console.log('error', error));
        }
    
    
    async function persisit() {
        console.log('SAVE',sections);
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
        console.log(e);
console.log(selected);
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
function openNext(current_index)
{
    //Close all items
    for (let index = 0; index < sections.length; index++) {
        const element = sections[index].open = false;	
    }
    //Open next items
    sections[current_index+1].open = true;
}
    </script>
    <Button on:click={() => persisit()}>Save </Button>
    <strong>{currentScore}</strong>
    
    <Accordion>
        {#each sections as section,i}
        <AccordionItem open={section.open} >
            <svelte:fragment slot="title">
                <span style="display: flex;justify-content: space-between;">    
                 {#if section.section_value === ""}
                <span><Tag  size="sm" type="cool-gray" style="margin-right: 1rem;">{section.section_value}</Tag>{section.title}</span>
                  {:else}
    <span><Tag size="sm" type="green" style="margin-right: 1rem;">{section.section_value}</Tag>{section.title}</span>
                   {/if}
                </span>
        </svelte:fragment>
    
        {#each section.questions as q}
        <div class="row">	
            <div class="col-md-12">
                <!-- <Select labelText="Score" on:change={(e) => scoreChange(e.detail,section.id,e)} > -->
                    <Select labelText="Score" bind:value={qq} on:change={(e) => scoreChange(e)} >
                <SelectItem value="0" text="0"/>
                    {#each q.options as option}
                    <SelectItem value="{option.value}" text="{option.text}"/>
                    {/each}
                </Select>
                <br>
                <TextArea labelText="Description" value="{section.detail_text}"/> 
                <div style="display: flex;align-items:right;justify-content:right;padding-top:1rem;"><Button icon={ArrowRight} on:click={() => openNext(i)}>Next </Button></div>
            </div>
        </div>  
        {/each}
        </AccordionItem>
        {/each}
    </Accordion>