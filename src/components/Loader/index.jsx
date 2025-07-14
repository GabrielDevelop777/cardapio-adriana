import { LoaderContent, LoaderOverlay, LoaderTitle } from "./styles";

const Loader = ({ isFadingOut }) => {
	return (
		<LoaderOverlay $isFadingOut={isFadingOut}>
			<LoaderContent>
				<LoaderTitle>Delicias da Dri ❤</LoaderTitle>
			</LoaderContent>
		</LoaderOverlay>
	);
};

export default Loader;
