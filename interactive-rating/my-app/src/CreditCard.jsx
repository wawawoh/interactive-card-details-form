import "./credit-card.css";

function CreditCard({ name, cardNumber, exp, cvc }) {
  return (
    <div className="credit-card-container">
      <div className="card-front-container">
        <img src="/images/bg-card-front.png" alt="front" />

        <div className="card-front-details">
          <p className="card-number">{cardNumber.padEnd(16, "0")}</p>

          <div className="small-print">
            <p className="card-name">{name}</p>
            <p className="exp-date">{exp.slice(0, -3).padStart(4, "0")}</p>
          </div>
        </div>
      </div>

      <div className="card-back-container">
        <img src="/images/bg-card-back.png" alt="front" />
        <p className="card-cvc">{cvc.padEnd(3, "0")}</p>
      </div>
    </div>
  );
}

export default CreditCard;
