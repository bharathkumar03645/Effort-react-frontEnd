import { useState } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';

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
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        alert('Cohort added successfully!');
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
    <div className="card border-0 shadow-lg rounded-4">
      <div className="card-header bg-white border-bottom d-flex justify-content-between align-items-center">
        <h5 className="mb-0 text-primary">
          <i className="bi bi-journal-plus me-2"></i>Add New Cohort
        </h5>
        <span className="badge bg-secondary-subtle text-dark">HR Admin</span>
      </div>

      <div className="card-body px-4 py-5">
        <form onSubmit={handleSubmit} className="row g-4">
          <div className="col-md-6">
            <label className="form-label" style={{ fontSize: '0.85rem' }}>Cohort Code</label>
            <div className="input-group">
              <span className="input-group-text"><i className="bi bi-code-slash"></i></span>
              <input
                type="text"
                name="cohortCode"
                className="form-control form-control-lg"
                value={formData.cohortCode}
                onChange={handleChange}
                required
                placeholder="e.g. GEN-COH-01"
                style={{ fontSize: '0.9rem' }}
              />
            </div>
          </div>

          <div className="col-md-6">
            <label className="form-label" style={{ fontSize: '0.85rem' }}>Business Type</label>
            <div className="input-group">
              <span className="input-group-text"><i className="bi bi-briefcase-fill"></i></span>
              <input
                type="text"
                name="bussinessType"
                className="form-control form-control-lg"
                value={formData.bussinessType}
                onChange={handleChange}
                required
                placeholder="e.g. BFSI, Retail"
                style={{ fontSize: '0.9rem' }}
              />
            </div>
          </div>

          <div className="col-md-6">
            <label className="form-label" style={{ fontSize: '0.85rem' }}>Genc Count</label>
            <div className="input-group">
              <span className="input-group-text"><i className="bi bi-people-fill"></i></span>
              <input
                type="number"
                name="gencCount"
                className="form-control form-control-lg"
                value={formData.gencCount}
                onChange={handleChange}
                required
                placeholder="e.g. 50"
                style={{ fontSize: '0.9rem' }}
              />
            </div>
          </div>

          <div className="col-md-6">
            <label className="form-label" style={{ fontSize: '0.85rem' }}>Location</label>
            <div className="input-group">
              <span className="input-group-text"><i className="bi bi-geo-alt-fill"></i></span>
              <input
                type="text"
                name="location"
                className="form-control form-control-lg"
                value={formData.location}
                onChange={handleChange}
                placeholder="e.g. Chennai"
                style={{ fontSize: '0.9rem' }}
              />
            </div>
          </div>

          <div className="col-md-6">
            <label className="form-label" style={{ fontSize: '0.85rem' }}>HR ID</label>
            <div className="input-group">
              <span className="input-group-text"><i className="bi bi-person-badge-fill"></i></span>
              <input
                type="text"
                name="hr_id"
                className="form-control form-control-lg"
                value={formData.hr_id}
                onChange={handleChange}
                placeholder="e.g. HR123"
                style={{ fontSize: '0.9rem' }}
              />
            </div>
          </div>

          <div className="col-12 mt-4">
            <button type="submit" className="btn btn-success btn-lg w-100 shadow">
              <i className="bi bi-check-circle-fill me-2"></i>Add Cohort
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCohort;
