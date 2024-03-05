import styled from 'styled-components';
import IconRow from './IconRow';
import { CardBackground } from './theme';
import LinkCopier from './LinkCopier';

interface CardProps {
    isMobile: boolean;
}

const Card = ({ isMobile }: CardProps) => {
    const mobile = isMobile.toString();

    return (
        <Wrapper $mobile={mobile}>
            <Header>Share this challenge</Header>
            <IconRow isMobile={isMobile} />
            <HelperText>or copy link</HelperText>
            <LinkCopier />
        </Wrapper>
    );
};

interface StyledComponentProps {
    $mobile: string;
}

const Wrapper = styled.div<StyledComponentProps>`
    display: flex;
    flex-direction: column;
    background-color: ${CardBackground};
    border-radius: 20px;
    box-shadow: 6px 5px 0px 2px #c5aea7;

    margin: ${(props) => (props.$mobile === 'true' ? '0 0.5rem' : '0 5rem')};
    padding: ${(props) =>
        props.$mobile === 'true' ? '0.5rem 1rem' : '2rem 4rem'};
`;

const Header = styled.div`
    font-size: x-large;
    font-weight: bold;
`;

const HelperText = styled.div`
    font-size: small;
    margin: 0 0 1rem 0;
`;

export default Card;
