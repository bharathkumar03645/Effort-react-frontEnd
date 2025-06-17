import { useState } from 'react';
 
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
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });
 
      if (response.ok) {
        console.log('Allocation Submitted:', payload);
        alert(`Trainer ${form.tmId} (${form.areaOfWork}) allocated to ${form.cohortCode}`);
        // Optionally, reset the form
        setForm({
          tmId: '',
          areaOfWork: '',
          cohortCode: ''
        });
      } else {
        alert('Failed to allocate trainer');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while allocating the trainer');
    }
  };
 
  return (
    <div className="container">
      <h4 className="mb-4 text-primary">Allocate Trainer to Cohort</h4>
 
      <form onSubmit={handleSubmit} className="row g-3">
        <div className="col-md-4">
          <label className="form-label">Trainer ID</label>
          <input
            type="text"
            name="tmId"
            className="form-control"
            value={form.tmId}
            onChange={handleChange}
            required
          />
        </div>
 
        <div className="col-md-4">
          <label className="form-label">Area of Work</label>
          <input
            type="text"
            name="areaOfWork"
            className="form-control"
            value={form.areaOfWork}
            onChange={handleChange}
            placeholder="e.g. Java, Python, DevOps"
            required
          />
        </div>
 
        <div className="col-md-4">
          <label className="form-label">Cohort Code</label>
          <input
            type="text"
            name="cohortCode"
            className="form-control"
            value={form.cohortCode}
            onChange={handleChange}
            required
          />
        </div>
 
        <div className="col-12">
          <button type="submit" className="btn btn-success">Allocate</button>
        </div>
      </form>
    </div>
  );
};
 
export default AllocateTrainer;