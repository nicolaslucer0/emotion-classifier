import { ChangeEvent, useEffect, useState } from "react";
import { Emotion } from "../../models/Emotion";
import { getEmotionByPhrase, getEmotions } from "../../services/EmotionService";
import {
  Button,
  CustomCard,
  FlexCenterContainer,
  Form,
  FormContainer,
  Input,
} from "../Common/Grid";
import { EmojiList } from "./components/EmojiList";
import { Error } from "./components/Error";
import { Loading } from "./components/Loading";

export const Home = () => {
  const [emotions, setEmotions] = useState<Emotion[]>([]);
  const [phrase, setPhrase] = useState<string>("");
  const [error, setError] = useState<boolean>(false);
  const [loading, isLoading] = useState<boolean>(false);

  useEffect(() => {
    setEmotions(getEmotions());
  }, []);

  const sendEmotion = async (e: any) => {
    e.preventDefault();
    isLoading(true);
    emotions.forEach((e) => (e.selected = false));
    const { emotion } = await getEmotionByPhrase(phrase);
    const selectedEmotion = emotions.find((e) => e.emotion === emotion);
    if (selectedEmotion) selectedEmotion.selected = true;
    setEmotions([...emotions]);
    isLoading(false);
  };

  const handleInputChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setPhrase(target.value);
    if (!target.value) setError(true);
    else setError(false);
  };

  return (
    <CustomCard>
      <FlexCenterContainer>
        <FormContainer className="column small">
          <h2>Ingresá la frase, detectaremos la emoción.</h2>
          <Form onSubmit={sendEmotion}>
            <Input
              placeholder="Ingrese una frase"
              onChange={handleInputChange}
            />
            <Button type="button" onClick={sendEmotion} value="Procesar" />
          </Form>
          {loading && <Loading />}
          {error && <Error />}
        </FormContainer>

        <EmojiList emotions={emotions} />
      </FlexCenterContainer>
    </CustomCard>
  );
};
