import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createDoctorProfile } from '../../../features/doctorProfileSlice';

const CreateDoctorProfile = () => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.auth.user);

    const [formData, setFormData] = useState({
        userId: user?.userId, // Correct syntax
        name: '',
        phoneNumber: '',
        address: '',
        specialization: '',
        education: '',
        licenseNumber: '',
    });
    
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
            // Dispatch the createDoctorProfile action and wait for the result
            await dispatch(createDoctorProfile(formData));
            
            // If successful, you can navigate to another page or show a success message
            console.log('Doctor profile created successfully!');
        } catch (error) {
            // If there's an error, you can handle it here (e.g., display an error message)
            console.error('Error creating doctor profile:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input type="text" name="name" value={formData.name} onChange={handleChange} />
            </label>

            <label>
                Phone Number:
                <input type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} />
            </label>

            <label>
                Address:
                <textarea name="address" value={formData.address} onChange={handleChange}></textarea>
            </label>

            <label>
                Specialization:
                <input type="text" name="specialization" value={formData.specialization} onChange={handleChange} />
            </label>

            <label>
                Education:
                <input type="text" name="education" value={formData.education} onChange={handleChange} />
            </label>

            <label>
                License Number:
                <input type="text" name="licenseNumber" value={formData.licenseNumber} onChange={handleChange} />
            </label>

            <button type="submit">Create Doctor Profile</button>
        </form>
    );
};

export default CreateDoctorProfile;