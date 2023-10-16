<script>
// @ts-nocheck

	import { Breadcrumb, BreadcrumbItem } from 'carbon-components-svelte';

	export let name = 'Tree Officer';
	export let category = 'Legal Services';
	export let sub_category = 'Finance';
	export let job_id = '4572';
	function firstWord(word) {
		let _name = word.split(' ');
		return _name[0];
	}

	/**
	 * @param {string} word
	 */
	function subsequentWord(word) {
		let _n = word.split(' ');
		let n = '';
		for (let i = 0; i < _n.length; i++) {
			const element = _n[i];
			if (i != 0) {
				n += ' ' + element;
			}
		}
		return n;
	}
</script>

<p style="font-size: 32px;">
	<span style="font-weight: 300;">({job_id})</span>
	<span style="font-weight: 300;">{firstWord(name)}</span>
	<span>{subsequentWord(name)}</span>

</p>

<Breadcrumb noTrailingSlash>
	<BreadcrumbItem>{category}</BreadcrumbItem>
	<BreadcrumbItem>{sub_category}</BreadcrumbItem>
</Breadcrumb>
