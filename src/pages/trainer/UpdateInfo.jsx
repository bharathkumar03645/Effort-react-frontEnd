import { useContext, useState } from 'react'
import Select from 'react-select'; // Import React Select
import { Usercontext } from '../../App'

const UpdateInfo = () => {
  const {user} = useContext(Usercontext);
  const [form, setForm] = useState({
    tmId: user || '', // simulate pre-filled TM ID
    fullName: '',
    email: '',
    phone: '',
    gender: '',
    experience: '',
    mappedTrainerType: '',
    skills:[]
  })


  const skillOptions = [
    { value: 'Java', label: 'Java' },
    { value: 'Python', label: 'Python' },
    { value: 'React', label: 'React' },
    { value: 'Node.js', label: 'Node.js' },
    { value: 'Spring Boot', label: 'Spring Boot' },
    { value: 'AWS', label: 'AWS' }
  ]; 
  


  const handleSkillsChange = (selectedOptions) => {
    setForm(prev => ({
      ...prev,
      skills: selectedOptions.map(option => option.value) // Extract only values
    }));
  };

  

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  }

  const requestBody={
    id:form.tmId,
    name:form.fullName,
    email:form.email,
    phoneNumber:form.phone,
    gender:form.gender,
    experience:form.experience,
    mappedType:form.mappedTrainerType,
    skills:form.skills

  }

  const handleSubmit = (e) => {
    e.preventDefault()


    fetch("http://localhost:8085/updateInfo",{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody),
    })
    .then(res=>res.json())
    .then(data=>{
      console.log(data);
      alert("Trainer Info has updated successfully")
    })


    // console.log('Updated Trainer Info:', form)
    // alert('Trainer info updated successfully!')
  }

  return (
    <div className="container">
      <h4 className="mb-4 text-primary">Update Trainer Info</h4>

      <form onSubmit={handleSubmit} className="row g-3">
        <div className="col-md-4">
          <label className="form-label">Trainer ID</label>
          <input
            type="text"
            className="form-control"
            name="tmId"
            value={form.tmId}
            readOnly
          />
        </div>

        <div className="col-md-4">
          <label className="form-label">Full Name</label>
          <input
            type="text"
            className="form-control"
            name="fullName"
            value={form.fullName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="col-md-4">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="col-md-4">
          <label className="form-label">Phone Number</label>
          <input
            type="tel"
            className="form-control"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            required
          />
        </div>

        <div className="col-md-4">
          <label className="form-label">Gender</label>
          <select
            name="gender"
            className="form-select"
            value={form.gender}
            onChange={handleChange}
            required
          >
            <option value="">Select</option>
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>
        </div>

        <div className="col-md-4">
          <label className="form-label">Experience (Years)</label>
          <input
            type="number"
            className="form-control"
            name="experience"
            value={form.experience}
            onChange={handleChange}
            required
          />
        </div>

        <div className="col-md-6">
          <label className="form-label">Mapped Trainer Type</label>
          <select
            name="mappedTrainerType"
            className="form-select"
            value={form.mappedTrainerType}
            onChange={handleChange}
            required
          >
            <option value="">Select</option>
            <option>Internal</option>
            <option>External</option>
          </select>
        </div>

        {/* <div className="col-md-6">
          <label className="form-label">Skills</label>
          <textarea
            name="skills"
            className="form-control"
            value={form.skills}

            onChange={handleChange}
            required
          >
            
          </textarea>
        </div> */}
        <div className="col-md-6">
          <label className="form-label">Skills</label>
          <Select
            isMulti
            name="skills"
            options={skillOptions}
            value={skillOptions.filter(option => form.skills.includes(option.value))} // Match selected values
            onChange={handleSkillsChange}
          />
        </div>

        <div className="col-12">
          <button className="btn btn-success" type="submit">
            Update Info
          </button>
        </div>
      </form>
    </div>
  )
}

export default UpdateInfo
