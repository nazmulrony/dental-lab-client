import React from 'react';

const AppointmentOption = ({ appointmentOption, setTreatment }) => {
    const { name, slots } = appointmentOption;

    return (
        <div className="card w-full bg-light shadow-xl">
            <div className="card-body text-center">
                <h2 className="text-xl font-semibold text-ruby">{name}</h2>
                <p>{slots.length > 0 ? slots[0] : 'No slots available'}</p>
                <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} available</p>
                <div className="card-actions justify-end mx-auto">
                    <label
                        disabled={slots.length === 0}
                        onClick={() => setTreatment(appointmentOption)}
                        htmlFor="appointment-modal"
                        className="btn btn-brand rounded-none px-6 btn-sm "
                    >Book Appointment</label>
                </div>
            </div>
        </div>
    );
};

export default AppointmentOption;