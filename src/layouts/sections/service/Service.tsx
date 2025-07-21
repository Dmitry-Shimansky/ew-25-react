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
                            Качественное выполнение работ и в срок, обеспечивает минимальный процент простоев сложной
                            экскаваторной техники.
                            Сервисная служба поддержки работает 24/7.
                        </S.DescriptionText>
                    </S.Description>
                </S.ServiceWrapper1>
                <S.ServiceWrapper2>
                    <S.Description>
                        <S.DescriptionTitle>Восстановление узлов</S.DescriptionTitle>
                        <S.DescriptionText>
                            Не секрет, что бывает экономически выгоднее произвести восстановление вышедшего из строя
                            узла механизма ротации (EW25M1-4009000), либо редуктора червячного (EW25M1-40.09.400), чем
                            приобрести новый. Так как существуют детали, которые не имеют критического износа во время
                            эксплуатации. При этом механизм получает полную работоспособность. Повторно используются
                            детали и не изнашиваемые узлы, если на них отсутствуют механические повреждения. Все
                            изнашиваемые детали заменяются новыми. После сборки каждый узел проходит проверку и обкатку
                            в холостом режиме. Восстановленные узлы не уступают по качеству и ресурсу новым.
                        </S.DescriptionText>
                    </S.Description>
                    <S.ImageContainer>
                        <S.ImageWrapper>
                            <S.Image src={rem3} alt={"rem3.jpg"}/>
                        </S.ImageWrapper>
                    </S.ImageContainer>
                </S.ServiceWrapper2>
                <S.ServiceWrapper1>
                    <S.ImageContainer>
                        <S.ImageWrapper>
                            <S.Image src={rem4} alt={"rem4.jpg"}/>
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
                            С целью обеспечить минимальный простой при поломке экскаватора универсального EW25M1, наша
                            организация готова произвести полный ремонт и обслуживание, с подготовкой дефектного акта,
                            согласовать кол-во работ, их стоимость и выполнить ремонтные работы качественно и в
                            кратчайшие сроки.
                        </S.DescriptionText>
                    </S.Description>
                    <S.ImageContainer>
                        <S.ImageWrapper>
                            <S.Image src={rem1} alt={"rem1.jpg"}/>
                        </S.ImageWrapper>
                    </S.ImageContainer>
                </S.ServiceWrapper2>
            </Container>
        </S.StyledService>
    )
}