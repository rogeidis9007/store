interface GaleryProps {
	image?: string;
}

function PrincipalGalleryItem({ image }: GaleryProps) {
	return (
		<div className="w-full   flex justify-center items-center">
			<img className="w-[100%] rounded-[20px]" src={image} />
		</div>
	);
}

export default PrincipalGalleryItem;
