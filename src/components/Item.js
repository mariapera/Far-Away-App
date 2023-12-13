export default function Item({ item, onToggleItem, onDeleteItem }) {
	return (
		<li>
			<input type="checkbox" value={item.packed} checked = {item.packed && 'checked'} onChange={() => onToggleItem(item.id)}/>
			<span style={item.packed ? { textDecoration: 'line-through' } : {}}>
				{item.quantity} {item.description}
			</span>
			<button onClick={() => onDeleteItem(item.id)}>❌</button>
		</li>
	)
}
