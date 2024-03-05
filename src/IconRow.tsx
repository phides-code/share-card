import styled from 'styled-components';

interface IconRowProps {
    isMobile: boolean;
}

type ShareIcon = {
    link: string;
    imageSource: string;
    name: string;
};

const IconRow = ({ isMobile }: IconRowProps) => {
    const mobile = isMobile.toString();

    const icons: ShareIcon[] = [
        {
            link: 'https://www.twitter.com/share?url=',
            imageSource: '/twitter.svg',
            name: 'twitter',
        },
        {
            link: 'https://www.facebook.com/sharer/sharer.php?u=',
            imageSource: '/facebook.svg',
            name: 'facebook',
        },
        {
            link: 'https://www.linkedin.com/sharing/share-offsite/?url=',
            imageSource: '/linkedin.svg',
            name: 'linkedin',
        },
        {
            link: 'https://pinterest.com/pin/create/link/?url=',
            imageSource: '/pinterest.svg',
            name: 'pinterest',
        },
        {
            link: 'mailto:?subject=check out this link&body=',
            imageSource: '/email.svg',
            name: 'email',
        },
    ];

    return (
        <Wrapper $mobile={mobile}>
            {icons.map((icon) => (
                <Icon key={icon.link} href={icon.link + window.location.href}>
                    <IconImage alt={icon.name} src={icon.imageSource} />
                </Icon>
            ))}
        </Wrapper>
    );
};

interface StyledComponentProps {
    $mobile: string;
}

const Wrapper = styled.div<StyledComponentProps>`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
    margin: 1rem 0;

    min-width: ${(props) => (props.$mobile === 'true' ? undefined : '30rem')};
`;

const Icon = styled.a`
    display: flex;
    flex-direction: column;
    background-color: #d9d9d9;
    height: 4rem;
    width: 4rem;
    border-radius: 50%;
    align-items: center;
    justify-content: center;
    margin: 0 0.4rem;

    &:hover {
        border: 1px solid black;
        height: calc(4rem - 2px);
        width: calc(4rem - 2px);
    }
`;

const IconImage = styled.img`
    height: 2rem;
    width: 2rem;
`;

export default IconRow;
