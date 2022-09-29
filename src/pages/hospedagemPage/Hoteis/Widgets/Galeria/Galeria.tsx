import Box from '@mui/material/Box';
import { useState, useCallback } from 'react';
import Carousel, { Modal, ModalGateway } from 'react-images';
import Gallery from 'react-photo-gallery';
import './galeria.scss';

export default function App() {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((_event: any, { photo, index }: any) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  const photos = [
    {
      src: 'https://source.unsplash.com/2ShvY8Lf6l0/800x599',
      width: 4,
      height: 3,
    },
    {
      src: 'https://source.unsplash.com/Dm-qxdynoEc/800x799',
      width: 1,
      height: 1,
    },
    {
      src: 'https://source.unsplash.com/qDkso9nvCg0/600x799',
      width: 3,
      height: 4,
    },
    {
      src: 'https://source.unsplash.com/iecJiKe_RNg/600x799',
      width: 3,
      height: 4,
    },
    {
      src: 'https://source.unsplash.com/epcsn8Ed8kY/600x799',
      width: 3,
      height: 4,
    },
    {
      src: 'https://source.unsplash.com/NQSWvyVRIJk/800x599',
      width: 4,
      height: 3,
    },
    {
      src: 'https://source.unsplash.com/zh7GEuORbUw/600x799',
      width: 3,
      height: 4,
    },
    {
      src: 'https://source.unsplash.com/PpOHJezOalU/800x599',
      width: 4,
      height: 3,
    },
    {
      src: 'https://source.unsplash.com/I1ASdgphUH4/800x599',
      width: 4,
      height: 3,
    },
  ];

  // const useStyles = makeStyles(theme => ({
  //   gridPhotos: {
  //     marginRight: theme.spacing(2),
  //   },
  // }));

  // const classes = useStyles();

  return (
    <div className="gridItens">
      <Box className="gridPhotos" title="Clique para Ampliar">
        <Gallery photos={photos} onClick={openLightbox} />
        <ModalGateway>
          {viewerIsOpen ? (
            <Modal onClose={closeLightbox}>
              <Carousel
                currentIndex={currentImage}
                views={photos.map((x: any) => ({
                  ...x,
                  srcset: x.srcSet,
                  caption: x.title,
                }))}
              />
            </Modal>
          ) : null}
        </ModalGateway>
      </Box>
    </div>
  );
}
