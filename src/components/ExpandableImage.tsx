import ModalImage from 'react-modal-image';

type ExpandableImage = {
    small: string,
    large: string,
    alt: string,
    className?: string
}

export const ExpandableImage = ({ small, large, alt, className }: ExpandableImage)=> {
    return (
        <ModalImage
            small={small}
            large={large}
            alt={alt}
            hideDownload={true}
            hideZoom={true}
            className={className}
        />
    );
}