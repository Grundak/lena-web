import 'yet-another-react-lightbox/styles.css';
import Lightbox from 'yet-another-react-lightbox';
import { useState } from 'react';

const importAll = (r) => r.keys().map(r);
const images = importAll(require.context('../images/tattoo', false, /\.(webp|png|jpe?g|svg)$/));


const GalleryTattoo = () => {
    const [open, setOpen] = useState();

    return (
        <div className="gallery-container" id="tattoo">
            {images.map((image, index) => (
                <div
                    key={index}
                    className="w-full cursor-pointer"
                    onClick={() => setOpen(index)}
                >
                    <img
                        src={image}
                        alt={`Tattoo ${index + 1}`}
                        className="w-full h-auto object-cover"
                    />
                </div>
            ))}
            <Lightbox
                open={open !== undefined}
                close={() => setOpen(undefined)}
                slides={images.map((image) => ({
                    src: image,
                }))}
                index={open}
            />
        </div>
    );
};

export default GalleryTattoo;