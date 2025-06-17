import { useState } from 'react';
import Select from 'react-select';
 
 
const AddTrainer = () => {
  const [form, setForm] = useState({
    tmId: '',
    name: '',
    email: '',
    phoneNo: '',
    gender: '',
    experience: '',
    mappedTrainerType: '',
    password: '',
    role: 'Trainer',
    skills: [],
  });
 
  const skillOptions = [
    { value: 'JavaScript', label: 'JavaScript' },
    { value: 'React', label: 'React' },
    { value: 'Node.js', label: 'Node.js' },
    { value: 'Python', label: 'Python' },
    { value: 'Java', label: 'Java' },
  ];
 
  const handleSkillsChange = (selectedOptions) => {
    setForm((prev) => ({
      ...prev,
      skills: selectedOptions.map((option) => option.value),
    }));
  };
 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };
 
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
 
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    console.log('Trainer Added:', form);
 
    try {
      const payload = {
        id: form.tmId,
        name: form.name,
        email: form.email,
        phoneNumber: form.phoneNo,
        gender: form.gender,
        experience: parseInt(form.experience, 10),
        mappedType: form.mappedTrainerType,
        password: form.password,
        role: form.role,
        skills: form.skills,
      };
 
      const response = await fetch('http://localhost:8081/registerTrainer', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      }).then(res=>res.text())
      .then(data=>{


        const result =data;
        console.log(`${result} to ${form.email}`);
        setMessage(`${result} to ${form.email}`);
        setIsSuccess(true);
        setForm({
          tmId: '',
          name: '',
          email: '',
          phoneNo: '',
          gender: '',
          experience: '',
          mappedTrainerType: '',
          password: '',
          role: 'Trainer',
          skills: [],
        });
      // } else {
      //   const errorData = await response.text().catch(() => ({
      //     message: 'Server responded with an error.',
      //   }));
        // setMessage(`Error: ${errorData.message || 'Failed to create trainer.'}`);
        // setIsSuccess(false);
      // }

    })
    } catch (error) {
      setMessage(`Network error: ${error.message}`);
      setIsSuccess(false);
      console.error('Fetch error:', error);
    } finally {
      setLoading(false);
    }
 
    alert('Trainer added successfully!');
  };
 
  return (
    <div className="card border-0 shadow-lg rounded-4">
      <div className="card-header bg-white border-bottom d-flex justify-content-between align-items-center">
        <h5 className="mb-0 text-primary">
          <i className="bi bi-person-plus-fill me-2"></i>Add New Trainer
        </h5>
        <span className="badge bg-secondary-subtle text-dark">HR Admin</span>
      </div>
 
      <div className="card-body px-4 py-5">
        {message && (
          <div
            className={`p-4 mb-6 rounded-lg text-sm font-medium ${
              isSuccess ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
            }`}
          >
            {message}
          </div>
        )}
        <form onSubmit={handleSubmit} className="row g-4">
          <div className="col-md-6">
            <label className="form-label">Trainer ID</label>
            <div className="input-group">
              <span className="input-group-text">
                <i className="bi bi-person-badge-fill"></i>
              </span>
              <input
                type="text"
                className="form-control form-control-lg"
                name="tmId"
                value={form.tmId}
                onChange={handleChange}
                required
              />
            </div>
          </div>
 
          <div className="col-md-6">
            <label className="form-label">Full Name</label>
            <div className="input-group">
              <span className="input-group-text">
                <i className="bi bi-person-fill"></i>
              </span>
              <input
                type="text"
                className="form-control form-control-lg"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>
          </div>
 
          <div className="col-md-6">
            <label className="form-label">Email</label>
            <div className="input-group">
              <span className="input-group-text">
                <i className="bi bi-envelope-fill"></i>
              </span>
              <input
                type="email"
                className="form-control form-control-lg"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>
 
          <div className="col-md-6">
            <label className="form-label">Phone Number</label>
            <div className="input-group">
              <span className="input-group-text">
                <i className="bi bi-telephone-fill"></i>
              </span>
              <input
                type="tel"
                className="form-control form-control-lg"
                name="phoneNo"
                value={form.phoneNo}
                onChange={handleChange}
                required
              />
            </div>
          </div>
 
          <div className="col-md-4">
            <label className="form-label">Gender</label>
            <input
              type="text"
              className="form-control form-control-lg"
              name="gender"
              value={form.gender}
              onChange={handleChange}
              required
            />
          </div>
 
          <div className="col-md-4">
            <label className="form-label">Experience (Years)</label>
            <input
              type="number"
              className="form-control form-control-lg"
              name="experience"
              value={form.experience}
              onChange={handleChange}
              required
            />
          </div>
 
          <div className="col-md-4">
            <label className="form-label">Mapped Trainer Type</label>
            <input
              type="text"
              className="form-control form-control-lg"
              name="mappedTrainerType"
              value={form.mappedTrainerType}
              onChange={handleChange}
              required
            />
          </div>
 
          <div className="col-md-12">
            <label className="form-label">Skills</label>
            <Select
              isMulti
              name="skills"
              options={skillOptions}
              className="basic-multi-select"
              classNamePrefix="select"
              onChange={handleSkillsChange}
              value={skillOptions.filter((option) => form.skills.includes(option.value))}
            />
          </div>
 
          {/* <div className="col-md-6">
            <label className="form-label">Password</label>
            <div className="input-group">
              <span className="input-group-text">
                <i className="bi bi-lock-fill"></i>
              </span>
              <input
                type="password"
                className="form-control form-control-lg"
                name="password"
                value={form.password}
                onChange={handleChange}
                required
              />
            </div>
          </div> */}
 
          <div className="col-md-6">
            <label className="form-label">Role</label>
            <input
              type="text"
              className="form-control form-control-lg"
              name="role"
              value={form.role}
              disabled
            />
          </div>
 
          <div className="col-12 mt-4">
            <button type="submit" disabled={loading} className="btn btn-primary btn-lg w-100 shadow">
              <i className="bi bi-person-plus-fill me-2"></i>Add Trainer
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
 
export default AddTrainer;
 
 
 