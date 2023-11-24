import Link from "next/link";
import one from "../../public/images/content/1.png";
import two from "../../public/images/content/2.png"
import three from "../../public/images/content/3.png"
import Image from "next/image";

 
const WorkProcess = () => {
    return (
        <div className="my-5 py-5 secondColorBg">
            <div className="container py-5">
                <div className="text-center py-5">
                    <h5 className="colorFont">Working Process</h5>
                    <h2 className="text40">How we works?</h2>
                </div>
                <div className='d-flex justify-content-around flex-wrap gap-5'>
                    <div className="workProcess itemCenter">
                        <div className="workBox"> 
                            <Image src={one} alt="One Icon" className="" />
                            <h5 className="text24 my-3">Enroll</h5>
                            <p className="text18">To use our services, registration is required with basic information.</p>
                        </div>
                    </div>
                    <div className="workProcess itemCenter">
                        <div className="workBox">
                            <Image src={two} alt="Two Icon" className="" />
                            <h5 className="text24 my-3">Schedule an Appointment</h5>
                            <p className="text18">We make time with your availability.</p>
                        </div>
                    </div>
                    <div className="workProcess itemCenter">
                        <div className="workBox">
                            <Image src={three} alt="three Icon" className="" />
                            <h5 className="text24 my-3">Health Plan</h5>
                            <p className="text18">Action to Take to improve your health after meeting with your doctor.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WorkProcess;