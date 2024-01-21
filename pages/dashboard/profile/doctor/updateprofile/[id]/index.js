import Head from "next/head";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SidebarLayout from "../../../../../../components/SidebarLayout";
import { ToastContainer, toast } from "react-toastify";
import { updateDoctorProfile, viewDoctorProfile } from "../../../../../../features/doctorProfileSlice";
import { useRouter } from 'next/router';

const Index = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const doctorProfile = useSelector((state) => state.doctorProfile.doctorProfile);

  const router = useRouter();
  const { id } = router.query;

  const [formData, setFormData] = useState({
    userId: user?.userId,
    name: "",
    phoneNumber: "",
    address: "",
    specialization: "",
    education: "",
    licenseNumber: "",
  });

  useEffect(() => {
    // Fetch doctor profile data when the component mounts
    dispatch(viewDoctorProfile(user?.userId));
  }, [dispatch, user]);

  useEffect(() => {
    // Update the form data when the doctor profile data changes
    if (doctorProfile) {
        setFormData({
            userId: doctorProfile.userId,
            name: doctorProfile.name || "",
            phoneNumber: doctorProfile.phoneNumber || "",
            address: doctorProfile.address || "",
            specialization: doctorProfile.specialization || "",
            education: doctorProfile.education || "",
            licenseNumber: doctorProfile.licenseNumber || "",
          });
    }
  }, [doctorProfile]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Dispatch the updateDoctorProfile action and wait for the result
      await dispatch(updateDoctorProfile(formData));

      // If successful, you can navigate to another page or show a success message
      console.log("Doctor profile updated successfully!");

      // Show success toast
      toast.success("Doctor profile updated successfully!");
    } catch (error) {
      // If there's an error, you can handle it here (e.g., display an error message)
      console.error("Error updating doctor profile:", error);

      // Show error toast
      toast.error("Error updating doctor profile");
    }
  };

  return (
    <>
      <Head>
        <title>Update Doctor Profile</title>
        <meta name="description" content="Create/Update Doctor Profile" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div>
        <SidebarLayout>
          <div>
            <form onSubmit={handleSubmit}>
              <div className="col-md-12 position-relative mb-3">
                <label htmlFor="name" className='text24 mb-2'>Name</label>
                <input type="text" className="form-control" id='name' placeholder="Full Name" name="name" value={formData.name} onChange={handleChange} />
              </div>
              <div className="col-md-12 position-relative mb-3">
                <label htmlFor="phone" className='text24 mb-2'>Phone Number</label>
                <input type="number" className="form-control" id='phone' placeholder="Phone Number" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} />
              </div>
              <div className="col-md-12 position-relative mb-3">
                <label htmlFor="address" className='text24 mb-2'>Address</label>
                <input type="text" className="form-control" id='address' placeholder="Full Address" name="address" value={formData.address} onChange={handleChange} />
              </div>
              <div className="col-md-12 position-relative mb-3">
                <label htmlFor="specialization" className='text24 mb-2'>Specialization</label>
                <input type="text" className="form-control" id='specialization' placeholder="Specialization" name="specialization" value={formData.specialization} onChange={handleChange} />
              </div>
              <div className="col-md-12 position-relative mb-3">
                <label htmlFor="education" className='text24 mb-2'>Education</label>
                <input type="text" className="form-control" id='education' placeholder="Education" name="education" value={formData.education} onChange={handleChange}/>
              </div>
              <div className="col-md-12 position-relative mb-3">
                <label htmlFor="licence" className='text24 mb-2'>License Number</label>
                <input type="text" className="form-control" id='licence' placeholder="License Number" name="licenseNumber" value={formData.licenseNumber} onChange={handleChange}/>
              </div>
              <div className="col-12 text-center">
                <button type="submit" className="loginButton">Update Doctor Profile</button>
              </div>
            </form>
          </div>
        </SidebarLayout>
      </div>
      <ToastContainer />
    </>
  );
};

export default Index;
