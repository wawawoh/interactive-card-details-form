import CreditCard from "./CreditCard";
import ActualForm from "./ActualForm";
import "./form.css";
import { useEffect, useState } from "react";

function Form() {
  const [name, setName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [exp, setExp] = useState("");
  const [cvc, setCvc] = useState("");
  const [validated, setValidated] = useState(false);

  useEffect(() => {
    if (validated) {
      console.log("valid");
    }
  }, [validated]);

  return (
    <>
      <div className="input-form">
        <div
          className={validated ? "actual-form inactive" : "actual-form active"}
        >
          <ActualForm
            setName={setName}
            setCardNumber={setCardNumber}
            setExp={setExp}
            setCvc={setCvc}
            name={name}
            cardNumber={cardNumber}
            exp={exp}
            cvc={cvc}
            setValidated={setValidated}
          />
        </div>
        <div
          className={
            validated ? "success-form active" : "success-form inactive"
          }
        >
          <img
            className="success-image"
            src="./images/icon-complete.svg"
            alt="success"
          />
          <h2>Thank you!</h2>
          <p> We've added your card details</p>
          <button>Continue</button>
        </div>

        <div className="credit-card-div">
          <CreditCard name={name} cardNumber={cardNumber} exp={exp} cvc={cvc} />
        </div>
      </div>
    </>
  );
}

export default Form;
