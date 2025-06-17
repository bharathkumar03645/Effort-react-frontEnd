const PageContainer = ({ children }) => (
  <div className="container-fluid py-6 px-5 bg-light min-vh-100">
    <div className="row justify-content-center">
      <div className="col-12 col-md-10 col-lg-9 col-xl-8">
        {children}
      </div>
    </div>
  </div>
)

export default PageContainer