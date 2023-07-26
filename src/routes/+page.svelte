<script>
// White theme
import {
		Accordion,
		AccordionItem,
		ComboBox,
		TextArea,
		Tile,
        Form,
		Button,
		Link,
		Select,
		SelectItem,
        TextInput
	} from 'carbon-components-svelte';
import "carbon-components-svelte/css/white.css";
import ArrowRight from 'carbon-icons-svelte/lib/ArrowRight.svelte';


function login(){
if(invite_code == "je729"){
    window.location.href = '/hrje';
} 
else if(invite_code == "fl281")
{
    window.location.href = '/yfl';
}
else{
alert('Not a valid STAT invite code');
}

    
}

let invite_code = "";

</script>

<style>
    .center {

  margin: auto;
  width: 20%;
  padding: 10px;


}
</style>
<br><br><br>

<div class="center">
    MY <strong>STAT</strong>
</div>

<div class="center">
<Tile>
    <Form  on:submit={(e) => {
        e.preventDefault();
        login();
      }}>
    <TextInput light placeholder="Enter invite code." bind:value={invite_code}/>

    <div style="display: flex;align-items:right;justify-content:right;padding-top:1rem;">
        <Button icon={ArrowRight} on:click={() => login()} >LOGIN</Button>
    </div>
</Form>
</Tile>
</div>
