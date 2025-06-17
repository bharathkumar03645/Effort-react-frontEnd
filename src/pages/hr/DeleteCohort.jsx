import { useState } from 'react';
 
const DeleteCohort = () => {
  const [cohortCode, setCohortCode] = useState('');
 
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
    <div className="container">
      <h4 className="mb-4 text-danger">Delete Cohort</h4>
      <form onSubmit={handleSubmit} className="row g-3">
        <div className="col-md-6">
          <label className="form-label">Cohort Code</label>
          <input
            type="text"
            className="form-control"
            value={cohortCode}
            onChange={(e) => setCohortCode(e.target.value)}
            required
          />
        </div>
        <div className="col-12">
          <button type="submit" className="btn btn-danger">Delete</button>
        </div>
      </form>
    </div>
  );
};
 
export default DeleteCohort;
 
