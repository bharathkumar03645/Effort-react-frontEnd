const DownloadData = () => {
  const handleDownload = async () => {
    try {
      const response = await fetch('http://localhost:8081/download', {
        method: 'GET',
      })
 
      if (!response.ok) throw new Error('Download failed.')
 
      const blob = await response.blob()
 
      const url = window.URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = 'trainers.xlsx'
      document.body.appendChild(a)
      a.click()
      a.remove()
      window.URL.revokeObjectURL(url)
 
      console.log('Download triggered')
    } catch (err) {
      console.error(err)
      alert('Failed to download file.')
    }
  }
 
  return (
    <div className="container text-center">
      <h4 className="text-primary mb-4">Download Trainer Data</h4>
 
      <div className="p-4 border rounded shadow-sm bg-white d-inline-block">
        <p className="mb-3">Click the button below to download trainer data in Excel format.</p>
        <button className="btn btn-outline-success px-4 py-2" onClick={handleDownload}>
          ⬇ Download Excel
        </button>
      </div>
    </div>
  )
}
 
export default DownloadData
 
 