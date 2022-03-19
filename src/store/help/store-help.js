import { reactive } from '@vue/reactivity';

const state = reactive({
	showPaneAskAQuestion: false,
	showAnswer: false,

	askAQuestion: {
		type: 'field-input',
		description: `Enter a question, such as 'How do I delete a budget?' or just enter some words, such as 'rename budget'.`,
		placeholder: 'E.g. How do I delete a budget?',
		iconLeft: 'fas fa-question',
		value: null,
		change(value) {
			console.log('"Ask a Question" set to: ', value);
		}
	},

	searchResults: [
		'How do I delete a budget?',
		'How do I rename a budget?'
	],
	questions: [
		'How do I share my budget with a loved one so they can edit them too?',
		'How do I share my data across different device?',
		'Can I share my data across other platforms (mobile and desktop)?',
		'How do I repeat regular expenses or income items from month to month?',
		'I bought the Pro Upgrade on one device. Do I need to buy it again on my other devices?',
		'I got a new device. How do I restore my Pro Upgrade?',
		`I starred some items, but they're not being added to my other months/budget?`,
		'How do I delete a budget?',
		'How do I rename a budget?',
		'How do I print a budget?',
		`I paid for the Pro Upgrade, but I'm still seeing ads?`,
		'How do I get a refund?'
	]
});