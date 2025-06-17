import { useState } from 'react';
 
const DeleteTrainer = () => {
  const [tmId, setTmId] = useState('');
 
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
    <div className="container">
      <h4 className="mb-4 text-danger">Delete Trainer</h4>
      <form onSubmit={handleSubmit} className="row g-3">
        <div className="col-md-6">
          <label className="form-label">Trainer ID</label>
          <input
            type="text"
            className="form-control"
            value={tmId}
            onChange={(e) => setTmId(e.target.value)}
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
 
export default DeleteTrainer;
 
 