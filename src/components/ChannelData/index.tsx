import React, { useRef, useEffect, useState } from 'react';
import ChannelMessage, { Mention } from '../ChannelMessage';
import { Container, Messages, InputWrapper, Input, InputIcon } from './styles';
import chatJson from '../../chat.json';

const ChannelData: React.FC = () => {

    const [inputText, setInputText] = useState('');
    const [messages, setMessage] = useState(chatJson);

    const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;

    useEffect(() => {
        const div = messagesRef.current;

        if (div) {
            div.scrollTop = div.scrollHeight;
        }
    }, [messagesRef]);

    useEffect(() => {
        const data: any = localStorage.getItem('message');
        setMessage(JSON.parse(data));
    }, []);

    const hasMessage = async (message: string, author: string, photo: string) => {
        let date = new Date().toLocaleDateString();
        let send = {
            photo,
            author,
            message,
            date,
            isBot: false,
            hasMention: false
        }
        await localStorage.setItem('message', JSON.stringify([...messages, send]));
        setMessage([...messages, send]);
    }

    const SendMessage = (event: any) => {
        if (event.keyCode === 13 && inputText !== '') {
            hasMessage(inputText, 'User', 'https://avatars2.githubusercontent.com/u/1965106?s=280&v=4');
            setInputText('');
        }
    }

    return (
        <Container>
            <Messages ref={messagesRef}>
                <ChannelMessage
                    author="Rocketseat"
                    date="21/06/2020"
                    content={
                        <>
                            <Mention>@Bruno Carvalho</Mention>, o que seria esse projeto?
                        </>
                    }
                    hasMention
                    isBot
                    photo='https://avatars1.githubusercontent.com/u/28929274?s=280&v=4'
                />
                {
                    messages.map(({ author, date, photo, message, isBot, hasMention }, key) => (
                        <ChannelMessage
                            key={key}
                            author={author}
                            date={date}
                            content={message}
                            hasMention={hasMention}
                            isBot={isBot}
                            photo={photo}
                        />
                    ))
                }
            </Messages>

            <InputWrapper>
                <Input
                    type="text"
                    placeholder="Conversarem #chat-livre"
                    value={inputText}
                    onChange={(event) => setInputText(event.target.value)}
                    onKeyUp={SendMessage}
                />
                <InputIcon />
            </InputWrapper>
        </Container>
    );
};

export default ChannelData;