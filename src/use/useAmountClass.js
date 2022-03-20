export function useAmountClass(amount, options) {
	let boldClass = ''
	if (options?.bold) {
		boldClass = 'text-bold'
	}

	let colorClass
	if (amount > 0) colorClass = `text-positive ${boldClass}`
	else if (amount < 0) colorClass = `text-negative ${boldClass}`
	else colorClass = 'text-medium'

	return colorClass
}