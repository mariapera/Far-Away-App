import { useState } from 'react'
import Item from './Item'
import { v4 as uuidv4 } from 'uuid'

export default function PackingList({ items, onToggleItem, onDeleteItem, onClearList }) {
	const [sortBy, setSortBy] = useState('input')

	let sortedItems

	if (sortBy === 'input') {
		sortedItems = items
	}

	if (sortBy === 'description') {
		sortedItems = items
			.slice()
			.sort((a, b) => a.description.toLowerCase().localeCompare(b.description.toLowerCase()))
	}

	if (sortBy === 'packed') {
		sortedItems = items.slice().sort((a, b) => Number(a.packed) - Number(b.packed))
	}

	return (
		<article className='packing-list'>
			<div className='list'>
				<ul>
					{sortedItems.map(item => (
						<Item
							item={item}
							onToggleItem={onToggleItem}
							onDeleteItem={onDeleteItem}
							key={uuidv4()}
						/>
					))}
				</ul>
			</div>
			<div className='actions'>
				<select
					value={sortBy}
					onChange={e => setSortBy(e.target.value)}>
					<option value='input'>Sort by input order</option>
					<option value='description'>Sort by description</option>
					<option value='packed'>Sort by packed status</option>
				</select>
				<button onClick={onClearList}>Clear list</button>
			</div>
		</article>
	)
}
