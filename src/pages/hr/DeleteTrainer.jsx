import { useState } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';

const DeleteTrainer = () => {
  const [tmId, setTmId] = useState('');
  const primaryColor = '#000048';
  const hoverColor = '#1a1a80';

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!tmId.trim()) return alert('Trainer ID is required');

    try {
      const response = await fetch(`http://localhost:8081/deleteTrainer/${tmId}`, {
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
        setTmId('');
      } else {
        alert('Failed to delete trainer');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while deleting the trainer');
    }
  };

  return (
    <div className="card border-0 shadow-lg rounded-4">
      <div
        className="card-header bg-white border-bottom d-flex justify-content-between align-items-center"
        style={{ borderBottom: `2px solid ${primaryColor}` }}
      >
        <h5 className="mb-0" style={{ color: primaryColor }}>
          <i className="bi bi-person-dash-fill me-2"></i>Delete Trainer
        </h5>
        <span className="badge text-bg-light border" style={{ color: primaryColor, borderColor: primaryColor }}>
          HR Admin
        </span>
      </div>

      <div className="card-body px-4 py-5">
        <form onSubmit={handleSubmit} className="row g-4">
          <div className="col-md-6">
            <label className="form-label" style={{ fontSize: '0.85rem' }}>Trainer ID</label>
            <div className="input-group">
              <span className="input-group-text"><i className="bi bi-person-badge-fill"></i></span>
              <input
                type="text"
                className="form-control form-control-lg"
                value={tmId}
                onChange={(e) => setTmId(e.target.value)}
                placeholder="Enter Trainer ID"
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
              <i className="bi bi-trash-fill me-2"></i>Delete Trainer
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DeleteTrainer;
