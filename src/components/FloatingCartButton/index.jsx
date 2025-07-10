import { ShoppingCart } from "lucide-react";
import { Badge, Button } from "./styles";

const FloatingCartButton = ({ itemCount, onClick }) => (
	<Button onClick={onClick}>
		<ShoppingCart size={28} />
		{itemCount > 0 && <Badge>{itemCount}</Badge>}
	</Button>
);

export default FloatingCartButton;
