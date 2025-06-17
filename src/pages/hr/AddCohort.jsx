import { useState } from 'react';
 
const AddCohort = () => {
  const [formData, setForm] = useState({
    cohortCode: '',
    bussinessType: '',
    gencCount: '',
    location: '',
    hr_id: ''
  });
 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };
 
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8081/add-cohort', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        console.log('Cohort added:', formData);
        alert('Cohort added successfully!');
        // Optionally, reset the form
        setForm({
          cohortCode: '',
          bussinessType: '',
          gencCount: '',
          location: '',
          hr_id: ''
        });
      } else {
        alert('Failed to add cohort');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while adding the cohort');
    }
  };
 
  return (
    <div className="container">
      <h4 className="mb-4 text-primary">Add New Cohort</h4>
 
      <form onSubmit={handleSubmit} className="row g-3">
        <div className="col-md-6">
          <label className="form-label">Cohort Code</label>
          <input
            type="text"
            name="cohortCode"
            className="form-control"
            value={formData.cohortCode}
            onChange={handleChange}
            required
          />
        </div>
 
        <div className="col-md-6">
          <label className="form-label">Business Type:</label>
          <input
            type="text"
            name="bussinessType"
            value={formData.bussinessType}
            onChange={handleChange}
            required
          />
        </div>
 
        <div className="col-md-6">
          <label className="form-label">Genc Count:</label>
          <input
            type="number"
            name="gencCount"
            value={formData.gencCount}
            onChange={handleChange}
            required
          />
        </div>
 
        <div className="col-md-6">
          <label className="form-label">Location:</label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
          />
        </div>
 
        <div className="col-md-6">
          <label className="form-label">HR ID:</label>
          <input
            type="text"
            name="hr_id"
            value={formData.hr_id}
            onChange={handleChange}
          />
        </div>
 
        <div className="col-12">
          <button type="submit" className="btn btn-success">Add Cohort</button>
        </div>
      </form>
    </div>
  );
};
 
export default AddCohort;
 
 