export default function Footer({ items }) {
	if (!items.length) {
		return (
			<footer className='stats'>
				<em>Start adding some items to your packing list 🚀</em>
			</footer>
		)
	}
	const numItems = items.length
	const itemsPacked = items.filter(item => item.packed).length
	const percentage = Math.round((itemsPacked / numItems) * 100)
	return (
		<footer className='stats'>
			{percentage !== 100 ? (
				<em>
					💼 You have {numItems} items on your list, and you already packed{' '}
					{itemsPacked} ({percentage}%)
				</em>
			) : (
				<em>"You got everything! Ready to go ✈️"</em>
			)}
		</footer>
	)
}
