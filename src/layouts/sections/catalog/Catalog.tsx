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

export const Catalog = () => {
    return (
        <StyledCatalog>
            <Container>
                <SectionTitle>КАТАЛОГ</SectionTitle>
                <CatalogWrapper>
                    <ItemWrapper>
                        <Image src={catalog1} alt={"catalog-1"}/>
                    </ItemWrapper>
                    <ItemWrapper>
                        <Image src={catalog2} alt={"catalog-2"}/>
                    </ItemWrapper>
                    <ItemWrapper>
                        <Image src={catalog3} alt={"catalog-3"}/>
                    </ItemWrapper>
                    <ItemWrapper>
                        <Image src={catalog4} alt={"catalog-4"}/>
                    </ItemWrapper>
                    <ItemWrapper>
                        <Image src={catalog5} alt={"catalog-5"}/>
                    </ItemWrapper>
                    <ItemWrapper>
                        <Image src={catalog6} alt={"catalog-6"}/>
                    </ItemWrapper>
                    <ItemWrapper>
                        <Image src={catalog7} alt={"catalog-7"}/>
                    </ItemWrapper>
                    <ItemWrapper>
                        <Image src={catalog8} alt={"catalog-8"}/>
                    </ItemWrapper>
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

const ItemWrapper = styled.div`
    display: flex;
    justify-content: center;
    border-radius: 20px;
    box-shadow: 2px 2px 100px 0 rgba(0, 0, 0, 0.2);
    overflow: hidden;
    cursor: pointer;
    scale: 1;
    
    transition: scale 0.5s;
    
    &:hover {
        scale: 1.2;
        z-index: 1;
        box-shadow: 2px 2px 30px 0 rgb(244, 137, 21, 0.7);
    }
`;

const Image = styled.img`
    height: 100%;
    width: 100%;
    
`;