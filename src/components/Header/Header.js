import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/" >
        <a style={{display: "flex", alignItem: "center", color: "white", marginBottom: '20;'}}>
           <DiCssdeck size= "3rem" /> <span> PORTOFOLIO </span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href= "#project">
          <NavLink> Projek </NavLink>
        </Link>
      </li>
      <li>
        <Link href= "#technologi">
          <NavLink> Teknologi </NavLink>
        </Link>
      </li>
      <li>
        <Link href= "#about">
          <NavLink> Cerita </NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href= "https://github.com">
        <AiFillGithub size= "3rem"/>
      </SocialIcons>
      <SocialIcons href= "https://linkedin.com">
        <AiFillLinkedin size= "3rem"/>
      </SocialIcons>
      <SocialIcons href= "https://instagram.com">
        <AiFillInstagram size= "3rem"/>
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
