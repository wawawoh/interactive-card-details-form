import { useEffect, useState } from "react";

function ActualForm({
  setName,
  setCardNumber,
  setExp,
  setCvc,
  name,
  cardNumber,
  exp,
  cvc,
  setValidated,
}) {
  const [nameError, setNameError] = useState("");
  const [cardNumberError, setCardNumberError] = useState("");
  const [expError, setExpError] = useState("");
  const [cvcError, setCvcError] = useState("");

  //this is for length

  useEffect(() => {
    if (cvc.length > 3) {
      setCvc((prev) => {
        prev = prev.slice(0, prev.length - 1);
        return prev;
      });
    }
    if (cardNumber.length > 16) {
      setCardNumber((prev) => {
        prev = prev.slice(0, prev.length - 1);
        return prev;
      });
    }
  }, [cardNumber, cvc]);

  //type validation comes hre

  const formValidation = (e) => {
    let isValid = true;
    e.preventDefault();
    //name
    if (name === "") {
      setNameError("empty, please enter information");
      isValid = false;
    } else {
      setNameError("");
    }
    //card number
    if (cardNumber === "") {
      setCardNumberError("empty, please enter information");
      isValid = false;
    } else if (cardNumber.length < 16) {
      setCardNumberError("enter a valid card number");
    } else {
      setCardNumberError("");
    }

    // exp date
    if (exp === "") {
      setExpError("empty, please enter information");
      isValid = false;
    } else {
      setExpError("");
    }

    // cvc
    if (cvc === "") {
      setCvcError("empty, please enter information");
      isValid = false;
    } else if (cvc.length < 3) {
      setCvcError("enter a valid cvc length");
    } else {
      setCvcError("");
    }

    if (isValid === true) {
      setValidated(true);
    }
  };

  //PUT THIS SLICER IN THE CARD COMPONENT
  const formatExp = () => {
    setExp((prev) => {
      prev = exp.slice(0, -3);
      return prev;
    });
    console.log("formatted exp date is", exp);
  };

  return (
    <form>
      <div>
        <label htmlFor="name">name</label>
        <input
          type="text"
          id="name"
          value={name}
          placeholder="name"
          onChange={(e) => setName(e.target.value)}
        />
        <p>{nameError}</p>
      </div>

      <div>
        <label htmlFor="card-number">card number</label>
        <input
          type="number"
          id="card-number"
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)}
        />
        <p>{cardNumberError}</p>
      </div>

      <div className="small-details">
        <div>
          <label htmlFor="exp-date">expiry date (ignore the day bit)</label>
          <input
            type="date"
            id="exp-date"
            value={exp}
            onChange={(e) => setExp(e.target.value)}
          />
          <p>{expError}</p>
        </div>

        <div>
          <label htmlFor="cvc">cvc</label>
          <input
            type="number"
            id="cvc"
            max="3"
            value={cvc}
            onChange={(e) => setCvc(e.target.value)}
          />
        </div>
        <p>{cvcError}</p>
      </div>

      <button type="submit" onClick={formValidation}>
        Confirm
      </button>
    </form>
  );
}
export default ActualForm;
