<script>
// @ts-nocheck

	import { Breadcrumb, BreadcrumbItem } from 'carbon-components-svelte';

	let name = 'Tree Officer';
	let category = 'Legal Services';
	let sub_category = 'Finance';

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
	<span style="font-weight: 300;">(4572)</span>
	<span style="font-weight: 300;">{firstWord(name)}</span>
	<span>{subsequentWord(name)}</span>

</p>

<Breadcrumb noTrailingSlash>
	<BreadcrumbItem>{category}</BreadcrumbItem>
	<BreadcrumbItem>{sub_category}</BreadcrumbItem>
</Breadcrumb>
