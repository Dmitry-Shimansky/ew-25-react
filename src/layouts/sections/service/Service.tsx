import {Container} from "../../../components/Container.ts";
import rem1 from "../../../assets/images/services/rem.jpg";
import rem2 from "../../../assets/images/services/rem-2.jpg";
import rem3 from "../../../assets/images/services/rem-3.jpg";
import rem4 from "../../../assets/images/services/rem-4.jpg";
import {SectionTitle} from "../../../components/SectionTitle.tsx";
import {S} from "./Service_Styles.ts";

export const Service = () => {
    return (
        <S.StyledService id={"service"}>
            <Container>
                <SectionTitle>Услуги</SectionTitle>
                <S.ServiceWrapper1>
                    <S.ImageContainer>
                        <S.ImageWrapper>
                            <S.Image src={rem2} alt={"rem2.jpg"}/>
                        </S.ImageWrapper>
                    </S.ImageContainer>
                    <S.Description>
                        <S.DescriptionTitle>Ремонт узлов</S.DescriptionTitle>
                        <S.DescriptionText>
                            В ряде случаев при выходе из строя крупного узла, причиной может служить поломка
                            одной или нескольких деталей. В таком случае экономически целесообразно заменить
                            вышедшие из строя детали, произвести проверку износа сопрягаемых деталей и заменить
                            при необходимости.
                        </S.DescriptionText>
                    </S.Description>
                </S.ServiceWrapper1>
                <S.ServiceWrapper2>
                    <S.Description>
                        <S.DescriptionTitle>Восстановление узлов</S.DescriptionTitle>
                        <S.DescriptionText>
                            Зачастую экономически выгоднее произвести восстановление вышедшего из строя узла
                            механизма ротации (EW25M1-4009000), либо редуктора червячного (EW25M1-40.09.400),
                            чем приобрести новый, так как существуют детали, которые не получают износ во время
                            эксплуатации. При этом узел полностью разбирается, корпус очищают, моют. Повторно
                            используют только корпус и не изнашиваемые узлы, если на них отсутствуют
                            механические повреждения. Все изнашиваемые детали заменяются новыми. После
                            сборки каждый узел проходит проверку. Восстановленные узлы не уступают по качеству и
                            ресурсу новому.
                        </S.DescriptionText>
                    </S.Description>
                    <S.ImageContainer>
                        <S.ImageWrapper>
                            <S.Image src={rem3} alt={"rem3.jpg"} />
                        </S.ImageWrapper>
                    </S.ImageContainer>
                </S.ServiceWrapper2>
                <S.ServiceWrapper1>
                    <S.ImageContainer>
                        <S.ImageWrapper>
                            <S.Image src={rem4} alt={"rem4.jpg"} />
                        </S.ImageWrapper>
                    </S.ImageContainer>
                    <S.Description>
                        <S.DescriptionTitle>Trade-in</S.DescriptionTitle>
                        <S.DescriptionText>
                            В случае если Вам необходимо приобрести новый механизм, но существуют проблемы с
                            финансированием, либо требуется подготовка техники к эксплуатационному сезону для
                            бесперебойной работы, наша организация готова предложить такую услугу как прием в
                            зачет вашего б/у механизм ротации (EW25M1-4009000) или редуктора червячного
                            (EW25M1-40.09.400) в счет нового цена, которого уменьшится на оценочную стоимость
                            вашего, принимаемого в зачет.
                        </S.DescriptionText>
                    </S.Description>
                </S.ServiceWrapper1>
                <S.ServiceWrapper2>
                    <S.Description>
                        <S.DescriptionTitle>Ремонт экскаватора</S.DescriptionTitle>
                        <S.DescriptionText>
                            Для сокращения Вашего времени и уменьшения простоя при поломке экскаватора
                            универсального EW25M1, наша организация готова произвести полный ремонт и
                            обслуживание, с подготовкой дефектного акта, согласовать кол-во работ, их стоимость и
                            выполнить ремонтные работы качественно и в кратчайшие сроки.
                        </S.DescriptionText>
                    </S.Description>
                    <S.ImageContainer>
                        <S.ImageWrapper>
                            <S.Image src={rem1} alt={"rem1.jpg"} />
                        </S.ImageWrapper>
                    </S.ImageContainer>
                </S.ServiceWrapper2>
            </Container>
        </S.StyledService>
    )
}