import React from 'react';
import { DiFirebase, DiReact, DiZend, DiHtml5, DiJavascript1, DiCss3 } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
 <Section id = "tech">
  <SectionDivider />
  <SectionTitle>Teknologi</SectionTitle>
  <SectionText>
  teknologi mengandung arti metode ilmiah untuk mencapai tujuan praktis, ilmu pengetahuan terapan atau keseluruhan sarana untuk menyediakan barang-barang yang diperlukan bagi kelangsungan dan kenyamanan hidup manusia.
  </SectionText>
   <List>
  <ListItem>
    <DiHtml5 size="3rem" />
    <ListContainer>
      <ListTitle> HTML </ListTitle>
      <ListParagraph>
        untuk membuat dan menyusun halaman dan aplikasi web
      </ListParagraph>
    </ListContainer>
  </ListItem>
  <ListItem>
    <DiJavascript1 size="3rem" />
    <ListContainer>
      <ListTitle> JAVASCRIPT</ListTitle>
      <ListParagraph>
         untuk pengembangan aplikasi web dan mobile
      </ListParagraph>
    </ListContainer>
  </ListItem>
  <ListItem>
    <DiCss3 size="3rem" />
    <ListContainer>
      <ListTitle> CSS </ListTitle>
      <ListParagraph>
         menata tampilan eleman yang tertulis pada bahasa markup
      </ListParagraph>
    </ListContainer>
  </ListItem>
  </List>
 </Section>
);

export default Technologies;
