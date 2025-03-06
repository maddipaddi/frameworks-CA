import BaseButton from "../components/styled/BaseButton";
import Card from "../components/styled/Card";
import Logo from "../assets/ClicketyCartLogo.png";

function Checkout() {
  return (
    <Card className="max-w-max">
      <h1 className="font-title font-bold text-2xl">Successful!</h1>
      <img src={Logo} alt="Logo" />
      <p className="font-copy">
        The payment was successful. We hope you had a swift and fun shopping
        experience!
      </p>

      <BaseButton>Shop more</BaseButton>
    </Card>
  );
}

export default Checkout;
