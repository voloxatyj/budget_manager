import { Dialog } from 'quasar'
const merge = require('deepmerge')

export function useDialogConfirm(customOptions) {

	// default dialog options
	let defaultOptions = {
		html: true,
		class: 'bg-backdrop',
		ok: {
			color: 'secondary',
			class: 'text-size-16',
			noCaps: true,
			unelevated: true
		},
		cancel: {
			label: 'Cancel',
			color: 'medium',
			class: 'text-size-16',
			noCaps: true,
			unelevated: true
		},
		persistent: true
	}

	customOptions.title = `<div class="text-size-21 text-dark text-weight-regular text-condensed">${customOptions.title}</div>`
	customOptions.message = `<div class="text-size-16 text-dark">${customOptions.message}</div>`

	let mergedOptions = merge(defaultOptions, customOptions)

	return Dialog.create(mergedOptions)
}