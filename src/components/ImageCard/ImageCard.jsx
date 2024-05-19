import css from './ImageCard.module.css'

function ImageCard({ urls: { small, regular }, alt }) {
    return (
        <div>
           <img src={small} alt={alt} />
        </div>
    );
};

export default ImageCard
