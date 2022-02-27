const globalComponents = { 
	'pane': require('components/~Global/Pane/Pane').default,
	'pane-header': require('components/~Global/Pane/PaneHeader').default,
	'pane-body': require('components/~Global/Pane/PaneBody').default,
	'pane-footer': require('components/~Global/Pane/PaneFooter').default,
};

export default async ({ app }) => {
	Object.entries(globalComponents).forEach(([name, component]) => {
		app.component(name, component);
	})
};