import { useContext, useEffect, useState } from 'react'
import { Usercontext } from '../../App'

const LogEffort = () => {
  const {user} = useContext(Usercontext);
  const [form, setForm] = useState({
    tmId: user || '', // Should come from session/auth in real app
    cohortCode: '',
    mode:'',
    reason: '',
    hours: '',
    date: '',
    topic: '',
    highlights: '',
  })

  




  const handleChange = (e) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  }


  const requestBody = {
    info: {
      iD: form.tmId,  // Ensure correct casing if needed in backend
      cohortCode: form.cohortCode
    },
    mode: form.mode === "Virtual" ? "Virtual" : form.mode, 
    reason: form.reason,
    effortHours: form.hours,
    date: form.date,
    topic: form.topic,
    highlights: form.highlights
  };

  const handleSubmit = (e) => {
    e.preventDefault()

    fetch("http://localhost:8085/effortupdate",{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody),
    })
    .then(res=>res.text())
    .then(data=>{
      console.log(data);
      alert(data)
    })

    
  }

  return (
    <div className="container">
      <h4 className="mb-4 text-primary">Log Effort</h4>

      <form onSubmit={handleSubmit} className="row g-3">

        <div className="col-md-4">
          <label className="form-label">Trainer ID</label>
          <input
            type="text"
            name="tmId"
            className="form-control"
            value={form.tmId}
            readOnly
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

        <div className="col-md-4">
          <label className="form-label">Mode</label>
          <select
            name="mode"
            className="form-select"
            value={form.mode}
            onChange={handleChange}
            required
          >
            <option>Physical</option>
            <option>Virtual</option>
          </select>
        </div>

        
        <div className="col-md-6">
          <label className="form-label">Reason</label>
          <input
            type="text"
            name="reason"
            className="form-control"
            value={form.mode == "Virtual" ? form.reason : "NA"} // Display "NA" for Offline mode
            onChange={handleChange}
            required
            disabled={form.mode !== "Virtual"} // Disable input when mode is not Virtual
          />
        </div>


        <div className="col-md-6">
          <label className="form-label">Effort Hours</label>
          <input
            type="number"
            name="hours"
            className="form-control"
            value={form.hours}
            onChange={handleChange}
            required
          />
        </div>

        <div className="col-md-4">
          <label className="form-label">Date</label>
          <input
            type="date"
            name="date"
            className="form-control"
            value={form.date}
            onChange={handleChange}
            required
          />
        </div>

        <div className="col-md-8">
          <label className="form-label">Topic</label>
          <input
            type="text"
            name="topic"
            className="form-control"
            value={form.topic}
            onChange={handleChange}
            required
          />
        </div>

        <div className="col-12">
          <label className="form-label">Highlights</label>
          <textarea
            name="highlights"
            className="form-control"
            rows="3"
            value={form.highlights}
            onChange={handleChange}
          />
        </div>

        <div className="col-12">
          <button type="submit" className="btn btn-success">
            Submit Effort
          </button>
        </div>
      </form>
    </div>
  )
}

export default LogEffort
