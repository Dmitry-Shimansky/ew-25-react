// import React from 'react';
import styled from "styled-components";
import {Container} from "../../../components/Container.ts";
import {SectionTitle} from "../../../components/SectionTitle.tsx";
import catalog1 from "../../../assets/images/catalog/catalog-1.jpg"
import catalog2 from "../../../assets/images/catalog/catalog-2.jpg"
import catalog3 from "../../../assets/images/catalog/catalog-3.jpg"
import catalog4 from "../../../assets/images/catalog/catalog-4.jpg"
import catalog5 from "../../../assets/images/catalog/catalog-5.jpg"
import catalog6 from "../../../assets/images/catalog/catalog-6.jpg"
import catalog7 from "../../../assets/images/catalog/catalog-7.jpg"
import catalog8 from "../../../assets/images/catalog/catalog-8.jpg"
import big_catalog1 from "../../../assets/images/catalog/catalog-big/1.jpg"
import big_catalog2 from "../../../assets/images/catalog/catalog-big/2.jpg"
import big_catalog3 from "../../../assets/images/catalog/catalog-big/3.jpg"
import big_catalog4 from "../../../assets/images/catalog/catalog-big/4.jpg"
import big_catalog5 from "../../../assets/images/catalog/catalog-big/5.jpg"
import big_catalog6 from "../../../assets/images/catalog/catalog-big/6.jpg"
import big_catalog7 from "../../../assets/images/catalog/catalog-big/7.jpg"
import big_catalog8 from "../../../assets/images/catalog/catalog-big/8.jpg"
import {ExpandableImage} from "../../../components/ExpandableImage.tsx";
import s from "./Catalog.module.css";

export const Catalog = () => {
    return (
        <StyledCatalog>
            <Container>
                <SectionTitle>КАТАЛОГ</SectionTitle>
                <CatalogWrapper>
                    <ExpandableImage small={catalog1} large={big_catalog1} alt={"Гидрооборудование платформы поворотной"} className={s.image_wrapper}/>
                    <ExpandableImage small={catalog2} large={big_catalog2} alt={"Гидрооборудование рабочего оборудования"} className={s.image_wrapper}/>
                    <ExpandableImage small={catalog3} large={big_catalog3} alt={"Гидрооборудование рабочего оборудования"} className={s.image_wrapper}/>
                    <ExpandableImage small={catalog4} large={big_catalog4} alt={"Механизм ротации"} className={s.image_wrapper}/>
                    <ExpandableImage small={catalog5} large={big_catalog5} alt={"Оборудование рабочее"} className={s.image_wrapper}/>
                    <ExpandableImage small={catalog6} large={big_catalog6} alt={"Редуктор червячный"} className={s.image_wrapper}/>
                    <ExpandableImage small={catalog7} large={big_catalog7} alt={"Стрела неподвижная"} className={s.image_wrapper}/>
                    <ExpandableImage small={catalog8} large={big_catalog8} alt={"Стрела подвижная"} className={s.image_wrapper}/>
                </CatalogWrapper>
            </Container>
        </StyledCatalog>
    )
}

const StyledCatalog = styled.section`

`;

const CatalogWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 1fr);
    align-items: center;
    gap: 10px;
`;