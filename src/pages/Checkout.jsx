import BaseButton from "../components/styled/BaseButton";
import Card from "../components/styled/Card";
import Logo from "../assets/ClicketyCartLogo.png";
import { useNavigate } from "react-router-dom";

function Checkout() {
  const navigate = useNavigate();
  return (
    <Card className="max-w-max">
      <h1 className="font-title font-bold text-2xl">Successful!</h1>
      <img src={Logo} alt="Logo" />
      <p className="font-copy">
        The payment was successful. We hope you had a swift and fun shopping
        experience!
      </p>

      <BaseButton onClick={() => navigate(`/`)}>Shop more</BaseButton>
    </Card>
  );
}

export default Checkout;
