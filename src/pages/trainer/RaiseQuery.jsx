import { useContext, useState } from 'react'
import { Usercontext } from '../../App'

const RaiseQuery = () => {
  const {user} = useContext(Usercontext);
  const [form, setForm] = useState({
    tmId: user || '', // fetched or passed via context ideally
    cohortCode: '',
    issue: '',
    description: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  }

  const requestBody={
    info: {
      iD: form.tmId,  // Ensure correct casing if needed in backend
      cohortCode: form.cohortCode
    },
    issue:form.issue,
    problemDescription:form.description
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    fetch("http://localhost:8086/raisequery",{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody),
    })
    .then(res=>res.text())
    .then(data=>{
      console.log(data);
      alert("You had raise query successfully")
    })


    // console.log('Query Submitted:', {
    //   ...form,
    //   status: 0, // default: new query
    // })
    // alert('Query submitted successfully!')
  }

  return (
    <div className="container">
      <h4 className="mb-4 text-primary">Raise a Query</h4>

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
          <label className="form-label">Issue</label>
          <input
            type="text"
            name="issue"
            className="form-control"
            value={form.issue}
            onChange={handleChange}
            required
          />
        </div>

        <div className="col-12">
          <label className="form-label">Issue Description</label>
          <textarea
            name="description"
            className="form-control"
            rows="4"
            value={form.description}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        

        <div className="col-12">
          <button type="submit" className="btn btn-primary">Submit Query</button>
        </div>
      </form>
    </div>
  )
}

export default RaiseQuery
