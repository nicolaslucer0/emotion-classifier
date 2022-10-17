import styled from "@emotion/styled";
import { Emotion } from "../../../models/Emotion";

const EmojiListContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin: auto;
  width: 60%;
`;

const EmojiContainer = styled.div`
  transition: 0.8s;
  text-align: center;
  &.selected {
    margin: 30px;
    padding: 5px;
    border-radius: 20px;
    transform: scale(1.8);
    img {
      filter: unset !important;
      transform: scale(1.3);
    }
  }
`;

const Emoji = styled.img`
  width: 50px;
  height: 50px;
  margin: 0 20px;
  transition: 0.5s;
  filter: grayscale();
`;
const Text = styled.div`
  color: white;
  font-weight: bold;
  @media (max-width: 1200px) {
    font-size: 12px;
  }
  @media (max-width: 1000px) {
    font-size: 10px;
  }
`;

type EmojiListProps = { emotions: Emotion[] };
export const EmojiList = ({ emotions }: EmojiListProps) => (
  <EmojiListContainer>
    {emotions.map((e) => (
      <EmojiContainer
        key={e.emotion}
        id="enfado"
        className={`emoji-container ${e.selected ? "selected" : ""}`}
      >
        <Emoji
          key={e.emotion}
          alt={e.emotion}
          src={require(`./../../../assets/images/emoji/${e.emotion}.png`)}
        />
        <Text className="emoji-text">{e.emotion}</Text>
      </EmojiContainer>
    ))}
  </EmojiListContainer>
);
