import styled from 'styled-components';
import { LinkBackground } from './theme';
import { useState } from 'react';

const LinkCopier = () => {
    const [linkCopied, setLinkCopied] = useState<boolean>(false);
    const copyLink = async (
        ev: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
        ev.preventDefault();
        try {
            await navigator.clipboard.writeText(window.location.href);
            setLinkCopied(true);
        } catch (err) {
            console.error('Failed to copy: ', err);
        }
    };

    return (
        <LinkWrapper>
            <LinkText value={window.location.href} disabled />
            <CopyButton onClick={copyLink}>
                {linkCopied ? 'Copied!' : 'Copy'}
            </CopyButton>
        </LinkWrapper>
    );
};

const LinkWrapper = styled.div`
    display: flex;
`;

const LinkText = styled.input`
    font-size: x-small;
    background-color: ${LinkBackground};
    width: 100%;
    border: none;
    height: 2rem;
    padding: 0 0 0 0.8rem;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;

    &:hover {
        cursor: text;
    }
`;

const CopyButton = styled.button`
    font-size: x-small;
    font-weight: bold;
    padding: 0 0.8rem;
    border: none;
    background-color: ${LinkBackground};
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;

    &:hover {
        background-color: darkgray;
    }
`;

export default LinkCopier;
