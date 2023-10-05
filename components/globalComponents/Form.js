import React from 'react';

const Form = () => {
    return (
        <div>
            <form className="row g-4 p-5">
                <div className="col-md-12">
                    <input type="text" className="form-control"  placeholder="Full Name" />
                </div>
                <div className="col-md-12">
                    <input type="email" className="form-control"  placeholder="Email" />
                </div>
                <div className="col-md-12">
                    <input type="text" className="form-control"  placeholder="Subject" />
                </div>
                <div className="col-12">
                    <input type="email" className="form-control" id="inputAddress" placeholder="Email Address" />
                </div>
                <div className="col-md-12">
                    <textarea className="textArea-control" placeholder="Details..." rows={4} ></textarea>
                </div>
                <div className="col-12 text-center">
                    <button type="submit" className="buttonStyle">Send</button>
                </div>
            </form>
        </div>
    );
};

export default Form;