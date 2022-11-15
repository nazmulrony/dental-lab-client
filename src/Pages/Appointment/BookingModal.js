import { format } from 'date-fns';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../contexts/AuthProvider';

const BookingModal = ({ treatment, selectedDate, setTreatment }) => {
	const { user } = useContext(AuthContext)
	const { name, slots } = treatment;
	const date = format(selectedDate, 'PP');

	const handleSubmit = event => {
		event.preventDefault();
		const form = event.target;
		const patientName = form.name.value;
		const slot = form.slot.value;
		const email = form.email.value;
		const phone = form.phone.value;
		const booking = {
			appointmentDate: date,
			treatment: name,
			patientName,
			slot,
			email,
			phone,
		}
		fetch('http://localhost:5000/bookings', {
			method: 'POST',
			headers: {
				'content-type': 'application/json'
			},
			body: JSON.stringify(booking)
		})
			.then(res => res.json())
			.then(data => {
				if (data.acknowledged) {
					setTreatment(null)
					toast.success('Booking confirmed');
				}
			})
	}

	return (
		<div>
			<input type="checkbox" id="appointment-modal" className="modal-toggle " />
			<div className="modal">
				<div className="modal-box relative">
					<label htmlFor="appointment-modal" className="btn btn-sm btn-brand btn-circle absolute right-2 top-2">✕</label>
					<h3 className="text-xl font-bold mb-3 text-ruby ">{name}</h3>
					<form onSubmit={handleSubmit} className='grid gap-4'>
						<input type="text" disabled value={date} className="input input-bordered w-full" />
						<select className="select select-bordered w-full" name='slot'>
							{
								slots.map((slot, index) => <option key={index} value={slot}>{slot}</option>)
							}
						</select>
						<input name='name' type="text" defaultValue={user?.displayName} placeholder="Full Name" className="input input-bordered w-full" />
						<input name='phone' type="text" placeholder="Phone Number" className="input input-bordered w-full" />
						<input name='email' type="email" defaultValue={user?.email} placeholder="Email" className="input input-bordered w-full" />
						<input type="submit" placeholder="Type here" className="btn btn-brand rounded-none btn-sm" />
					</form>
				</div>
			</div>
		</div>
	);
};

export default BookingModal;