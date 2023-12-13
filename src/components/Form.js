import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

export default function Form({ onAddItems }) {
	const [quantity, setQuantity] = useState(1)
	const [description, setDescription] = useState('')

	function handleSubmit(e) {
		e.preventDefault()

		if (!description) return

		const newItem = {
			id: uuidv4(),
			quantity,
			description,
			packed: false,
		}

		onAddItems(newItem)
		setDescription('')
		setQuantity(1)
	}

	return (
		<article className='form'>
				<form
					className='add-form'
					onSubmit={handleSubmit}>
					<h3>What do you need for your 😍 trip?</h3>
					<select
						value={quantity}
						onChange={e => setQuantity(e.target.value)}>
						{Array.from({ length: 20 }, (_, i) => i + 1).map(num => (
							<option
								key={num}
								value={num}>
								{num}
							</option>
						))}
					</select>
					<input
						value={description}
						onChange={e => setDescription(e.target.value)}
						type='text'
						placeholder='Item...'
					/>
					<button>Add</button>
				</form>
		</article>
	)
}
