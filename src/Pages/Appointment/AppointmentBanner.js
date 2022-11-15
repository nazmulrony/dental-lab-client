import bgChair from '../../assets/images/bg.png';
import chair from '../../assets/images/chair.png';
import { DayPicker } from 'react-day-picker';

const AppointmentBanner = ({ selectedDate, setSelectedDate }) => {
    //style for the react day picker
    const css = `
    .my-selected:not([disabled]) { 
        color: white;
        background-color: #E12454;
    }
    .my-selected:hover:not([disabled]) { 
        color: white;
        background-color: #E12454 !important;
    }
    .my-today {       
        color: #E12454;
    }
    `;
    return (
        <div className="hero  lg:px-20 " style={{ backgroundImage: `url(${bgChair})` }}>
            <div className="hero-content flex-col lg:flex-row-reverse gap-10">
                <img src={chair} alt='' className="max-w-lg w-full rounded-lg shadow-2xl" />
                <div>
                    <style>{css}</style>
                    <DayPicker
                        mode='single'
                        selected={selectedDate}
                        onSelect={setSelectedDate}
                        modifiersClassNames={{
                            selected: 'my-selected',
                            today: 'my-today'
                        }}
                        className='bg-light shadow-lg shadow-black/10 p-6 rounded-lg'
                    />

                </div>
            </div>
        </div>
    );
};

export default AppointmentBanner;