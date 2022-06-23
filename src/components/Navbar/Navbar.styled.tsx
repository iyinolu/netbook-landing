import styled from "styled-components";

export const NavBar = styled.nav`
    width: 1170px;
    margin: 0 auto;
    height: 90px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid var(--secondary-blue);
`
export const NavBarInnerDiv = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    div {
        :first-child {
            display: flex;
            gap: 72px;
        }
    }
`
export const NavLinks = styled.ul`
    display: flex;
    align-items: center;
    width: 306px;
    justify-content: space-between;

    li {
        cursor: pointer;
    }

    a {
        color: var(--paragraph-color-1);
        text-decoration: none;
        transition: color 0.3s linear;

        &:hover {
            color: var(--paragraph-color-hover-1);
            font-weight: 600;
        }
    }
`