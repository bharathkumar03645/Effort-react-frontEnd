import { useEffect, useState } from 'react'

const Approvals = () => {
  const [efforts, setEfforts] = useState([])

  useEffect(() => {
    fetch('http://localhost:5000/api/efforts/pending') // your backend URL
      .then(res => res.json())
      .then(data => setEfforts(data))
      .catch(err => {
        console.error('Failed to fetch efforts:', err)
        alert('Error fetching pending efforts.')
      })
  }, [])

  const handleAction = async (effortId, action) => {
    try {
      const res = await fetch(`http://localhost:5000/api/efforts/${effortId}/${action}`, {
        method: 'POST',
      })

      if (!res.ok) throw new Error('Failed to update')

      setEfforts(prev => prev.filter(e => e.id !== effortId)) // remove from list
      alert(`Effort ${action}ed successfully`)
    } catch (err) {
      console.error(err)
      alert(`Failed to ${action} effort`)
    }
  }

  return (
    <div className="container-fluid py-4 px-3 bg-light min-vh-100">
      <div className="row justify-content-center">
        <div className="col-12 col-lg-10">
          <h4 className="text-primary mb-4">Pending Effort Approvals</h4>

          {efforts.length === 0 ? (
            <div className="alert alert-info">No efforts pending approval.</div>
          ) : (
            efforts.map(effort => (
              <div key={effort.id} className="card shadow-sm border-0 mb-4">
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <h6 className="mb-0 text-dark">
                      {effort.trainerName} <span className="text-muted">({effort.trainerId})</span>
                    </h6>
                    <span className="badge bg-secondary">{effort.date}</span>
                  </div>

                  <p className="mb-1"><strong>Topic:</strong> {effort.topic}</p>
                  <p className="mb-1"><strong>Hours:</strong> {effort.hours}</p>
                  <p className="mb-2"><strong>Highlights:</strong> {effort.highlights}</p>

                  <div className="d-flex gap-3">
                    <button
                      className="btn btn-sm btn-outline-success"
                      onClick={() => handleAction(effort.id, 'accept')}
                    >
                      ✅ Accept
                    </button>
                    <button
                      className="btn btn-sm btn-outline-danger"
                      onClick={() => handleAction(effort.id, 'reject')}
                    >
                      ❌ Reject
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  )
}

export default Approvals;