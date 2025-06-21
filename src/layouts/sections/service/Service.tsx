// import React from 'react';
import styled from "styled-components";
import {Container} from "../../../components/Container.ts";
import rem1 from "../../../assets/images/services/rem.jpg";
import rem2 from "../../../assets/images/services/rem-2.jpg";
import rem3 from "../../../assets/images/services/rem-3.jpg";
import rem4 from "../../../assets/images/services/rem-4.jpg";
import {SectionTitle} from "../../../components/SectionTitle.tsx";

export const Service = () => {
    return (
        <StyledService>
            <Container>
                <SectionTitle>УСЛУГИ</SectionTitle>
                <ServiceWrapper>
                    <Image src={rem2} alt={"rem2.jpg"}/>
                    <Description>
                        <DescriptionTitle>Ремонт узлов</DescriptionTitle>
                        <DescriptionText>
                            В ряде случаев при выходе из строя крупного узла, причиной может служить поломка
                            одной или нескольких деталей. В таком случае экономически целесообразно заменить
                            вышедшие из строя детали, произвести проверку износа сопрягаемых деталей и заменить
                            при необходимости.
                        </DescriptionText>
                    </Description>
                </ServiceWrapper>
                <ServiceWrapper>
                    <Description>
                        <DescriptionTitle>Восстановление узлов</DescriptionTitle>
                        <DescriptionText>
                            Зачастую экономически выгоднее произвести восстановление вышедшего из строя узла
                            механизма ротации (EW25M1-4009000), либо редуктора червячного (EW25M1-40.09.400),
                            чем приобрести новый, так как существуют детали, которые не получают износ во время
                            эксплуатации. При этом узел полностью разбирается, корпус очищают, моют. Повторно
                            используют только корпус и не изнашиваемые узлы, если на них отсутствуют
                            механические повреждения. Все изнашиваемые детали заменяются новыми. После
                            сборки каждый узел проходит проверку. Восстановленные узлы не уступают по качеству и
                            ресурсу новому.
                        </DescriptionText>
                    </Description>
                    <Image src={rem3} alt={"rem3.jpg"} />
                </ServiceWrapper>
                <ServiceWrapper>
                    <Image src={rem4} alt={"rem4.jpg"} />
                    <Description>
                        <DescriptionTitle>Trade-in</DescriptionTitle>
                        <DescriptionText>
                            В случае если Вам необходимо приобрести новый механизм, но существуют проблемы с
                            финансированием, либо требуется подготовка техники к эксплуатационному сезону для
                            бесперебойной работы, наша организация готова предложить такую услугу как прием в
                            зачет вашего б/у механизм ротации (EW25M1-4009000) или редуктора червячного
                            (EW25M1-40.09.400) в счет нового цена, которого уменьшится на оценочную стоимость
                            вашего, принимаемого в зачет.
                        </DescriptionText>
                    </Description>
                </ServiceWrapper>
                <ServiceWrapper>
                    <Description>
                        <DescriptionTitle>Ремонт экскаватора</DescriptionTitle>
                        <DescriptionText>
                            Для сокращения Вашего времени и уменьшения простоя при поломке экскаватора
                            универсального EW25M1, наша организация готова произвести полный ремонт и
                            обслуживание, с подготовкой дефектного акта, согласовать кол-во работ, их стоимость и
                            выполнить ремонтные работы качественно и в кратчайшие сроки.
                        </DescriptionText>
                    </Description>
                    <Image src={rem1} alt={"rem1.jpg"} />
                </ServiceWrapper>
            </Container>
        </StyledService>
    )
}

const StyledService = styled.section`
    
`;

const ServiceWrapper = styled.div`
    display: flex;
    gap: 50px;
    margin-bottom: 50px;
`;

const Image = styled.img`

`;

const Description = styled.div`

`;

const DescriptionTitle = styled.h3`

`;

const DescriptionText = styled.p`

`;