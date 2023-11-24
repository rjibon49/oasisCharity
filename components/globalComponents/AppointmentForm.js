
const AppointmentForm = () => {
    return (
        <form className="row g-5 formWidth">
            <div className="col-md-6">
                <input type="text" className="form-control" id="inputEmail4" placeholder="First Name" />
            </div>
            <div className="col-md-6">
                <input type="text" className="form-control" id="inputPassword4" placeholder="Last Name" />
            </div>
            <div className="col-12">
                <input type="email" className="form-control" id="inputAddress" placeholder="Email Address" />
            </div>
            <div className="col-md-6">
                <select id="inputState" className="form-select">
                    <option selected>Select Doctor</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                </select>
            </div>
            <div className="col-md-6">
                <input type="date" className="form-control" id="inputZip" placeholder="Date" />
            </div>
            <div className="col-12 text-center">
                <button type="submit" className="buttonStyle">Schedule An Appointment</button>
            </div>
        </form>
    );
};

export default AppointmentForm;