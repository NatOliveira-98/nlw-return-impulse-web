import { useState } from 'react';
import html2canvas from 'html2canvas';

import { Camera, Trash } from 'phosphor-react';
import { LoadingSpinner } from '../../LoadingSpinner';

import { Container, SavedScreenshot } from './styles';

interface ScreenshotButtonProps {
  screenshot: string | null;
  onCaptureScreenshot: (screenshot: string | null) => void;
}

export const ScreenshotButton = ({
  screenshot, 
  onCaptureScreenshot,
}: ScreenshotButtonProps) => {
  const [isTakingScreenshot, setIsTakingScreenshot] = useState(false);

  async function handleCaptureScreenshot() {
    setIsTakingScreenshot(true);

    // never going to be null (!)
    const canvas = await html2canvas(document.querySelector('html')!);
    // the image is saved as a text
    const base64image = canvas.toDataURL('image/png');

    onCaptureScreenshot(base64image);
    setIsTakingScreenshot(false);
  }

  if (screenshot) {
    return (
      <SavedScreenshot 
        type="button"
        onClick={() => onCaptureScreenshot(null)}
        style={ {
          backgroundImage: `url(${screenshot})`,
          backgroundPosition: 'right bottom',
          backgroundSize: 100,
        } }
      >
        <Trash weight="fill"/>
      </SavedScreenshot>
    )
  }

  return (
    <Container type="button" onClick={handleCaptureScreenshot}>
      { isTakingScreenshot ? <LoadingSpinner /> : <Camera /> }
    </Container>
  );
};
