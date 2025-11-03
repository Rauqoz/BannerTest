"use client";

import styled from "styled-components";

export const H1 = styled.h1`
    font-size: 40px;
    font-weight: bold;
`;

export const H2 = styled.h2`
    font-size: 30px;
`

export const Text = styled.p`
    font-size: 20px;
`

export const Link = styled.a`
    font-size: 20px;
    color: blue;
    text-decoration: underline;
`

export const Box1 = styled.div`
    background: linear-gradient(to bottom right,#1A0B72,#353434);
    border-radius: 12px;
    /* Usar altura flexible y mínima para desktop */
    min-height: 180px;
    padding-top: 12px;
    padding-bottom: 12px;
    padding-left: 80px;
    padding-right: 80px;
    display: flex;
    overflow: hidden;

    /* Responsive: en móviles apilar y reducir padding */
    @media (max-width: 640px) {
        flex-direction: row;
        padding: 12px 16px;
        align-items: center;
        gap: 8px;
    }
`

export const Box2 = styled.div`
    flex: 1.2;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-right: 20px;

    img {
        max-width: 100%;
        height: auto;
        border-radius: 12px;
        display: block;
    }

    @media (max-width: 640px) {
        padding-right: 8px;
        margin-bottom: 0;
        img { width: 100%; height: auto; }
    }
`

export const Box3 = styled.div`
    background: linear-gradient(to bottom right,#FFFFFF,#DADADA);
    border-radius: 12px;
    flex: 1;
    display: flex;
    margin-top: 15px;
    margin-bottom: 15px;
    align-items: flex-start;
    flex-direction: column;
    justify-content: center;
    padding-left: 20px;
    padding-right: 20px;

    @media (max-width: 640px) {
        width: auto;
        margin: 0;
        padding: 12px;
        align-items: flex-start;
        text-align: left;
    }
`

export const Button = styled.button`
    background: linear-gradient(to bottom right,#3D4EE4,#887BFF);
    color: white;
    border-radius: 12px;
    display: inline-block;
    align-items: center;
    justify-content: center;
    padding: 4px 20px;

    @media (max-width: 640px) {
        align-self: center;
    }
`
