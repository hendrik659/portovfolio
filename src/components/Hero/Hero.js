import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Selamat Datang <br />
        Di Fortofolio ku
      </SectionTitle>
      <SectionText>
        Portofolio adalah kumpulan hasil kerja atau karya seseorang yang di susun secara sistematis.
        Artinya, portofolio harus di buat secara sistematis untuk memudahkan proses penilaian terhadap kompetensi seseorang.
      </SectionText>
      <Button onClick={() => window.location = 'https://google.com'} >Pelajari</Button>
    </LeftSection>
  </Section>
);

export default Hero;