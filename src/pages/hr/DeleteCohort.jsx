import { useState } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';

const DeleteCohort = () => {
  const [cohortCode, setCohortCode] = useState('');
  const primaryColor = '#000048';
  const hoverColor = '#1a1a80';

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!cohortCode.trim()) return alert('Cohort Code is required');

    try {
      const response = await fetch(`http://localhost:8081/delete-cohort/${cohortCode}`, {
        method: 'DELETE'
      });

      if (response.ok) {
        const contentType = response.headers.get('Content-Type');
        let message;
        if (contentType && contentType.includes('application/json')) {
          const data = await response.json();
          message = `${JSON.stringify(data)}`;
        } else {
          const text = await response.text();
          message = `${text}`;
        }
        alert(message);
        setCohortCode('');
      } else {
        alert('Failed to delete cohort');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while deleting the cohort');
    }
  };

  return (
    <div className="card border-0 shadow-lg rounded-4">
      <div
        className="card-header bg-white border-bottom d-flex justify-content-between align-items-center"
        style={{ borderBottom: `2px solid ${primaryColor}` }}
      >
        <h5 className="mb-0" style={{ color: primaryColor }}>
          <i className="bi bi-folder-x me-2"></i>Delete Cohort
        </h5>
        <span className="badge text-bg-light border" style={{ color: primaryColor, borderColor: primaryColor }}>
          HR Admin
        </span>
      </div>

      <div className="card-body px-4 py-5">
        <form onSubmit={handleSubmit} className="row g-4">
          <div className="col-md-6">
            <label className="form-label" style={{ fontSize: '0.85rem' }}>Cohort Code</label>
            <div className="input-group">
              <span className="input-group-text"><i className="bi bi-code-slash"></i></span>
              <input
                type="text"
                className="form-control form-control-lg"
                value={cohortCode}
                onChange={(e) => setCohortCode(e.target.value)}
                placeholder="Enter Cohort Code"
                style={{ fontSize: '0.9rem' }}
                required
              />
            </div>
          </div>

          <div className="col-12 mt-3">
            <button
              type="submit"
              className="btn btn-lg w-100 shadow"
              style={{
                backgroundColor: primaryColor,
                borderColor: primaryColor,
                color: 'white',
                transition: 'background-color 0.3s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = hoverColor)}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = primaryColor)}
            >
              <i className="bi bi-trash-fill me-2"></i>Delete Cohort
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DeleteCohort;
