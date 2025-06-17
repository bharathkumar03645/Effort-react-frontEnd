import { useState } from 'react';
import Select from 'react-select';
 
const Search = () => {
  const [filters, setFilters] = useState({
    name: '',
    minExp: '',
    maxExp: '',
    skills: [],
    role: '',
    mappedType: '',
    gender: '',
  });
 
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
 
  const skillOptions = [
    { value: 'JavaScript', label: 'JavaScript' },
    { value: 'React', label: 'React' },
    { value: 'Node.js', label: 'Node.js' },
    { value: 'Python', label: 'Python' },
    { value: 'Java', label: 'Java' },
  ];
 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };
 
  const handleSkillsChange = (selectedOptions) => {
    setFilters((prev) => ({
      ...prev,
      skills: selectedOptions.map((option) => option.value),
    }));
  };
 
  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
 
    try {
      const params = new URLSearchParams();
 
      Object.entries(filters).forEach(([key, value]) => {
        if (Array.isArray(value)) {
          value.forEach((v) => params.append(key, v)); // for skills array
        } else if (value !== '') {
          params.append(key, value);
        }
      });
 
      const response = await fetch(`http://localhost:8081/search?${params.toString()}`);
 
      if (!response.ok) {
        throw new Error('Failed to fetch trainers');
      }
 
      const data = await response.json();
      setResults(data);
    } catch (error) {
      console.error('Search error:', error);
      alert('Error fetching trainers. Check console for details.');
    } finally {
      setLoading(false);
    }
  };
 
  return (
    <div className="container">
      <h4 className="mb-4 text-primary">Search Trainers</h4>
 
      <form onSubmit={handleSearch} className="row g-3">
        <div className="col-md-4">
          <label className="form-label">Name</label>
          <input
            type="text"
            name="name"
            className="form-control"
            value={filters.name}
            onChange={handleChange}
          />
        </div>
 
        <div className="col-md-2">
          <label className="form-label">Min Experience</label>
          <input
            type="number"
            name="minExp"
            className="form-control"
            value={filters.minExp}
            onChange={handleChange}
          />
        </div>
 
        <div className="col-md-2">
          <label className="form-label">Max Experience</label>
          <input
            type="number"
            name="maxExp"
            className="form-control"
            value={filters.maxExp}
            onChange={handleChange}
          />
        </div>
 
        <div className="col-md-4">
          <label className="form-label">Skills / Area of Work</label>
          <Select
            isMulti
            name="skills"
            options={skillOptions}
            className="basic-multi-select"
            classNamePrefix="select"
            onChange={handleSkillsChange}
            value={skillOptions.filter((option) => filters.skills.includes(option.value))}
            placeholder="Select skills"
          />
        </div>
 
        <div className="col-md-4">
          <label className="form-label">Role</label>
          <input
            type="text"
            name="role"
            className="form-control"
            value={filters.role}
            onChange={handleChange}
            placeholder="Trainer"
          />
        </div>
 
        <div className="col-md-4">
          <label className="form-label">Mapped Trainer Type</label>
          <input
            type="text"
            name="mappedType"
            className="form-control"
            value={filters.mappedType}
            onChange={handleChange}
            placeholder="Internal / External"
          />
        </div>
 
        <div className="col-md-4">
          <label className="form-label">Gender</label>
          <input
            type="text"
            name="gender"
            className="form-control"
            value={filters.gender}
            onChange={handleChange}
            placeholder="Male / Female / Other"
          />
        </div>
 
        <div className="col-12">
          <button type="submit" className="btn btn-primary" disabled={loading}>
            {loading ? 'Searching...' : 'Search'}
          </button>
        </div>
      </form>
 
      {/* Results */}
      <div className="mt-5">
        <h5>Results:</h5>
        {results.length === 0 ? (
          <p>No trainers found.</p>
        ) : (
          <ul className="list-group">
            {results.map((trainer, index) => (
              <li key={index} className="list-group-item">
                <strong>{trainer.name}</strong> — {trainer.email} —{' '}
                {trainer.skills?.join(', ')}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
 
export default Search;
 
 
// import { useState } from 'react'
 
// const Search = () => {
//   const [filters, setFilters] = useState({
//     name: '',
//     minExp: '',
//     maxExp: '',
//     skills: '',
//     role: '',
//     mappedType: '',
//     gender: '',
//   })
 
//   const handleChange = (e) => {
//     const { name, value } = e.target
//     setFilters(prev => ({ ...prev, [name]: value }))
//   }
 
//   const handleSearch = (e) => {
//     e.preventDefault()
 
//     // Remove empty fields
//     const cleanPayload = Object.fromEntries(
//       Object.entries(filters).filter(([_, v]) => v !== '')
//     )
 
//     console.log('Search Filters:', cleanPayload)
 
//     // Optionally, make API call with filters here
//     // axios.get('/api/search', { params: cleanPayload })
 
//     alert('Search initiated — check console for payload')
//   }
 
//   return (
//     <div className="container">
//       <h4 className="mb-4 text-primary">Search Trainers</h4>
 
//       <form onSubmit={handleSearch} className="row g-3">
//         <div className="col-md-4">
//           <label className="form-label">Name</label>
//           <input
//             type="text"
//             name="name"
//             className="form-control"
//             value={filters.name}
//             onChange={handleChange}
//           />
//         </div>
 
//         <div className="col-md-2">
//           <label className="form-label">Min Experience</label>
//           <input
//             type="number"
//             name="minExp"
//             className="form-control"
//             value={filters.minExp}
//             onChange={handleChange}
//           />
//         </div>
 
//         <div className="col-md-2">
//           <label className="form-label">Max Experience</label>
//           <input
//             type="number"
//             name="maxExp"
//             className="form-control"
//             value={filters.maxExp}
//             onChange={handleChange}
//           />
//         </div>
 
//         <div className="col-md-4">
//           <label className="form-label">Skills / Area of Work</label>
//           <input
//             type="text"
//             name="skills"
//             className="form-control"
//             value={filters.skills}
//             onChange={handleChange}
//             placeholder="e.g. Java, Python"
//           />
//         </div>
 
//         <div className="col-md-4">
//           <label className="form-label">Role</label>
//           <input
//             type="text"
//             name="role"
//             className="form-control"
//             value={filters.role}
//             onChange={handleChange}
//             placeholder="Trainer"
//           />
//         </div>
 
//         <div className="col-md-4">
//           <label className="form-label">Mapped Trainer Type</label>
//           <input
//             type="text"
//             name="mappedType"
//             className="form-control"
//             value={filters.mappedType}
//             onChange={handleChange}
//             placeholder="Internal / External"
//           />
//         </div>
 
//         <div className="col-md-4">
//           <label className="form-label">Gender</label>
//           <input
//             type="text"
//             name="gender"
//             className="form-control"
//             value={filters.gender}
//             onChange={handleChange}
//             placeholder="Male / Female / Other"
//           />
//         </div>
 
//         <div className="col-12">
//           <button type="submit" className="btn btn-primary">Search</button>
//         </div>
//       </form>
//     </div>
//   )
// }
 
// export default Search
 
 