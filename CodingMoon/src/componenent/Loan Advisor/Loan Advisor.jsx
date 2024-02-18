import "./Loan Advisor.css";

function LoanAdvisor() {
  return (
    <div>
      <h5>Departments ineed of funding</h5>
      <div className="cont">
        <ol>
          <li>
            <div>
              HR department : 800$
              <button type="button" className="button" class="btn btn-primary">
                Find Loan
              </button>
            </div>
          </li>
          <br></br>
          <li>
            <div>
              Dev department : 700$
              <button type="button"  class="btn btn-primary">
                Find Loan
              </button>
            </div>
          </li>
        </ol>
      </div>
      <h5>Loans paiment in process : </h5>

      <div class="progress" style={{ width: "30%" }}>
        <div
          class="progress-bar"
          role="progressbar"
          style={{ width: "25%" }}
          aria-valuenow="25"
          aria-valuemin="0"
          aria-valuemax="100"
        >
          25%
        </div>
      </div>
      <div class="but">
        <button type="button" class="btn btn-primary">
          Adjust Payment Plan
        </button>
        <button type="button" class="btn btn-success">
          Fund
        </button>
      </div>
      <h5>Dev department funding</h5>
      <div class="progress" style={{ width: "30%" }}>
        <div
          class="progress-bar"
          role="progressbar"
          style={{ width: "25%" }}
          aria-valuenow="25"
          aria-valuemin="0"
          aria-valuemax="100"
        >
          25%
        </div>
      </div>
      <div class="but">
        <button type="button" class="btn btn-primary">
          Adjust Payment Plan
        </button>
        <button type="button" class="btn btn-success">
          Fund
        </button>
      </div>
    </div>
  );
}
export default LoanAdvisor;
