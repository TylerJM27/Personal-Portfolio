import styled from "styled-components";

const Document = styled.img`
    display: none;
    height: 70px;
    width: fit-content;
    background-color: #000;
    border-radius: 10px;
    &:hover {
        cursor: pointer;
        opacity: 0.8;
    }
`;

const Card = styled.div`
    width: 650px;
    border-radius: 10px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    padding: 12px 16px;
    justify-content: space-between;
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    gap: 12px;
    transition: all 0.9s ease-in-out;
    &:hover {
        box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
        transform: translateY(-5px);
        height: auto;
    }

    &:hover ${Document} {
        display: flex;
    }

    @media (max-width: 768px) {
        padding: 10px;
        gap: 8px;
        width: 320px;
    }

    border: 0.1px solid #306ee8;
    box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
`;

const Top = styled.div`
    width: 100%;
    display: flex;
    gap: 12px;
`;

const Logo = styled.img`
    height: 50px;
    background-color: #000;
    border-radius: 10px;
    margin-top: 4px;
    @media (max-width: 768px) {
        height: 40px;
    }
`;

const Body = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`;

const School = styled.div`
    font-size: 18px;
    font-weight: 600;
    color: ${({ theme }) => theme.text_primary + 99};
    @media (max-width: 768px) {
        font-size: 14px;
    }
`;

const Degree = styled.div`
    font-size: 14px;
    font-weight: 500;
    color: ${({ theme }) => theme.text_secondary + 99};
    @media (max-width: 768px) {
        font-size: 12px;
    }
`;

const Duration = styled.div`
    font-size: 14px;
    font-weight: 400;
    color: ${({ theme }) => theme.text_secondary + 80};
    @media (max-width: 768px) {
        font-size: 10px;
    }
`;

const Description = styled.div`
    width: 100%;
    font-size: 15px;
    font-weight: 400;
    color: ${({ theme }) => theme.text_primary + 99};
    margin-bottom: 10px;
    @media only screen and (max-width: 768px) {
        font-size: 12px;
    }
`;

const Span = styled.span`
    display: block;
    max-height: 80px; /* Adjust this based on your normal text height */
    overflow: hidden;
    text-overflow: ellipsis;
    transition: max-height 0.9s ease-in-out, opacity 0.3s ease-in-out;
    opacity: 0.8;

    ${Card}:hover & {
        max-height: 700px; /* Large enough to show the full text */
        opacity: 1;
    }
`;

const subContainer = styled.div`
    gap: 0;
`;

const Location = styled.div`
    font-size: 12px;
    font-weight: 500px;
    color: ${({ theme }) => theme.text_secondary + 99};
    @media only screen and (max-width: 768px) {
        font-size: 12px;
    }
`;

const Grade = styled.div`
    font-size: 12px;
    font-weight: 500px;
    color: ${({ theme }) => theme.text_secondary + 99};
    @media only screen and (max-width: 768px) {
        font-size: 12px;
    }
`;

const EducationCard = ({ education }) => {
    const isGrade = () => {
        if (!education.grade) {
            return;
        }

        if (education.grade) {
            return `Grade: ${education.grade}`;
        }
    };
    return (
        <Card>
            <Top>
                <Logo src={education.img} />
                <Body>
                    <School>{education.school}</School>
                    <Degree>{education.degree}</Degree>
                    <Duration>{education.date}</Duration>
                </Body>
            </Top>
            <subContainer>
                <Location>{education.location}</Location>
                <Grade>{isGrade()}</Grade>
            </subContainer>
            <Description>
                <Span>{education.desc}</Span>
            </Description>
        </Card>
    );
};

export default EducationCard;
