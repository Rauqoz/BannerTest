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
    height: 150;
    padding-top: 12px;
    padding-bottom: 12px;
    padding-left: 80px;
    padding-right: 80px;
    display: flex;
`

export const Box2 = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-right: 20px;
`

export const Box3 = styled.div`
    background: linear-gradient(to bottom right,#FFFFFF,#DADADA);
    border-radius: 12px;
    flex: 1;
    display: flex;
    margin-top: 30px;
    margin-bottom: 30px;
    align-items: flex-start;
    flex-direction: column;
    justify-content: center;
    padding-left: 20px;
    padding-right: 20px;
`

export const Button = styled.button`
    background: linear-gradient(to bottom right,#3D4EE4,#887BFF);
    color: white;
    border-radius: 12px;
    display: inline-block;
    align-items: center;
    justify-content: center;
    padding: 4px 20px;
`
