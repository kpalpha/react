import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const nativePlaces = ['Kurnool', 'Guntur', 'Hyderabad'];
const areasOfInterest = ['Technology', 'Science', 'Arts'];

function AddUser() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    mobileNumber: '',
    enrolmentDate: '',
    nativePlace: '',
    areasOfInterest: [],
    gender: ''
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFormData((prev) => ({
        ...prev,
        areasOfInterest: checked
          ? [...prev.areasOfInterest, value]
          : prev.areasOfInterest.filter((item) => item !== value)
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.firstName) newErrors.firstName = 'First name is required';
    if (!formData.lastName) newErrors.lastName = 'Last name is required';
    if (!/^\d{10}$/.test(formData.mobileNumber)) newErrors.mobileNumber = 'Mobile number must be 10 digits';
    if (!formData.enrolmentDate) newErrors.enrolmentDate = 'Enrolment date is required';
    if (!formData.nativePlace) newErrors.nativePlace = 'Native place is required';
    if (formData.areasOfInterest.length === 0) newErrors.areasOfInterest = 'At least one area of interest is required';
    if (!formData.gender) newErrors.gender = 'Gender is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      sessionStorage.setItem('userData', JSON.stringify(formData));
      navigate('/user-data');
    }
  };

  return (
    <div className="container mt-4">
      <h2>Add User</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">First Name</label>
          <input
            type="text"
            name="firstName"
            className={`form-control ${errors.firstName ? 'is-invalid' : ''}`}
            value={formData.firstName}
            onChange={handleChange}
          />
          {errors.firstName && <div className="invalid-feedback">{errors.firstName}</div>}
        </div>
        <div className="mb-3">
          <label className="form-label">Last Name</label>
          <input
            type="text"
            name="lastName"
            className={`form-control ${errors.lastName ? 'is-invalid' : ''}`}
            value={formData.lastName}
            onChange={handleChange}
          />
          {errors.lastName && <div className="invalid-feedback">{errors.lastName}</div>}
        </div>
        <div className="mb-3">
          <label className="form-label">Mobile Number</label>
          <input
            type="text"
            name="mobileNumber"
            className={`form-control ${errors.mobileNumber ? 'is-invalid' : ''}`}
            value={formData.mobileNumber}
            onChange={handleChange}
          />
          {errors.mobileNumber && <div className="invalid-feedback">{errors.mobileNumber}</div>}
        </div>
        <div className="mb-3">
          <label className="form-label">Enrolment Date</label>
          <input
            type="date"
            name="enrolmentDate"
            className={`form-control ${errors.enrolmentDate ? 'is-invalid' : ''}`}
            value={formData.enrolmentDate}
            onChange={handleChange}
          />
          {errors.enrolmentDate && <div className="invalid-feedback">{errors.enrolmentDate}</div>}
        </div>
        <div className="mb-3">
          <label className="form-label">Native Place</label>
          <select
            name="nativePlace"
            className={`form-select ${errors.nativePlace ? 'is-invalid' : ''}`}
            value={formData.nativePlace}
            onChange={handleChange}
          >
            <option value="">Select</option>
            {nativePlaces.map((place, index) => (
              <option key={index} value={place}>{place}</option>
            ))}
          </select>
          {errors.nativePlace && <div className="invalid-feedback">{errors.nativePlace}</div>}
        </div>
        <fieldset className="mb-3">
          <legend className="form-label">Areas of Interest</legend>
          {areasOfInterest.map((area, index) => (
            <div className="form-check" key={index}>
              <input
                type="checkbox"
                name="areasOfInterest"
                className="form-check-input"
                value={area}
                checked={formData.areasOfInterest.includes(area)}
                onChange={handleChange}
              />
              <label className="form-check-label">{area}</label>
            </div>
          ))}
          {errors.areasOfInterest && <div className="text-danger">{errors.areasOfInterest}</div>}
        </fieldset>
        <fieldset className="mb-3">
          <legend className="form-label">Gender</legend>
          <div className="form-check">
            <input
              type="radio"
              name="gender"
              className="form-check-input"
              value="Male"
              checked={formData.gender === 'Male'}
              onChange={handleChange}
            />
            <label className="form-check-label">Male</label>
          </div>
          <div className="form-check">
            <input
              type="radio"
              name="gender"
              className="form-check-input"
              value="Female"
              checked={formData.gender === 'Female'}
              onChange={handleChange}
            />
            <label className="form-check-label">Female</label>
          </div>
          {errors.gender && <div className="text-danger">{errors.gender}</div>}
        </fieldset>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}

export default AddUser;
