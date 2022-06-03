import { feedbackTypes, FeedbackType } from '..';

import { CloseButton } from '../../CloseButton';

import { TypeOfFeedbackHeader, SelectFeedback } from './styles';

interface FeedbackTypeStepProps {
  onFeedbackTypeChanged: (type: FeedbackType) => void;
}

export const FeedbackTypeStep = ({ onFeedbackTypeChanged }: FeedbackTypeStepProps) => {
  return (
    <>
      <TypeOfFeedbackHeader>
        <span>Deixe o seu feedback</span>
        <CloseButton />
      </TypeOfFeedbackHeader>

      <SelectFeedback>
        { Object.entries(feedbackTypes).map(([key, value]) => {
          return (
            <button 
              key={key}
              type="button"
              onClick={() => onFeedbackTypeChanged(key as FeedbackType)}
            >
              <img src={value.image.source} alt={value.image.alt} />
              <span>{value.title}</span>
            </button>
          );
        }) }
      </SelectFeedback>
    </>
  );
};
