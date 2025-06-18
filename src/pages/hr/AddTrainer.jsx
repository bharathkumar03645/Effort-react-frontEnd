import { useState } from 'react';
import Select from 'react-select';
import 'bootstrap-icons/font/bootstrap-icons.css';

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

      const response = await fetch('http://localhost:8081/addTrainer', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const result = await response.text();
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
          <div className={`p-3 rounded text-sm mb-4 ${isSuccess ? 'bg-success-subtle text-success-emphasis' : 'bg-danger-subtle text-danger-emphasis'}`}>
            {message}
          </div>
        )}
        <form onSubmit={handleSubmit} className="row g-4">
          {[
            { label: 'Trainer ID', name: 'tmId', icon: 'person-badge-fill' },
            { label: 'Full Name', name: 'name', icon: 'person-fill' },
            { label: 'Email', name: 'email', icon: 'envelope-fill', type: 'email' },
            { label: 'Phone Number', name: 'phoneNo', icon: 'telephone-fill', type: 'tel' },
            { label: 'Gender', name: 'gender', icon: 'gender-ambiguous' },
            { label: 'Experience (Years)', name: 'experience', icon: 'bar-chart-fill', type: 'number' },
            { label: 'Mapped Trainer Type', name: 'mappedTrainerType', icon: 'person-check-fill' },
            { label: 'Password', name: 'password', icon: 'key-fill', type: 'password' },
          ].map(({ label, name, icon, type = 'text' }) => (
            <div className="col-md-4" key={name}>
              <label className="form-label" style={{ fontSize: '0.85rem' }}>{label}</label>
              <div className="input-group">
                <span className="input-group-text"><i className={`bi bi-${icon}`}></i></span>
                <input
                  type={type}
                  name={name}
                  className="form-control form-control-lg"
                  value={form[name]}
                  onChange={handleChange}
                  placeholder={label}
                  style={{ fontSize: '0.9rem' }}
                  required={name !== 'password' ? true : false}
                />
              </div>
            </div>
          ))}

          <div className="col-md-4">
            <label className="form-label" style={{ fontSize: '0.85rem' }}>Role</label>
            <input
              type="text"
              name="role"
              className="form-control form-control-lg"
              value={form.role}
              disabled
              style={{ fontSize: '0.9rem' }}
            />
          </div>

          <div className="col-md-12">
            <label className="form-label" style={{ fontSize: '0.85rem' }}>Skills</label>
            <Select
              isMulti
              name="skills"
              options={skillOptions}
              className="basic-multi-select"
              classNamePrefix="select"
              onChange={handleSkillsChange}
              value={skillOptions.filter((option) => form.skills.includes(option.value))}
              placeholder="Select skills"
              styles={{ placeholder: base => ({ ...base, fontSize: '0.9rem' }) }}
            />
          </div>

          <div className="col-12 mt-4">
            <button
              type="submit"
              className="btn btn-success btn-lg w-100 shadow"
              disabled={loading}
            >
              <i className="bi bi-person-plus-fill me-2"></i>Add Trainer
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTrainer;
