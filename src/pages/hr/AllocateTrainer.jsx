import { useState } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';

const AllocateTrainer = () => {
  const [form, setForm] = useState({
    tmId: '',
    areaOfWork: '',
    cohortCode: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      id: form.tmId,
      areaWork: form.areaOfWork,
      cohortCode: form.cohortCode
    };

    try {
      const response = await fetch('http://localhost:8081/allocate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      if (response.ok) {
        alert(`Trainer ${form.tmId} (${form.areaOfWork}) allocated to ${form.cohortCode}`);
        setForm({ tmId: '', areaOfWork: '', cohortCode: '' });
      } else {
        alert('Failed to allocate trainer');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while allocating the trainer');
    }
  };

  return (
    <div className="card border-0 shadow-lg rounded-4">
      <div className="card-header bg-white border-bottom d-flex justify-content-between align-items-center">
        <h5 className="mb-0 text-primary">
          <i className="bi bi-link-45deg me-2"></i>Allocate Trainer to Cohort
        </h5>
        <span className="badge bg-info-subtle text-dark">HR Admin</span>
      </div>

      <div className="card-body px-4 py-5">
        <form onSubmit={handleSubmit} className="row g-4">
          <div className="col-md-4">
            <label className="form-label" style={{ fontSize: '0.85rem' }}>Trainer ID</label>
            <div className="input-group">
              <span className="input-group-text"><i className="bi bi-person-badge-fill"></i></span>
              <input
                type="text"
                name="tmId"
                className="form-control form-control-lg"
                value={form.tmId}
                onChange={handleChange}
                required
                style={{ fontSize: '0.9rem' }}
                placeholder="Trainer ID"
              />
            </div>
          </div>

          <div className="col-md-4">
            <label className="form-label" style={{ fontSize: '0.85rem' }}>Area of Work</label>
            <div className="input-group">
              <span className="input-group-text"><i className="bi bi-tools"></i></span>
              <input
                type="text"
                name="areaOfWork"
                className="form-control form-control-lg"
                value={form.areaOfWork}
                onChange={handleChange}
                required
                style={{ fontSize: '0.9rem' }}
                placeholder="e.g. Java, Python, DevOps"
              />
            </div>
          </div>

          <div className="col-md-4">
            <label className="form-label" style={{ fontSize: '0.85rem' }}>Cohort Code</label>
            <div className="input-group">
              <span className="input-group-text"><i className="bi bi-code-slash"></i></span>
              <input
                type="text"
                name="cohortCode"
                className="form-control form-control-lg"
                value={form.cohortCode}
                onChange={handleChange}
                required
                style={{ fontSize: '0.9rem' }}
                placeholder="Cohort Code"
              />
            </div>
          </div>

          <div className="col-12 mt-4">
            <button type="submit" className="btn btn-success btn-lg w-100 shadow">
              <i className="bi bi-check2-circle me-2"></i>Allocate Trainer
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AllocateTrainer;
