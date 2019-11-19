import React from "react";
import StripeCheckout from "react-stripe-checkout";
// import { ReactComponent as Logo } from "https://sendeyo.com/up/d/f3eb2117da";

const StripeCheckoutButton = ({ price }) => {
	const priceForStripe = price * 100;
	const publishableKey = "pk_test_onYKLUjDZgIB8EBTYJ5RW4P000GNQD22bO";

	const onToken = (token) => {
		console.log(token);
		alert("Payment Successful");
	};

	return (
		<div>
			<StripeCheckout
				label='Pay Now'
				name='Crown Clothing Ltd.'
				billingAddress
				shippingAddress
				image='https://sendeyo.com/up/d/f3eb2117da'
				// 'https://sendeyo.com/up/d/f3eb2117da' testing above component as image
				description={`Your total is £${price}`}
				amount={priceForStripe}
				panelLabel='Pay Now'
				token={onToken}
				stripeKey={publishableKey}
			/>
		</div>
	);
};

export default StripeCheckoutButton;
