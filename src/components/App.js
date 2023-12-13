import { useState } from 'react'
import Logo from './Logo'
import Form from './Form'
import PackingList from './PackingList'
import Footer from './Footer'

function App() {
	const [items, setItems] = useState([])

	function handleAddItem(item) {
		setItems(items => [...items, item])
	}

	function handleDeleteItem(id) {
		setItems(items => items.filter(item => item.id !== id))
	}

	function handleToggleItem(id) {
		setItems(items =>
			items.map(item =>
				item.id === id ? { ...item, packed: !item.packed } : item
			)
		)
	}

	function handleClearList() {
		setItems([])
	}
	
	return (
		<div className='app'>
			<Logo />
			<Form onAddItems={handleAddItem} />
			<PackingList
				items={items}
				onToggleItem={handleToggleItem}
				onDeleteItem={handleDeleteItem}
				onClearList={handleClearList}
			/>
			<Footer items={items} />
		</div>
	)
}

export default App

