import { ArrowLeft } from 'phosphor-react';
import { FormEvent, useState } from 'react';

import { feedbackTypes, FeedbackType } from '..';
import { api } from '../../../lib/api';

import { CloseButton } from '../../CloseButton';
import { LoadingSpinner } from '../../LoadingSpinner';
import { ScreenshotButton } from '../ScreenshotButton';

import { TypeOfFeedbackHeader, SendFeedback } from './styles';

interface FeedbackContentStepProps {
  feedbackType: FeedbackType;
  onFeedbackRestartRequested: () => void;
  onFeedbackSend: () => void;
}

export const FeedbackContentStep = ({
  feedbackType,
  onFeedbackRestartRequested,
  onFeedbackSend,
}: FeedbackContentStepProps) => {
  const [screenshot, setScreenshot] = useState<string | null>(null);
  const [feedbackComment, setFeedbackComment] = useState('');
  const [isSendingFeedback, setIsSendingFeedback] = useState(false);

  const feedbackTypeInfo = feedbackTypes[feedbackType];

  async function handleSubmitFeedback(event: FormEvent) {
    event.preventDefault();

    setIsSendingFeedback(true);

    await api.post('/feedbacks', {
      type: feedbackType,
      comment: feedbackComment,
      screenshot,
    });

    setIsSendingFeedback(false);
    onFeedbackSend();
  }

  return (
    <>
      <TypeOfFeedbackHeader>
        <button
          type="button"
          className="back-btn"
          onClick={onFeedbackRestartRequested}
        >
          <ArrowLeft weight="bold" className="arrow-icon" />
        </button>
        <span>
          <img
            src={feedbackTypeInfo.image.source}
            alt={feedbackTypeInfo.image.alt}
          />
          {feedbackTypeInfo.title}
        </span>
        <CloseButton />
      </TypeOfFeedbackHeader>

      <SendFeedback>
        <form onSubmit={handleSubmitFeedback}>
          <textarea
            placeholder="Algo não está funcionando bem? Queremos corrigir. Conte com detalhes o que está acontecendo..."
            onChange={event => setFeedbackComment(event.target.value)}
          />

          <footer>
            <ScreenshotButton
              screenshot={screenshot}
              onCaptureScreenshot={setScreenshot}
            />

            <button
              type="submit"
              disabled={feedbackComment === '' || isSendingFeedback}
            >
              {isSendingFeedback ? <LoadingSpinner /> : 'Enviar feedback'}
            </button>
          </footer>
        </form>
      </SendFeedback>
    </>
  );
};
